import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import Category from '@/lib/models/Category';

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Resolve dynamic params correctly. Next.js 15 requires awaiting params in dynamic routes,
    // which are passed as a Promise in the context argument.
    const { id: idOrSlug } = await context.params;

    let product;

    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
      product = await Product.findById(idOrSlug).populate({ path: 'category', select: 'name', model: Category });
    } else {
      // 1. Search by exact slug
      product = await Product.findOne({ slug: idOrSlug }).populate({ path: 'category', select: 'name', model: Category });

      // 2. Fallback: Search by title (fuzzy/regex)
      if (!product) {
        const titlePattern = idOrSlug.replace(/-/g, ' ');
        product = await Product.findOne({
          title: { $regex: new RegExp(`^${titlePattern}$`, 'i') }
        }).populate({ path: 'category', select: 'name', model: Category });
      }

      // 3. Last Resort Fallback: Match any product where title contains most of the slug
      if (!product) {
        const parts = idOrSlug.split('-');
        const firstFewParts = parts.slice(0, Math.min(parts.length, 3)).join(' ');
        if (firstFewParts.length > 5) {
          product = await Product.findOne({
            title: { $regex: new RegExp(firstFewParts, 'i') }
          }).populate({ path: 'category', select: 'name', model: Category });
        }
      }
    }

    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
