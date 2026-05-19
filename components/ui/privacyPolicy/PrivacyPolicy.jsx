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
          <h2 className="text-4xl sm:text-5xl text-gray-900  mb-4">
            Privacy Policy
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto my-4"></div>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-widest">PRIVACY POLICY</p>
          <p className="text-slate-700 mt-2 text-xs text-center">Last Updated: January 31, 2026</p>
        </div>

        <div className="space-y-6">

          {/* 1. Who We Are */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-gray-900">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting<br />
              Address: 17807 Lakecrest View Drive, #1205, Cypress, TX 77433<br />
              Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a><br />
              Smart ePrinting is an independent online retailer of printers and printing supplies. We are not affiliated with, authorized by, or endorsed by any printer manufacturer. All trademarks belong to their respective owners.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-100/30 border-2 border-slate-100 space-y-4 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect personal information only when necessary for secure order processing, customer communication, legal compliance, and essential website functionality.
            </p>

            <div className="pl-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">A. Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Billing and shipping address</li>
                <li>Phone number</li>
                <li>Payment details (processed securely by third-party payment processors)</li>
                <li>Order details and purchase history</li>
                <li>Account login information (if an account is created)</li>
                <li>Customer service communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">B. Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>IP address</li>
                <li>Device type and browser</li>
                <li>Operating system</li>
                <li>Session identifiers</li>
                <li>Essential website interaction logs</li>
                <li>Page access times</li>
                <li>Non-personal system diagnostics data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4">C. Sensitive Personal Information</h3>
              <p className="text-gray-600">We do not collect or store sensitive data such as SSN, financial account numbers, government IDs, health information, or biometrics.</p>
            </div>
          </div>

          {/* 3. How We Use Personal Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Personal Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We use your information strictly for legitimate business purposes:
            </p>

            <div className="pl-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">A. Order Processing & Fulfillment</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Processing payments</li>
                <li>Confirming orders</li>
                <li>Shipping products</li>
                <li>Sending order and delivery updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">B. Customer Support</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Responding to inquiries</li>
                <li>Handling return or cancellation requests</li>
                <li>Providing order status updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">C. Security & Fraud Prevention</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Detecting suspicious activity</li>
                <li>Protecting accounts from unauthorized access</li>
                <li>Maintaining secure transactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">D. Website Functionality</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Operating shopping cart and checkout</li>
                <li>Storing essential user preferences</li>
                <li>Ensuring website usability</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">E. Legal Compliance</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Handling lawful requests</li>
                <li>Meeting regulatory obligations</li>
                <li>Maintaining transaction records</li>
              </ul>

              <p className="text-gray-600 mt-2 font-medium">
                We Do NOT Use Personal Information For:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Behavioral or interest-based advertising</li>
                <li>Remarketing or retargeting campaigns</li>
                <li>Selling data to third parties</li>
                <li>Creating profiles for marketing</li>
                <li>Cross-site tracking</li>
              </ul>
            </div>
          </div>

          {/* 4. Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Data Sharing & Third-Party Service Providers</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or share personal information for advertising, marketing, or data brokerage. We only share information with essential service partners under strict confidentiality.
            </p>

            <div className="pl-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">A. Service Providers</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Payment processors</li>
                <li>Shipping carriers</li>
                <li>Email service providers</li>
                <li>Web hosting and security companies</li>
                <li>Fraud-prevention systems</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-2">B. Legal Requirements</h3>
              <p className="text-gray-600">
                We may disclose information if required by law, subpoena, or regulatory authority.
              </p>
            </div>
          </div>

          {/* 5. Cookies & Tracking */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Cookies & Tracking Technologies</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting uses only essential and functional cookies. We do NOT use:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Advertising cookies</li>
              <li>Retargeting cookies</li>
              <li>Cross-site tracking cookies</li>
              <li>Social media tracking</li>
              <li>Third-party analytics cookies</li>
            </ul>
            <p className="text-gray-600">You may adjust cookie preferences at any time via the cookie consent banner or browser settings.</p>
          </div>

          {/* 6. Data Storage & Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Data Storage & Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              Data may be processed and stored in secure servers located in the United States and other regions where service providers operate under strict protection controls. We retain personal information only as long as necessary to fulfill orders, support customer service, meet legal and accounting obligations, and resolve disputes. When data is no longer needed, we permanently delete or anonymize it.
            </p>
          </div>

          {/* 7. Your Privacy Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Your Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your region, you may request access, correction, deletion, restriction of processing, data portability, withdrawal of consent, or opt-out from non-essential communications. Identity verification may be required. Submit requests via email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a>.
            </p>
          </div>

          {/* 8. CCPA/CPRA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. CCPA/CPRA (California Residents)</h2>
            <p className="text-gray-600 leading-relaxed">
              California residents have special rights including right to know, delete, correct, opt-out, and non-discrimination. Smart ePrinting does NOT sell or share personal information. A full CCPA page is available under “Do Not Sell or Share My Personal Information”.
            </p>
          </div>

          {/* 9-11: Children's Privacy, DNT, Intl Compliance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Children’s Privacy</h2>
            <p className="text-gray-600">Our Website is not intended for children under 13. We do not knowingly collect children’s personal information. If discovered, we delete it promptly.</p>

            <h2 className="text-2xl font-semibold text-gray-900">10. Do Not Track Signals</h2>
            <p className="text-gray-600">Our Website does not respond to Do Not Track browser signals but honors privacy requests submitted directly to us.</p>

            <h2 className="text-2xl font-semibold text-gray-900">11. International Privacy Compliance</h2>
            <p className="text-gray-600">Where applicable, we follow GDPR-aligned principles: data minimization, purpose limitation, accuracy, storage limitation, integrity, and confidentiality.</p>
          </div>

          {/* 12-13: Changes & Contact */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">We may update this policy periodically. The “Last Updated” date reflects the latest revision. Continued use of our Website indicates acceptance of updated terms.</p>

            <h2 className="text-2xl font-semibold text-gray-900">13. Contact Us</h2>
            <p className="text-gray-600">
              For questions about this Privacy Policy:<br />
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

export default PrivacyPolicy;

