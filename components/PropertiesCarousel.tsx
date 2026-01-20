"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    address: "125 Monument Circle, Indianapolis, IN 46204",
    price: "$4,500,000",
    beds: "N/A",
    baths: "6 Units",
    sqft: "45,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    id: 2,
    address: "8500 Keystone Crossing, Indianapolis, IN 46240",
    price: "$2,800,000",
    beds: "NNN",
    baths: "Retail",
    sqft: "12,500 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
  },
  {
    id: 3,
    address: "1200 Rangeline Road, Carmel, IN 46032",
    price: "$6,200,000",
    beds: "Mixed",
    baths: "Use",
    sqft: "65,000 Sq.Ft.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
  },
];

export default function PropertiesCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => (c + 1) % properties.length);
  const prev = () => setCurrent((c) => (c - 1 + properties.length) % properties.length);

  const property = properties[current];

  return (
    <section className="bg-[#234E52]">
      <div className="relative">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Property Image - takes up most of the space */}
          <div className="relative w-full lg:w-[75%] aspect-[16/10] lg:aspect-auto lg:h-[700px]">
            <img
              src={property.image}
              alt={property.address}
              className="w-full h-full object-cover"
            />
            {/* Next Arrow on Image */}
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next property"
            >
              <svg className="w-6 h-6 text-[#1C2B2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Peek of next image */}
          <div className="hidden lg:block w-[25%] h-[700px] relative">
            <img
              src={properties[(current + 1) % properties.length].image}
              alt="Next property"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>

        {/* Property Info */}
        <div className="px-6 lg:px-16 py-8 bg-[#234E52]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h3 
                className="text-[32px] md:text-[42px] text-white leading-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}
              >
                {property.address}
              </h3>
              <div className="flex items-center gap-2 text-white">
                <span className="text-[18px] font-medium">{property.price}</span>
                <span className="text-white/50">|</span>
                <span className="text-[15px] text-white/80">{property.beds}</span>
                <span className="text-white/50">|</span>
                <span className="text-[15px] text-white/80">{property.baths}</span>
                <span className="text-white/50">|</span>
                <span className="text-[15px] text-white/80">{property.sqft}</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/20">
            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={next}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 mx-8 h-[2px] bg-white/20 relative">
              <div 
                className="absolute left-0 top-0 h-full bg-white/60 transition-all duration-300"
                style={{ width: `${((current + 1) / properties.length) * 100}%` }}
              />
            </div>

            {/* View All */}
            <Link 
              href="/properties" 
              className="text-[12px] tracking-[0.15em] text-white border border-white px-6 py-3 hover:bg-white hover:text-[#234E52] transition-all"
            >
              VIEW ALL PROPERTIES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
