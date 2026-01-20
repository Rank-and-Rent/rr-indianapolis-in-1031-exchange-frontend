"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const benefits = [
  {
    quote:
      "Section 1031 of the Internal Revenue Code allows investors to defer capital gains taxes when exchanging one investment property for another of like-kind.",
    attribution: "IRS Section 1031",
  },
  {
    quote:
      "By deferring taxes, investors can use 100% of their equity to acquire larger, more valuable properties and accelerate wealth building.",
    attribution: "Wealth Building",
  },
  {
    quote:
      "1031 exchanges provide unparalleled flexibility, allowing investors to diversify their portfolios across different property types and geographic locations.",
    attribution: "Portfolio Diversification",
  },
  {
    quote:
      "Properties can be exchanged indefinitely, deferring taxes until the investor chooses to cash out or passes the property to heirs with a stepped-up basis.",
    attribution: "Generational Wealth",
  },
  {
    quote:
      "Strategic exchanges can increase cash flow by trading into properties with higher cap rates or better tenant quality in growing markets.",
    attribution: "Improved Cash Flow",
  },
];

export default function Why1031() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = benefits[currentIndex];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  return (
    <section id="why-1031" className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {/* Left - Content with Teal Background */}
      <div className="relative bg-teal flex items-center order-2 lg:order-1">
        {/* Navigation Arrow - positioned at the boundary */}
        <button
          onClick={nextSlide}
          className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next benefit"
        >
          <div className="w-16 h-16 bg-paper rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
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

        <div className="p-8 lg:p-16 lg:pr-24">
          <h2 className="text-5xl lg:text-6xl text-white mb-8 font-serif italic">
            Why 1031 Exchange?
          </h2>

          {/* Quote */}
          <div className="mb-8">
            <svg
              className="w-10 h-10 text-gold mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white/90 text-xl leading-relaxed mb-4 transition-all duration-500">
              {current.quote}
            </p>
            <p className="text-gold text-sm tracking-widest uppercase">
              {current.attribution}
            </p>
          </div>

          <Link href="/why-1031" className="btn btn-outline-white">
            Learn More
          </Link>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-12">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gold" : "bg-white/30"
                }`}
                aria-label={`Go to benefit ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right - Image with Arch */}
      <div className="relative bg-paper flex items-center justify-center p-8 lg:p-16 order-1 lg:order-2">
        <div className="relative w-full max-w-md aspect-[3/4]">
          {/* Top gradient fade */}
          <div
            className="absolute top-0 left-0 right-0 h-24 z-10 rounded-t-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(176, 196, 222, 0.3) 0%, transparent 100%)",
            }}
          />
          <div className="relative w-full h-full overflow-hidden rounded-t-full">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Luxury property representing 1031 exchange opportunity"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
