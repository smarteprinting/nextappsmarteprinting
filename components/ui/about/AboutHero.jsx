'use client';
import React from "react";

const AboutHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          We create modern, scalable, and user-friendly web applications
          focused on performance, security, and great user experience.
        </p>

        {/* CTA Button */}
       

      </div>
    </section>
  );
};

export default AboutHero;
