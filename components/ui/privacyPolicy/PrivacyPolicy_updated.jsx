'use client';
import React from "react";

const PrivacyPolicy = () => {
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
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto my-4"></div>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-widest">SMART EPRINTING</p>
          <p className="text-slate-700 mt-2 text-xs">Last Updated: January 31, 2026</p>
        </div>

        <div className="space-y-6">
          {/* All sections in gradient cards */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">1. Who We Are</h2>
            <p className="text-slate-700 leading-relaxed font-medium">
              Smart ePrinting - 17807 Lakecrest View Drive, #1205, Cypress, TX 77433
              <br />Email: <a href="mailto:support@smarteprinting.com" className="text-orange-600 hover:text-orange-700 font-bold">support@smarteprinting.com</a>
              <br />Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold">www.smarteprinting.com</a>
              <br />We are an independent online retailer. We are not affiliated with any printer manufacturer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">2. Information We Collect</h2>
            <p className="text-slate-700 font-medium">We collect personal information only for secure order processing and customer support.</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 font-medium ml-2">
              <li>Contact information (name, email, phone)</li>
              <li>Billing & shipping addresses</li>
              <li>Payment details (processed by third-party providers)</li>
              <li>Order history</li>
              <li>Device & browser info (for security)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">3. How We Use Your Information</h2>
            <p className="text-slate-700 font-medium mb-3">We use data strictly for legitimate purposes:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 font-medium ml-2">
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Order processing & fulfillment</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Customer support</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Security & fraud prevention</li>
              <li className="flex items-start gap-2"><span className="text-green-600">✓</span> Website functionality</li>
              <li className="flex items-start gap-2"><span className="text-red-600">✘</span> We do NOT use data for advertising or selling</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">4. Data Sharing</h2>
            <p className="text-slate-700 font-medium">We only share data with essential service providers under strict confidentiality agreements. We do NOT sell personal information.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">5. Cookies & Tracking</h2>
            <p className="text-slate-700 font-medium">We only use essential & functional cookies. We do NOT use advertising, retargeting, or cross-site tracking cookies.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">6. Your Privacy Rights</h2>
            <p className="text-slate-700 font-medium">You have rights including access, correction, deletion, and opting out. Submit requests to <a href="mailto:support@smarteprinting.com" className="text-orange-600 hover:text-orange-700 font-bold">support@smarteprinting.com</a>.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">7. CCPA/CPRA Notice</h2>
            <p className="text-slate-700 font-medium">California residents: We do NOT sell or share personal information. <a href="/do-not-sell" className="text-orange-600 hover:text-orange-700 font-bold">Learn more</a>.</p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">Contact Us</h2>
            <p className="text-slate-700 font-medium">For privacy questions, contact us at <a href="mailto:support@smarteprinting.com" className="text-orange-600 hover:text-orange-700 font-bold">support@smarteprinting.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
