import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Order from '@/lib/models/Order';
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

// GET /api/orders/myorders
export async function GET(request: Request) {
    try {
        await connectDB();
        const user = await getAuthenticatedUser(request);
        if (!user) {
            return NextResponse.json({ message: 'Not authorized, token failed' }, { status: 401 });
        }

        const orders = await Order.find({ user: user._id });
        return NextResponse.json(orders);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
