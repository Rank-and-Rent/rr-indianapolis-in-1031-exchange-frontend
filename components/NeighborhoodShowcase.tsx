"use client";

import { useState } from "react";
import Link from "next/link";

const neighborhoods = [
  {
    id: "meridian-hills",
    name: "Meridian Hills",
    description:
      "Meridian Hills is one of Indianapolis' most prestigious addresses, featuring sprawling estates, mature trees, and unparalleled proximity to downtown. This exclusive enclave offers luxury living with easy access to the city's finest amenities.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    medianPrice: "$650,000+",
  },
  {
    id: "geist",
    name: "Geist",
    description:
      "Geist offers exceptional waterfront living on the stunning Geist Reservoir. Residents enjoy luxury homes with private docks, resort-style amenities, and a tight-knit community atmosphere surrounded by natural beauty.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    medianPrice: "$525,000+",
  },
  {
    id: "carmel",
    name: "Carmel",
    description:
      "Indiana's wealthiest city, Carmel features the renowned Arts & Design District, Midtown's urban energy, and stunning luxury estates. Award-winning schools and world-class amenities make it a premier destination for discerning buyers.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    medianPrice: "$485,000+",
  },
  {
    id: "zionsville",
    name: "Zionsville",
    description:
      "Zionsville combines charming village atmosphere with modern luxury. Historic brick streets, upscale boutiques, and premier estates define this community known for top-rated schools and exceptional quality of life.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    medianPrice: "$475,000+",
  },
  {
    id: "fishers",
    name: "Fishers",
    description:
      "Named the best place to live in America, Fishers offers excellent amenities, top employers, and family-friendly neighborhoods. The Nickel Plate District provides vibrant dining, entertainment, and community events.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    medianPrice: "$385,000+",
  },
  {
    id: "westfield",
    name: "Westfield",
    description:
      "Westfield is one of Indiana's fastest-growing communities, anchored by the Grand Park Sports Campus. New retail developments, master-planned neighborhoods, and excellent schools attract families and investors alike.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    medianPrice: "$380,000+",
  },
];

export default function NeighborhoodShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = neighborhoods[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % neighborhoods.length);
  };

  return (
    <section id="neighborhoods" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Image with Arch */}
      <div className="relative bg-paper-alt min-h-[500px] lg:min-h-[700px]">
        <div className="absolute inset-8 lg:inset-16">
          {/* Top gradient fade */}
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
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Right - Content */}
      <div className="relative bg-teal flex items-center">
        {/* Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next neighborhood"
        >
          <div
            className="w-16 h-16 bg-paper-alt/95 flex items-center justify-center hover:bg-paper-alt transition-colors shadow-lg"
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
          <h2 className="text-5xl lg:text-6xl text-white mb-4 font-serif">
            {current.name}
          </h2>
          <p className="text-gold text-sm tracking-widest mb-6">
            Median Price: {current.medianPrice}
          </p>
          <p className="text-white/75 leading-relaxed mb-10 max-w-md">
            {current.description}
          </p>
          <Link
            href={`/neighborhoods/${current.id}`}
            className="btn btn-outline-white"
          >
            Explore Neighborhood
          </Link>

          {/* Dots */}
          <div className="flex gap-2 mt-12">
            {neighborhoods.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gold" : "bg-white/30"
                }`}
                aria-label={`Go to ${neighborhoods[idx].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
