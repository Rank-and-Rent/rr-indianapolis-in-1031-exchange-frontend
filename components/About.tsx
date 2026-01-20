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
                alt="Indianapolis skyline at sunset"
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
              Indianapolis 1031 Exchange represents a trusted connection between
              investors and tax-advantaged opportunities. With decades of
              combined experience in the Indianapolis real estate market, our
              team of highly trained advisors specializes in helping property
              owners defer capital gains through strategic like-kind exchanges.
            </p>
            <p className="text-ink leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Our focused mission is on serving the Indianapolis investment
              community with personalized service, expert guidance, and deep
              local market knowledge that ensures every exchange is executed
              with precision and care.
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
