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
  metadataBase: new URL("https://indy1031exchange.com"),
  title: {
    default: "Indianapolis 1031 Exchange | Tax-Deferred Real Estate Investment",
    template: "%s | Indianapolis 1031 Exchange"
  },
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
  authors: [{ name: "Indianapolis 1031 Exchange" }],
  creator: "Indianapolis 1031 Exchange",
  publisher: "Indianapolis 1031 Exchange",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Indianapolis 1031 Exchange | Tax-Deferred Real Estate Investment",
    description:
      "Expert 1031 exchange services in Indianapolis. Defer capital gains taxes on commercial, retail, and NNN property investments.",
    type: "website",
    locale: "en_US",
    url: "https://indy1031exchange.com",
    siteName: "Indianapolis 1031 Exchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indianapolis 1031 Exchange | Tax-Deferred Real Estate Investment",
    description: "Expert 1031 exchange services in Indianapolis. Defer capital gains taxes on commercial real estate.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Indianapolis 1031 Exchange",
    "url": "https://indy1031exchange.com",
    "logo": "https://indy1031exchange.com/logo.png",
    "description": "Expert 1031 exchange services in Indianapolis, Indiana",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Monument Circle, Suite 500",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46204",
      "addressCountry": "US"
    },
    "telephone": "(317) 555-1031",
    "email": "info@indy1031exchange.com",
    "sameAs": [],
    "areaServed": {
      "@type": "State",
      "name": "Indiana"
    },
    "knowsAbout": [
      "1031 Exchange",
      "Tax Deferred Exchange",
      "Commercial Real Estate",
      "Investment Property",
      "Like-Kind Exchange"
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://indy1031exchange.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

