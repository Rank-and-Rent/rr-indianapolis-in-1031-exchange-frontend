"use client";

import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Defer Capital Gains Taxes",
    description:
      "With a stepped-up basis at death, your heirs may never pay the deferred capital gains taxes, creating generational wealth.",
  },
  {
    title: "Accelerate Wealth Building",
    description:
      "By deferring taxes, you can reinvest 100% of your equity into larger properties, accelerating portfolio growth exponentially.",
  },
  {
    title: "Portfolio Diversification",
    description:
      "Exchange into different property types or geographic locations without triggering immediate tax consequences.",
  },
  {
    title: "Improved Cash Flow",
    description:
      "Trade into properties with better cap rates, stronger tenants, or lower management burden to optimize returns.",
  },
  {
    title: "Estate Planning Benefits",
    description:
      "Properties can be exchanged indefinitely, with heirs receiving stepped-up basis that may eliminate all deferred gains.",
  },
];

export default function Why1031() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = benefits[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section
      id="why-1031"
      className="relative min-h-[600px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          {/* Left - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif leading-tight mb-8">
              See Why 1031<br />
              Exchanges Work
            </h2>
            <Link href="/why-1031" className="btn btn-outline-white">
              View All
            </Link>
          </div>

          {/* Right - Benefit */}
          <div>
            <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-6">
              {current.description}
            </p>
            <p className="text-gold text-sm tracking-widest uppercase">
              {current.title}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 right-8 flex">
          <button
            onClick={prevSlide}
            className="w-14 h-14 bg-white flex items-center justify-center hover:bg-paper transition-colors"
            aria-label="Previous benefit"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 bg-white flex items-center justify-center hover:bg-paper transition-colors"
            aria-label="Next benefit"
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
          </button>
        </div>
      </div>
    </section>
  );
}
