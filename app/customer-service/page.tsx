import { Metadata } from 'next';
import Component from '@/components/ui/customerService/CustomerMain';

export const metadata: Metadata = {
  title: 'Customer Service & Support | Smart ePrinting',
  description: 'Need help? Contact Smart ePrinting customer service for support with orders, returns, and printer troubleshooting.',
  keywords: ["customer service", "contact us", "printer support", "help center"],
  alternates: {
    canonical: 'https://smarteprinting.com/customer-service/',
  }
};

export default function Page() {
  return <Component />;
}
