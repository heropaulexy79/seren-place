import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seren Place | Premium Home Healthcare Agency",
  description: "Experience premium, compassionate, and family-centered home care. Specialized in senior care, dementia care, and companionship to ensure peace of mind for your loved ones always.",
  keywords: ["home healthcare", "senior care", "dementia care", "Alzheimer's care", "in-home care", "respite care"],
  authors: [{ name: "Seren Place" }],
  creator: "Seren Place",
  publisher: "Seren Place",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serenplace.com",
    title: "Seren Place | Premium Home Healthcare Agency",
    description: "Experience premium, compassionate, and family-centered home care. Specialized in senior care, dementia care, and companionship.",
    siteName: "Seren Place",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seren Place - Compassionate care for your loved ones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seren Place | Premium Home Healthcare Agency",
    description: "Experience premium, compassionate, and family-centered home care.",
    images: ["/og-image.png"],
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
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

