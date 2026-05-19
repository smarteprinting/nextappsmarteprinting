'use client';
import React from "react";
import { FaBox, FaExchangeAlt, FaTruck, FaCheckCircle, FaHeadset } from "react-icons/fa";
import Link from 'next/link';


const ReturnsAndExchanges = () => {
    const steps = [
        {
            icon: <FaBox className="text-orange-600 w-6 h-6" />,
            title: "Check Eligibility",
            description:
                "Ensure the product is eligible for return/exchange. Must be unused, in original packaging, and returned within 7 days.",
        },
        {
            icon: <FaExchangeAlt className="text-orange-600 w-6 h-6" />,
            title: "Request Return/Exchange",
            description:
                "Login to your account, select the order, click 'Return/Exchange', choose reason and submit your request.",
        },
        {
            icon: <FaTruck className="text-orange-600 w-6 h-6" />,
            title: "Pickup & Inspection",
            description:
                "Our courier will collect the product from your doorstep. The product will be inspected to ensure it meets the criteria.",
        },
        {
            icon: <FaCheckCircle className="text-orange-600 w-6 h-6" />,
            title: "Refund / Exchange",
            description:
                "Refunds will be processed in 5-7 business days. Exchanges will be shipped after inspection of the returned item.",
        },
        {
            icon: <FaHeadset className="text-orange-600 w-6 h-6" />,
            title: "Need Help?",
            description:
                "For any questions, contact our Customer Service via chat, email, or phone. We're happy to assist you.",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-6 uppercase">Returns & Exchanges</h1>
            <p className="text-gray-700 mb-8">
                We want you to be completely satisfied with your purchase. Follow these simple steps for hassle-free returns or exchanges.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg transition"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
                            {step.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 mt-1 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center text-gray-700">
                <p>
                    For urgent queries, contact our <Link href="/customer-service"><span className="font-medium text-indigo-600">Customer Service</span></Link> team.
                </p>
            </div>
        </div>
    );
};

export default ReturnsAndExchanges;
