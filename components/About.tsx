import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Arch Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Gradient fade at top */}
            <div
              className="absolute top-0 left-0 right-0 h-32 z-10 rounded-t-full"
              style={{
                background:
                  "linear-gradient(to bottom, #b8d4db 0%, transparent 100%)",
              }}
            />
            <div className="relative overflow-hidden aspect-[3/4] rounded-t-full">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Indianapolis sunset skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading mb-8 font-serif">
              About Us
            </h2>
            <p className="text-ink leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              Founded with decades of combined experience, Indianapolis 1031
              Exchange represents a trusted connection between investors and
              tax-advantaged opportunities within the Indianapolis region
              through highly trained and cultivated advisors, and a focused
              mission on serving the investment community now and into the
              future.
            </p>
            <Link href="/about" className="btn btn-outline">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
