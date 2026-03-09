import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  phone?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Ready to Transform Your Home?",
  subtitle = "Book a free, no-obligation consultation today.",
  primaryLabel = "Get Your Free Quote",
  primaryHref = "/quote",
  phone = "01234 567 890",
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        dark ? "bg-charcoal text-white" : "bg-warm-grey text-charcoal"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-10 ${
            dark ? "text-white/70" : "text-charcoal/70"
          }`}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={primaryHref}
            className="bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded text-lg transition-colors"
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className={`flex items-center gap-3 text-lg font-semibold ${
              dark
                ? "text-white/80 hover:text-amber"
                : "text-charcoal hover:text-amber"
            } transition-colors`}
          >
            <span className="text-amber">📞</span>
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
