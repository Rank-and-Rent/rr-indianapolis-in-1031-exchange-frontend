import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PropertyTypesShowcase from "@/components/PropertyTypesShowcase";
import ServicesShowcase from "@/components/ServicesShowcase";
import NeighborhoodShowcase from "@/components/NeighborhoodShowcase";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with video background */}
        <Hero />

        {/* Stats: Exchange Volume, Intermediaries, Transactions */}
        <Stats />

        {/* About Us section with arch image */}
        <About />

        {/* Property Types rotating showcase */}
        <PropertyTypesShowcase />

        {/* Services rotating showcase */}
        <ServicesShowcase />

        {/* Neighborhoods rotating showcase */}
        <NeighborhoodShowcase />

        {/* Work With Us CTA */}
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
