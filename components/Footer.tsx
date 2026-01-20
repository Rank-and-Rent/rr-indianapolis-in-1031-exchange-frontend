import Link from "next/link";
import site from "@/content/site.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heading text-white">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="block text-xl tracking-wider font-serif">
                INDIANAPOLIS
              </span>
              <span className="block text-xs tracking-widest text-white/60 mt-1">
                1031 EXCHANGE
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Expert 1031 exchange services for investors seeking tax-advantaged
              real estate opportunities in Indianapolis and Central Indiana.
            </p>
            <div className="text-sm text-white/60">
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="mt-2">
                <a
                  href={`tel:${site.phoneDigits}`}
                  className="hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Property Types
            </h4>
            <ul className="space-y-2.5">
              {site.propertyTypes.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/property-types"
                  className="text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {site.services.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Neighborhoods
            </h4>
            <ul className="space-y-2.5">
              {site.neighborhoods.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/neighborhoods"
                  className="text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/80">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {site.company}. All rights reserved.
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
            <Link
              href="/sitemap"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
