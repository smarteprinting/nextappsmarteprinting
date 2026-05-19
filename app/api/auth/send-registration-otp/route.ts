import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';

export async function POST(request: Request) {
    try {
        await connectDB();
        const { firstName, lastName, email, password } = await request.json();
        
        const trimmedEmail = email ? email.trim().toLowerCase() : '';
        
        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }
        
        const userExists = await User.findOne({ email: trimmedEmail });
        if (userExists) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }
        
        const otp = generateOTP();
        await sendOTPEmail(trimmedEmail, otp, 'registration');
        
        await OTP.findOneAndDelete({ email: trimmedEmail, type: 'registration' });
        
        await OTP.create({
            email: trimmedEmail,
            otp,
            type: 'registration',
            registrationData: {
                firstName,
                lastName,
                password
            }
        });
        
        return NextResponse.json({ message: 'OTP sent to your email' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
