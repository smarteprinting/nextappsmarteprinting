import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://smarteprinting.com'),
  title: {
    default: "Smart ePrinting - Buy Affordable Printers, Ink & Toner Cartridges Online | Free Shipping | 2026",
    template: "%s | Smart ePrinting"
  },
  description: "Shop Smart ePrinting for high-quality printers, ink cartridges, and toner at affordable prices. Inkjet, laser, and all-in-one printers for home and office. Free shipping across North America. Expert support & 30-day returns.",
  keywords: ["buy printers online", "printer cartridges", "toner cartridges", "inkjet printers", "laser printers", "all-in-one printers", "affordable printing supplies", "printer ink", "bulk ink cartridges", "printer toner", "Canon ink", "printing solutions", "office printers", "home printers", "Smart ePrinting"],
  authors: [{ name: "Smart ePrinting" }],
  creator: "Smart ePrinting",
  publisher: "Smart ePrinting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'en-CA': '/',
    },
  },
  openGraph: {
    type: "website",
    title: "Smart ePrinting - Premium Printers & Printing Supplies | Best Prices",
    description: "Discover affordable, high-quality printers and printing supplies. Shop inkjet, laser, and all-in-one printers with free shipping and expert customer support. 30-day guarantee.",
    url: "https://smarteprinting.com/",
    siteName: "Smart ePrinting",
    images: [
      {
        url: "https://smarteprinting.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart ePrinting Premium Printers & Supplies",
      }
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart ePrinting - Premium Printers & Printing Supplies",
    description: "Shop affordable, high-quality printers and printing supplies online. Inkjet, laser, all-in-one printers with free shipping across North America.",
    images: ["https://smarteprinting.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "language": "English",
    "distribution": "global",
    "revisit-after": "7 days",
    "msapplication-TileColor": "#f97316",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "application-name": "Smart ePrinting",
    "apple-mobile-web-app-title": "Smart ePrinting",
    "format-detection": "telephone=no",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <ScrollToTop />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
