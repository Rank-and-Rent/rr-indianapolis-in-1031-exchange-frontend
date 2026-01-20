import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {/* Left - Clean Arch Image */}
      <div className="relative bg-paper flex items-center justify-center p-8 lg:p-16">
        <div className="relative w-full max-w-md aspect-[3/4] arch-image">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=800&q=80"
            alt="Indianapolis skyline at sunset"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="bg-paper flex items-center p-8 lg:p-16">
        <div className="max-w-lg">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-heading mb-8 font-serif italic">
            About Us
          </h2>
          <p className="text-ink leading-relaxed mb-6">
            Founded with a commitment to excellence, Indianapolis 1031 Exchange
            represents a trusted connection between investors and tax-advantaged
            opportunities throughout the Indianapolis region. Our team of highly
            trained advisors specializes in helping property owners defer capital
            gains through strategic like-kind exchanges.
          </p>
          <p className="text-ink leading-relaxed mb-8">
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
    </section>
  );
}
