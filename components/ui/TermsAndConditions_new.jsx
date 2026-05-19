'use client';
import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/20 min-h-screen py-16">
      {/* Background Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto my-4"></div>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-widest">SMART EPRINTING</p>
          <p className="text-slate-700 mt-2 text-xs">Last Updated: January 31, 2026</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">1. Company Information</h2>
            <p className="text-slate-700 font-medium">
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433, United States<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-orange-600 hover:text-orange-700 font-bold">support@smarteprinting.com</a>
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">2. Eligibility & Usage</h2>
            <p className="text-slate-700 font-medium mb-2">To use this Website, you must:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 font-medium ml-2">
              <li>Be at least 18 years old</li>
              <li>Use the Website only for lawful purposes</li>
              <li>Not interfere with Website operation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">3. Independent Retailer</h2>
            <p className="text-slate-700 font-medium">Smart ePrinting is not affiliated with any printer manufacturer. All trademarks are used for identification purposes only.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">4. Products & Pricing</h2>
            <p className="text-slate-700 font-medium">We strive for accuracy but cannot guarantee all information is error-free. We reserve the right to correct prices and refuse orders if pricing errors occur.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">5. Returns & Refunds</h2>
            <p className="text-slate-700 font-medium">By purchasing, you agree to our <a href="/refund-return-policy" className="text-orange-600 hover:text-orange-700 font-bold">Return & Refund Policy</a>.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Contact Us</h2>
            <p className="text-slate-700 font-medium">
              For questions: <a href="mailto:support@smarteprinting.com" className="text-orange-600 hover:text-orange-700 font-bold">support@smarteprinting.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
