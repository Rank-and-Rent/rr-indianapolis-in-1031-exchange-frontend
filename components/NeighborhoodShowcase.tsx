import Link from "next/link";

const topNeighborhoods = [
  {
    id: "meridian-hills",
    name: "Meridian Hills",
    address: "North Indianapolis, IN 46260",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "geist",
    name: "Geist",
    address: "Geist Reservoir, IN 46236",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "carmel",
    name: "Carmel",
    address: "Carmel, IN 46032",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  },
];

export default function NeighborhoodShowcase() {
  return (
    <section id="neighborhoods" className="py-32 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading font-serif italic">
            Indianapolis Neighborhoods
          </h2>
        </div>
        <p className="text-ink text-center max-w-3xl mx-auto mb-20">
          We specialize in the most sought-after neighborhoods across
          Indianapolis, with deep expertise in properties ideal for 1031
          exchanges.
        </p>

        {/* Three Arch Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {topNeighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.id}
              href={`/neighborhoods/${neighborhood.id}`}
              className="group text-center"
            >
              {/* Arch Image */}
              <div className="relative mb-8">
                {/* Soft gradient fade at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(247,245,240,0.85) 0%, rgba(247,245,240,0.3) 50%, transparent 100%)",
                    borderRadius: "200px 200px 0 0",
                  }}
                />
                <div
                  className="relative overflow-hidden mx-auto"
                  style={{
                    borderRadius: "200px 200px 0 0",
                    aspectRatio: "3/4",
                    maxWidth: "320px",
                  }}
                >
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-3xl text-heading font-serif italic mb-2">
                {neighborhood.name}
              </h3>
              <p className="text-ink text-sm">{neighborhood.address}</p>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/neighborhoods" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
