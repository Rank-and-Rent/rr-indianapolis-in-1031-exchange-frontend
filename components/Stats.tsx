const stats = [
  {
    value: "$2.1B",
    suffix: "+",
    label: "Worth Of Real Estate Exchanged",
    sublabel: "(Lifetime)",
  },
  {
    value: "150",
    suffix: "+",
    label: "Qualified Intermediaries",
    sublabel: "",
  },
  {
    value: "8,500",
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

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-paper-alt py-16 px-8 text-center">
              <SparkleIcon />
              <p className="text-heading mb-4">
                <span className="text-6xl md:text-7xl italic font-light font-serif">
                  {stat.value}
                </span>
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
