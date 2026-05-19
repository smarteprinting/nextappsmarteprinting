import { Metadata } from 'next';
import Component from '@/components/ui/order/ReturnsAndExchanges';

export const metadata: Metadata = {
  title: 'Request Returns & Exchanges | Wide Range Printers',
  description: 'Initiate a return request, check return validation guidelines, print shipping labels, and request product exchanges for printing supplies.',
};

export default function Page() {
  return <Component />;
}
