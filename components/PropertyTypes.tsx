"use client";

import { useState } from "react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "nnn",
    title: "NNN Properties",
    subtitle: "Triple Net Lease Investments",
    description:
      "Triple net lease properties offer predictable income streams with minimal landlord responsibilities. Tenants cover property taxes, insurance, and maintenance, making NNN investments ideal for 1031 exchanges seeking stable, passive income.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    features: [
      "Passive Income",
      "Credit Tenants",
      "Long-Term Leases",
      "Minimal Management",
    ],
  },
  {
    id: "retail",
    title: "Retail Properties",
    subtitle: "Shopping Centers & Strip Malls",
    description:
      "From single-tenant retail to shopping centers, Indianapolis offers diverse retail investment opportunities. Strategic locations near growing suburbs provide strong potential for appreciation and stable rental income.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    features: [
      "High Visibility",
      "Consumer Traffic",
      "CAM Recovery",
      "Growth Markets",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Properties",
    subtitle: "Office, Industrial & Mixed-Use",
    description:
      "Indianapolis' thriving commercial sector presents exceptional 1031 exchange opportunities. From downtown office buildings to industrial warehouses and mixed-use developments, diverse options await sophisticated investors.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Multiple Tenants",
      "Value-Add Potential",
      "Market Diversification",
      "Economic Growth",
    ],
  },
];

export default function PropertyTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProperty = propertyTypes[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % propertyTypes.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length
    );
  };

  return (
    <section id="property-types" className="bg-teal text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto bg-paper-alt">
          <div className="absolute inset-8 lg:inset-16">
            <div className="w-full h-full arch-mask overflow-hidden bg-gradient-to-b from-sky-200/50 to-transparent">
              <img
                src={activeProperty.image}
                alt={activeProperty.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative flex flex-col justify-center p-8 lg:p-16">
          {/* Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-paper-alt/90 rounded-full flex items-center justify-center hover:bg-paper-alt transition-colors shadow-lg group"
            aria-label="Next property type"
          >
            <svg
              className="w-6 h-6 text-heading group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="max-w-lg">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
              {activeProperty.title}
            </h2>
            <p className="text-gold text-sm tracking-widest uppercase mb-6">
              {activeProperty.subtitle}
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              {activeProperty.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {activeProperty.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/properties/${activeProperty.id}`}
              className="btn btn-outline-white"
            >
              Explore {activeProperty.title}
            </Link>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {propertyTypes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === activeIndex ? "bg-gold" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
