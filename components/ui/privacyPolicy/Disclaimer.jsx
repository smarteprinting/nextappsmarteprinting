'use client';
import React from "react";

const Disclaimer = () => {
  return (
    <section className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Disclaimer
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Last Updated: January 31, 2026
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            This Disclaimer (“Disclaimer”) applies to the website <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>, operated by Smart ePrinting (“Company,” “we,” “our,” “us”). By accessing or using our Website, you acknowledge that you have read and agree to the terms outlined herein.
          </p>
          <p className="mt-2 text-gray-600 leading-relaxed">
            Smart ePrinting strives to provide accurate and trustworthy information. However, certain limitations, conditions, and responsibilities apply when using our Website and purchasing our products.
          </p>
        </div>

        <div className="space-y-10">

          {/* 1. Independent Retailer Disclosure */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">1. Independent Retailer Disclosure</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting is an independent online retailer. We are not affiliated with, endorsed by, or authorized by any printer or technology manufacturer, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>HP</li>
              <li>Canon</li>
              <li>Epson</li>
              <li>Brother</li>
              <li>Lexmark</li>
              <li>Xerox</li>
              <li>Any other brand referenced on our Website</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              All trademarks, brand names, product images, and model numbers belong to their respective owners. They are used solely for identification, compatibility, and descriptive purposes, and their appearance does not imply sponsorship or endorsement. This disclosure is provided to ensure transparency and proper trademark representation.
            </p>
          </div>

          {/* 2. Accuracy of Product Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">2. Accuracy of Product Information</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting makes every reasonable effort to ensure product listings are complete and accurate. However, we do not guarantee that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Product descriptions are error-free</li>
              <li>Images perfectly represent actual items</li>
              <li>Specifications remain unchanged after manufacturer updates</li>
              <li>Compatibility details are always current</li>
              <li>Color variations will not occur due to display differences</li>
              <li>Inventory availability is always accurate</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Manufacturers may update features or packaging without notice. We reserve the right to correct errors and update information at any time.
            </p>
          </div>

          {/* 3. No Technical or Professional Advice */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">3. No Technical or Professional Advice</h2>
            <p className="text-gray-600 leading-relaxed">
              All information provided on this Website, including product content and descriptions, is for general retail guidance only. Smart ePrinting does not provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Technical support</li>
              <li>Printer setup guidance</li>
              <li>Troubleshooting assistance</li>
              <li>Repair or maintenance advice</li>
              <li>Professional recommendations or expert evaluations</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              For technical help, customers should refer to the manufacturer’s documentation or official support channels.
            </p>
          </div>

          {/* 4. Third-Party Websites & External Content */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">4. Third-Party Websites & External Content</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Website may contain links to third-party websites for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Product documentation</li>
              <li>Shipping and tracking</li>
              <li>Payment processing</li>
              <li>Manufacturer information</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting does not control these external sites and is not responsible for content accuracy, privacy practices, security standards, or delivery/service performance. Users access third-party sites at their own discretion and should review their respective policies.
            </p>
          </div>

          {/* 5. Pricing, Availability & Listing Errors */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">5. Pricing, Availability & Listing Errors</h2>
            <p className="text-gray-600 leading-relaxed">
              While we aim to provide accurate pricing, errors may occasionally occur. Smart ePrinting reserves the right to correct pricing mistakes, modify product information, cancel or refuse orders affected by an error, and notify customers before order processing. We are not obligated to honor incorrect prices displayed due to typographical or system errors.
            </p>
          </div>

          {/* 6. Warranty Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">6. Warranty Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting does not manufacture the products sold on our Website. Any warranties provided are issued directly by the product manufacturer, not by us. Smart ePrinting:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Does not provide warranties or guarantees</li>
              <li>Does not control manufacturer warranty terms</li>
              <li>Is not responsible for warranty coverage decisions</li>
              <li>Will assist customers in locating manufacturer warranty information</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Warranty terms vary by brand, region, and product type.
            </p>
          </div>

          {/* 7. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Smart ePrinting is not liable for indirect, incidental, or consequential damages, loss of profits, data, or business, delays caused by carriers or suppliers, product misuse, incompatibility with customer equipment, website downtime, or listing errors. Our maximum liability is limited to the amount you paid for the product giving rise to the claim.
            </p>
          </div>

          {/* 8. Website Availability */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">8. Website Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting does not guarantee uninterrupted access to the Website. Availability may be impacted by maintenance, technical issues, network outages, hosting provider problems, or external conditions beyond our control. We strive to maintain uptime but cannot be held responsible for temporary service disruptions.
            </p>
          </div>

          {/* 9. Regulatory, Legal & Ethical Compliance */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">9. Regulatory, Legal & Ethical Compliance</h2>
            <p className="text-gray-600 leading-relaxed">
              This Disclaimer is designed to align with applicable U.S. and Canadian consumer protection laws, trademark and intellectual property requirements, e-commerce fair practice guidelines, and privacy/data protection regulations. We reserve the right to update this Disclaimer as laws evolve.
            </p>
          </div>

          {/* 10. Updates to This Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">10. Updates to This Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting may revise this Disclaimer at any time. When updated, the revised version will be posted with a new Last Updated date. Continued use of the Website after updates constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* 11. Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">11. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions or concerns related to this Disclaimer, contact:
            </p>
            <p className="text-gray-600 leading-relaxed">
              Smart ePrinting<br />
              17807 Lakecrest View Drive, #1205<br />
              Cypress, TX 77433<br />
              United States<br />
              📧 Email: <a href="mailto:support@smarteprinting.com" className="text-indigo-600 underline">support@smarteprinting.com</a><br />
              🌐 Website: <a href="https://www.smarteprinting.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">www.smarteprinting.com</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
