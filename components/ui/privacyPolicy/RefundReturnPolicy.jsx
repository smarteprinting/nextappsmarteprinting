'use client';
import React from "react";

const RefundReturnPolicy = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Refund & Return Policy — Smart ePrinting
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            At Smart ePrinting, customer satisfaction is important to us. This Refund & Return Policy explains your rights, eligibility requirements, and our procedures for handling returns, refunds, and defective product claims. By purchasing from our Website (<a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>), you agree to the terms below.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. General Return Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. General Return Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer a 30-day return window from the date of delivery for eligible items. Returns must meet all conditions stated in this Policy.
            </p>
            <p className="text-gray-600 font-medium">✔ Eligible items must be:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Unused, unopened, and in original packaging</li>
              <li>In resellable condition</li>
              <li>Returned with all accessories, manuals, and documentation</li>
            </ul>
            <p className="text-gray-600 font-medium">✘ Items not eligible for return include:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Opened or used ink or toner cartridges</li>
              <li>Products damaged due to misuse or improper handling</li>
              <li>Items missing accessories or original packaging</li>
              <li>Customized or special-order items</li>
              <li>Clearance or final sale items</li>
              <li>Products returned after 30 days</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting reserves the right to reject returns that do not meet these criteria.
            </p>
          </div>

          {/* 2. Return Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Return Process</h2>
            <p className="text-gray-600 leading-relaxed">To initiate a return, follow these steps:</p>

            <div className="space-y-2">
              <p className="text-gray-600 font-medium">Step 1 – Submit a Return Request</p>
              <p className="text-gray-600">Email our customer support team at <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a> and include:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Full name</li>
                <li>Order number</li>
                <li>Item(s) you want to return</li>
                <li>Condition of the item</li>
                <li>Reason for return</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600 font-medium">Step 2 – Receive Return Authorization</p>
              <p className="text-gray-600">If your item qualifies, we will issue:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>A Return Merchandise Authorization (RMA) number</li>
                <li>Return instructions</li>
                <li>A prepaid return label (only for defective items or incorrect shipments)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600 font-medium">Step 3 – Ship the Item Back</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Pack items securely in original packaging</li>
                <li>Include all accessories and documentation</li>
                <li>Clearly write the RMA number on the package</li>
                <li>Ship within 7 days of receiving approval</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600 font-medium">Step 4 – Inspection & Processing</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Inspection time: 1–2 business days</li>
                <li>Refund processing: 3–5 business days</li>
                <li>Refund will be issued to the original payment method only</li>
              </ul>
            </div>
          </div>

          {/* 3. Refund Types & Timelines */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Refund Types & Timelines</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 font-medium text-gray-900 border">Payment Method</th>
                    <th className="px-4 py-2 font-medium text-gray-900 border">Refund Timeline</th>
                    <th className="px-4 py-2 font-medium text-gray-900 border">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 border">Credit Card</td>
                    <td className="px-4 py-2 border">3–5 business days</td>
                    <td className="px-4 py-2 border">Bank may take 1–2 cycles to post</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Debit Card</td>
                    <td className="px-4 py-2 border">3–5 business days</td>
                    <td className="px-4 py-2 border">Varies by bank</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">PayPal</td>
                    <td className="px-4 py-2 border">1–3 business days</td>
                    <td className="px-4 py-2 border">Fastest processing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Gift Card/Credit</td>
                    <td className="px-4 py-2 border">1–2 business days</td>
                    <td className="px-4 py-2 border">Store credit only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 mt-2">
              Shipping charges are non-refundable, except when the item is defective or incorrect.
            </p>
          </div>

          {/* 4. Defective, Damaged, or Incorrect Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Defective, Damaged, or Incorrect Items</h2>
            <p className="text-gray-600 leading-relaxed">
              If you receive an item that is damaged, defective, incorrect, or missing parts, you must notify us within 48 hours of delivery. We will require:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Photos of the product</li>
              <li>Photos of packaging</li>
              <li>Order number and details</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              If confirmed, we will offer a replacement, refund, or return label at no cost to you. There are no restocking fees for defective or incorrect items.
            </p>
          </div>

          {/* 5. Exchanges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Exchanges</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting does not offer direct product exchanges due to inventory limitations. To replace an item, return the original item following our policy and place a new order for the desired product.
            </p>
          </div>

          {/* 6. Return Shipping Costs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Return Shipping Costs</h2>
            <p className="text-gray-600 leading-relaxed font-medium">We cover return shipping for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Incorrect item shipped</li>
              <li>Defective or damaged items</li>
              <li>Missing or incomplete items</li>
              <li>Items damaged in transit</li>
            </ul>
            <p className="text-gray-600 leading-relaxed font-medium">Customer is responsible for return shipping for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Change of mind</li>
              <li>Ordered the wrong item</li>
              <li>No longer needed</li>
              <li>Non-defective items</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Estimated costs: Small items $7.99–$9.99, Printers $14.99–$24.99 (varies by carrier and region)
            </p>
          </div>

          {/* 7. Order Cancellations */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Order Cancellations</h2>
            <p className="text-gray-600 leading-relaxed">
              Orders may be canceled before shipping. Once shipped, the order must follow the return process. To request cancellation, email <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a> with your order number and reason. If successful, a refund will be issued immediately.
            </p>
          </div>

          {/* 8. International Orders */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. International Orders</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting currently ships primarily within the United States and Canada. For international orders (if applicable), the customer covers return shipping, customs and duties are non-refundable, and processing may take 5–10 additional business days.
            </p>
          </div>

          {/* 9. Non-Returnable Items (Strict) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Non-Returnable Items (Strict)</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Opened ink or toner cartridges</li>
              <li>Used printer consumables</li>
              <li>Items damaged due to customer misuse</li>
              <li>Missing serial number or tampered items</li>
              <li>Items returned without original packaging</li>
              <li>Special order items</li>
              <li>Clearance or final-sale products</li>
            </ul>
          </div>

          {/* 10. Fraud Prevention & Abuse Protection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Fraud Prevention & Abuse Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to reject returns or refunds in cases of suspected fraud, return abuse, excessive return patterns, or inconsistent item condition. Legal action may be taken in cases of return fraud.
            </p>
          </div>

          {/* 11. Our Right to Modify This Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Our Right to Modify This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting may update this Policy from time to time to reflect changes in business operations, legal requirements, or improvements to customer experience. The “Last Updated” date indicates the latest revision.
            </p>
          </div>

          {/* 12. Contact Us for Return Assistance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Contact Us for Return Assistance</h2>
            <p className="text-gray-600 leading-relaxed">
              For return questions or support:<br />
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433, United States<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our customer support team will assist you promptly and professionally.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RefundReturnPolicy;
