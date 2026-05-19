import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/ShippingPolicy';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Wide Range Printers',
  description: 'Read our comprehensive shipping policy detailing delivery speeds, shipping costs, order processing timelines, and tracking information.',
};

export default function Page() {
  return <Component />;
}
