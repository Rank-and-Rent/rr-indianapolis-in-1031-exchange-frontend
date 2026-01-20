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
    label: "Qualified Intermediaries",
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
    <svg className="w-7 h-7 mx-auto mb-5" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 0L15.5 10.5L26 14L15.5 17.5L14 28L12.5 17.5L2 14L12.5 10.5L14 0Z"
        fill="#C9A065"
      />
      <circle cx="6" cy="6" r="1.5" fill="#C9A065" />
      <circle cx="22" cy="6" r="1.5" fill="#C9A065" />
      <circle cx="6" cy="22" r="1.5" fill="#C9A065" />
      <circle cx="22" cy="22" r="1.5" fill="#C9A065" />
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
            
            // Easing function for smooth animation
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

  // Format the number
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
    <span ref={ref} className="text-6xl md:text-7xl italic font-light font-serif">
      {prefix}
      {formatValue(count)}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-paper-alt py-16 px-8 text-center">
              <SparkleIcon />
              <p className="text-heading mb-4">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix=""
                />
                <span className="text-4xl md:text-5xl text-gold-light">
                  {stat.suffix}
                </span>
              </p>
              <p className="text-sm text-ink tracking-wide">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-sm text-ink/60">{stat.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
