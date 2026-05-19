import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Chat from '@/lib/models/Chat';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';

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

// GET /api/chats - Admin Only
export async function GET(request: Request) {
    try {
        await connectDB();
        const user = await getAuthenticatedUser(request);
        if (!user || !user.isAdmin) {
            return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });
        }

        const chats = await Chat.find()
            .populate({ path: 'user', select: 'name email avatar', model: User })
            .sort({ updatedAt: -1 });

        return NextResponse.json(chats);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
