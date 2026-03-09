import Link from "next/link";

const services = [
  { href: "/extensions", label: "House Extensions" },
  { href: "/loft-conversions", label: "Loft Conversions" },
  { href: "/renovations", label: "Full Renovations" },
  { href: "/our-work", label: "Our Work" },
];

const company = [
  { href: "/about", label: "About Richway" },
  { href: "/contact", label: "Contact Us" },
  { href: "/quote", label: "Get a Quote" },
];

const accreditations = [
  "Velux Specialist",
  "Federation of Master Builders",
  "TrustMark",
  "Gas Safe",
  "NICEIC",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-widest">
                RICHWAY
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transforming London & Essex homes for over 30 years. House
              extensions, loft conversions, and complete renovations.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-2 text-amber hover:text-white transition-colors"
              >
                <span>📞</span> 01234 567 890
              </a>
              <a
                href="mailto:info@richway.co.uk"
                className="flex items-center gap-2 text-white/60 hover:text-amber transition-colors"
              >
                <span>✉</span> info@richway.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-amber transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 hover:text-amber transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Accreditations
            </h4>
            <div className="flex flex-wrap gap-2">
              {accreditations.map((a) => (
                <span
                  key={a}
                  className="inline-block border border-white/20 text-white/60 text-xs px-3 py-1.5 rounded"
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-white/50 text-xs">Service Areas</p>
              <p className="text-white/80 text-sm mt-1 font-medium">
                London & Essex
              </p>
              <p className="text-white/50 text-xs mt-1">
                Including Chingford, Epping, Waltham Forest, Redbridge & surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Richway Lofts & Extensions Ltd. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
