import { Metadata } from 'next';
import Component from '@/components/ui/order/TrackOrder';

export const metadata: Metadata = {
  title: 'Track Your Order | Wide Range Printers',
  description: 'Enter your order number or tracking number to view the real-time shipping and delivery status of your printing hardware purchases.',
};

export default function Page() {
  return <Component />;
}
