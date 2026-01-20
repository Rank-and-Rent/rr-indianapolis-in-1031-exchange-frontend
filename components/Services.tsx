"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The standard 1031 exchange where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes. You have 45 days to identify and 180 days to close on replacement properties.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you find the perfect investment opportunity and don't want to risk losing it while waiting to sell your existing property.",
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
    id: "consultation",
    name: "Consultation",
    description:
      "Comprehensive consultation services to evaluate your investment goals, analyze tax implications, and develop a customized 1031 exchange strategy. Our experts guide you through every decision point.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = services[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Content */}
      <div className="relative bg-teal flex items-center order-2 lg:order-1">
        {/* Next Arrow - positioned at the split */}
        <button
          onClick={nextSlide}
          className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20"
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

        <div className="p-8 lg:p-16 lg:pr-24">
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

          {/* Service tabs */}
          <div className="flex flex-wrap gap-4 mt-12">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-sm transition-colors ${
                  idx === currentIndex
                    ? "text-gold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative bg-paper-alt min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
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
    </section>
  );
}
