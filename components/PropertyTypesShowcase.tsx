"use client";

import { useState } from "react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "nnn",
    name: "NNN Properties",
    description: "Triple net lease investments",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "retail",
    name: "Retail Properties",
    description: "Shopping centers & storefronts",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "office",
    name: "Office Buildings",
    description: "Class A & B office spaces",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "industrial",
    name: "Industrial & Warehouse",
    description: "Distribution & logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: "multifamily",
    name: "Multifamily Residential",
    description: "Apartment complexes",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "medical",
    name: "Medical Office",
    description: "Healthcare facilities",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Hotels & lodging",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: "mixed-use",
    name: "Mixed-Use",
    description: "Multi-purpose developments",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
  },
  {
    id: "self-storage",
    name: "Self-Storage",
    description: "Storage facilities",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "net-lease",
    name: "Single-Tenant Net Lease",
    description: "Corporate-backed tenants",
    image:
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
  },
  {
    id: "land",
    name: "Land & Development",
    description: "Development opportunities",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: "automotive",
    name: "Automotive & Service",
    description: "Dealerships & service centers",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
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

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="property-types" className="py-24 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading font-serif italic mb-4">
            Property Types
          </h2>
          <p className="text-ink max-w-2xl mx-auto">
            Explore investment-grade properties ideal for 1031 exchanges across Indianapolis
          </p>
        </div>

        {/* Property Grid - Rectangular images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentItems.map((property) => (
            <Link
              key={property.id}
              href={`/property-types/${property.id}`}
              className="group"
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-heading font-serif italic mb-1">
                {property.name}
              </h3>
              <p className="text-sm text-ink">{property.description}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevPage}
            className="w-10 h-10 flex items-center justify-center border border-outline hover:border-teal transition-colors"
            aria-label="Previous page"
          >
            <svg
              className="w-4 h-4 text-heading"
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
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
                  i === currentPage
                    ? "bg-teal text-white"
                    : "text-heading hover:bg-paper-alt"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-10 h-10 flex items-center justify-center border border-outline hover:border-teal transition-colors"
            aria-label="Next page"
          >
            <svg
              className="w-4 h-4 text-heading"
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
