'use client';
import React from 'react';
const OfferImage = "/assets/printer.webp";
import Link from 'next/link';


const OfferCard = () => {
    return (
        <div className="w-full border border-slate-200 rounded-xl bg-white overflow-hidden flex flex-col justify-between">
            {/* Offer Image */}
            <div className="h-85 flex items-center justify-center overflow-hidden">
                <img
                    src={OfferImage}
                    alt="Special Offer"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Shop Now Button */}
            <div className="p-4">
                <Link
                    href="/offers"
                    className="block w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default OfferCard;
