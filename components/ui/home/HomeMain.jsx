'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '@/store/actions/productActions';
import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import Home from "./Home";
import LatestTips from "./LatestTips";
import Reviews from "./Reviews";
import StatsCircles from "./StatsCircles";
import WhyChooseSection from "./WhyChooseSection";
import OurPromiseSection from "./OurPromiseSection";
import ImportantInfoSection from "./ImportantInfoSection";
import ProductGrid from "../productsCategories/ProductGrid";

const HomeMain = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search');
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        if (searchQuery) {
            dispatch(listProducts(searchQuery));
        }
    }, [dispatch, searchQuery]);

    if (searchQuery) {
        return (
            <div className="min-h-screen bg-slate-50/50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">Search Results for "{searchQuery}"</h1>
                    {loading ? (
                        <div className="text-center py-12">Loading...</div>
                    ) : products && products.length > 0 ? (
                        <ProductGrid products={products} />
                    ) : (
                        <div className="text-center py-12">No products found for "{searchQuery}"</div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <Hero />
            {/* <WelcomeSection /> */}
            <Home />
            <WhyChooseSection />
            <OurPromiseSection />
            <Reviews />
            <StatsCircles />
            <ImportantInfoSection />
        </>
    );
};

export default HomeMain;
