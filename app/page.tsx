import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PropertyCarousel from "@/components/PropertyCarousel";
import Neighborhoods from "@/components/Neighborhoods";
import NeighborhoodSpotlight from "@/components/NeighborhoodSpotlight";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with video */}
        <Hero />

        {/* Stats: $2.1B+, 150+, 8,500+ */}
        <Stats />

        {/* About Us section with arch image */}
        <About />

        {/* Dark teal property carousel */}
        <PropertyCarousel />

        {/* Offices/Neighborhoods with 3 arch cards */}
        <Neighborhoods />

        {/* Property Types spotlight (NNN, Retail, Commercial) */}
        <NeighborhoodSpotlight />

        {/* Services spotlight (Delayed, Reverse, Improvement Exchange) */}
        <Services />

        {/* Featured Properties grid with pagination */}
        <FeaturedProperties />

        {/* Work With Us CTA */}
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
