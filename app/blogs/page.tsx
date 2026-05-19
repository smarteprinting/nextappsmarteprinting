import { Metadata } from 'next';
import Component from '@/components/ui/blogs/BlogsMain';

export const metadata: Metadata = {
  title: 'Smart ePrinting Blog | Printer Reviews & Tips',
  description: 'Read the official Smart ePrinting blog for expert printer reviews, cost-saving hardware tips, printhead cleaning guides, and daily support tutorials.',
  keywords: ["printer reviews", "printing tips", "smart eprinting blog", "printer guide"],
  alternates: {
    canonical: 'https://smarteprinting.com/blogs/',
  }
};

export default function Page() {
  return <Component />;
}
