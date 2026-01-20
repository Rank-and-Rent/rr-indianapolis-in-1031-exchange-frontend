import Link from "next/link";

const neighborhoods = [
  {
    name: "Downtown Indianapolis",
    address: "Monument Circle & Market District",
    image:
      "https://images.unsplash.com/photo-1569974498991-d3c12a140d0e?w=600&q=80",
    slug: "downtown",
  },
  {
    name: "Carmel",
    address: "Arts & Design District, IN 46032",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    slug: "carmel",
  },
  {
    name: "Fishers",
    address: "Nickel Plate District, IN 46038",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    slug: "fishers",
  },
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-20 md:py-28 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-heading mb-6">
            Investment Areas
          </h2>
          <p className="text-lg text-ink max-w-2xl mx-auto">
            We specialize in 1031 exchanges across Indianapolis and surrounding
            areas, with deep expertise in the region&apos;s most dynamic
            investment markets.
          </p>
        </div>

        {/* Neighborhood Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Link
              key={neighborhood.slug}
              href={`/neighborhoods/${neighborhood.slug}`}
              className="group block animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Arch Image */}
              <div className="aspect-[3/4] mb-6 overflow-hidden arch-mask bg-gradient-to-b from-sky-100 to-transparent">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <h3 className="text-3xl font-serif text-heading mb-2 group-hover:text-teal transition-colors">
                {neighborhood.name}
              </h3>
              <p className="text-sm text-ink">{neighborhood.address}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="/neighborhoods" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
