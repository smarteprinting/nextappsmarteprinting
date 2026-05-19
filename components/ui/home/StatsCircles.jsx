'use client';
import React from "react";

const StatsCircles = () => {
    const stats = [
        {
            number: "10k+",
            label: "Orders Delivered",
        },
        {
            number: "10k+",
            label: "Happy Customers",
        },
        {
            number: "2k+",
            label: "5-Star Reviews",
        },
        {
            number: "100%",
            label: "Secure Payments",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
                        >
                            {/* Circle */}
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold">
                                {stat.number}
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-gray-900 font-semibold">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCircles;
