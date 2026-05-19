'use client';
import React from "react";

const CookiePolicy = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Cookie Policy
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            This Cookie Policy explains how Smart ePrinting (“we,” “us,” “our”) uses cookies and similar technologies on <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>. By continuing to use our Website, you acknowledge and agree to the use of cookies as described below. You may manage your preferences at any time through our Cookie Consent Banner.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Use of Cookie Consent Banner */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Use of Cookie Consent Banner</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Website displays a Cookie Consent Banner to provide transparency and user control. Through this banner, you may:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Allow only essential cookies</li>
              <li>Adjust or withdraw consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              This is required for compliance with applicable privacy laws and industry standards.
            </p>
          </div>

          {/* 2. What Are Cookies? */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small data files stored on your device when you visit our Website. They help ensure secure, stable, and efficient operation of key website features. Cookies used on this Website do not collect personally sensitive information.
            </p>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. Types of Cookies We Use</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting uses only the following categories of cookies:
            </p>

            {/* A. Essential Cookies */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">A. Essential Cookies (Strictly Necessary)</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies are required for the Website to function properly. Without them, core features such as checkout and account login would not work. They are used for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Shopping cart functionality</li>
                <li>Checkout and payment processing</li>
                <li>Website security and fraud prevention</li>
                <li>Load balancing and uptime stability</li>
                <li>Basic session management</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Essential cookies do not require user consent but are disclosed for transparency.
              </p>
            </div>

            {/* B. Functional Cookies */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">B. Functional Cookies (Optional)</h3>
              <p className="text-gray-600 leading-relaxed">
                These cookies improve your shopping experience by remembering preferences such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Language and region selection</li>
                <li>Display options</li>
                <li>Basic user settings</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                They do not track browsing across other websites and do not collect behavioral data. Functional cookies are activated only if you consent through the Cookie Banner.
              </p>
            </div>
          </div>

          {/* 4. How Smart ePrinting Uses Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. How Smart ePrinting Uses Cookies</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Secure checkout</li>
              <li>Cart retention</li>
              <li>Order processing</li>
              <li>Website reliability and performance</li>
              <li>Fraud detection and prevention</li>
              <li>Basic user convenience</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not use cookies for tracking users across sites, profiling, or targeted advertising.
            </p>
          </div>

          {/* 5. Third-Party Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting does not allow third-party advertising, retargeting, or behavioral cookies on our Website. However, certain trusted service providers may use essential, security-related cookies when necessary, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Payment processors</li>
              <li>Hosting providers</li>
              <li>Security and firewall systems</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These cookies support secure transactions and compliance with fraud-prevention standards. We do not permit any third-party to use cookie data for their own marketing or analytics purposes.
            </p>
          </div>

          {/* 6. Managing & Disabling Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Managing & Disabling Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              You can manage your cookie preferences in two ways:
            </p>

            {/* A. Cookie Consent Banner */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">A. Through Our Cookie Consent Banner</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Accept all</li>
                <li>Reject non-essential</li>
                <li>Change preferences anytime</li>
              </ul>
            </div>

            {/* B. Browser Settings */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">B. Through Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed">
                You may block or delete cookies at any time. Common browser paths:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Chrome: Settings → Privacy & Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Site Permissions → Cookies</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Disabling essential cookies may affect checkout, cart functionality, account access, and website stability.
              </p>
            </div>
          </div>

          {/* 7. Data Privacy & Cookies */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Data Privacy & Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Any personal information collected through cookies is processed in accordance with our Privacy Policy. Key commitments:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>We do not sell personal information</li>
              <li>We do not share cookie data for advertising</li>
              <li>We do not use analytics or marketing cookies</li>
              <li>We protect all cookie-based information with appropriate security controls</li>
            </ul>
          </div>

          {/* 8. Changes to This Cookie Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Changes to This Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy to reflect changes in legal requirements, updates to our cookie banner, or website enhancements. The “Last Updated” date indicates the latest version.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact Us</h2>
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

export default CookiePolicy
