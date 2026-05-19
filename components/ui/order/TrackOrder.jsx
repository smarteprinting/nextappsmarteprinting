'use client';
import React, { useState } from 'react';
import axios from 'axios';


const TrackOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTrack = async (e) => {
        e.preventDefault();
        const cleanId = orderId.replace('ORD-', '').trim();
        if (!cleanId) {
            alert("Please enter an Order ID");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            // We'll try to fetch without token first if they are on a public page
            // If it fails with 401, we know it's protected
            const { data } = await axios.get(`https://printersbackend.onrender.com/api/orders/${cleanId}`);
            
            // Format order data for tracking display
            const formattedOrder = {
                customerName: data.user?.name || "Customer",
                orderId: `${data._id.toUpperCase()}`,
                paid: data.isPaid,
                status: data.status,
                currentLocation: data.tracking?.currentLocation || "Warehouse",
                products: data.orderItems.map(item => ({
                    name: item.name,
                    image: item.image,
                    quantity: item.qty,
                    price: item.price
                })),
                history: [
                    { status: data.isPaid ? 'Confirmed' : 'Payment Failed', location: 'Office', date: new Date(data.createdAt).toLocaleDateString() },
                    { status: data.status, location: data.tracking?.currentLocation || 'In Transit', date: 'Real-time' }
                ]
            };
            
            setOrderDetails(formattedOrder);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || "Order not found. Please check the ID.");
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Track Your Order</h1>

            {/* Input */}
            <form
                onSubmit={handleTrack}
                className="flex flex-col sm:flex-row gap-2 mb-6"
            >
                <input
                    type="text"
                    placeholder="Enter your Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                    Track
                </button>
            </form>

            {/* Order Details */}
            {orderDetails && (
                <div className="bg-white shadow-md rounded-md p-4 space-y-6">
                    {/* Order Summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                            <p>
                                <span className="font-medium">Order ID:</span>{" "}
                                {orderDetails.orderId}
                            </p>
                            <p>
                                <span className="font-medium">Customer:</span>{" "}
                                {orderDetails.customerName}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="font-medium">Payment:</span>{" "}
                                <span
                                    className={
                                        orderDetails.paid ? "text-green-600" : "text-red-600"
                                    }
                                >
                                    {orderDetails.paid ? "Paid" : "Failed - Please Reorder"}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">Current Status:</span>{" "}
                                {orderDetails.status}
                            </p>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h2 className="font-semibold mb-2">Products</h2>
                        <div className="space-y-2">
                            {orderDetails.products.map((prod, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center gap-4 border p-2 rounded-md"
                                >
                                    <img
                                        src={prod.image}
                                        alt={prod.name}
                                        className="w-20 h-20 object-contain"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium">{prod.name}</p>
                                        <p className="text-gray-600">
                                            Quantity: {prod.quantity}
                                        </p>
                                    </div>
                                    <p className="font-semibold">${prod.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tracking Timeline */}
                    {/* Tracking Timeline */}
                    <div>
                        <h2 className="font-semibold text-xl mb-4">Tracking History</h2>
                        <ul className="relative border-l-2 border-gray-300 pl-6">
                            {orderDetails.history.map((step, idx) => {
                                const isCompleted = idx < orderDetails.history.length - 1;
                                const isCurrent = idx === orderDetails.history.length - 1;

                                return (
                                    <li key={idx} className="mb-8 relative">
                                        {/* Dot */}
                                        <span
                                            className={`absolute -left-3 top-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
              ${isCompleted ? "bg-gray-500 border-gray-500" : isCurrent ? "bg-indigo-500 border-indigo-500" : "bg-white border-gray-300"}
            `}
                                        >
                                            {isCompleted && (
                                                <svg
                                                    className="w-3 h-3 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </span>

                                        {/* Content */}
                                        <div className="ml-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                            <p className={`font-medium ${isCurrent ? "text-indigo-600" : isCompleted ? "text-gray-500" : "text-gray-400"}`}>
                                                {step.status}
                                            </p>
                                            <p className="text-gray-500 text-sm">{step.date}</p>
                                        </div>
                                        <p className="text-gray-600 text-sm mt-1">{step.location}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                </div>
            )}
        </div>
    );
};

export default TrackOrder;
