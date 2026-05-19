import { Metadata } from 'next';
import Component from '@/components/ui/productsCategories/inkToner/InkToner';

export const metadata: Metadata = {
  title: 'Ink & Toner Cartridges | Affordable Printer Supplies - Smart ePrinting',
  description: 'Buy high-quality, affordable ink and toner cartridges for all major printer brands. Save on HP, Canon, Brother, and Epson replacements.',
  keywords: ["ink cartridges", "toner cartridges", "printer ink", "printer toner", "affordable printer supplies"],
  alternates: {
    canonical: 'https://smarteprinting.com/product-category/ink-toner/',
  }
};

export default function Page() {
  return <Component />;
}
