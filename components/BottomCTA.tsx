import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="bg-paper-alt border-t border-outline">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-serif text-heading mb-2">
            Ready to Start Your 1031 Exchange?
          </h2>
          <p className="text-ink">
            Speak with our experts today and maximize your investment potential.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="tel:3175551031"
            className="btn btn-solid"
          >
            Call Now
          </a>
          <Link href="/contact" className="btn btn-outline">
            Get A Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
