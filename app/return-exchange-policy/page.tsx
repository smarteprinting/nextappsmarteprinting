import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/ReturnExchangePolicy';

export const metadata: Metadata = {
  title: 'Return & Exchange Policy | Wide Range Printers',
  description: 'Need to make a return or exchange? Learn about our terms, eligible printer states, packaging standards, and processing times.',
};

export default function Page() {
  return <Component />;
}
