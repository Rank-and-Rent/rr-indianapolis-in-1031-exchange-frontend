"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The most common 1031 strategy where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes. You have 45 days to identify and 180 days to complete.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you've found the perfect investment and don't want to risk losing it while waiting to sell.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "improvement-exchange",
    name: "Improvement Exchange",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to acquire land and develop it or renovate existing properties.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit",
    description:
      "Custom construction on replacement property to meet your specific investment criteria. Work with developers to create purpose-built assets that maximize returns.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "qualified-intermediary",
    name: "Qualified Intermediary",
    description:
      "Secure handling of exchange funds and documentation to ensure full IRS compliance. Our QI services protect your exchange from constructive receipt issues.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
  },
  {
    id: "dst-investments",
    name: "DST Investments",
    description:
      "Delaware Statutory Trust investments for passive 1031 exchange opportunities. Access institutional-quality properties with fractional ownership and professional management.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export default function ServicesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = services[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Arch Image with Paper Background */}
      <div className="relative bg-paper-alt py-20 px-10 lg:px-20 flex items-center justify-center min-h-[600px]">
        {/* Arch Image */}
        <div className="relative w-full max-w-sm">
          {/* Soft gradient fade at top */}
          <div
            className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(232,228,219,0.9) 0%, rgba(232,228,219,0.4) 50%, transparent 100%)",
              borderRadius: "250px 250px 0 0",
            }}
          />
          <div
            className="relative overflow-hidden transition-all duration-500"
            style={{
              borderRadius: "250px 250px 0 0",
              aspectRatio: "3/4",
            }}
          >
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right - Teal Content */}
      <div className="relative bg-teal flex items-center min-h-[600px]">
        {/* Arrow Button - Flower Shape */}
        <button
          onClick={nextSlide}
          className="absolute left-0 lg:-left-10 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next service"
        >
          <div
            className="w-20 h-20 bg-paper flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            style={{
              borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
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

        <div className="py-20 px-10 lg:px-20 lg:pl-28">
          <h2 className="text-5xl lg:text-6xl text-white mb-8 font-serif italic">
            {current.name}
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-md text-lg">
            {current.description}
          </p>
          <Link
            href={`/services/${current.id}`}
            className="btn btn-outline-white"
          >
            Explore Service
          </Link>
        </div>
      </div>
    </section>
  );
}
