import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://serenplace.com"),
  title: "Seren Place | Premium Homecare Agency",
  description: "Experience premium, compassionate, and family-centered home care. Specialized in senior care, dementia care, and companionship to ensure peace of mind for your loved ones always.",
  keywords: ["home healthcare", "senior care", "dementia care", "Alzheimer's care", "in-home care", "respite care"],
  authors: [{ name: "Seren Place" }],
  creator: "Seren Place",
  publisher: "Seren Place",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serenplace.com",
    title: "Seren Place | Premium Homecare Agency",
    description: "Experience premium, compassionate, and family-centered home care. Specialized in senior care, dementia care, and companionship.",
    siteName: "Seren Place",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Seren Place Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Seren Place | Premium Homecare Agency",
    description: "Experience premium, compassionate, and family-centered home care.",
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

