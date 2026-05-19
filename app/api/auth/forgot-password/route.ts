import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';

export async function POST(request: Request) {
    try {
        await connectDB();
        const { email } = await request.json();
        
        const trimmedEmail = email ? email.trim().toLowerCase() : '';
        
        const user = await User.findOne({ email: trimmedEmail });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        
        const otp = generateOTP();
        await sendOTPEmail(trimmedEmail, otp, 'password-reset');
        
        await OTP.findOneAndDelete({ email: trimmedEmail, type: 'reset' });
        
        await OTP.create({
            email: trimmedEmail,
            otp,
            type: 'reset'
        });
        
        return NextResponse.json({ message: 'Password reset OTP sent to your email' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
