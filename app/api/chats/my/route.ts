import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Chat from '@/lib/models/Chat';
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

// GET /api/chats/my
export async function GET(request: Request) {
    try {
        await connectDB();
        const user = await getAuthenticatedUser(request);
        if (!user) {
            return NextResponse.json({ message: 'Not authorized, token failed' }, { status: 401 });
        }

        let chat = await Chat.findOne({ user: user._id })
            .populate({ path: 'user', select: 'name email avatar', model: User });

        if (!chat) {
            chat = await Chat.create({
                user: user._id,
                messages: [],
                status: 'active'
            });
            chat = await Chat.findById(chat._id)
                .populate({ path: 'user', select: 'name email avatar', model: User });
        }

        return NextResponse.json(chat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
