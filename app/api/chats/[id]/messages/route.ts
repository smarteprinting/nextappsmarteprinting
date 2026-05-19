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

// POST /api/chats/[id]/messages
export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const user = await getAuthenticatedUser(request);
        if (!user) {
            return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
        }

        const { message } = await request.json();
        if (!message) {
            return NextResponse.json({ message: 'Message content is required' }, { status: 400 });
        }

        const chat = await Chat.findById(id);
        if (!chat) {
            return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
        }

        // Validate authorization
        if (chat.user.toString() !== user._id.toString() && !user.isAdmin) {
            return NextResponse.json({ message: 'Not authorized to send messages in this chat' }, { status: 403 });
        }

        const newMessage = {
            sender: user._id,
            senderModel: 'User',
            message,
            isRead: false,
            timestamp: new Date()
        };

        chat.messages.push(newMessage);
        chat.lastMessage = message;

        // Increment unread count if message is from a regular user
        if (!user.isAdmin) {
            chat.unreadCount += 1;
        }

        await chat.save();

        const updatedChat = await Chat.findById(chat._id)
            .populate({ path: 'user', select: 'name email avatar', model: User });

        return NextResponse.json(updatedChat);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
