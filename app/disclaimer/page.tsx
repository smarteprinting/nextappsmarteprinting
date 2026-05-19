import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/Disclaimer';

export const metadata: Metadata = {
  title: 'Website & Service Disclaimer | Wide Range Printers',
  description: 'Legal disclaimer regarding the accuracy, completeness, or reliability of any information, products, or services listed on Wide Range Printers.',
};

export default function Page() {
  return <Component />;
}
