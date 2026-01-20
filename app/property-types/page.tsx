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

const propertyTypes = [
  { id: "nnn", name: "NNN Properties", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: "retail", name: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: "office", name: "Office Buildings", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: "industrial", name: "Industrial", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
  { id: "multifamily", name: "Multifamily", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" },
  { id: "medical", name: "Medical Office", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { id: "hospitality", name: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: "student-housing", name: "Student Housing", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80" },
  { id: "self-storage", name: "Self-Storage", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
  { id: "senior-living", name: "Senior Living", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" },
  { id: "mixed-use", name: "Mixed-Use", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" },
  { id: "land", name: "Land", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
];

export default function PropertyTypesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Property Types
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We facilitate 1031 exchanges across all property types. Don&apos;t see yours?{" "}
              <Link href="/contact" className="underline">Contact us</Link> and we&apos;ll help.
            </p>
          </div>
        </section>

        {/* Property Types Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertyTypes.map((type) => (
                <Link
                  key={type.id}
                  href={`/property-types/${type.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl text-heading font-serif italic">
                    {type.name}
                  </h3>
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
