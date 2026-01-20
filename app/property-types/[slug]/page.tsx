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

const propertyData: Record<string, { name: string; description: string; benefits: string[]; image: string }> = {
  "nnn": {
    name: "NNN Properties",
    description: "Triple Net Lease properties are among the most popular choices for 1031 exchanges. The tenant is responsible for property taxes, insurance, and maintenance, providing predictable income with minimal landlord responsibilities.",
    benefits: ["Passive income stream", "Long-term tenant stability", "Minimal management required", "Predictable cash flow"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
  },
  "retail": {
    name: "Retail Properties",
    description: "Retail properties range from single-tenant storefronts to large shopping centers. These investments can offer strong returns in high-traffic locations with quality tenants.",
    benefits: ["High visibility locations", "Long-term lease agreements", "Percentage rent opportunities", "Diverse tenant mix options"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
  },
  "office": {
    name: "Office Buildings",
    description: "Office properties provide stable income through multi-year leases with business tenants. Class A and B buildings in prime locations offer excellent 1031 exchange opportunities.",
    benefits: ["Multi-year lease terms", "Professional tenant base", "Value-add opportunities", "Strong appreciation potential"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
  },
  "industrial": {
    name: "Industrial Properties",
    description: "Industrial real estate, including warehouses and distribution centers, has seen tremendous growth. E-commerce demand continues to drive strong fundamentals in this sector.",
    benefits: ["E-commerce growth driver", "Lower maintenance costs", "Long-term tenants", "Strong market fundamentals"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
  },
  "multifamily": {
    name: "Multifamily Properties",
    description: "Apartment buildings and multifamily complexes offer diversified income streams and strong appreciation potential. This sector remains resilient across economic cycles.",
    benefits: ["Diversified income streams", "Strong rental demand", "Value-add opportunities", "Recession-resilient"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
  },
  "medical": {
    name: "Medical Office Buildings",
    description: "Healthcare real estate offers stable, long-term tenants backed by the growing healthcare industry. Medical office buildings often feature higher-credit tenants and longer leases.",
    benefits: ["Healthcare industry growth", "High-credit tenants", "Extended lease terms", "Specialized tenant base"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
  },
  "hospitality": {
    name: "Hospitality Properties",
    description: "Hotels and hospitality properties can offer significant returns for investors seeking income and appreciation. Brand-affiliated properties often provide additional stability.",
    benefits: ["Revenue upside potential", "Brand recognition value", "Tourism market exposure", "Management flexibility"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
  },
  "student-housing": {
    name: "Student Housing",
    description: "Purpose-built student housing near universities offers unique investment opportunities with strong occupancy rates and predictable demand tied to enrollment cycles.",
    benefits: ["Consistent demand cycle", "Premium rental rates", "Parental guarantees", "University proximity value"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
  },
  "self-storage": {
    name: "Self-Storage Facilities",
    description: "Self-storage has proven to be one of the most resilient asset classes. Low operating costs and diverse revenue streams make these properties attractive for 1031 exchanges.",
    benefits: ["Recession-resistant", "Low operating costs", "Month-to-month flexibility", "Diverse customer base"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
  },
  "senior-living": {
    name: "Senior Living Facilities",
    description: "With an aging population, senior living and assisted living facilities represent a growing sector with strong demographic tailwinds and increasing demand.",
    benefits: ["Demographic growth trends", "Specialized services premium", "Limited new supply", "Healthcare integration"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
  },
  "mixed-use": {
    name: "Mixed-Use Developments",
    description: "Mixed-use properties combine retail, office, and residential components. These developments offer diversified income streams and often benefit from urban revitalization.",
    benefits: ["Income diversification", "Urban location premiums", "Live-work-play appeal", "Multiple tenant types"],
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80"
  },
  "land": {
    name: "Land",
    description: "Raw land and development sites offer unique 1031 exchange opportunities for investors with longer time horizons or specific development plans.",
    benefits: ["Development potential", "No depreciation recapture", "Flexibility of use", "Long-term appreciation"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
  },
};

export default async function PropertyTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = propertyData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: "This property type qualifies for 1031 exchanges. Contact us to learn more about opportunities in this sector.",
    benefits: ["Tax-deferred exchange eligible", "Professional guidance available", "Market analysis provided", "Investment strategy support"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center" style={{ backgroundImage: `url('${property.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {property.name}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container max-w-4xl">
            <p className="text-xl text-ink leading-relaxed mb-10">
              {property.description}
            </p>
            <h3 className="text-2xl text-heading font-serif italic mb-6">
              Investment Benefits
            </h3>
            <ul className="space-y-4 mb-10">
              {property.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-solid">
                Inquire About {property.name}
              </Link>
              <Link href="/property-types" className="btn btn-outline">
                View All Property Types
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
