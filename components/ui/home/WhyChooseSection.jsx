'use client';
import React from 'react';
const WhyImage = "/assets/about.webp";

const choosePoints = [
    {
        id: 1,
        title: 'Clear & Accurate Product Information',
        description:
            'Every product page includes detailed specifications and compatibility details. We aim to provide the clarity you need to choose confidently.',
    },
    {
        id: 2,
        title: 'Customer-Centered Experience',
        description:
            'Our support team is available to help with product inquiries, order status questions, and general shopping assistance.',
    },
    {
        id: 3,
        title: 'Secure & Smooth Shopping Process',
        description:
            'We use trusted payment processors and safe checkout methods to help ensure a secure online experience.',
    },
    {
        id: 4,
        title: 'Reliable Delivery',
        description:
            'We partner with established carriers to support timely and safe delivery. Shipping times depend on location and product availability.',
    },
    {
        id: 5,
        title: 'Independent Retailer',
        description:
            'Smart ePrinting is not affiliated with any printer manufacturer. All product names, images, and trademarks belong to their respective owners and are used solely for identification.',
    },
];

const WhyChooseSection = () => {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">
                {/* Heading Section (centered) */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why Shop With Smart ePrinting?
                    </h2>
                    <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto">
                        Discover the benefits of shopping with Smart ePrinting for all your printing needs.
                    </p>
                </div>

                {/* Two-column Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: Points */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {choosePoints.map((point) => (
                            <div key={point.id} className="flex flex-col gap-2 pb-4 border-b border-slate-200">
                                <h3 className="text-lg md:text-xl font-semibold text-slate-900">{point.title}</h3>
                                <p className="text-sm md:text-base text-slate-600">{point.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-1/2">
                        <img
                            src={WhyImage}
                            alt="Why Shop With Smart ePrinting"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            width="560"
                            height="400"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
