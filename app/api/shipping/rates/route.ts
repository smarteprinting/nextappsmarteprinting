import { NextResponse } from 'next/server';
import EasyPostClient from '@easypost/api';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';

// Helper to calculate distance in miles
function getDistanceFromLatLonInMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
    if (!lat1 || !lon1 || !lat2 || !lon2) return null;
    const R = 3959; // Radius of the earth in miles
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in miles
    return d.toFixed(1);
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

// Helper to authenticate request
async function getAuthenticatedUser(request: Request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        const user = await User.findById(decoded.id);
        return user;
    } catch (error) {
        return null;
    }
}

// POST /api/shipping/rates
export async function POST(request: Request) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (authHeader) {
            await connectDB();
        }

        const user = authHeader ? await getAuthenticatedUser(request) : null;
        const body = await request.json();
        const { address, city, postalCode, country, state, phone, cartItems } = body;

        if (!process.env.EASYPOST_API_KEY) {
            return NextResponse.json({ message: 'EasyPost API Key not configured' }, { status: 500 });
        }

        const client = new EasyPostClient(process.env.EASYPOST_API_KEY);

        // 1. Create To Address (Verify to get coords if possible)
        const toAddress = await client.Address.create({
            verify: ['delivery'],
            street1: address,
            city: city,
            state: state, 
            zip: postalCode,
            country: country || 'US',
            phone: phone || '555-555-5555',
            email: user ? user.email : undefined,
        });

        // 2. Create From Address (Company Location)
        const fromAddress = await client.Address.create({
            verify: ['delivery'],
            company: 'Smart Eprinting',
            street1: process.env.COMPANY_ADDRESS || '123 Market St',
            city: process.env.COMPANY_CITY || 'San Francisco',
            state: process.env.COMPANY_STATE || 'CA',
            zip: process.env.COMPANY_ZIP || '94105',
            country: process.env.COMPANY_COUNTRY || 'US',
            phone: process.env.COMPANY_PHONE || '415-555-5555',
        });

        // 3. Create Parcel
        const totalWeight = cartItems && cartItems.length > 0 
            ? cartItems.reduce((acc: number, item: any) => acc + (16 * item.qty), 0)
            : 16;

        const parcel = await client.Parcel.create({
            weight: totalWeight,
            length: 10,
            width: 8,
            height: 4
        });

        // 4. Create Shipment
        const shipment = await client.Shipment.create({
            to_address: toAddress,
            from_address: fromAddress,
            parcel: parcel,
        });

        // Try to calculate distance
        let distance: string | null = null;
        try {
            const getCoords = (addr: any) => {
                if (addr.verifications && addr.verifications.delivery && addr.verifications.delivery.details) {
                    return addr.verifications.delivery.details;
                }
                if (addr.zip === '77433' && addr.state === 'TX') {
                    return { latitude: 29.9691, longitude: -95.6963 };
                }
                return null;
            };

            const toCoords = getCoords(toAddress);
            const fromCoords = getCoords(fromAddress);

            if (toCoords && fromCoords) {
                distance = getDistanceFromLatLonInMiles(
                    fromCoords.latitude, 
                    fromCoords.longitude, 
                    toCoords.latitude, 
                    toCoords.longitude
                );
            }
        } catch (calcError) {
            // distance calculation failed, continue without it
        }

        const allowedAccounts = [
            'ca_e3cbd16a6eb84914985d90875a6ec074', // Canada Post
            'ca_76d0939dc1ce4c99870bbc2844d8d02b', // FedEx
            'ca_c5f03a14c10d4fbab837e8a35b01c7df', // UPS
            'ca_b82a2962176446d09a48bc649977f467'  // USPS
        ];

        const filteredRates = shipment.rates ? shipment.rates.filter((rate: any) => allowedAccounts.includes(rate.carrier_account_id)) : [];

        return NextResponse.json({
            rates: filteredRates,
            distance: distance
        });

    } catch (error: any) {
        return NextResponse.json({ message: 'Could not calculate shipping rates: ' + error.message }, { status: 400 });
    }
}
