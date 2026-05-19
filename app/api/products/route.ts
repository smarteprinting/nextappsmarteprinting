import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import Category from '@/lib/models/Category';

export async function GET(request: Request) {
    try {
        await connectDB();
        
        const { searchParams } = new URL(request.url);
        
        const categoryName = searchParams.get('category');
        const search = searchParams.get('search');
        const brand = searchParams.get('brand');
        const sort = searchParams.get('sort');
        const technology = searchParams.get('technology');
        const usageCategory = searchParams.get('usageCategory');
        const allInOneType = searchParams.get('allInOneType');
        const wireless = searchParams.get('wireless');
        const mainFunction = searchParams.get('mainFunction');

        let query: any = {};
        
        if (categoryName && categoryName !== 'undefined' && categoryName !== 'null') {
            const category = await Category.findOne({ name: { $regex: new RegExp(`^${categoryName}$`, 'i') } });
            if (category) {
                query.category = category._id;
            } else {
                return NextResponse.json({ products: [], page: 1, pages: 0, total: 0 });
            }
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { shortDetails: { $regex: search, $options: 'i' } },
                { shortSpecification: { $regex: search, $options: 'i' } },
                { overview: { $regex: search, $options: 'i' } },
                { technicalSpecification: { $regex: search, $options: 'i' } },
                { brand: { $regex: search, $options: 'i' } },
                { color: { $regex: search, $options: 'i' } },
                { width: { $regex: search, $options: 'i' } },
                { height: { $regex: search, $options: 'i' } },
                { depth: { $regex: search, $options: 'i' } },
                { screenSize: { $regex: search, $options: 'i' } }
            ];
        }

        if (technology) query.technology = technology;
        if (usageCategory) query.usageCategory = { $in: usageCategory.split(',') };
        if (allInOneType) query.allInOneType = allInOneType;
        if (wireless) query.wireless = wireless;
        if (mainFunction) query.mainFunction = { $in: mainFunction.split(',') };

        if (brand && brand !== 'undefined' && brand !== 'null') {
            query.brand = { $regex: brand, $options: 'i' };
        }

        let sortOption: any = {};
        if (sort === 'lowToHigh') {
            sortOption.price = 1;
        } else if (sort === 'highToLow') {
            sortOption.price = -1;
        } else {
            sortOption.createdAt = -1;
        }

        const pageSize = Number(searchParams.get('limit')) || 20;
        const page = Number(searchParams.get('page')) || 1;

        const count = await Product.countDocuments(query);
        const products = await Product.find(query)
            .populate({ path: 'category', select: 'name', model: Category })
            .sort(sortOption)
            .limit(pageSize)
            .skip(pageSize * (page - 1));

        return NextResponse.json({ 
            products, 
            page, 
            pages: Math.ceil(count / pageSize), 
            total: count 
        });

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
