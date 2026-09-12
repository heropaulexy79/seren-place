import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://serenplace.com"),
  title: {
    default: "Seren Place | Home Health Care in Charlotte & Union County NC",
    template: "%s | Seren Place Homecare Charlotte",
  },
  description: "Licensed in-home care & home health care services across Charlotte Metro & Union County, NC. Specialized in senior care, dementia care, respite care, and 24/7 companion care.",
  keywords: [
    "home health care Charlotte NC",
    "homecare agency Union County NC",
    "in home care Charlotte",
    "senior care Charlotte NC",
    "dementia care Union County",
    "Alzheimer's care Charlotte",
    "respite care Monroe NC",
    "senior home care Waxhaw NC",
    "caregivers Indian Trail NC",
  ],
  authors: [{ name: "Seren Place Homecare" }],
  creator: "Seren Place Homecare",
  publisher: "Seren Place Homecare",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serenplace.com",
    title: "Seren Place | Home Health Care in Charlotte & Union County NC",
    description: "Compassionate, high-quality home health care services across Charlotte Metro and Union County, NC.",
    siteName: "Seren Place Homecare",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Seren Place Homecare Charlotte",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Seren Place | Home Health Care in Charlotte & Union County NC",
    description: "Compassionate, high-quality home health care services across Charlotte Metro and Union County, NC.",
    images: ["/logo.png"],
    creator: "@serenplace",
  },
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
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import StructuredData from "@/components/seo/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body style={{ fontFamily: "var(--font-lato), sans-serif" }}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <StructuredData />
        <Navbar />
        <main id="main-content">{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}

