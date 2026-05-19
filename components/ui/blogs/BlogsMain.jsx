'use client';
import React from 'react';
import Link from 'next/link';

import { Calendar, User, ArrowRight, Printer } from 'lucide-react';
const smallbusiness = "/assets/printerforsmallbusiness.webp";
const savecosts = "/assets/savemoney.webp";
const printingmistakes = "/assets/top7Printingmistakes.webp";
const printermaintenance = "/assets/printersmaintenence.webp";
const printerguide = "/assets/ultimateguide.webp";


const BlogsMain = () => {
    // You can add more blogs here later
    const blogs = [
        {
            id: 1,
            title: "The Ultimate Guide to Choosing the Right Printer for Your Home Office",
            excerpt: "Setting up a productive home office requires the right tools, and one essential device you cannot overlook is your printer...",
            date: "February 12, 2026",
            author: "Smart ePrinting Team",
            image: printerguide,
            slug: "choosing-right-printer-home-office",
            category: "Buying Guide"
        },
        {
            id: 2,
            title: "Why Printer Maintenance Matters — And How to Do It Right",
            excerpt: "Printers play a crucial role in home offices and professional environments. Yet many users only pay attention when something goes wrong. Learn how care for your device...",
            date: "February 11, 2026",
            image: printermaintenance,
            slug: "printer-maintenance-guide",
            category: "Maintenance Guide"
        },
        {
            id: 3,
            title: "How to Save on Printing Costs Without Compromising Quality",
            excerpt: "Printing is essential but expense. Learn smart cost-saving methods, printer settings, cartridge strategies, and best practices that help you save money...",
            date: "February 11, 2026",
            image: savecosts,
            slug: "save-printing-costs-guide",
            category: "Cost Saving Tips"
        },
        {
            id: 4,
            title: "Top 7 Printing Mistakes Everyone Makes (And How to Avoid Them)",
            excerpt: "Printing should be simple—but errors and wasted ink often get in the way. Discover the 7 most common printing mistakes and exactly how to fix them...",
            date: "February 11, 2026",
            image: printingmistakes,
            slug: "top-7-printing-mistakes",
            category: "Troubleshooting"
        },
        {
            id: 5,
            title: "Printing for Small Business: Essential Tools for Productivity",
            excerpt: "Running a small business requires efficiency. Discover the best printer types, essential tools, cost-saving strategies, and productivity tips to keep your operations flowing smoothly...",
            date: "February 11, 2026",
            image: smallbusiness,
            slug: "small-business-printing-essential-tools",
            category: "Business Productivity"
        },




    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        Latest Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Guides</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Expert advice, buying guides, and tips to help you get the most out of your printing experience.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Link href={`/blogs/${blog.slug}`}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">
                                        {blog.category}
                                    </div>
                                </Link>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} /> {blog.date}
                                    </span>
                                    {/* <span className="flex items-center gap-1">
                                        <User size={14} /> {blog.author}
                                    </span> */}
                                </div>

                                <Link href={`/blogs/${blog.slug}`}>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h2>
                                </Link>

                                <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed text-sm">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all"
                                >
                                    Read Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}

                    {/* Placeholder for when you have more posts */}
                    {/* <div className="bg-slate-100 rounded-3xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
                            <Printer size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-500">More Coming Soon</h3>
                        <p className="text-slate-400 text-sm mt-2">Stay tuned for more printing tips and reviews.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogsMain;
