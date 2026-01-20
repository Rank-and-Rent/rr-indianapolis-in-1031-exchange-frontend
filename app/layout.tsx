import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indianapolis 1031 Exchange | Tax-Deferred Real Estate Investment",
  description:
    "Expert 1031 exchange services in Indianapolis, Indiana. Defer capital gains taxes on NNN properties, retail, and commercial real estate investments. Trusted advisors with decades of experience.",
  keywords: [
    "1031 exchange Indianapolis",
    "tax deferred exchange Indiana",
    "NNN properties Indianapolis",
    "commercial real estate 1031",
    "retail property exchange",
    "like-kind exchange Indianapolis",
    "qualified intermediary Indiana",
    "investment property Indianapolis",
    "capital gains deferral",
    "real estate tax strategy",
  ],
  openGraph: {
    title: "Indianapolis 1031 Exchange | Tax-Deferred Real Estate Investment",
    description:
      "Expert 1031 exchange services in Indianapolis. Defer capital gains taxes on commercial, retail, and NNN property investments.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
