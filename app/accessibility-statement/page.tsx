import { Metadata } from 'next';
import Component from '@/components/ui/privacyPolicy/AccessibilityStatement';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Wide Range Printers',
  description: 'Wide Range Printers is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone.',
};

export default function Page() {
  return <Component />;
}
