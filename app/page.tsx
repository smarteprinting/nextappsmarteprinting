import { Metadata } from 'next';
import { Suspense } from 'react';
import Component from '@/components/ui/home/HomeMain';

export const metadata: Metadata = {
  title: 'Smart ePrinting - Buy Affordable Printers, Ink & Toner Cartridges Online | Free Shipping | 2026',
  description: 'Shop Smart ePrinting for high-quality printers, ink cartridges, and toner at affordable prices. Inkjet, laser, and all-in-one printers for home and office. Free shipping across North America. Expert support & 30-day returns.',
  keywords: ["buy printers online", "printer cartridges", "toner cartridges", "inkjet printers", "laser printers", "all-in-one printers", "affordable printing supplies", "printer ink", "bulk ink cartridges", "printer toner",  "Canon ink", "printing solutions", "office printers", "home printers", "Smart ePrinting"],
  alternates: {
    canonical: 'https://smarteprinting.com/',
  }
};

export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 border-4 border-slate-100 border-t-slate-900 rounded-full animate-spin"></div>
      </div>
    }>
      <Component />
    </Suspense>
  );
}
