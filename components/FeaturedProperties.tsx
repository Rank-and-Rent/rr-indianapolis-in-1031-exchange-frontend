"use client";

import { useState } from "react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    address: "1620 Westerly Road",
    city: "Carmel, IN 46032",
    price: "$59,500,000",
    beds: "8",
    baths: "14",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    address: "3055 Keystone Way",
    city: "Fishers, IN 46038",
    price: "$49,800,000",
    beds: "4",
    baths: "7",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
  },
  {
    id: 3,
    address: "2937 Meridian Lane",
    city: "Indianapolis, IN 46204",
    price: "$48,975,000",
    beds: "3",
    baths: "3.5",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 4,
    address: "450 Monument Circle",
    city: "Indianapolis, IN 46204",
    price: "$35,200,000",
    beds: "6",
    baths: "8",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: 5,
    address: "8800 Allisonville Road",
    city: "Fishers, IN 46038",
    price: "$28,750,000",
    beds: "5",
    baths: "6",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    id: 6,
    address: "125 Carmel Drive",
    city: "Carmel, IN 46032",
    price: "$22,100,000",
    beds: "4",
    baths: "5",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
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
    <section className="py-24 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl text-heading font-serif">
            Featured Properties
          </h2>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProperties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="group block"
            >
              {/* Image */}
              <div className="aspect-[4/3] mb-5 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl text-heading mb-1 group-hover:text-teal transition-colors font-serif">
                {property.address}
              </h3>
              <p className="text-xl text-heading mb-1 font-serif">
                {property.city}
              </p>

              <div className="flex items-center justify-between mt-2">
                <p className="text-lg font-semibold text-heading">
                  {property.price}
                </p>
                <p className="text-sm text-ink">
                  {property.beds} Beds | {property.baths} Baths
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 mt-14">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-3 text-ink hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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

          {totalPages > 3 && <span className="px-2 text-ink">...</span>}

          {totalPages > 3 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-10 h-10 flex items-center justify-center text-sm transition-colors ${
                currentPage === totalPages
                  ? "bg-paper-alt text-heading font-medium"
                  : "text-ink hover:text-teal"
              }`}
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-3 text-ink hover:text-teal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
