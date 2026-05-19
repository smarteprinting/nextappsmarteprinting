'use client';
import React from "react";

const ShippingPolicy = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Shipping Policy
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            This Shipping Policy explains how orders are processed, shipped, and delivered when you shop on <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>. By placing an order, you agree to the terms outlined below.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Order Processing Time */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Order Processing Time</h2>
            <p className="text-gray-600 leading-relaxed">
              Orders are typically processed within <strong>1–2 business days (Monday–Friday)</strong>. Orders placed after business hours, on weekends, or during holidays will be processed on the next working business day.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Processing delays may occur due to high order volume, inventory verification, address or payment issues, weather or carrier disruptions, and fraud-prevention checks. You will be notified if additional processing time is required.
            </p>
          </div>

          {/* 2. Shipping Locations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Shipping Locations</h2>
            <p className="text-gray-600 font-medium">✔ We currently ship to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>United States (all states except restricted areas)</li>
              <li>Canada (selected provinces)</li>
            </ul>
            <p className="text-gray-600 font-medium">❌ We do NOT ship to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>P.O. Boxes</li>
              <li>APO/FPO military addresses</li>
              <li>U.S. Territories (Guam, Puerto Rico, U.S. Virgin Islands)</li>
              <li>International destinations outside U.S. & Canada (unless otherwise stated)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Orders placed for unsupported locations may be canceled and refunded.
            </p>
          </div>

          {/* 3. Shipping Methods & Delivery Times */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Shipping Methods & Delivery Times</h2>
            <p className="text-gray-600 leading-relaxed">
              Delivery times depend on your location, selected shipping method, and carrier availability.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Standard Shipping:</strong> 3–7 business days</li>
              <li><strong>Expedited Shipping:</strong> 2–4 business days (available in select regions)</li>
              <li><strong>Express Shipping:</strong> 1–2 business days (limited availability; additional charges apply)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Note: Delivery times are estimates, not guarantees. Actual times may vary due to weather, carrier delays, or regional conditions.
            </p>
          </div>

          {/* 4. Shipping Rates */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Shipping Rates</h2>
            <p className="text-gray-600 leading-relaxed">
              Shipping rates are calculated at checkout based on weight of items, package size, delivery location, and shipping method selected. Promotional free shipping (if offered) will be clearly displayed during checkout.
            </p>
          </div>

          {/* 5. Order Tracking */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Order Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              Once your order ships, you will receive an email containing your tracking number, shipping carrier, estimated delivery date, and a link to track your package directly on the carrier’s website.
            </p>
          </div>

          {/* 6. Delivery Issues */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Delivery Issues</h2>
            <p className="text-gray-600 leading-relaxed">
              If your package shows as delivered but you did not receive it, please:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Check surrounding areas</li>
              <li>Confirm with household members</li>
              <li>Check with neighbors</li>
              <li>Review secure package drop-off areas</li>
              <li>Allow 24 hours after carrier’s delivery scan</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              If still not located, contact us at <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a>. We will work with the carrier to investigate.
            </p>
          </div>

          {/* 7. Lost, Damaged, or Missing Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Lost, Damaged, or Missing Items</h2>
            <p className="text-gray-600 font-medium">Damaged Items:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Report within 48 hours of delivery</li>
              <li>Provide photos of the packaging and item</li>
              <li>We will send a replacement or refund</li>
            </ul>
            <p className="text-gray-600 font-medium mt-2">Missing Items:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Notify us within 48 hours</li>
              <li>We will investigate and ship missing items promptly</li>
            </ul>
            <p className="text-gray-600 font-medium mt-2">Lost Packages:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>If a package is declared lost by the carrier, we will replace or refund the order</li>
              <li>Investigation timelines vary by carrier</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-2">
              There are no restocking fees for damaged, lost, or incorrect items.
            </p>
          </div>

          {/* 8. International Shipping (Canada) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. International Shipping (Canada)</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Customer is responsible for duties, taxes, and customs fees</li>
              <li>Delays may occur due to customs processing</li>
              <li>Returns from Canada may incur additional shipping costs</li>
              <li>We do not guarantee delivery times for cross-border shipments</li>
            </ul>
          </div>

          {/* 9. Incorrect Addresses */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Incorrect Addresses</h2>
            <p className="text-gray-600 leading-relaxed">
              Customers are responsible for entering accurate shipping information. If a package is returned due to incorrect or incomplete address:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Reshipping fees may apply</li>
              <li>Delivery delays may occur</li>
              <li>Refunds (if applicable) will exclude shipping fees</li>
              <li>We cannot redirect packages once shipped</li>
            </ul>
          </div>

          {/* 10. Order Cancellation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Order Cancellation</h2>
            <p className="text-gray-600 leading-relaxed">
              Orders may be canceled before shipment only. Once an order ships, it cannot be canceled and must follow the Return Policy. To cancel an order, email <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a> with your order number and reason.
            </p>
          </div>

          {/* 11. Special Delivery Circumstances */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Special Delivery Circumstances</h2>
            <p className="text-gray-600 leading-relaxed">
              Delivery may be affected by weather conditions, natural events, seasonal carrier delays, remote location restrictions, or carrier operational issues. Smart ePrinting is not responsible for delays outside our control.
            </p>
          </div>

          {/* 12. Contact Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433, United States<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
