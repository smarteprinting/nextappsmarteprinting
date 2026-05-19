import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wide Range Printers',
  description: 'Understand how Wide Range Printers collects, uses, protects, and discloses personal information when you browse our site or purchase printers.',
};

export default function Page() {
  return <Component />;
}
