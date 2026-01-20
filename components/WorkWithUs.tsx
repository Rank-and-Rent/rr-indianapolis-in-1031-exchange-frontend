import Link from "next/link";
import site from "@/content/site.json";

function SparkleIcon() {
  return (
    <svg className="w-10 h-10 mx-auto mb-8" viewBox="0 0 40 40" fill="none">
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

export default function WorkWithUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Image (rectangular, not arch) */}
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
          alt="Modern Indianapolis property"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right - Teal Content */}
      <div className="bg-teal flex flex-col justify-center py-20 px-10 lg:px-20 text-center min-h-[500px]">
        <SparkleIcon />
        <h2 className="text-5xl lg:text-6xl text-white mb-8 font-serif italic">
          Work With Us
        </h2>
        <p className="text-white/80 leading-relaxed max-w-md mx-auto mb-8 text-lg">
          We&apos;ve been facilitating 1031 exchanges for investors throughout
          Central Indiana for over two decades. Our devoted team offers
          individualized attention, personalized service, and expert guidance.
        </p>
        <div className="mb-10">
          <Link href="/contact" className="btn btn-outline-white">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
