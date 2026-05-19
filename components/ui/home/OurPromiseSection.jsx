'use client';
import React from 'react';

const promises = [
    {
        title: 'Transparency',
        description: 'Accurate information, honest policies, and clear communication.',
    },
    {
        title: 'Respect',
        description: 'Every customer is important, and every question matters.',
    },
    {
        title: 'Quality',
        description: 'We offer products sourced from trusted suppliers to help ensure dependable performance.',
    },
    {
        title: 'Security',
        description: 'Your personal and payment information is processed through secure, industry-standard systems.',
    },
];

const OurPromiseSection = () => {
    return (
        <section className="w-full bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Our Promise
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                        At Smart ePrinting, we value:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {promises.map((promise, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{promise.title}</h3>
                            <p className="text-sm text-slate-600">{promise.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromiseSection;