import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Arch Image */}
          <div className="relative">
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden arch-mask bg-gradient-to-b from-sky-100 to-transparent">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Indianapolis skyline at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-serif text-heading mb-8">
              About Us
            </h2>
            <p className="text-lg text-ink leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              With decades of combined experience in Indianapolis real estate
              and 1031 exchanges, our team represents a trusted connection
              between investors and tax-advantaged opportunities. We specialize
              in helping property owners defer capital gains through strategic
              like-kind exchanges, with a focused mission on serving the
              Indianapolis investment community now and into the future.
            </p>
            <p className="text-lg text-ink leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Our deep understanding of the local market, combined with
              expertise in IRS regulations, ensures every exchange is executed
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
