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

const neighborhoodData: Record<string, { name: string; description: string; image: string }> = {
  "meridian-hills": { name: "Meridian Hills", description: "One of Indianapolis's most prestigious neighborhoods, Meridian Hills offers exceptional luxury properties with tree-lined streets and expansive estates. This exclusive enclave is known for its privacy, excellent schools, and proximity to downtown.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
  "geist": { name: "Geist", description: "Centered around the beautiful Geist Reservoir, this community offers waterfront living at its finest. Properties here range from lakefront estates to golf course homes, making it ideal for investors seeking premium residential opportunities.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
  "carmel": { name: "Carmel", description: "Consistently ranked among America's best places to live, Carmel combines small-town charm with urban amenities. The Arts & Design District, excellent schools, and strong property values make it a top choice for 1031 exchanges.", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80" },
  "zionsville": { name: "Zionsville", description: "Known for its charming brick-paved Main Street and historic downtown, Zionsville offers a blend of rural tranquility and suburban convenience. Excellent schools and a strong sense of community make this area highly desirable.", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80" },
  "fishers": { name: "Fishers", description: "One of the fastest-growing cities in Indiana, Fishers offers modern amenities, excellent schools, and a thriving business district. The diverse housing options and strong job market make it attractive for various property investments.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
  "noblesville": { name: "Noblesville", description: "The Hamilton County seat combines historic charm with modern growth. Downtown Noblesville features a vibrant square, while surrounding areas offer new developments and established neighborhoods perfect for investment.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80" },
  "westfield": { name: "Westfield", description: "Home to Grand Park Sports Campus, Westfield is experiencing rapid growth and development. New commercial and residential projects make this an exciting area for forward-thinking investors.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
  "brownsburg": { name: "Brownsburg", description: "Located in Hendricks County, Brownsburg offers affordable housing options and a family-friendly atmosphere. Strong schools and community events make this area increasingly popular for residential investments.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" },
  "avon": { name: "Avon", description: "Avon provides excellent value with quality housing and top-rated schools. The Avon Town Hall Park and growing retail corridors make this area attractive for both residential and commercial investments.", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80" },
  "greenwood": { name: "Greenwood", description: "South of Indianapolis, Greenwood offers a mix of established neighborhoods and new developments. The area's commercial growth and affordable prices make it an excellent choice for diverse investment portfolios.", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80" },
  "downtown": { name: "Downtown Indianapolis", description: "The heart of Indianapolis offers unparalleled urban investment opportunities. From luxury condos to mixed-use developments, downtown properties benefit from major employers, sports venues, and cultural attractions.", image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&q=80" },
  "broad-ripple": { name: "Broad Ripple", description: "This eclectic neighborhood is known for its arts scene, dining, and entertainment. The Monon Trail and proximity to Butler University make Broad Ripple attractive for young professionals and investors alike.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" },
};

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoodData[slug] || { name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), description: "Discover exceptional investment opportunities in this Indianapolis neighborhood. Our team specializes in identifying properties ideal for 1031 exchanges in this area.", image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&q=80" };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center" style={{ backgroundImage: `url('${neighborhood.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {neighborhood.name}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container max-w-4xl">
            <p className="text-xl text-ink leading-relaxed mb-10">
              {neighborhood.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-solid">
                Inquire About Properties
              </Link>
              <Link href="/neighborhoods" className="btn btn-outline">
                View All Neighborhoods
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
