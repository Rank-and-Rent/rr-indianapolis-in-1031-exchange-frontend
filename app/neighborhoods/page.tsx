import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
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

const neighborhoods = [
  { id: "meridian-hills", name: "Meridian Hills", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { id: "geist", name: "Geist", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: "carmel", name: "Carmel", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80" },
  { id: "zionsville", name: "Zionsville", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" },
  { id: "fishers", name: "Fishers", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: "noblesville", name: "Noblesville", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" },
  { id: "westfield", name: "Westfield", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: "brownsburg", name: "Brownsburg", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { id: "avon", name: "Avon", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80" },
  { id: "greenwood", name: "Greenwood", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" },
  { id: "downtown", name: "Downtown Indianapolis", image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=800&q=80" },
  { id: "broad-ripple", name: "Broad Ripple", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Indianapolis Neighborhoods
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explore the diverse neighborhoods of Indianapolis, each offering
              unique investment opportunities for your 1031 exchange.
            </p>
          </div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.id}
                  href={`/neighborhoods/${neighborhood.id}`}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div
                      className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, rgba(250,249,246,0.85) 0%, rgba(250,249,246,0.3) 50%, transparent 100%)",
                        borderRadius: "180px 180px 0 0",
                      }}
                    />
                    <div
                      className="relative overflow-hidden mx-auto"
                      style={{ borderRadius: "180px 180px 0 0", aspectRatio: "3/4", maxWidth: "280px" }}
                    >
                      <img
                        src={neighborhood.image}
                        alt={neighborhood.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl text-heading font-serif italic">
                    {neighborhood.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
