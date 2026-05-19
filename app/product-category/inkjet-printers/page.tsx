import { Metadata } from 'next';
import Component from '@/components/ui/productsCategories/inkjetPrinters/InkjetPrinters';

export const metadata: Metadata = {
  title: 'Inkjet Printers | High-Quality Color Printers - Smart ePrinting',
  description: 'Find top-rated inkjet printers for stunning photos and vibrant documents. Shop affordable HP, Canon, and Epson color printers.',
  keywords: ["inkjet printers", "color printers", "photo printers", "HP inkjet", "Canon inkjet"],
  alternates: {
    canonical: 'https://smarteprinting.com/product-category/inkjet-printers/',
  }
};

export default function Page() {
  return <Component />;
}
