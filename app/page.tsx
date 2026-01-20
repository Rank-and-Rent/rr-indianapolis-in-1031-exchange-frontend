import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PropertyTypes from "@/components/PropertyTypes";
import Neighborhoods from "@/components/Neighborhoods";
import Services from "@/components/Services";
import FeaturedProperties from "@/components/FeaturedProperties";
import WorkWithUs from "@/components/WorkWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <PropertyTypes />
        <Neighborhoods />
        <Services />
        <FeaturedProperties />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
