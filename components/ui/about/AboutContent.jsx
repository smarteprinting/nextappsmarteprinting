'use client';
import React from "react";
const aboutUsHero = "/aboutfirst.webp";
const whoweare = "/abouttwo.webp";
const inktoner = "/inkandtoner.webp";
const printingacceseries = "/printersacceseries.webp";
const printer = "/printersforhomeandoffice.webp";

const AboutContent = () => {
  return (
    <section className="w-full bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header with Image */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={aboutUsHero}
                alt="Smart ePrinting Team"
                className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                About us
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Your Trusted Online Store for Printing Essentials
              </h3>

              <p className="text-slate-600 text-lg leading-relaxed">
                Welcome to Smart ePrinting — an independent online retailer dedicated to making it easy for individuals, families, and businesses to shop for reliable printers, ink, toner, and essential printing supplies. Our mission is simple: to provide a clear, honest, and customer-friendly shopping experience where you can confidently choose products that match your everyday printing needs.
              </p>
            </div>

          </div>
        </div>


        {/* Who We Are - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Smart ePrinting was created with the goal of helping customers understand and find the right printing products without confusion. In a world where technology and options continue to grow, we wanted to build a space that feels simple, transparent, and human-centered.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              We operate independently and are not affiliated with or endorsed by any printer manufacturer. Our selections come from trusted suppliers, and every brand name or trademark used on our website belongs to its respective owner and is used strictly for identification purposes.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              At Smart ePrinting, we combine accurate product information, clear communication, and dependable service to support customers in making informed decisions every day.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={whoweare}
              alt="Our Story"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* What We Offer - Three Column Cards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              What We Offer
            </h3>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="overflow-hidden">
                <img
                  src={printer}
                  alt="Printers"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Printers for Home & Office
                </h4>
                <p className="text-slate-600">
                  A curated selection of printers designed for personal use, schoolwork, small business environments, and everyday printing tasks.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="overflow-hidden">
                <img
                  src={inktoner}
                  alt="Ink & Toner"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Ink & Toner Cartridges
                </h4>
                <p className="text-slate-600">
                  A wide variety of genuine-quality ink and toner supplies with detailed compatibility information so you can choose the right fit with confidence.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="overflow-hidden">
                <img
                  src={printingacceseries}
                  alt="Printing Accessories"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Printing Accessories
                </h4>
                <p className="text-slate-600">
                  Paper, specialty supplies, and everyday essentials that support your home or office printing setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment to Customers - Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Commitment
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              At Smart ePrinting, we believe trust is built through clarity, consistency, and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: "🔍", title: "Transparency", desc: "Clear product details, honest descriptions, and straightforward communication without complexity.", color: "blue" },
              { icon: "🤝", title: "Customer Respect", desc: "Every question matters. Our support team is here to help with product inquiries and shopping assistance.", color: "green" },
              { icon: "🔒", title: "Security & Safety", desc: "We use secure checkout processes and industry-standard systems to protect your information.", color: "purple" },
              { icon: "⭐", title: "Quality Choices", desc: "We offer products sourced through reliable channels so you can enjoy a dependable shopping experience.", color: "orange" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transition-shadow border border-slate-100">
                <div className={`w-16 h-16 bg-${item.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Independent Retailer Statement - Highlighted */}
        <div className="mb-24 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 md:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Independent Retailer Statement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-indigo-50 leading-relaxed mb-6 text-lg">
                  Smart ePrinting operates as an independent online retailer. We are not affiliated with, sponsored by, or endorsed by any printer or technology manufacturer.
                </p>
                <p className="text-indigo-50 leading-relaxed text-lg">
                  All trademarks, brand names, product images, and labels belong to their respective owners and are used solely to help customers identify and select compatible products.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-white font-medium italic">
                  "Our role is to make shopping easier — not to represent or replace official brand support."
                </p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Why Choose Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: "Simple & Easy Shopping", desc: "A clean, intuitive website that helps you browse and compare products quickly." },
              { title: "Professional & Responsive Support", desc: "We provide assistance with product-related questions, order status updates, and general shopping needs." },
              { title: "Accurate Product Information", desc: "Each product page includes clear specifications and compatibility details to support well-informed decisions." },
              { title: "Dependable Customer Experience", desc: "Safe checkout, reliable delivery partners, and respectful communication every step of the way." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision - Hero Style */}
        <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Our Vision
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              To be a trusted and customer-focused retailer that helps people shop for printing essentials confidently and comfortably.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              As printing needs evolve, our commitment to honesty, reliability, and customer care remains the foundation of everything we do.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white/20 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;

