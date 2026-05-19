import { Metadata } from 'next';
import Component from '@/components/ui/TermsAndConditions';

export const metadata: Metadata = {
  title: 'Terms and Conditions of Service | Wide Range Printers',
  description: 'Review our terms and conditions for using our website, placing orders, licensing software, and purchasing premium printers.',
};

export default function Page() {
  return <Component />;
}
