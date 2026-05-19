import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | Wide Range Printers',
  description: 'Understand how we use cookies and tracking technologies to personalize and enhance your shopping experience at Wide Range Printers.',
};

export default function Page() {
  return <Component />;
}
