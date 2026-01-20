"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "delayed-exchange",
    title: "Delayed Exchange",
    subtitle: "The Most Common 1031 Strategy",
    description:
      "The standard 1031 exchange where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes. You have 45 days to identify and 180 days to close on replacement properties.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    benefits: [
      "45-Day Identification Period",
      "180-Day Exchange Period",
      "Multiple Property Options",
      "Full Tax Deferral",
    ],
  },
  {
    id: "reverse-exchange",
    title: "Reverse Exchange",
    subtitle: "Buy Before You Sell",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you find the perfect investment opportunity and don't want to risk losing it while waiting to sell your existing property.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    benefits: [
      "Secure Property First",
      "Market Flexibility",
      "Competitive Advantage",
      "Strategic Timing",
    ],
  },
  {
    id: "improvement-exchange",
    title: "Improvement Exchange",
    subtitle: "Build-to-Suit Exchanges",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to acquire land and develop it, or purchase a property that needs significant renovation.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    benefits: [
      "Value-Add Opportunity",
      "Custom Development",
      "Increased Equity",
      "Tax-Deferred Growth",
    ],
  },
  {
    id: "consultation",
    title: "Exchange Consultation",
    subtitle: "Expert Guidance Every Step",
    description:
      "Comprehensive consultation services to evaluate your investment goals, analyze tax implications, and develop a customized 1031 exchange strategy. Our experts guide you through every decision point.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80",
    benefits: [
      "Personalized Strategy",
      "Tax Analysis",
      "Timeline Planning",
      "Risk Assessment",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="bg-teal text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Image Side */}
        <div className="relative h-[400px] lg:h-auto bg-paper-alt order-2 lg:order-1">
          <div className="absolute inset-8 lg:inset-16">
            <div className="w-full h-full arch-mask overflow-hidden bg-gradient-to-b from-sky-200/50 to-transparent">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative flex flex-col justify-center p-8 lg:p-16 order-1 lg:order-2">
          {/* Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-paper-alt/90 rounded-full flex items-center justify-center hover:bg-paper-alt transition-colors shadow-lg group z-10"
            aria-label="Next service"
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

          <div className="max-w-lg mx-auto lg:mx-0">
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
              {activeService.title}
            </h2>
            <p className="text-white/60 text-sm tracking-wide uppercase mb-6">
              {activeService.subtitle}
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              {activeService.description}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {activeService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-sm text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/services/${activeService.id}`}
              className="btn btn-outline-white"
            >
              Learn More
            </Link>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap gap-4 mt-12 max-w-lg mx-auto lg:mx-0">
            {services.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveIndex(idx)}
                className={`text-sm transition-colors ${
                  idx === activeIndex
                    ? "text-gold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
