import { Metadata } from 'next';
import Component from '@/components/ui/faq/FAQMain';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Wide Range Printers',
  description: 'Find instant answers to common questions about our high-quality printer inventory, ordering processes, shipping methods, returns, and support.',
};

export default function Page() {
  return <Component />;
}
