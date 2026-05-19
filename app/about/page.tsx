import { Metadata } from 'next';
import Component from '@/components/ui/about/AboutMain';

export const metadata: Metadata = {
  title: 'About Us | Smart ePrinting - Your Trusted Printer Retailer',
  description: 'Learn about Smart ePrinting, your trusted source for premium printers, ink, and toner. Discover our commitment to quality.',
  keywords: ["about smart eprinting", "trusted retailer", "who we are", "our mission"],
  alternates: {
    canonical: 'https://smarteprinting.com/about/',
  }
};

export default function Page() {
  return <Component />;
}
