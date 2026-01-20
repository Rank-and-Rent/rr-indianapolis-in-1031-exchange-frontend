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
  return (
    <>
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
