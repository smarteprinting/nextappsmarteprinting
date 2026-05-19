import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';

export async function GET(request: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q') || '';
        
        if (!query || query.trim().length < 2) {
            return NextResponse.json([]);
        }
        
        const suggestions = await Product.find({
            $or: [
                { title: { $regex: `^${query.trim()}`, $options: 'i' } },
                { brand: { $regex: `^${query.trim()}`, $options: 'i' } },
                { color: { $regex: `^${query.trim()}`, $options: 'i' } }
            ]
        })
        .select('title brand color images slug price')
        .limit(10);
        
        return NextResponse.json(suggestions);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
