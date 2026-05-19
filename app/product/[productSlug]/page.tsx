import { Metadata } from 'next';
import connectDB from '@/lib/db';
import Product from '@/lib/models/Product';
import Component from '@/components/ui/productsCategories/ProductDetails';

interface Props {
    params: Promise<{ productSlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productSlug } = await params;
    try {
        await connectDB();
        // Look up by slug or ObjectId (as a fallback)
        const product = await Product.findOne({
            $or: [
                { slug: productSlug },
                ...(productSlug.match(/^[0-9a-fA-F]{24}$/) ? [{ _id: productSlug }] : [])
            ]
        });

        if (!product) {
            return {
                title: 'Product Not Found | Wide Range Printers',
                description: 'The requested printing hardware or accessory model was not found in our database inventory.',
            };
        }

        return {
            title: `${product.title} | Wide Range Printers`,
            description: product.description 
                ? product.description.substring(0, 160) + '...'
                : `Purchase ${product.title} online at Wide Range Printers. Original warranty and support included.`,
        };
    } catch (error) {
        return {
            title: 'Hardware Product details | Wide Range Printers',
            description: 'Browse high-quality printers, cartridges, and multi-function machines at Wide Range Printers.',
        };
    }
}

export default function Page() {
    return <Component />;
}
