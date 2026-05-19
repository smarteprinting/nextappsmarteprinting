'use client';
import React, { useRef } from "react";
import Link from 'next/link';

const tip = "/assets/printer.webp";

const LatestTips = () => {
    const scrollRef = useRef(null);

    const tips = [
        {
            title: "Cartridge vs Refill Ink: Which Is Better for You?",
            image: tip,
            link: "/blog/cartridge-vs-refill",
        },
        {
            title: "Tips for Printing High-Quality Photos at Home",
            image: tip,
            link: "/blog/printing-high-quality-photos",
        },
        {
            title: "Best Printers for Small Businesses and Startups",
            image: tip,
            link: "/blog/best-printers-small-business",
        },
    ];

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const width = scrollRef.current.clientWidth;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -width : width,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative max-w-7xl mx-auto px-4 py-12 bg-gray-50">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-900">Latest Tips & Trends</h2>
                <p className="text-gray-600 mt-2">
                    Discover expert advice, style inspiration, and product updates on our blog.
                </p>
            </div>

            {/* Scroll Buttons */}
            <button
                onClick={() => scroll("left")}
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow hover:bg-gray-100 items-center justify-center"
                aria-label="Scroll left"
            >
                &lt;
            </button>
            <button
                onClick={() => scroll("right")}
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow hover:bg-gray-100 items-center justify-center"
                aria-label="Scroll right"
            >
                &gt;
            </button>

            {/* Scroll Area */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto sm:overflow-x-hidden scroll-smooth px-2 sm:px-14"
            >
                {tips.map((tip, index) => (
                    <Link
                        href={tip.link}
                        key={index}
                        className="flex-shrink-0 w-[calc(100%-16px)] sm:w-[calc(33.333%-12px)] bg-white border rounded-xl shadow hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="aspect-square bg-gray-100 rounded-t-xl flex items-center justify-center overflow-hidden">
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                {tip.title}
                            </h3>
                            <span className="text-indigo-600 mt-2 inline-block font-medium text-sm">
                                Read more
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestTips;
