import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-32 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Arch Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Arch container with gradient fade */}
            <div className="relative">
              {/* Soft gradient fade at top */}
              <div
                className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(247,245,240,0.9) 0%, rgba(247,245,240,0.4) 50%, transparent 100%)",
                  borderRadius: "300px 300px 0 0",
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: "300px 300px 0 0",
                  aspectRatio: "3/4",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Indianapolis scenic view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading mb-10 font-serif italic">
              About Us
            </h2>
            <p className="text-ink leading-relaxed mb-6 text-lg">
              Founded with a commitment to excellence, Indianapolis 1031 Exchange
              represents a trusted connection between investors and tax-advantaged
              opportunities throughout the Indianapolis region through highly
              trained and cultivated advisors, and a focused mission on serving
              the community now and into the future.
            </p>
            <div className="mt-10">
              <Link href="/about" className="btn btn-outline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
