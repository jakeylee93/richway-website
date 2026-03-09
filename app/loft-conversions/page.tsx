import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Loft Conversions",
  description:
    "Expert loft conversions across London and Essex. Dormer, hip-to-gable, mansard, and Velux conversions. Transform your unused loft into beautiful living space.",
};

const loftTypes = [
  {
    title: "Dormer Loft Conversion",
    desc: "The most popular loft conversion type. A dormer extends vertically from the slope of your roof, creating full-height walls and maximising floor space. Ideal for adding a bedroom with en-suite.",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=700&q=80",
    alt: "Dormer loft conversion bedroom",
    badge: "Most Popular",
  },
  {
    title: "Hip-to-Gable Conversion",
    desc: "Perfect for semi-detached and detached properties. We extend the sloping hip roof outward to create a vertical gable wall, dramatically increasing the usable floor area.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    alt: "Hip to gable loft conversion",
    badge: null,
  },
  {
    title: "Mansard Conversion",
    desc: "The most space-efficient option. A mansard conversion replaces the entire roof structure with near-vertical walls at 72°, creating a large, usable space. Popular in London.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80",
    alt: "Mansard loft conversion with large windows",
    badge: "Maximum Space",
  },
  {
    title: "Velux / Rooflight Conversion",
    desc: "The most cost-effective option where the roof structure stays in place. Velux windows are fitted to bring in natural light. Ideal where head height is already sufficient.",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=700&q=80",
    alt: "Velux loft conversion with skylights",
    badge: "Best Value",
  },
];

const benefits = [
  { icon: "📈", title: "Add 20–25% Property Value", desc: "A loft conversion is one of the highest-return home investments you can make." },
  { icon: "🏠", title: "No Planning Permission Usually", desc: "Most loft conversions fall under permitted development — no planning application needed." },
  { icon: "⚡", title: "Minimal Disruption", desc: "Most of the work is done from outside, keeping your daily life as normal as possible." },
  { icon: "✨", title: "Bespoke Design", desc: "Every conversion is tailored to your home and your vision, with our architects involved from day one." },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
    alt: "Dormer loft conversion with bedroom and en-suite",
    type: "Loft" as const,
    location: "Epping, Essex",
    description: "Full dormer conversion creating a master bedroom suite with walk-in wardrobe and en-suite.",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    alt: "Hip to gable loft conversion Chingford",
    type: "Loft" as const,
    location: "Chingford, London",
    description: "Hip-to-gable conversion on a semi-detached home, adding two bright bedrooms.",
  },
  {
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80",
    alt: "Velux loft conversion study",
    type: "Loft" as const,
    location: "Redbridge, London",
    description: "Velux rooflight conversion creating a stunning home office and guest room.",
  },
];

export default function LoftConversionsPage() {
  return (
    <>
      <PageHero
        title="Loft Conversions"
        subtitle="Unlock your home's hidden potential. Transform your unused loft into beautiful, light-filled living space."
        imageUrl="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1600&q=85"
        imageAlt="Beautiful loft conversion with Velux windows and natural light"
        ctaPrimary={{ href: "/quote", label: "Get a Free Quote" }}
        ctaSecondary={{ href: "/our-work", label: "View Projects" }}
        breadcrumb="Loft Conversions"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Loft Specialists
            </p>
            <h2
              className="text-4xl md:text-5xl text-charcoal mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your Loft, Transformed
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              A loft conversion is the smartest way to add space and value
              without losing any garden. Richway are Velux Specialists with 30+
              years of converting London and Essex lofts into spectacular living
              spaces. From the first survey to the final finish, we handle
              everything.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Loft Types */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Types of Loft Conversion
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Find the Right Conversion for Your Home
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loftTypes.map((type, i) => (
              <FadeIn key={type.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={type.image}
                      alt={type.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {type.badge && (
                      <span className="absolute top-4 left-4 bg-amber text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {type.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-8 flex-1">
                    <h3
                      className="text-2xl text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {type.desc}
                    </p>
                    <Link
                      href="/quote"
                      className="text-amber hover:text-amber-dark font-semibold text-sm transition-colors inline-flex items-center gap-1"
                    >
                      Enquire about this type →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Why Convert?
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The Benefits of a Loft Conversion
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-xl border border-mid-grey hover:border-amber transition-colors">
                  <span className="text-4xl block mb-4">{b.icon}</span>
                  <h3
                    className="text-xl text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Velux Specialist Banner */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-block border border-amber text-amber text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Approved Velux Specialist
            </div>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Velux Approved Installer
            </h2>
            <p className="text-white/70 text-lg">
              As an approved Velux Specialist, we&apos;re qualified to install
              and guarantee Velux products to the highest standard, ensuring
              maximum natural light and energy efficiency.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <h2
                className="text-4xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Recent Loft Conversions
              </h2>
              <Link href="/our-work" className="text-amber hover:text-amber-dark font-semibold text-sm transition-colors">
                All Projects →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.location} delay={i * 0.1}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
