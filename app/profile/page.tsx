import { Metadata } from 'next';
import Component from '@/components/ui/profile/ProfilePage';

export const metadata: Metadata = {
  title: 'My Profile & Account Settings | Wide Range Printers',
  description: 'Manage your personal details, email address, password, shipping addresses, and review order history logs easily on Wide Range Printers.',
};

export default function Page() {
  return <Component />;
}
