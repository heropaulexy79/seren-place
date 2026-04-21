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
  description: "Experience premium, compassionate, and family-centered home care. Specialized in senior care, dementia care, and companionship to ensure peace of mind for your loved ones.",
  keywords: ["home healthcare", "senior care", "dementia care", "Alzheimer's care", "in-home care", "respite care"],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
       <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}

