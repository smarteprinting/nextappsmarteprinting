'use client';
import React from 'react';
const ClickPrintImg = "/assets/printer.webp";
const PrintCoreImg = "/assets/printer.webp";
import Link from 'next/link';


const TwoBannerSections = () => {
    const banners = [
        {
            id: 1,
            title: 'Click & Print',
            subtitle: 'Your perfect print, just a click.',
            buttonText: 'Know More',
            image: ClickPrintImg,
            link: '/click-print',
        },
        {
            id: 2,
            title: 'Print Core',
            subtitle: 'All printers, all needs covered.',
            buttonText: 'Know More',
            image: PrintCoreImg,
            link: '/print-core',
        },
    ];

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {banners.map((banner) => (
                <div
                    key={banner.id}
                    className="relative h-72 rounded-xl overflow-hidden group"
                    style={{ backgroundImage: `url(${banner.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 text-white">
                        <h3 className="text-2xl font-bold">{banner.title}</h3>
                        <p className="mt-2 text-sm">{banner.subtitle}</p>
                        {banner.buttonText && (
                            <Link
                                href={banner.link}
                                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition"
                            >
                                {banner.buttonText}
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default TwoBannerSections;
