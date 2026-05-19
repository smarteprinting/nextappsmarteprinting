import { Metadata } from 'next';
import Component from '@/components/ui/order/OrderDetails';

export const metadata: Metadata = {
    title: 'Order Details | Wide Range Printers',
    description: 'View receipt details, order items breakdown, shipment status, and payment summary for your Wide Range Printers purchase.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return <Component />;
}
