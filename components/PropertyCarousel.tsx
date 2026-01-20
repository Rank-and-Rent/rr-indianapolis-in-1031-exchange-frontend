"use client";

import { useState } from "react";

const properties = [
  {
    id: 1,
    address: "125 Monument Circle, Indianapolis, IN 46204",
    price: "$17,900,000",
    beds: "1",
    baths: "11",
    sqft: "15,317",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    id: 2,
    address: "8500 Keystone Crossing, Indianapolis, IN 46240",
    price: "$15,500,000",
    beds: "6",
    baths: "8",
    sqft: "8,876",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    id: 3,
    address: "1200 Rangeline Road, Carmel, IN 46032",
    price: "$12,750,000",
    beds: "5",
    baths: "7",
    sqft: "12,400",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
  },
];

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  const currentProperty = properties[currentIndex];
  const nextProperty = properties[(currentIndex + 1) % properties.length];

  return (
    <section className="bg-teal py-6">
      <div className="relative">
        {/* Properties Container */}
        <div className="flex gap-6 px-6 lg:px-16 overflow-hidden">
          {/* Main Property */}
          <div className="flex-shrink-0 w-full lg:w-3/4">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={currentProperty.image}
                alt={currentProperty.address}
                className="w-full h-full object-cover"
              />
              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-paper-alt/90 flex items-center justify-center hover:bg-paper-alt transition-colors"
                aria-label="Next property"
              >
                <svg
                  className="w-6 h-6 text-heading"
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

            {/* Property Info */}
            <div className="mt-6">
              <h3 className="text-3xl lg:text-4xl text-white mb-2 font-serif">
                {currentProperty.address}
              </h3>
              <p className="text-xl text-white font-semibold mb-1">
                {currentProperty.price}
              </p>
              <p className="text-white/70 text-sm">
                {currentProperty.beds} Bed | {currentProperty.baths} Baths |{" "}
                {currentProperty.sqft} Sq.Ft.
              </p>
            </div>
          </div>

          {/* Preview of Next Property */}
          <div className="hidden lg:block flex-shrink-0 w-1/5">
            <div className="aspect-video overflow-hidden opacity-60">
              <img
                src={nextProperty.image}
                alt={nextProperty.address}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between px-6 lg:px-16 mt-8">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5"
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
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg
                className="w-5 h-5"
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

          {/* Progress Bar */}
          <div className="flex-1 mx-8 h-0.5 bg-white/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white/60 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / properties.length) * 100}%`,
              }}
            />
          </div>

          <button className="btn btn-outline-white text-xs">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
