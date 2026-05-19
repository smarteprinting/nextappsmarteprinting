'use client';
import React from 'react';

const ImportantInfoSection = () => {
    return (
        <section className="w-full bg-yellow-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Important Information
                    </h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        <li>Product availability, pricing, and specifications may change without notice.</li>
                        <li>Delivery timelines vary based on location, carrier operations, and product availability.</li>
                        <li>Manufacturer warranties apply to eligible products as provided by their respective brands.</li>
                        <li>Smart ePrinting operates independently and does not represent or act as an authorized dealer for any manufacturer.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ImportantInfoSection;