'use client';
import React from "react";
import ReturnExchangeForm from "./ReturnExchangeForm";

const ReturnExchangePolicy = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Return & Exchange Policy
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            At Smart ePrinting, we want every customer to feel confident when ordering from us. This Return & Exchange Policy outlines how returns, replacements, and exchanges work for purchases made through <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>. If you need help, our support team is always here to assist you.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. 30-Day Return Window */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. 30-Day Return Window</h2>
            <p className="text-gray-600 leading-relaxed">You may return eligible items within 30 days of delivery.</p>

            <p className="text-gray-600 font-medium">✔ Eligible Items</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Unopened printers</li>
              <li>Unopened ink & toner cartridges</li>
              <li>Printer accessories in original packaging</li>
              <li>Printing supplies in unused, undamaged condition</li>
            </ul>

            <p className="text-gray-600 font-medium">✘ Not Eligible</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Opened or used ink or toner</li>
              <li>Items damaged by the customer</li>
              <li>Missing packaging, accessories, or manuals</li>
              <li>Special-order or custom items</li>
              <li>Clearance or final sale merchandise</li>
              <li>Items returned after 30 days</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting reserves the right to decline returns that do not meet these criteria.
            </p>
          </div>

          {/* 2. How to Start a Return */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. How to Start a Return</h2>
            <p className="text-gray-600 leading-relaxed">
              To request a return, please use the Return Form below or email our support team directly at <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once submitted, we will review your request and provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>A Return Merchandise Authorization (RMA) number</li>
              <li>Return instructions</li>
              <li>A prepaid label (if applicable)</li>
            </ul>
          </div>



          <ReturnExchangeForm />

          {/* 4. Return Shipping Costs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Return Shipping Costs</h2>
            <p className="text-gray-600 font-medium">✔ Smart ePrinting covers return shipping for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Incorrect item shipped</li>
              <li>Defective or damaged items</li>
              <li>Missing items or parts</li>
            </ul>
            <p className="text-gray-600 font-medium">✘ Customer covers return shipping for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Change of mind</li>
              <li>Wrong item ordered</li>
              <li>Non-defective returns</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Estimated shipping costs: Small items: $7.99–$9.99, Printers: $14.99–$24.99 (varies by carrier/region)
            </p>
          </div>

          {/* 5. Exchanges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Exchanges</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not process direct exchanges. For exchanges, return the original product and place a new order for the desired item. This ensures faster processing and guaranteed availability.
            </p>
          </div>

          {/* 6. Returns Packaging Requirements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Returns Packaging Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Items must be returned in original packaging</li>
              <li>All manuals, cords, and accessories must be included</li>
              <li>The RMA number must be clearly marked on the package</li>
              <li>Items must be packaged securely to prevent transit damage</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting may decline a return if the returned item is damaged due to poor packaging or missing components.
            </p>
          </div>

          {/* 7. Refund Processing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Refund Processing</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Inspection takes 1–2 business days</li>
              <li>Refunds take 3–5 business days</li>
              <li>Refunds are issued to your original payment method</li>
              <li>Shipping fees are non-refundable unless we caused the issue</li>
              <li>There are no restocking fees for defective, damaged, or incorrect items</li>
            </ul>
          </div>

          {/* 8. Damaged or Defective Products */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Damaged or Defective Products</h2>
            <p className="text-gray-600 leading-relaxed">
              If your item arrives damaged or defective, notify us within 48 hours and include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Photos of the damaged item</li>
              <li>Photos of the packaging</li>
              <li>Your order number</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We will provide a replacement, a refund, and a free prepaid return label.
            </p>
          </div>

          {/* 9. Cancellations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Cancellations</h2>
            <p className="text-gray-600 leading-relaxed">
              Orders may be canceled before they ship. Once shipped, cancellations are no longer possible and the item must be returned after delivery. To request cancellation, email <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a>.
            </p>
          </div>

          {/* 10. Fraud Prevention & Abuse */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Fraud Prevention & Abuse</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to deny returns for tampered items, excessive returns, fraudulent claims, or abuse of policy guidelines. Legal action may be pursued for return fraud.
            </p>
          </div>

          {/* 11. Need Assistance? */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Need Assistance? Contact Us</h2>
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

export default ReturnExchangePolicy;
