"use client";

import { useState } from "react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "nnn",
    name: "NNN Properties",
    location: "Indianapolis, IN",
    description: "Triple net lease investments",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "retail",
    name: "Retail Properties",
    location: "Central Indiana",
    description: "Shopping centers & storefronts",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "office",
    name: "Office Buildings",
    location: "Downtown Indianapolis",
    description: "Class A & B office spaces",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "industrial",
    name: "Industrial",
    location: "Indianapolis Metro",
    description: "Distribution & logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: "multifamily",
    name: "Multifamily",
    location: "Greater Indianapolis",
    description: "Apartment complexes",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "medical",
    name: "Medical Office",
    location: "Indianapolis, IN",
    description: "Healthcare facilities",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    location: "Central Indiana",
    description: "Hotels & lodging",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: "mixed-use",
    name: "Mixed-Use",
    location: "Urban Indianapolis",
    description: "Multi-purpose developments",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
  },
  {
    id: "self-storage",
    name: "Self-Storage",
    location: "Indianapolis Metro",
    description: "Storage facilities",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 3;

export default function PropertyTypesShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(propertyTypes.length / ITEMS_PER_PAGE);

  const currentItems = propertyTypes.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="property-types" className="py-32 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading font-serif italic">
            Property Types
          </h2>
        </div>

        {/* Property Grid - Rectangular images like Featured Properties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentItems.map((property) => (
            <Link
              key={property.id}
              href={`/property-types/${property.id}`}
              className="group"
            >
              {/* Rectangular Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl text-heading font-serif italic mb-1">
                {property.name}
              </h3>
              <p className="text-ink text-sm mb-2">{property.location}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 flex items-center justify-center text-heading disabled:opacity-30"
            aria-label="Previous page"
          >
            <svg
              className="w-4 h-4"
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

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-serif ${
                i === currentPage
                  ? "border border-heading text-heading"
                  : "text-ink hover:text-heading"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center text-heading disabled:opacity-30"
            aria-label="Next page"
          >
            <svg
              className="w-4 h-4"
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
