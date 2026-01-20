"use client";

import { useState } from "react";
import Link from "next/link";

const spotlights = [
  {
    id: "nnn",
    name: "NNN Properties",
    description:
      "Triple net lease properties offer predictable income streams with minimal landlord responsibilities. Tenants cover property taxes, insurance, and maintenance, making NNN investments ideal for 1031 exchanges seeking stable, passive returns in the Indianapolis market.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "retail",
    name: "Retail",
    description:
      "From single-tenant retail to shopping centers, Indianapolis offers diverse retail investment opportunities. Strategic locations near growing suburbs provide strong potential for appreciation and stable rental income for 1031 exchange investors.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "commercial",
    name: "Commercial",
    description:
      "Indianapolis' thriving commercial sector presents exceptional 1031 exchange opportunities. From downtown office buildings to industrial warehouses, diverse options await sophisticated investors looking to defer capital gains and grow their portfolios.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
];

export default function NeighborhoodSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = spotlights[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlights.length);
  };

  return (
    <section id="property-types" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Image */}
      <div className="relative bg-paper-alt min-h-[500px] lg:min-h-[700px]">
        <div className="absolute inset-8 lg:inset-16">
          {/* Top gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-32 z-10 rounded-t-full"
            style={{
              background:
                "linear-gradient(to bottom, #b8d4db 0%, transparent 100%)",
            }}
          />
          <div className="relative w-full h-full overflow-hidden rounded-t-full">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="relative bg-teal flex items-center">
        {/* Next Arrow - positioned at the split */}
        <button
          onClick={nextSlide}
          className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next"
        >
          <div
            className="w-16 h-16 bg-paper-alt/95 flex items-center justify-center hover:bg-paper-alt transition-colors"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          >
            <svg
              className="w-5 h-5 text-heading"
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
          </div>
        </button>

        <div className="p-8 lg:p-16 lg:pl-24">
          <h2 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
            {current.name}
          </h2>
          <p className="text-white/75 leading-relaxed mb-10 max-w-md">
            {current.description}
          </p>
          <Link
            href={`/properties/${current.id}`}
            className="btn btn-outline-white"
          >
            Explore {current.name}
          </Link>

          {/* Dots */}
          <div className="flex gap-2 mt-12">
            {spotlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gold" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
