'use client';
import React, { useState } from "react";
import { EnvelopeIcon, ClockIcon, ChatBubbleLeftRightIcon, MapPinIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

import axios from 'axios';
import { Loader2 } from 'lucide-react';

const CustomerService = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [subject, setSubject] = useState('Order Inquiry');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                name,
                email,
                orderNumber,
                subject,
                message
            });
            setSuccess(true);
            setName('');
            setEmail('');
            setOrderNumber('');
            setSubject('Order Inquiry');
            setMessage('');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Customer Support Hub
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto font-medium">
                Our specialized team is ready to synchronize with your requirements. Experience smooth, easy, and satisfying service.
            </p>

            {/* 2-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column: Info */}
                <div className="space-y-8">
                    {/* Contact Options */}
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Contact Protocols</h2>

                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                <ClockIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Windows</p>
                                <p className="text-slate-900 font-bold">Mon–Sat, 8AM–7PM</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                <EnvelopeIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Direct Interface</p>
                                <p className="text-slate-900 font-bold">support@wideprinters.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                <ChatBubbleLeftRightIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Terminal</p>
                                <p className="text-slate-900 font-bold">Real-time status: Online</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600">
                                <MapPinIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Physical Coordinates</p>
                                <p className="text-slate-900 font-bold">
                                    9169 W State St #810 <br /> Garden City, ID 83714
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="bg-slate-900 rounded-3xl p-8 space-y-6 text-white shadow-xl shadow-slate-200">
                        <h2 className="text-xl font-black uppercase tracking-tight text-white">Utility Access</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/track-order" className="flex items-center justify-between group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightOnRectangleIcon className="w-5 h-5 text-indigo-400" />
                                        <span className="text-sm font-bold">Track Shipment Baseline</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns-exchanges" className="flex items-center justify-between group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-3">
                                        <ArrowRightOnRectangleIcon className="w-5 h-5 text-rose-400" />
                                        <span className="text-sm font-bold">Returns & Recalibration</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-10"></div>

                    <h2 className="text-2xl font-black mb-2 text-slate-900 uppercase tracking-tighter">Submit Transmission</h2>
                    <p className="text-slate-400 mb-10 text-[10px] font-black uppercase tracking-widest">
                        Dispatch your parameters for immediate analysis.
                    </p>

                    {success && (
                        <div className="mb-8 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">✓</div>
                            Transmission Successful. We will respond within 24 hours.
                        </div>
                    )}

                    {error && (
                        <div className="mb-8 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                            <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">!</div>
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitHandler} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-medium text-sm"
                                    placeholder="Identify yourself"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-medium text-sm"
                                    placeholder="Communication endpoint"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID (Opt)</label>
                                <input
                                    type="text"
                                    value={orderNumber}
                                    onChange={(e) => setOrderNumber(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-medium text-sm"
                                    placeholder="TRANSACTION_REF"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Transmission Subject</label>
                                <select
                                    required
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-black text-[10px] uppercase tracking-widest appearance-none cursor-pointer"
                                >


                                    <option>Order Inquiry</option>
                                    <option>Returns & Exchanges</option>
                                    <option>Technical Support</option>
                                    <option>Hardware Failure</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Message Content</label>
                            <textarea
                                required
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-6 py-5 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-medium text-sm resize-none"
                                placeholder="Detail your requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 text-white font-black uppercase text-[11px] tracking-[0.3em] py-5 px-4 rounded-[2rem] hover:bg-black transition-all shadow-2xl shadow-slate-200 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
                        >
                            {loading ? <Loader2 className="animate-spin" size={18} /> : 'Dispatch Message'}
                        </button>

                        <div className="flex items-center justify-center gap-2 pt-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                            <p className="text-slate-300 text-[9px] font-bold uppercase tracking-[0.2em]">
                                Verified secure transmission tunnel
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;
