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

// PUT /api/chats/[id]/close
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const user = await getAuthenticatedUser(request);
        if (!user || !user.isAdmin) {
            return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });
        }

        const chat = await Chat.findById(id);
        if (!chat) {
            return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
        }

        chat.status = 'closed';
        await chat.save();

        return NextResponse.json({ message: 'Chat closed' });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
