'use client';
import React from "react";

const CCPAPrivacyPolicy = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Do Not Sell or Share My Personal Information (CCPA/CPRA)
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            This page is provided in accordance with the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These laws give California residents specific rights regarding their personal information, including the right to opt out of its sale or sharing. Smart ePrinting does not sell or share personal information for monetary or marketing purposes, but this page ensures full transparency and allows you to exercise your privacy rights if desired.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Our Commitment to Your Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Our Commitment to Your Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting is committed to maintaining high standards of data privacy, transparency, and security. We strictly limit the collection and use of your personal information to essential business functions such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Processing orders</li>
              <li>Shipping products</li>
              <li>Customer communication</li>
              <li>Website functionality</li>
              <li>Fraud prevention</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, rent, or share personal information with third parties for advertising or behavioral tracking.
            </p>
          </div>

          {/* 2. Definitions Under CCPA/CPRA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Definitions Under CCPA/CPRA</h2>
            <p className="text-gray-600 leading-relaxed">
              Understanding key definitions:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>“Sell”</strong>: Transfer of personal information to a third party for value (monetary or otherwise).</li>
              <li><strong>“Share”</strong>: Transfer of personal information to a third party for cross-context behavioral advertising.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Important Statement: Smart ePrinting does NOT sell or share your personal information as defined under CCPA/CPRA. We do not use cross-site tracking, profiling, third-party marketing cookies, or advertising pixels.
            </p>
          </div>

          {/* 3. Your CCPA/CPRA Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Your CCPA/CPRA Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              California residents have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>✔ <strong>Right to Know:</strong> Request what personal information we collect, use, or disclose.</li>
              <li>✔ <strong>Right to Delete:</strong> Request deletion of personal information (with legal exceptions).</li>
              <li>✔ <strong>Right to Correct:</strong> Request correction of inaccurate information.</li>
              <li>✔ <strong>Right to Opt-Out:</strong> Opt out of the “sale” or “sharing” of personal information.</li>
              <li>✔ <strong>Right to Limit Use of Sensitive Personal Information:</strong> We do not collect or use sensitive personal information.</li>
              <li>✔ <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
            </ul>
          </div>

          {/* 4. How to Submit a Do Not Sell/Share Request */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. How to Submit a Do Not Sell/Share Request</h2>
            <p className="text-gray-600 leading-relaxed">
              Even though we do not sell or share personal information, you may submit a request:
            </p>
            <p className="text-gray-600 leading-relaxed">
              📧 Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              Subject Line: CCPA Privacy Request
            </p>
            <p className="text-gray-600 leading-relaxed">
              Include: Full name, Email address used to place the order, and whether you request an opt-out, deletion, correction, or access request. We will respond within the legally required timeframe (typically within 45 days).
            </p>
          </div>

          {/* 5. Verification Process */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Verification Process</h2>
            <p className="text-gray-600 leading-relaxed">
              To protect your data, we may verify your identity before fulfilling certain requests. Verification may involve:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Confirming your email address</li>
              <li>Confirming recent order details</li>
              <li>Matching information stored in our system</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We will never request sensitive information such as Social Security numbers, full credit card numbers, or government IDs.
            </p>
          </div>

          {/* 6. Authorized Agents */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Authorized Agents</h2>
            <p className="text-gray-600 leading-relaxed">
              You may assign an authorized agent to submit a request on your behalf. The agent must provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Written authorization</li>
              <li>Proof of their identity</li>
              <li>Proof of your identity (for verification)</li>
            </ul>
          </div>

          {/* 7. Categories of Personal Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Categories of Personal Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect the following categories for legitimate business purposes only:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>✔ Identifiers: Name, email, phone number, address</li>
              <li>✔ Transaction Information: Order history, items purchased</li>
              <li>✔ Device Information: Browser type, device type, basic session data</li>
              <li>✔ Payment Information: Processed securely by third-party payment processors (we do not store full card numbers)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not collect or process sensitive personal information.
            </p>
          </div>

          {/* 8. Categories of Information We Share (Operational Only) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Categories of Information We Share (Operational Only)</h2>
            <p className="text-gray-600 leading-relaxed">
              We only share personal information with trusted service providers for essential functions:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Payment processors</li>
              <li>Shipping carriers</li>
              <li>Security/fraud prevention tools</li>
              <li>Email service providers</li>
              <li>IT/hosting providers</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These service providers may only use information to perform services on our behalf and are contractually prohibited from using it for advertising.
            </p>
          </div>

          {/* 9. No Sale or Sharing Statement (Required) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. No Sale or Sharing Statement (Required)</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>✓ Smart ePrinting does NOT sell personal information.</li>
              <li>✓ Smart ePrinting does NOT share personal information for advertising.</li>
              <li>✓ Smart ePrinting has not sold or shared personal information in the past 12 months.</li>
              <li>✓ Smart ePrinting does not knowingly collect or sell the information of minors under 16.</li>
            </ul>
          </div>

          {/* 10. Data Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain personal information only as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Complete orders</li>
              <li>Maintain transaction records</li>
              <li>Support customer service</li>
              <li>Meet legal obligations</li>
              <li>Prevent fraud</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              When information is no longer needed, it is securely deleted or anonymized.
            </p>
          </div>

          {/* 11. Updates to This CCPA/CPRA Notice */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Updates to This CCPA/CPRA Notice</h2>
            <p className="text-gray-600 leading-relaxed">
              We may revise this page to reflect changes in laws or our data practices. The “Last Updated” date will always indicate the latest version.
            </p>
          </div>

          {/* 12. Contact Us Regarding Your Privacy Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">12. Contact Us Regarding Your Privacy Rights</h2>
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

export default CCPAPrivacyPolicy;
