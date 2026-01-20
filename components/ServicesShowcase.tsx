"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The most common 1031 strategy where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes. You have 45 days to identify potential properties and 180 days to complete the exchange.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. This strategy is ideal when you've found the perfect investment opportunity and don't want to risk losing it while waiting to sell your existing property.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "improvement-exchange",
    name: "Improvement Exchange",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to acquire land and develop it, or purchase a property that needs significant renovation to meet their investment criteria.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit Exchange",
    description:
      "Custom construction on replacement property to meet your specific investment criteria. Work with developers to create purpose-built assets that maximize your returns and perfectly align with your portfolio strategy.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    id: "qualified-intermediary",
    name: "Qualified Intermediary",
    description:
      "Secure handling of exchange funds and documentation to ensure full IRS compliance. Our QI services protect your exchange from constructive receipt issues and ensure all timelines and requirements are met.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
  },
  {
    id: "tax-planning",
    name: "Tax Planning & Strategy",
    description:
      "Strategic planning to maximize tax deferral benefits and optimize your investment portfolio. We work closely with your CPA and financial advisors to ensure comprehensive tax efficiency across all your holdings.",
    image:
      "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=800&q=80",
  },
  {
    id: "due-diligence",
    name: "Due Diligence Support",
    description:
      "Thorough property analysis, market research, and risk assessment for replacement properties. We help you make informed investment decisions with confidence and clarity throughout the exchange process.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  },
  {
    id: "multi-property",
    name: "Multi-Property Exchanges",
    description:
      "Complex exchanges involving multiple relinquished or replacement properties. We coordinate timing, documentation, and fund transfers across all properties to ensure a seamless transaction.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
  },
  {
    id: "dst-investments",
    name: "DST Investments",
    description:
      "Delaware Statutory Trust investments for passive 1031 exchange opportunities. Access institutional-quality properties with fractional ownership and professional management for hands-off investing.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "consultation",
    name: "Exchange Consultation",
    description:
      "Comprehensive analysis of your investment goals, current portfolio, tax implications, and customized exchange strategies. Our experts guide you through every decision point to maximize your results.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
  },
];

export default function ServicesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = services[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {/* Left - Image with Arch */}
      <div className="relative bg-paper-alt flex items-center justify-center p-8 lg:p-16">
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
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Right - Content with Teal Background */}
      <div className="relative bg-teal flex items-center">
        {/* Navigation Arrow - positioned at the boundary */}
        <button
          onClick={nextSlide}
          className="absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next service"
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

        <div className="p-8 lg:p-16 lg:pl-24">
          <h2 className="text-5xl lg:text-6xl text-white mb-6 font-serif italic">
            {current.name}
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-md">
            {current.description}
          </p>
          <Link
            href={`/services/${current.id}`}
            className="btn btn-outline-white"
          >
            Explore Service
          </Link>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-12">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-gold" : "bg-white/30"
                }`}
                aria-label={`Go to ${services[idx].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
