import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';

const generateToken = (id: any) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
        expiresIn: '30d',
    });
};

export async function POST(request: Request) {
    try {
        await connectDB();
        const { email, password, isAdminLogin } = await request.json();
        
        const trimmedEmail = email ? email.trim().toLowerCase() : '';
        const user = await User.findOne({ email: trimmedEmail });
        
        if (user && (await user.matchPassword(password))) {
            if (user.isBlocked) {
                return NextResponse.json(
                    { message: 'Your account has been blocked by admin. Please contact support.' }, 
                    { status: 403 }
                );
            }
            
            if (!isAdminLogin && user.isAdmin) {
                return NextResponse.json(
                    { message: 'You are not our user' }, 
                    { status: 401 }
                );
            }
            
            if (isAdminLogin && !user.isAdmin) {
                return NextResponse.json(
                    { message: 'Not authorized as an admin' }, 
                    { status: 401 }
                );
            }
            
            return NextResponse.json({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            return NextResponse.json(
                { message: 'Invalid email or password' }, 
                { status: 401 }
            );
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
