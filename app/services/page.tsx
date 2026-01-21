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

const services = [
  { id: "delayed-exchange", name: "Delayed Exchange", description: "The most common 1031 exchange strategy", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
  { id: "reverse-exchange", name: "Reverse Exchange", description: "Acquire before selling your current property", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
  { id: "improvement-exchange", name: "Improvement Exchange", description: "Use exchange funds for property improvements", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { id: "build-to-suit", name: "Build-to-Suit", description: "Custom construction on replacement property", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" },
  { id: "qualified-intermediary", name: "Qualified Intermediary", description: "Secure handling of exchange funds", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80" },
  { id: "dst-investments", name: "DST Investments", description: "Delaware Statutory Trust opportunities", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: "consultation", name: "Exchange Consultation", description: "Expert guidance for your exchange", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80" },
  { id: "property-identification", name: "Property Identification", description: "Help finding replacement properties", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Our Services
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Comprehensive 1031 exchange services tailored to your investment goals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div
                      className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, rgba(250,249,246,0.85) 0%, rgba(250,249,246,0.3) 50%, transparent 100%)",
                        borderRadius: "180px 180px 0 0",
                      }}
                    />
                    <div
                      className="relative overflow-hidden mx-auto"
                      style={{ borderRadius: "180px 180px 0 0", aspectRatio: "3/4", maxWidth: "280px" }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl text-heading font-serif italic mb-2">
                    {service.name}
                  </h3>
                  <p className="text-ink text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
