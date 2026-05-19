import { Metadata } from 'next';
import Component from '@/components/ui/Cart';

export const metadata: Metadata = {
  title: 'Your Shopping Cart | Wide Range Printers',
  description: 'Manage items in your cart, adjust quantities, or proceed to our secure checkout for high-performance printers and original ink/toner cartridges.',
};

export default function Page() {
  return <Component />;
}
