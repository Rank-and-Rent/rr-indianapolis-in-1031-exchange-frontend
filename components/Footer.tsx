import Link from "next/link";

const footerLinks = {
  "Property Types": [
    { label: "NNN Properties", href: "/properties/nnn" },
    { label: "Retail Properties", href: "/properties/retail" },
    { label: "Commercial Properties", href: "/properties/commercial" },
    { label: "All Properties", href: "/properties" },
  ],
  Services: [
    { label: "Delayed Exchange", href: "/services/delayed-exchange" },
    { label: "Reverse Exchange", href: "/services/reverse-exchange" },
    { label: "Improvement Exchange", href: "/services/improvement-exchange" },
    { label: "Consultation", href: "/services/consultation" },
  ],
  Neighborhoods: [
    { label: "Downtown Indianapolis", href: "/neighborhoods/downtown" },
    { label: "Carmel", href: "/neighborhoods/carmel" },
    { label: "Fishers", href: "/neighborhoods/fishers" },
    { label: "All Areas", href: "/neighborhoods" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-heading text-white">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-xl font-serif tracking-[0.15em]">
                INDIANAPOLIS
              </h3>
              <p className="text-xs tracking-[0.3em] text-white/60 mt-1">
                1031 EXCHANGE
              </p>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Expert 1031 exchange services for investors seeking tax-advantaged
              real estate opportunities in Indianapolis.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Indianapolis 1031 Exchange. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
