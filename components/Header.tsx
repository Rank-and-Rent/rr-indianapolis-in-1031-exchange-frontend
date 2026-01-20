"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-outline/30">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-heading hover:text-teal transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
            <span className="text-sm font-medium tracking-wide">MENU</span>
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-heading">
                INDIANAPOLIS
              </h1>
              <p className="text-xs tracking-[0.35em] text-ink mt-0.5">
                1031 EXCHANGE
              </p>
            </div>
          </Link>

          {/* Right Side - Search & Contact */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:text-teal transition-colors"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn-outline text-xs"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-outline shadow-lg animate-fade-in">
          <nav className="container-wide py-8">
            <ul className="space-y-4">
              {[
                { href: "#property-types", label: "Property Types" },
                { href: "#neighborhoods", label: "Neighborhoods" },
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-lg font-serif text-heading hover:text-teal transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
