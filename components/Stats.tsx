"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  {
    value: 2.1,
    prefix: "$",
    suffix: "B+",
    label: "Worth Of Real Estate Exchanged",
    sublabel: "(Lifetime)",
  },
  {
    value: 150,
    prefix: "",
    suffix: "+",
    label: "Top Exchange Advisors",
    sublabel: "",
  },
  {
    value: 8500,
    prefix: "",
    suffix: "+",
    label: "Transactions (Lifetime)",
    sublabel: "",
  },
];

function SparkleIcon() {
  return (
    <svg className="w-10 h-10 mx-auto mb-8" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z"
        fill="#C9A065"
      />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

function AnimatedCounter({
  value,
  prefix,
  suffix,
  duration = 2000,
}: {
  value: number;
  prefix: string;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const endValue = value;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = easeOutQuart * endValue;

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formatValue = (num: number) => {
    if (value >= 1000) {
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
    if (value < 10) {
      return num.toFixed(1);
    }
    return Math.round(num).toString();
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatValue(count)}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-32 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-paper-alt py-20 px-10 text-center">
              <SparkleIcon />
              <p className="mb-6">
                <span className="text-6xl md:text-7xl font-serif italic text-heading">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix=""
                  />
                </span>
                <span className="text-4xl md:text-5xl text-gold font-serif italic">
                  {stat.suffix}
                </span>
              </p>
              <p className="text-ink text-sm tracking-wide">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-ink/60 text-sm">{stat.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
