import Link from "next/link";

function Sparkle() {
  return (
    <svg
      className="w-8 h-8 text-gold mx-auto mb-6"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16 0L18 12L30 16L18 20L16 32L14 20L2 16L14 12L16 0Z" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="24" cy="8" r="1.5" />
      <circle cx="8" cy="24" r="1.5" />
      <circle cx="24" cy="24" r="1.5" />
    </svg>
  );
}

export default function WorkWithUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Image Side */}
      <div className="relative h-[400px] lg:h-auto">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
          alt="Modern Indianapolis property"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="bg-teal flex flex-col justify-center p-8 lg:p-16 text-center">
        <Sparkle />
        <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
          Work With Us
        </h2>
        <p className="text-white/80 leading-relaxed max-w-md mx-auto mb-10">
          We&apos;ve been facilitating 1031 exchanges for investors throughout
          Indiana for over two decades. Our dedicated team offers individualized
          attention, personalized service, and expert guidance through every
          step of your exchange.
        </p>
        <Link href="/contact" className="btn btn-outline-white mx-auto">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
