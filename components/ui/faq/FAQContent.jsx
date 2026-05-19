'use client';
import React, { useState } from "react";
const heroImage = "/assets/printer.webp";

const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "Product & Compatibility Questions",
      questions: [
        {
          q: "What types of products does Smart ePrinting offer?",
          a: "We offer a wide selection of printers, ink cartridges, toner cartridges, and printing supplies for home and office needs."
        },
        {
          q: "How do I know if a cartridge is compatible with my printer?",
          a: "Each product page includes compatibility details based on manufacturer specifications. You can also check your printer model or user manual before purchasing."
        },
        {
          q: "Are the printers wireless or mobile-ready?",
          a: "Many modern printers include wireless features such as Wi-Fi and mobile printing. Availability depends on the specific model. Each product listing includes the features provided by the manufacturer."
        },
        {
          q: "What is page yield?",
          a: "Page yield is the estimated number of pages a cartridge may print based on standardized testing. Actual results may vary depending on print settings and usage patterns."
        },
        {
          q: "Do you provide product recommendations?",
          a: "Yes. Our support team can help answer questions and provide general guidance based on your printing needs."
        }
      ]
    },
    {
      category: "Ordering & Payments",
      questions: [
        {
          q: "How do I place an order?",
          a: "Simply add items to your cart, proceed to checkout, and complete your order using our secure payment process."
        },
        {
          q: "What payment methods are accepted?",
          a: "We accept major payment methods shown at checkout. All payments are processed securely through trusted third-party providers."
        },
        {
          q: "Can I modify or cancel my order?",
          a: "Orders can be modified or canceled before they are shipped. Contact us as soon as possible with your order number."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "Do you ship across the United States?",
          a: "Yes, we ship to all U.S. states. Shipping to Canada may be available depending on the product."
        },
        {
          q: "How long does delivery take?",
          a: "Delivery times vary by location and shipping method. Estimated delivery dates are shown at checkout. Carrier delays or weather conditions may affect actual delivery times."
        },
        {
          q: "Will I receive tracking information?",
          a: "Yes. Once your order ships, you will receive an email with a tracking link."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "Eligible items may be returned within the specified return window. Products must be unused, unopened, and in original packaging. Please see our Refund & Return Policy for details."
        },
        {
          q: "How do I start a return?",
          a: "Email us at support@smarteprinting.com with your order number and return request. We will provide instructions and next steps."
        },
        {
          q: "How long does it take to receive a refund?",
          a: "Refunds are typically processed within 3–5 business days after the returned item is received and inspected. Bank processing times may vary."
        }
      ]
    },
    {
      category: "Privacy & Account Questions",
      questions: [
        {
          q: "Do I need an account to place an order?",
          a: "No. You can checkout as a guest. Creating an account allows you to view order history and save basic information for future purchases."
        },
        {
          q: "How is my information protected?",
          a: "We use secure checkout systems and industry-standard practices to protect your information. You can learn more in our Privacy Policy."
        }
      ]
    },
    {
      category: "Brand Independence",
      questions: [
        {
          q: "Is Smart ePrinting affiliated with any printer brands?",
          a: "No. Smart ePrinting is an independent online retailer. All product names, logos, and trademarks belong to their respective owners and are used solely for identification and compatibility purposes."
        }
      ]
    },
    {
      category: "Support & Assistance",
      questions: [
        {
          q: "What can customer support assist with?",
          a: "Our team can help with: Product inquiries, Order status updates, Return requests, General shopping support"
        },
        {
          q: "How can I contact customer support?",
          a: "You can reach us at: 📧 Email: support@smarteprinting.com 🌐 Website: www.smarteprinting.com"
        }
      ]
    }
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src={heroImage}
              alt="Smart ePrinting FAQ"
              className="w-full max-w-sm mx-auto h-40 object-cover rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4 uppercase">
            FAQs – Smart ePrinting
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            Find quick answers to common questions about our products, orders, shipping, and general shopping experience. If you need help, our team is here to assist you with product inquiries and order-related questions.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-50 border-b border-gray-200 p-4">
                <h2 className="text-lg font-semibold text-blue-900">
                  {section.category}
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {section.questions.map((faq, faqIndex) => {
                  const globalIndex = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div key={faqIndex} className="p-4">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left flex justify-between items-center hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <h3 className="text-base font-medium text-gray-900 pr-4">
                          {faq.q}
                        </h3>
                        <span className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            Still Need Help?
          </h3>
          <p className="text-gray-700 mb-4">
            Our support team is here to help with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700">
            <div className="flex items-center">
              <span className="mr-2 text-lg">📧</span>
              <span className="font-medium">support@smarteprinting.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-lg">🌐</span>
              <span className="font-medium">www.smarteprinting.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQContent;