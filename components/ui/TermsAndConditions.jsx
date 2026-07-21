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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Terms & Conditions
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            These Terms & Conditions (“Terms”) govern your access to and use of the Smart ePrinting website (www.smarteprinting.com) and the products and services offered by Smart ePrinting (“Company,” “we,” “us,” “our”). By using our Website, you agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Company Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Company Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433, United States<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a><br />
              Smart ePrinting is an independent online retailer of printers and printing supplies and is not affiliated with or authorized by any printer manufacturer.
            </p>
          </div>

          {/* 2. Eligibility to Use the Website */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-tighter">2. Eligibility to Use the Website</h2>
            <p className="text-gray-600 leading-relaxed">
              To use this Website, you must:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Be at least 18 years old</li>
              <li>Have legal capacity to enter binding agreements</li>
              <li>Use the Website only for lawful purposes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              You agree not to use the Website in ways that violate any laws, infringe intellectual property, or harm website operation.
            </p>
          </div>

          {/* 3. Independent Retailer Disclosure */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Independent Retailer Disclosure</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting is not associated with, endorsed by, or authorized by any printer manufacturer. Product names, logos, and trademarks are used solely for identification and compatibility. All trademarks belong to their respective owners.
            </p>
          </div>

          {/* 4. Website Content & Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Website Content & Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All Website content—including text, product descriptions, images, graphics, pricing, design, layout, and downloadable materials—is the intellectual property of Smart ePrinting or its content suppliers.
            </p>
            <p className="text-gray-600 leading-relaxed">You may not:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Copy, reproduce, distribute, or modify Website content</li>
              <li>Use automated scripts, bots, or scrapers</li>
              <li>Reverse-engineer or manipulate Website systems</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Limited permission is granted to use the Website for personal, non-commercial purchasing activities.
            </p>
          </div>

          {/* 5. Product Information & Availability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Product Information & Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to ensure product information is accurate. However:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Specifications may change without notice</li>
              <li>Actual colors may vary from images</li>
              <li>Print yield may differ depending on usage</li>
              <li>Availability depends on supplier inventory</li>
              <li>Occasional errors or omissions may occur</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting reserves the right to modify product listings at any time.
            </p>
          </div>

          {/* 6. Pricing & Payment Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Pricing & Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              All prices displayed on our Website are in USD unless otherwise stated. Prices may change without notice. You agree that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Your payment information is accurate</li>
              <li>You are authorized to use the provided payment method</li>
              <li>Orders are valid only after payment is successfully processed</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We may refuse or cancel any order if:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Payment fails</li>
              <li>Fraud is suspected</li>
              <li>Incorrect pricing is displayed due to error</li>
              <li>Item availability changes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              If an order is canceled after payment, we will issue a refund promptly.
            </p>
          </div>

          {/* 7. Order Acceptance & Cancellation */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Order Acceptance & Cancellation</h2>
            <p className="text-gray-600 leading-relaxed">
              Placing an order does not constitute acceptance. Smart ePrinting may:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Accept or reject any order</li>
              <li>Request additional verification</li>
              <li>Cancel orders before shipping</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Customers may cancel orders before shipment. Once shipped, orders must follow the Return & Refund Policy.
            </p>
          </div>

          {/* 8. Shipping & Delivery */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Shipping & Delivery</h2>
            <p className="text-gray-600 leading-relaxed">
              Shipping times are estimates—not guarantees. Delivery may vary due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Carrier delays</li>
              <li>Weather conditions</li>
              <li>Inventory changes</li>
              <li>Incorrect addresses</li>
              <li>Regional delivery limitations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Risk of loss transfers to the customer upon delivery to the carrier. Additional details are provided in the Shipping Policy.
            </p>
          </div>

          {/* 9. Return, Refund & Exchange Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Return, Refund & Exchange Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our full Return & Refund Policy outlines eligibility rules, timeframes, non-returnable items, condition requirements, and processing times. By purchasing from Smart ePrinting, you agree to the terms in our:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Return & Exchange Policy</li>
              <li>Refund & Return Policy</li>
            </ul>
          </div>

          {/* 10. Third-Party Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              We rely on third-party partners for payment processing, shipping and delivery, fraud prevention, email communication, and hosting/security. We are not responsible for the content, policies, or performance of third-party providers.
            </p>
          </div>

          {/* 11. Prohibited Activities */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Prohibited Activities</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Interfere with Website functionality</li>
              <li>Upload harmful code, malware, or scripts</li>
              <li>Attempt unauthorized access</li>
              <li>Use automated systems (bots, scrapers)</li>
              <li>Misuse trademarks or copyrighted material</li>
              <li>Provide false information</li>
              <li>Engage in fraudulent orders or chargebacks</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Violations may lead to account termination, cancellation of orders, and legal action.
            </p>
          </div>

          {/* 12. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Smart ePrinting is not liable for indirect, incidental, or consequential damages, loss of data, profits, or business, product misuse, delays outside our control, third-party actions, or website downtime/errors. Our total liability shall not exceed the amount paid for the product in question.
            </p>
          </div>

          {/* 13. No Warranty */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">13. No Warranty</h2>
            <p className="text-gray-600 leading-relaxed">
              The Website is provided “as-is” and “as-available.” We do not guarantee uninterrupted access, error-free operation, compatibility with all devices, or accuracy of third-party content. Product warranties are provided only by the product manufacturer.
            </p>
          </div>

          {/* 14. Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">14. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Website is governed by our <a href="/privacy-policy" className="text-indigo-600 underline">Privacy Policy</a>, which explains how we collect, use, and protect personal information.
            </p>
          </div>

          {/* 15. Governing Law & Dispute Resolution */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">15. Governing Law & Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of the United States and the State of Texas, without regard to conflict-of-law principles. Any disputes must first be resolved informally and then through state or federal courts located in Texas. You agree to the jurisdiction of these courts.
            </p>
          </div>

          {/* 16. Changes to These Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">16. Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may modify these Terms at any time. Updated Terms will be posted with a new Last Updated date. Continued use of the Website constitutes acceptance of revised Terms.
            </p>
          </div>

          {/* 17. Contact Us About These Terms */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">17. Contact Us About These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions or concerns regarding these Terms:<br />
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205, Cypress, TX 77433, United States<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
