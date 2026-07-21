import { Metadata } from 'next';
import Component from '@/components/ui/productsCategories/all_InOne/AllInOne';

export const metadata: Metadata = {
  title: 'All-in-One Printers | Buy Multifunction Printers - Smart ePrinting',
  description: 'Shop the best all-in-one printers for home and office at Smart ePrinting. Print, scan, copy, and fax with reliable brands and flexible features.',
  keywords: ["all in one printers", "multifunction printers", "print scan copy fax", "buy printers online"],
  alternates: {
    canonical: 'https://smarteprinting.com/product-category/all-in-one-printers/',
  }
};

export default function Page() {
  return <Component />;
}
