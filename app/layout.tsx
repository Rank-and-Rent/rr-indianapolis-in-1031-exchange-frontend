import type { Metadata } from "next";
import "./globals.css";

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
  twitter: {
    card: "summary_large_image",
    title: "Indianapolis 1031 Exchange",
    description:
      "Expert 1031 exchange services in Indianapolis. Defer capital gains taxes on commercial real estate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
