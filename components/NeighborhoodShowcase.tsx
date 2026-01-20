import Link from "next/link";

const topNeighborhoods = [
  {
    id: "meridian-hills",
    name: "Meridian Hills",
    address: "Exclusive Indianapolis Enclave",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "geist",
    name: "Geist",
    address: "Waterfront Living on Geist Reservoir",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "carmel",
    name: "Carmel",
    address: "Indiana's Premier Community",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  },
];

export default function NeighborhoodShowcase() {
  return (
    <section id="neighborhoods" className="py-24 bg-paper-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading font-serif italic mb-6">
            Indianapolis Neighborhoods
          </h2>
          <p className="text-ink max-w-2xl mx-auto">
            We specialize in the most sought-after neighborhoods across
            Indianapolis, with deep expertise in properties ideal for 1031
            exchanges.
          </p>
        </div>

        {/* Three Arch Images - Clean arch shape like Village Properties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topNeighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.id}
              href={`/neighborhoods/${neighborhood.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 arch-image">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl md:text-3xl text-heading font-serif italic mb-2">
                {neighborhood.name}
              </h3>
              <p className="text-sm text-ink">{neighborhood.address}</p>
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
