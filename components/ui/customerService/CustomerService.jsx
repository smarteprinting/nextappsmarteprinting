'use client';
import React, { useState } from "react";
import {
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link';

import axios from "axios";
import { Loader2 } from "lucide-react";

const CustomerService = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [subject, setSubject] = useState("Order Inquiry");
  const [message, setMessage] = useState("");

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
        message,
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setOrderNumber("");
      setSubject("Order Inquiry");
      setMessage("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent ">
          Contact Us
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          We’re here to help with product inquiries, order updates, and general
          shopping questions. At Smart ePrinting, we aim to provide clear
          communication and a supportive customer experience from start to
          finish. If you have a question about your order or need help choosing
          the right printing supplies, feel free to reach out using the
          information or form below.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Static Info */}
        <div className="space-y-8">
          {/* Mailing Address */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
            <h2 className="text-xl font-black text-slate-900  tracking-tight">
              📍 Mailing Address
            </h2>
            <p className="text-slate-900 font-medium">
              Smart ePrinting
              <br />
              17807 Lakecrest View Drive, #1205
              <br />
              Cypress, TX 77433
              <br />
              United States
            </p>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              📧 Email Support
            </h2>
            <p className="text-slate-900 font-medium">
              For all inquiries, contact us at:{" "}
              <a
                href="mailto:support@smarteprinting.com"
                className="text-indigo-600 underline"
              >
                support@smarteprinting.com
              </a>
              <br />
              Our team will respond as promptly as possible during standard
              business hours.
            </p>
          </div>

          {/* Website */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6">
            <h2 className="text-xl font-black text-slate-900  tracking-tight">
              🌐 Website
            </h2>
            <p className="text-slate-900 font-medium">
              <a
                href="https://www.smarteprinting.com"
                className="text-indigo-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.smarteprinting.com
              </a>
              <br />
              Browse our selection of printers, ink, toner, and printing
              essentials anytime.
            </p>
          </div>

          {/* How We Can Help */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-4">
            <h2 className="text-xl font-black text-slate-900  tracking-tight">
              💬 How We Can Help
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-900 font-medium">
              <li>Product availability inquiries</li>
              <li>Compatibility questions</li>
              <li>Order status updates</li>
              <li>Return and refund guidance</li>
              <li>General shopping support</li>
            </ul>
            <p className="text-sm text-rose-600 font-bold mt-2">
              Important: We do not provide printer setup, troubleshooting,
              diagnostics, or repair assistance.
            </p>
          </div>
        </div>

        {/* Right Column: Response Time + Form */}
        <div className="space-y-6">
          {/* Response Time Info */}
          <div className="bg-indigo-50 rounded-2xl p-6 text-slate-900 font-medium">
            <h3 className="text-sm font-black  tracking-widest mb-2">
              🕒 Response Time
            </h3>
            <p className="text-xs sm:text-sm">
              Most messages are answered within a reasonable timeframe during
              business hours.
              <br />
              Response time may vary during weekends or holidays.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -z-10"></div>

            <h2 className="text-2xl font-black mb-2 text-slate-900  tracking-tighter">
              Submit Transmission
            </h2>
            <p className="text-slate-400 mb-10 text-[10px] font-black  tracking-widest">
              Dispatch your parameters for immediate analysis.
            </p>

            {success && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl text-xs font-bold  tracking-widest flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  ✓
                </div>
                Transmission Successful. We will respond within 24 hours.
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-xs font-bold  tracking-widest flex items-center gap-3">
                <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center">
                  !
                </div>
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={submitHandler} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400  tracking-widest">
                    Full Name
                  </label>
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
                  <label className="text-[10px] font-black text-slate-400  tracking-widest">
                    Email Address
                  </label>
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
                  <label className="text-[10px] font-black text-slate-400  tracking-widest">
                    Order ID (Opt)
                  </label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-medium text-sm"
                    placeholder="TRANSACTION_REF"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400  tracking-widest">
                    Transmission Subject
                  </label>
                  <select
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-slate-100 outline-none transition-all font-black text-[10px]  tracking-widest appearance-none cursor-pointer"
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
                <label className="text-[10px] font-black text-slate-400  tracking-widest">
                  Message Content
                </label>
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
                className="w-full bg-slate-900 text-white font-black  text-[11px] tracking-[0.3em] py-5 px-4 rounded-[2rem] hover:bg-black transition-all shadow-2xl shadow-slate-200 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : "Dispatch Message"}
              </button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></div>
                <p className="text-slate-300 text-[9px] font-bold  tracking-[0.2em]">
                  Verified secure transmission tunnel
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
