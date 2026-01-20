"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Defer Capital Gains",
    description:
      "Section 1031 of the Internal Revenue Code allows investors to defer capital gains taxes when exchanging one investment property for another of like-kind, preserving your investment capital.",
  },
  {
    title: "Accelerate Wealth Building",
    description:
      "By deferring taxes, you can use 100% of your equity to acquire larger, more valuable properties. This compounding effect accelerates portfolio growth over time.",
  },
  {
    title: "Portfolio Diversification",
    description:
      "1031 exchanges provide flexibility to diversify across different property types, geographic locations, and risk profiles without triggering immediate tax consequences.",
  },
  {
    title: "Generational Wealth",
    description:
      "Properties can be exchanged indefinitely, deferring taxes until you choose to cash out. When passed to heirs, they receive a stepped-up basis, potentially eliminating deferred gains.",
  },
  {
    title: "Improved Cash Flow",
    description:
      "Strategic exchanges allow you to trade into properties with higher cap rates, better tenant quality, or lower management burden, improving your overall investment returns.",
  },
];

export default function Why1031() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="why-1031" className="py-24 bg-teal">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-16 font-serif italic">
            Why 1031 Exchange?
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.slice(0, 3).map((benefit, idx) => (
              <div
                key={idx}
                className="text-left p-8 bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold text-gold mb-6 font-serif text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl text-white font-serif italic mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Benefits Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            {benefits.slice(3, 5).map((benefit, idx) => (
              <div
                key={idx + 3}
                className="text-left p-8 bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold text-gold mb-6 font-serif text-xl">
                  {idx + 4}
                </div>
                <h3 className="text-xl text-white font-serif italic mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/why-1031" className="btn btn-outline-white">
            Learn More About 1031 Exchanges
          </Link>
        </div>
      </div>
    </section>
  );
}
