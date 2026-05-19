'use client';
import React, { useState } from "react";
import { usePathname as useLocation } from 'next/navigation';
import HomeProductList from "./HomeProductList";

const Home = () => {
    const location = useLocation();

    return (
        <div className="w-full bg-slate-50/50 relative">
            {/* Main Content */}
            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 py-8">
                {/* Desktop Layout with Wrapping */}
                <div className="clearfix">
                    {/* Product List (Flows around sidebar) */}
                    <div className="">
                        <HomeProductList enableFlowLayout={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
