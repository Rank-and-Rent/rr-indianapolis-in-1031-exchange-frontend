"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The most common 1031 strategy where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes. You have 45 days to identify and 180 days to close.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you find the perfect investment opportunity and don't want to risk losing it while waiting to sell.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "improvement-exchange",
    name: "Improvement Exchange",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to acquire land and develop it, or purchase a property that needs significant renovation.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit Exchange",
    description:
      "Custom construction on replacement property to meet your specific investment criteria. Work with developers to create purpose-built assets that maximize your returns.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "consultation",
    name: "Exchange Consultation",
    description:
      "Comprehensive analysis of your investment goals, current portfolio, tax implications, and customized exchange strategies. Our experts guide you through every decision point.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
  },
  {
    id: "property-identification",
    name: "Property Identification",
    description:
      "Expert guidance on identifying suitable replacement properties within the critical 45-day identification period. We help you evaluate options and make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "qualified-intermediary",
    name: "Qualified Intermediary",
    description:
      "Secure handling of exchange funds and documentation to ensure IRS compliance. Our QI services protect your exchange from constructive receipt issues.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
  },
  {
    id: "tax-planning",
    name: "Tax Planning & Strategy",
    description:
      "Strategic planning to maximize tax deferral benefits and optimize your investment portfolio. We work with your CPA to ensure comprehensive tax efficiency.",
    image:
      "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&q=80",
  },
  {
    id: "due-diligence",
    name: "Due Diligence Support",
    description:
      "Thorough property analysis, market research, and risk assessment for replacement properties. We help you make informed investment decisions with confidence.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  },
  {
    id: "multi-property",
    name: "Multi-Property Exchanges",
    description:
      "Complex exchanges involving multiple relinquished or replacement properties. We coordinate timing, documentation, and fund transfers across all properties.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
  },
  {
    id: "partial-exchange",
    name: "Partial Exchange",
    description:
      "Strategic exchanges where you receive some cash (boot) while deferring the majority of gains. We help you balance liquidity needs with tax efficiency.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
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
          aria-label="Next service"
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
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
            {current.name}
          </h2>
          <p className="text-white/75 leading-relaxed mb-10 max-w-md">
            {current.description}
          </p>
          <Link
            href={`/services/${current.id}`}
            className="btn btn-outline-white"
          >
            Learn More
          </Link>

          {/* Service Navigation */}
          <div className="flex flex-wrap gap-3 mt-12">
            {services.slice(0, 6).map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-xs transition-colors ${
                  idx === currentIndex
                    ? "text-gold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {service.name}
              </button>
            ))}
            {services.length > 6 && (
              <span className="text-xs text-white/30">
                +{services.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
