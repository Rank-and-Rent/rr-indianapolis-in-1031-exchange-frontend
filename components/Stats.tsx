const stats = [
  {
    value: "$2.1B+",
    label: "Exchange Volume Facilitated",
    sublabel: "(Lifetime)",
  },
  {
    value: "500+",
    label: "Successful Exchanges",
    sublabel: "",
  },
  {
    value: "25+",
    label: "Years of Experience",
    sublabel: "",
  },
];

function Sparkle() {
  return (
    <svg
      className="w-8 h-8 text-gold mx-auto mb-4"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16 0L18 12L30 16L18 20L16 32L14 20L2 16L14 12L16 0Z" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="24" cy="8" r="1.5" />
      <circle cx="8" cy="24" r="1.5" />
      <circle cx="24" cy="24" r="1.5" />
    </svg>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 md:py-28 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-paper-alt p-10 md:p-12 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Sparkle />
              <p className="text-5xl md:text-6xl font-serif italic text-heading mb-3">
                {stat.value}
              </p>
              <p className="text-sm tracking-wide text-ink">
                {stat.label}
                {stat.sublabel && (
                  <span className="block text-ink/70">{stat.sublabel}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
