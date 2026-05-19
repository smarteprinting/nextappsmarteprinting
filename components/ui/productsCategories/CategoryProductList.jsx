'use client';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from '@/store/actions/productActions';
import { optimizeCloudinaryUrl } from '@/lib/utils';
import ProductGrid from "./ProductGrid";


const CategoryProductList = ({ categoryName, heading, enableFlowLayout = false }) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState('');
    const [brand, setBrand] = useState('');
    // Structured attribute filters
    const [technology, setTechnology] = useState('');
    const [usageCategory, setUsageCategory] = useState([]);
    const [allInOneType, setAllInOneType] = useState('');
    const [wireless, setWireless] = useState('');
    const [mainFunction, setMainFunction] = useState([]);

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const allProductsCache = useSelector((state) => state.allProductsCache);

    useEffect(() => {
        dispatch(listProducts('', categoryName, 1, sort, brand, technology, usageCategory, allInOneType, wireless, mainFunction));
    }, [dispatch, categoryName, sort, brand, technology, usageCategory, allInOneType, wireless, mainFunction]);

    const loadMoreHandler = () => {
        if (page < pages) {
            dispatch(listProducts('', categoryName, page + 1, sort, brand, technology, usageCategory, allInOneType, wireless, mainFunction));
        }
    };

    const handleFilterChange = (filters) => {
        setSort(filters.sort || '');
        setBrand(filters.brand || '');
        setTechnology(filters.technology || '');
        setUsageCategory(filters.usageCategory || []);
        setAllInOneType(filters.allInOneType || '');
        setWireless(filters.wireless || '');
        setMainFunction(filters.mainFunction || []);
    };

    // Use cached products for instant display while API loads
    const hasFilters = sort || brand || technology || usageCategory.length || allInOneType || wireless || mainFunction.length;
    const cachedCategoryProducts = (!hasFilters && allProductsCache?.loaded)
        ? (categoryName 
            ? allProductsCache.products.filter(p => p.category && (p.category.name || '').toLowerCase() === categoryName.toLowerCase())
            : allProductsCache.products)
        : null;

    const safeProducts = Array.isArray(products) && products.length > 0
        ? products
        : (cachedCategoryProducts || []);
    const formattedProducts = safeProducts.map(product => ({
        ...product,
        image: optimizeCloudinaryUrl(product.image 
            ? (product.image.startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${product.image}`)
            : (product.images && product.images.length > 0 
                ? (product.images[0].startsWith('http') ? product.images[0] : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${product.images[0]}`) 
                : "/assets/printer.webp")),
        link: `/product/${product.slug || product._id}`
    }));

    // if (loading && safeProducts.length === 0) return <div className="py-20 text-center font-black uppercase text-[10px] tracking-[0.3em] text-slate-400 animate-pulse">Synchronizing Inventory...</div>;
    if (error) return <div className="py-20 text-center font-black uppercase text-[10px] tracking-[0.3em] text-red-500">{error}</div>;

    if (!loading && safeProducts.length === 0 && !sort && !brand) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">{heading || categoryName}</h2>
                <div className="py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                    <p className="font-black uppercase text-[10px] tracking-[0.4em] text-slate-400">Products Coming Soon</p>
                    <p className="mt-4 text-slate-500 text-sm font-medium">We are currently stocking this category. Please check back later.</p>
                </div>
            </div>
        );
    }
    
    return (
         <div className="flex flex-col">
            <ProductGrid
                heading={heading || categoryName}
                products={formattedProducts}
                onFilterChange={handleFilterChange}
                enableFlowLayout={enableFlowLayout}
            />
            
            {loading && page >= 1 && (
                <div className="py-8 text-center font-black uppercase text-[10px] tracking-[0.3em] text-slate-400 animate-pulse">
                    Loading More Items...
                </div>
            )}

            {!loading && page < pages && (
                <div className="flex justify-center mb-16">
                    <button 
                        onClick={loadMoreHandler}
                        className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-colors shadow-lg"
                    >
                        See More Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default CategoryProductList;
