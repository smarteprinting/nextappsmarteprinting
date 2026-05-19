'use client';
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
    const reviews = [
        {
            quote: "I have already saved a significant amount on refilling ink cartridges because the system is effective.",
            name: "Isabella Reed",
            location: "Leeds, UK",
            rating: 5,
        },
        {
            quote: "Surprisingly, the photo prints were bright and vibrant.",
            name: "Madison Walker",
            location: "Austin, USA",
            rating: 4,
        },
        {
            quote: "This is an easy-to-use printer that can handle the small office workload without becoming overwhelmed.",
            name: "Harry Walker",
            location: "Birmingham, UK",
            rating: 5,
        },

    ];

    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-gray-900">Customer Favorites</h2>
                    <p className="text-gray-600 mt-2">
                        Discover expert advice, style inspiration, and product updates on our blog.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex mb-4">
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < review.rating ? (
                                        <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                                    ) : (
                                        <FaRegStar key={i} className="text-yellow-400 w-5 h-5" />
                                    )
                                )}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 italic flex-1">"{review.quote}"</p>

                            {/* Customer Info */}
                            <div className="mt-4">
                                <p className="font-semibold text-gray-900">{review.name}</p>
                                <p className="text-gray-500 text-sm">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
