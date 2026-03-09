import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "House Extensions",
  description:
    "Expert house extensions across London and Essex. Rear extensions, side returns, wraparounds — designed and built to the highest standard. Free consultation.",
};

const extensionTypes = [
  {
    title: "Rear Extensions",
    desc: "The most popular choice — extend into your garden to create a larger kitchen, dining space, or open-plan living area. Single or double storey options.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    alt: "Rear house extension with bifold doors",
  },
  {
    title: "Side Return Extensions",
    desc: "Make use of the narrow passage beside your home. Perfect for terraced and semi-detached houses, dramatically widening your kitchen or living area.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80",
    alt: "Side return extension on a Victorian terraced house",
  },
  {
    title: "Wraparound Extensions",
    desc: "Combine a rear and side return extension for maximum space. A wraparound completely transforms your ground floor, creating a stunning open-plan layout.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    alt: "Large wraparound extension on a London home",
  },
  {
    title: "Double Storey Extensions",
    desc: "Add two floors at once for maximum value. Create a ground-floor kitchen extension plus additional bedroom or bathroom above.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    alt: "Double storey house extension",
  },
  {
    title: "Single Storey Extensions",
    desc: "A cost-effective way to gain significant living space. Often permitted development, meaning no planning permission required.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    alt: "Single storey modern extension",
  },
];

const whyChooseUs = [
  {
    icon: "🏆",
    title: "30+ Years Experience",
    desc: "Hundreds of extensions completed across London and Essex. We know what works.",
  },
  {
    icon: "📋",
    title: "Planning Handled",
    desc: "We manage all permitted development and planning permission applications on your behalf.",
  },
  {
    icon: "👤",
    title: "Dedicated Project Manager",
    desc: "Your own Project Manager oversees every aspect, keeping you informed throughout.",
  },
  {
    icon: "🛡️",
    title: "10-Year Guarantee",
    desc: "All our extensions come with a comprehensive 10-year structural guarantee.",
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    alt: "Double storey rear extension Chingford",
    type: "Extension" as const,
    location: "Chingford, London",
    description: "Double-storey rear extension adding a large kitchen-diner and master bedroom above.",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
    alt: "Side return extension London",
    type: "Extension" as const,
    location: "Waltham Forest, London",
    description: "Side return extension widening the kitchen by 2.5m, creating a stunning open-plan space.",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Wraparound extension Essex",
    type: "Extension" as const,
    location: "Loughton, Essex",
    description: "Wraparound extension combining rear and side return for a complete ground-floor transformation.",
  },
];

export default function ExtensionsPage() {
  return (
    <>
      <PageHero
        title="House Extensions"
        subtitle="Create the space your family needs. We design and build beautiful house extensions across London and Essex."
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85"
        imageAlt="Modern house extension with large glass doors"
        ctaPrimary={{ href: "/quote", label: "Get a Free Quote" }}
        ctaSecondary={{ href: "/our-work", label: "View Projects" }}
        breadcrumb="House Extensions"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Expert Extensions
            </p>
            <h2
              className="text-4xl md:text-5xl text-charcoal mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Space You Love, Built to Last
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Whether you need a bigger kitchen, more living space, or an extra
              bedroom, a house extension is one of the best investments you can
              make in your home. With Richway, you get a complete turnkey
              service — from initial design right through to the final coat of
              paint.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Types of Extensions
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What We Build
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-12">
            {extensionTypes.map((ext, i) => (
              <FadeIn key={ext.title}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-sm`}
                >
                  <div className="relative w-full lg:w-[45%] h-64 lg:h-80 flex-shrink-0">
                    <Image
                      src={ext.image}
                      alt={ext.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <h3
                      className="text-2xl md:text-3xl text-charcoal mb-4"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {ext.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed mb-6">
                      {ext.desc}
                    </p>
                    <Link
                      href="/quote"
                      className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-semibold transition-colors"
                    >
                      Get a quote for this →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Richway */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Why Richway
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Built on Experience
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-xl bg-warm-grey">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3
                    className="text-xl text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                The Process
              </p>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                From Consultation to Completion
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "1", t: "Site Survey", d: "Free consultation at your home to assess feasibility and scope." },
              { n: "2", t: "Design & Planning", d: "Architectural drawings and planning permission handled for you." },
              { n: "3", t: "Construction", d: "Full build managed by your dedicated Project Manager." },
              { n: "4", t: "Handover", d: "Snagging, sign-off, and your 10-year guarantee certificate." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-amber text-amber text-xl font-bold flex items-center justify-center mx-auto mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}>
                    {step.n}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.t}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
                Recent Extension Projects
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
