import { Metadata } from 'next';
import Component from '@/components/ui/Checkout';

export const metadata: Metadata = {
  title: 'Secure Checkout | Wide Range Printers',
  description: 'Complete your purchase securely. Enter your shipping address and choose your payment method for your wide-range printers order.',
};

export default function Page() {
  return <Component />;
}
