import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/CCPAPrivacyPolicy';

export const metadata: Metadata = {
  title: 'CCPA Privacy Policy Statement | Wide Range Printers',
  description: 'Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding their personal details and data privacy.',
};

export default function Page() {
  return <Component />;
}
