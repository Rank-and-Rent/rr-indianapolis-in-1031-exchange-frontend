import Link from "next/link";

const neighborhoods = [
  {
    name: "Downtown",
    address: "Monument Circle, Indianapolis, IN 46204",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    slug: "downtown",
  },
  {
    name: "Carmel",
    address: "Arts & Design District, IN 46032",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    slug: "carmel",
  },
  {
    name: "Fishers",
    address: "Nickel Plate District, IN 46038",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    slug: "fishers",
  },
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-24 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-heading mb-6 font-serif">
            Offices & Staff
          </h2>
          <p className="text-ink max-w-2xl mx-auto leading-relaxed">
            We support our clients from three primary locations, with an
            experienced, multi-disciplinary team covering Property Analysis,
            Exchange Coordination, Tax Strategy, and Administration.
          </p>
        </div>

        {/* Neighborhood Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {neighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.slug}
              href={`/neighborhoods/${neighborhood.slug}`}
              className="group block"
            >
              {/* Arch Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-t-full">
                {/* Top gradient fade */}
                <div
                  className="absolute top-0 left-0 right-0 h-24 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, #b8d4db 0%, transparent 100%)",
                  }}
                />
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <h3 className="text-3xl text-heading mb-2 group-hover:text-teal transition-colors font-serif">
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
