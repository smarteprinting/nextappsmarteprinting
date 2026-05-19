'use client';
import React from "react";
import Link from 'next/link';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {/* 1. Brand + description + social */}
        <div>
          <div className="mb-4">
            <img 
              src="/smartEprintingLogo.webp" 
              alt="Smart ePrinting" 
              className="h-16 w-auto object-contain"
              width="177"
              height="112"
              loading="lazy"
            />
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Smart ePrinting is your trusted online destination for printers,
            ink, toner, and office printing supplies. We focus on quality
            products, secure shopping, and reliable customer support.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-orange-500 transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-orange-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/track-order" className="hover:text-orange-500 transition font-medium">
                Track Your Order
              </Link>
            </li>
            <li>
              <Link href="/return-exchange-policy" className="hover:text-orange-500 transition font-medium">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/customer-service" className="hover:text-orange-500 transition font-medium">
                Contact Support
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-orange-500 transition font-medium">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Company & Legal */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-orange-500 transition font-medium">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-orange-500 transition font-medium">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-orange-500 transition font-medium">Terms & Conditions</Link></li>
            <li><Link href="/shipping-policy" className="hover:text-orange-500 transition font-medium">Shipping Policy</Link></li>
            <li><Link href="/return-exchange-policy" className="hover:text-orange-500 transition font-medium">Return & Exchange Policy</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-orange-500 transition font-medium">Cookie Policy</Link></li>
            <li><Link href="/ccpa-privacy-policy" className="hover:text-orange-500 transition font-medium">CCPA / CPRA</Link></li>
            <li><Link href="/accessibility-statement" className="hover:text-orange-500 transition font-medium">Accessibility</Link></li>
            <li><Link href="/disclaimer" className="hover:text-orange-500 transition font-medium">Disclaimer</Link></li>
          </ul>
        </div>

        {/* 4. Contact Details */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wide">Get in Touch</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:support@smarteprinting.com"
                className="hover:text-orange-500 transition font-medium"
              >
                support@smarteprinting.com
              </a>
            </li>
            {/* <li>Phone: Available via email support</li> */}
            <li>
              Address:
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433<br />
              United States
            </li>
            <li>Support Hours: Monday–Friday</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Smart ePrinting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
