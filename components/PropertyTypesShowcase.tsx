"use client";

import { useState } from "react";
import Link from "next/link";

const propertyTypes = [
  {
    id: "nnn",
    name: "NNN Properties",
    description:
      "Triple net lease properties offer predictable income streams with minimal landlord responsibilities. Tenants cover property taxes, insurance, and maintenance, making NNN investments ideal for 1031 exchanges seeking stable, passive returns.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "retail",
    name: "Retail Properties",
    description:
      "Shopping centers, strip malls, and single-tenant retail spaces in high-traffic locations. Indianapolis' growing population and strong consumer spending create excellent opportunities for retail investments.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "office",
    name: "Office Buildings",
    description:
      "Class A and B office spaces in downtown Indianapolis and suburban business parks. Strong tenant demand from Fortune 500 companies and growing tech sector creates stable investment opportunities.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "industrial",
    name: "Industrial & Warehouse",
    description:
      "Distribution centers, manufacturing facilities, and flex spaces in Indianapolis' growing logistics corridor. The city's central location makes it a prime hub for e-commerce fulfillment.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: "multifamily",
    name: "Multifamily Residential",
    description:
      "Apartment complexes and multi-unit residential properties with stable occupancy rates. Strong rental demand and population growth drive consistent returns and appreciation potential.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "medical",
    name: "Medical Office",
    description:
      "Healthcare facilities, medical office buildings, and specialty clinics with long-term tenant commitments. The aging population drives consistent demand for medical real estate.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    description:
      "Hotels, extended-stay properties, and hospitality assets in prime Indianapolis locations. Major conventions, sports events, and business travel create strong occupancy rates.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    id: "mixed-use",
    name: "Mixed-Use",
    description:
      "Properties combining retail, residential, and office space for diversified income streams. Urban mixed-use developments are increasingly popular in Indianapolis' growing neighborhoods.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
  },
  {
    id: "self-storage",
    name: "Self-Storage",
    description:
      "Climate-controlled and traditional storage facilities with high margins and low maintenance costs. Growing population and urbanization drive consistent demand for storage space.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "net-lease",
    name: "Single-Tenant Net Lease",
    description:
      "Investment-grade tenants with corporate guarantees and long-term lease commitments. National brands like Walgreens, Dollar General, and Starbucks provide reliable income streams.",
    image:
      "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&q=80",
  },
  {
    id: "land",
    name: "Land & Development",
    description:
      "Raw land and development sites for ground-up construction and long-term appreciation strategies. Indianapolis' expansion creates opportunities for well-positioned land investments.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  },
  {
    id: "automotive",
    name: "Automotive & Service",
    description:
      "Car dealerships, service centers, and quick-service restaurant properties with stable tenants. Long-term leases with established operators provide predictable cash flow.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
  },
];

export default function PropertyTypesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = propertyTypes[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % propertyTypes.length);
  };

  return (
    <section id="property-types" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Content */}
      <div className="relative bg-teal flex items-center order-2 lg:order-1">
        {/* Navigation Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next property type"
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

        <div className="p-8 lg:p-16 lg:pr-24">
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            Property Types
          </p>
          <h2 className="text-5xl lg:text-6xl text-white mb-6 font-serif">
            {current.name}
          </h2>
          <p className="text-white/75 leading-relaxed mb-10 max-w-md">
            {current.description}
          </p>
          <Link
            href={`/property-types/${current.id}`}
            className="btn btn-outline-white"
          >
            Explore {current.name}
          </Link>

          {/* Property Type Navigation */}
          <div className="flex flex-wrap gap-3 mt-12">
            {propertyTypes.slice(0, 6).map((type, idx) => (
              <button
                key={type.id}
                onClick={() => setCurrentIndex(idx)}
                className={`text-xs transition-colors ${
                  idx === currentIndex
                    ? "text-gold"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {type.name}
              </button>
            ))}
            {propertyTypes.length > 6 && (
              <span className="text-xs text-white/30">
                +{propertyTypes.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right - Image with Arch */}
      <div className="relative bg-paper-alt min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
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
    </section>
  );
}
