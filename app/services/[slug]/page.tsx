import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z" fill="#C9A065" />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

const serviceData: Record<string, { name: string; description: string; details: string[]; image: string }> = {
  "delayed-exchange": {
    name: "Delayed Exchange",
    description: "The most common type of 1031 exchange, where you sell your relinquished property first and then acquire replacement property within the IRS-mandated timeframes.",
    details: ["45 days to identify replacement properties", "180 days to complete the exchange", "Must use a Qualified Intermediary", "Like-kind property requirements must be met"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
  },
  "reverse-exchange": {
    name: "Reverse Exchange",
    description: "Acquire your replacement property before selling your current property. Ideal when you've found the perfect investment and don't want to risk losing it.",
    details: ["Replacement property acquired first", "Exchange Accommodation Titleholder (EAT) holds property", "Same 45/180 day timelines apply", "More complex but highly effective"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
  },
  "improvement-exchange": {
    name: "Improvement Exchange",
    description: "Also known as a construction or build-to-suit exchange, this allows you to use exchange funds to improve or construct on the replacement property.",
    details: ["Improvements must be completed within 180 days", "Property held by EAT during construction", "Increases property value with deferred taxes", "Complex documentation requirements"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
  },
  "build-to-suit": {
    name: "Build-to-Suit Exchange",
    description: "Custom construction on replacement property to meet your specific investment criteria. Work with developers to create purpose-built assets.",
    details: ["New construction on acquired land", "Tailored to your investment needs", "Maximize depreciation benefits", "Professional project management"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
  },
  "qualified-intermediary": {
    name: "Qualified Intermediary Services",
    description: "We provide secure handling of exchange funds and documentation to ensure full IRS compliance throughout your exchange.",
    details: ["Segregated exchange accounts", "Complete documentation management", "IRS compliance assurance", "Expert guidance throughout process"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80"
  },
  "dst-investments": {
    name: "DST Investments",
    description: "Delaware Statutory Trust investments offer passive 1031 exchange opportunities with institutional-quality properties and professional management.",
    details: ["Fractional ownership of large properties", "Professional asset management", "Diversified property portfolios", "Passive income generation"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
  },
  "consultation": {
    name: "Exchange Consultation",
    description: "Our expert advisors provide comprehensive consultation to help you navigate the complexities of 1031 exchanges and maximize your investment potential.",
    details: ["Personalized exchange strategy", "Tax implication analysis", "Timeline planning", "Ongoing support and guidance"],
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&q=80"
  },
  "property-identification": {
    name: "Property Identification",
    description: "We help you identify suitable replacement properties within the 45-day identification period, ensuring you find investments that meet your criteria.",
    details: ["Market analysis and research", "Property screening and evaluation", "Due diligence support", "Investment criteria matching"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: "Expert 1031 exchange services tailored to your investment needs.",
    details: ["Professional guidance", "IRS compliance", "Personalized service", "Expert support"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {service.name}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xl text-ink leading-relaxed mb-10">
                  {service.description}
                </p>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4 mb-10">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ink">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-solid">
                    Get Started
                  </Link>
                  <Link href="/services" className="btn btn-outline">
                    View All Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(250,249,246,0.9) 0%, rgba(250,249,246,0.3) 50%, transparent 100%)",
                    borderRadius: "220px 220px 0 0",
                  }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "220px 220px 0 0", aspectRatio: "3/4" }}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
