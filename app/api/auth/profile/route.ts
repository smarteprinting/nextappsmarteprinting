import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';

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

// Helper to generate a new token
function generateToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
    });
}

// GET /api/auth/profile
export async function GET(request: Request) {
    try {
        await connectDB();
        const user = await getAuthenticatedUser(request);
        if (!user) {
            return NextResponse.json({ message: 'Not authorized, token failed' }, { status: 401 });
        }

        return NextResponse.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// PUT /api/auth/profile
export async function PUT(request: Request) {
    try {
        await connectDB();
        const user = await getAuthenticatedUser(request);
        if (!user) {
            return NextResponse.json({ message: 'Not authorized, token failed' }, { status: 401 });
        }

        const body = await request.json();
        
        user.firstName = body.firstName || user.firstName;
        user.lastName = body.lastName || user.lastName;
        user.name = `${user.firstName} ${user.lastName}`;
        user.email = body.email || user.email;

        if (body.password) {
            user.password = body.password;
        }

        const updatedUser = await user.save();

        return NextResponse.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
