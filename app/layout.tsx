import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import SiteMarque from "./components/SiteMarque";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rogerz Baked | Fresh Bakery, Cakes & Snacks",
  description:
    "Fresh bakery products, pastries, snacks, and custom cakes delivered to your door. Explore bakery favourites, event cakes, and everyday baked goods at Rogerz Baked.",
  keywords: [
    "bakery",
    "fresh bread",
    "cakes Rwanda",
    "snacks delivery",
    "custom cakes",
    "Rogerz Baked",
    "bakery in Kigali",
  ],
  openGraph: {
    title: "Rogerz Baked | Fresh Bakery, Cakes & Snacks",
    description:
      "Fresh bakery products, pastries, snacks, and custom cakes delivered to your door. Explore bakery favourites, event cakes, and everyday baked goods.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/rb-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteMarque />
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
