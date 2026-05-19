import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';

export async function POST(request: Request) {
    try {
        await connectDB();
        const { email, otp } = await request.json();
        
        const trimmedEmail = email ? email.trim().toLowerCase() : '';
        
        const otpRecord = await OTP.findOne({ 
            email: trimmedEmail, 
            otp, 
            type: 'registration' 
        });
        
        if (!otpRecord) {
            return NextResponse.json({ message: 'Invalid or expired OTP' }, { status: 400 });
        }
        
        const { registrationData } = otpRecord;
        
        const existingUser = await User.findOne({ email: trimmedEmail });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists with this email' }, { status: 400 });
        }
        
        const user = await User.create({
            firstName: registrationData.firstName,
            lastName: registrationData.lastName,
            name: `${registrationData.firstName} ${registrationData.lastName}`,
            email: trimmedEmail,
            password: registrationData.password,
        });
        
        await OTP.deleteOne({ _id: otpRecord._id });
        
        if (user) {
            return NextResponse.json({
                message: 'Account verified successfully. Please log in.',
                email: user.email
            }, { status: 201 });
        } else {
            return NextResponse.json({ message: 'Invalid user data' }, { status: 400 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
