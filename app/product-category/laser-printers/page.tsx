import { Metadata } from 'next';
import Component from '@/components/ui/productsCategories/laserPrinters/LaserPrinters';

export const metadata: Metadata = {
  title: 'Laser Printers | Fast & Reliable Business Printers - Smart ePrinting',
  description: 'Upgrade your office with high-speed laser printers. Shop top brands like HP, Brother, and Canon for monochrome and color printing.',
  keywords: ["laser printers", "business printers", "monochrome laser", "color laser printer"],
  alternates: {
    canonical: 'https://smarteprinting.com/product-category/laser-printers/',
  }
};

export default function Page() {
  return <Component />;
}
