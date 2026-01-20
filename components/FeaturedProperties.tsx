"use client";

import { useState } from "react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    address: "125 Monument Circle",
    city: "Indianapolis, IN 46204",
    price: "$4,500,000",
    type: "Office Building",
    capRate: "6.2%",
    sqft: "45,000",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    address: "8500 Keystone Crossing",
    city: "Indianapolis, IN 46240",
    price: "$2,800,000",
    type: "NNN Retail",
    capRate: "5.8%",
    sqft: "12,500",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 3,
    address: "1200 Rangeline Road",
    city: "Carmel, IN 46032",
    price: "$6,200,000",
    type: "Mixed-Use",
    capRate: "5.5%",
    sqft: "65,000",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    id: 4,
    address: "9800 Crosspoint Blvd",
    city: "Fishers, IN 46256",
    price: "$3,400,000",
    type: "Industrial",
    capRate: "6.8%",
    sqft: "52,000",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 5,
    address: "450 Massachusetts Ave",
    city: "Indianapolis, IN 46204",
    price: "$1,950,000",
    type: "Retail Strip",
    capRate: "6.0%",
    sqft: "18,000",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 6,
    address: "2200 E 116th Street",
    city: "Carmel, IN 46032",
    price: "$5,100,000",
    type: "NNN Medical",
    capRate: "5.9%",
    sqft: "28,000",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 3;

export default function FeaturedProperties() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProperties = properties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-heading mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-ink max-w-2xl mx-auto">
            Explore investment opportunities ideal for 1031 exchanges in the
            Indianapolis metro area.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProperties.map((property, index) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] mb-5 overflow-hidden bg-paper-alt">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-serif text-heading mb-1 group-hover:text-teal transition-colors">
                {property.address}
              </h3>
              <p className="text-sm text-ink mb-3">{property.city}</p>

              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-heading">
                  {property.price}
                </p>
                <p className="text-sm text-ink">
                  {property.type} | {property.capRate} Cap
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-14">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 text-ink hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
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

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
                page === currentPage
                  ? "bg-paper-alt text-heading font-medium"
                  : "text-ink hover:text-teal"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 text-ink hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
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
      </div>
    </section>
  );
}
