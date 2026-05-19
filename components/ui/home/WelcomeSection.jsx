'use client';
import React from 'react';

const WelcomeSection = () => {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Welcome to Smart ePrinting
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto mb-6">
                        Smart ePrinting is an independent online retailer dedicated to helping individuals, families, and businesses find the printing essentials they need with confidence. Our platform is designed to offer a straightforward and transparent shopping experience—so you can make the right choice without confusion.
                    </p>
                    <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto">
                        Whether you print occasionally or manage regular work documents, our goal is to bring you reliable products, honest communication, and an easy, enjoyable experience from browsing to delivery.
                    </p>
                    <p className="text-base md:text-lg text-slate-600 max-w-4xl mx-auto mt-4">
                        Designed for Everyday Printing Needs. Whether you're printing at home, working remotely, or managing office routines, Smart ePrinting offers products that support your daily tasks. We aim to make the process simple—from browsing to checkout—so you can shop confidently.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;