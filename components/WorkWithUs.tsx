import Link from "next/link";
import site from "@/content/site.json";

function SparkleIcon() {
  return (
    <svg className="w-7 h-7 mx-auto mb-6" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 0L15.5 10.5L26 14L15.5 17.5L14 28L12.5 17.5L2 14L12.5 10.5L14 0Z"
        fill="#C9A065"
      />
      <circle cx="6" cy="6" r="1.5" fill="#C9A065" />
      <circle cx="22" cy="6" r="1.5" fill="#C9A065" />
      <circle cx="6" cy="22" r="1.5" fill="#C9A065" />
      <circle cx="22" cy="22" r="1.5" fill="#C9A065" />
    </svg>
  );
}

export default function WorkWithUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Image */}
      <div className="relative h-96 lg:h-auto min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          alt="Modern Indianapolis property"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="bg-teal flex flex-col justify-center p-8 lg:p-16 text-center min-h-96">
        <SparkleIcon />
        <h2 className="text-5xl lg:text-6xl text-white mb-6 font-serif italic">
          Work With Us
        </h2>
        <p className="text-white/75 leading-relaxed max-w-md mx-auto mb-6">
          We&apos;ve been facilitating 1031 exchanges for investors throughout
          Central Indiana for over two decades. Our devoted team offers
          individualized attention, personalized service, and expert guidance
          through every step of your exchange.
        </p>
        <p className="text-gold text-xl mb-10 font-serif">
          <a
            href={`tel:${site.phoneDigits}`}
            className="hover:text-gold-light transition-colors"
          >
            {site.phone}
          </a>
        </p>
        <Link href="/contact" className="btn btn-outline-white mx-auto">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
