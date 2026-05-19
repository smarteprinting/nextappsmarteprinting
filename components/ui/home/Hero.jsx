'use client';
import React from "react";
const heroImage = "/homefirst.webp";
import Link from 'next/link';


const Hero = () => {
    return (
        <section className="relative w-full flex items-center bg-white border-b border-slate-100 overflow-hidden min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-140px)]">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 hidden lg:block -skew-x-12 translate-x-20"></div>

            <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Text Content */}
                    <div className="flex-[1.2] text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                            </span>
                            Smart ePrinting
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                            Smart Printing <br className="hidden lg:block" />
                            <span className="text-indigo-600">Made Simple.</span>
                        </h1>
                        <p className="max-w-2xl text-slate-600 text-lg sm:text-xl md:text-2xl leading-relaxed mb-10">
                            Discover reliable printers, ink, toner, and essential printing supplies. We provide clear descriptions, secure checkout, and a customer-focused experience for all your home and office needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <button className="w-full sm:w-auto bg-indigo-600 text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 text-xl">
                                <Link href="/product-category/all-in-one-printers/">Shop Now</Link>
                            </button>
                            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 font-bold px-10 py-5 rounded-2xl shadow-sm hover:bg-slate-50 transition-all active:scale-95 text-xl">
                                <Link href="/about">About Us</Link>
                            </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center md:justify-start gap-8 border-t border-slate-100 pt-8">
                            <div>
                                <p className="text-2xl font-bold text-slate-900">100%</p>
                                <p className="text-sm text-slate-500 font-medium">Genuine Products</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100"></div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">Fast</p>
                                <p className="text-sm text-slate-500 font-medium">US & CANADA Delivery</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100"></div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">24/7</p>
                                <p className="text-sm text-slate-500 font-medium">Customer Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative">
                            {/* Decorative Shadow/Blob */}
                            <div className="absolute -inset-10 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

                            <img
                                src={heroImage}
                                alt="Smart ePrinting Solutions"
                                className="relative w-full max-w-lg lg:max-w-2xl object-cover rounded-3xl shadow-2xl border-8 border-white"
                                width={800}
                                height={800}
                                fetchPriority="high"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden lg:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center font-bold text-xl">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 leading-none mb-1">Trusted Retailer</p>
                                        <p className="text-xs text-slate-500">Verified Quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};




export default Hero;
