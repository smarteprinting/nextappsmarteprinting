'use client';
import React, { useState } from 'react';
import { Tag, ChevronLeft, ChevronRight } from 'lucide-react';
const OfferImage = "/assets/printer.webp";
import Link from 'next/link';


const specialOffers = [
    {
        id: 1,
        name: 'HP LaserJet MFP M234sdw Wireless Laser All-In-One Monochrome Printer',
        price: 279,
        oldPrice: 388,
        sold: 52,
        stock: 'In Stock',
        image: OfferImage,
        badge: 'Best Seller',
        link: '/product/hp-m234sdw',
    },
    {
        id: 2,
        name: 'HP Color LaserJet Pro 3201dw Wireless',
        price: 359,
        oldPrice: 399,
        sold: 34,
        stock: 'In Stock',
        image: OfferImage,
        badge: 'Best Seller',
        link: '/product/hp-color-3201dw',
    },
    {
        id: 3,
        name: 'HP LaserJet Pro 4101fdw All-in-One',
        price: 539,
        oldPrice: 659,
        sold: 21,
        stock: 'In Stock',
        image: OfferImage,
        badge: 'Best Seller',
        link: '/product/hp-pro-4101fdw',
    },
];

const SpecialOffersSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevOffer = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? specialOffers.length - 1 : prev - 1
        );
    };

    const nextOffer = () => {
        setCurrentIndex((prev) =>
            prev === specialOffers.length - 1 ? 0 : prev + 1
        );
    };

    const offer = specialOffers[currentIndex];

    return (
        <aside className="w-full border border-slate-200 rounded-xl bg-white p-4 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold">
                <Tag size={18} />
                <span>Special Offers</span>
            </div>

            {/* Offer Card */}
            <div className="relative border border-slate-100 rounded-xl overflow-hidden bg-white">
                {/* Image (clickable) */}
                <Link href={offer.link} className="h-56 block overflow-hidden relative group">
                    <img
                        src={offer.image}
                        alt={offer.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge */}
                    {offer.badge && (
                        <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                            {offer.badge}
                        </span>
                    )}
                </Link>

                {/* Product Info */}
                <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-medium text-slate-800 line-clamp-2">
                        {offer.name}
                    </h3>

                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900">${offer.price}</span>
                        <span className="text-sm text-slate-400 line-through">${offer.oldPrice}</span>
                    </div>

                    <div className="text-xs text-slate-500">
                        Sold: {offer.sold} | Available: {offer.stock}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevOffer}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextOffer}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </aside>
    );
};

export default SpecialOffersSlider;
