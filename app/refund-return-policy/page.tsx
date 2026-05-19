import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/RefundReturnPolicy';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | Wide Range Printers',
  description: 'Need to return a printer? Learn about our 30-day refund and return policy for premium hardware and original cartridges.',
};

export default function Page() {
  return <Component />;
}
