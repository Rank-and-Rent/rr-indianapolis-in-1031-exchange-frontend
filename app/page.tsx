import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import NeighborhoodShowcase from "@/components/NeighborhoodShowcase";
import ServicesShowcase from "@/components/ServicesShowcase";
import Why1031 from "@/components/Why1031";
import PropertyTypesShowcase from "@/components/PropertyTypesShowcase";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://indy1031exchange.com"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Indianapolis 1031 Exchange",
    "image": "https://indy1031exchange.com/logo.png",
    "@id": "https://indy1031exchange.com",
    "url": "https://indy1031exchange.com",
    "telephone": "(317) 555-1031",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Monument Circle, Suite 500",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46204",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7684,
      "longitude": -86.1581
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        {/* 1. Hero with video background */}
        <Hero />

        {/* 2. Stats: Animated counters */}
        <Stats />

        {/* 3. About Us - Arch image left, text right */}
        <About />

        {/* 4. Neighborhoods - 3 arch images, top 3 expensive, View More */}
        <NeighborhoodShowcase />

        {/* 5. Services - Arch left, teal right, arrow navigation */}
        <ServicesShowcase />

        {/* 6. Why 1031 - Text left, arch right, rotating benefits */}
        <Why1031 />

        {/* 7. Property Types - 3 rectangular images with pagination */}
        <PropertyTypesShowcase />

        {/* 8. Work With Us CTA */}
        <WorkWithUs />
      </main>
      {/* 9. Footer */}
      <Footer />
    </>
  );
}
