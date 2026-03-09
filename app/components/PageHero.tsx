import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  ctaPrimary?: { href: string; label: string };
  ctaSecondary?: { href: string; label: string };
  breadcrumb?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  ctaPrimary,
  ctaSecondary,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[480px] flex items-end">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-amber transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber">{breadcrumb}</span>
          </div>
        )}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h1>
        <p className="text-white/80 text-lg max-w-xl mb-8">{subtitle}</p>
        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-wrap gap-4">
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="bg-amber hover:bg-amber-dark text-white font-semibold px-7 py-3.5 rounded transition-colors"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-7 py-3.5 rounded transition-colors"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
