"use client";

import { useState } from "react";
import Link from "next/link";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z"
        fill="#C9A065"
      />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The most common 1031 strategy where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you've found the perfect investment opportunity.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "improvement-exchange",
    name: "Improvement Exchange",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to develop or renovate.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit",
    description:
      "Custom construction on replacement property to meet your specific investment criteria and maximize returns.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "qualified-intermediary",
    name: "Qualified Intermediary",
    description:
      "Secure handling of exchange funds and documentation to ensure full IRS compliance throughout your exchange.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
  },
  {
    id: "dst-investments",
    name: "DST Investments",
    description:
      "Delaware Statutory Trust investments for passive 1031 exchange opportunities with institutional-quality properties.",
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
    <section id="services">
      {/* Section Title */}
      <div className="py-16 bg-paper text-center">
        <div className="container">
          <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl text-heading font-serif italic">
            Our Services
          </h2>
        </div>
      </div>

      {/* Service Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Arch Image with Light Gray Background */}
        <div className="relative bg-gray-light py-16 px-8 lg:px-16 flex items-center justify-center min-h-[500px]">
          {/* Arch Image */}
          <div className="relative w-full max-w-sm">
            {/* Soft gradient fade at top */}
            <div
              className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(229,226,219,0.9) 0%, rgba(229,226,219,0.3) 50%, transparent 100%)",
              borderRadius: "220px 220px 0 0",
            }}
            />
            <div
              className="relative overflow-hidden transition-all duration-500"
              style={{
                borderRadius: "220px 220px 0 0",
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
        <div className="relative bg-teal flex items-center min-h-[500px]">
          {/* Arrow Button */}
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

          <div className="py-16 px-8 lg:px-16 lg:pl-24">
            <h3 className="text-4xl lg:text-5xl text-white mb-6 font-serif italic">
              {current.name}
            </h3>
            <p className="text-white/80 leading-relaxed mb-8 max-w-md text-lg">
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
      </div>
    </section>
  );
}
