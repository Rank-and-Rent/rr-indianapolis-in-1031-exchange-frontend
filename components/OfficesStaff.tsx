import Link from "next/link";

const offices = [
  {
    name: "Downtown",
    address: "100 Monument Circle, Indianapolis, IN 46204",
    image: "https://images.unsplash.com/photo-1569974498991-d3c12a140d0e?w=600&q=80",
    slug: "downtown",
  },
  {
    name: "Carmel",
    address: "200 S Rangeline Rd, Carmel, IN 46032",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    slug: "carmel",
  },
  {
    name: "Fishers",
    address: "8500 Keystone Crossing, Fishers, IN 46038",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    slug: "fishers",
  },
];

export default function OfficesStaff() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-[52px] md:text-[64px] text-[#1C2B2D] mb-6 leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}
          >
            Offices & Staff
          </h2>
          <p className="text-[16px] text-[#5A6367] max-w-[680px] mx-auto leading-[1.7]">
            We support our clients from three primary offices, with an experienced, multi-disciplinary 
            support staff covering Marketing, Operations, Transaction Coordination, Finance, and Administration.
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offices.map((office) => (
            <Link 
              key={office.slug} 
              href={`/offices/${office.slug}`}
              className="group block"
            >
              {/* Arch Image */}
              <div className="aspect-[3/4] arch mb-6 relative overflow-hidden"
                style={{ background: "linear-gradient(to bottom, #B8D4D8 0%, #B8D4D8 10%, transparent 10%)" }}
              >
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Text */}
              <h3 
                className="text-[28px] text-[#1C2B2D] mb-2 group-hover:text-[#234E52] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}
              >
                {office.name}
              </h3>
              <p className="text-[14px] text-[#5A6367]">{office.address}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/offices" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
