import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import FadeIn from "../components/FadeIn";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "Full Home Renovations",
  description:
    "Complete home renovations across London and Essex. From kitchen refits to whole-house transformations — turnkey design and build service.",
};

const renovationServices = [
  {
    title: "Kitchen Renovations",
    desc: "Transform your kitchen with a complete redesign — new layout, cabinetry, worktops, appliances, and finishes. We manage everything from plumbing and electrics to tiling and decoration.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    alt: "Modern kitchen renovation",
  },
  {
    title: "Bathroom Renovations",
    desc: "Create a bathroom you love. From luxury en-suites to family bathrooms, we handle all aspects of the fit-out including waterproofing, tiling, and premium fixtures.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&q=80",
    alt: "Luxury bathroom renovation",
  },
  {
    title: "Open-Plan Living",
    desc: "Remove walls, create flowing open-plan spaces, install bi-fold or sliding doors — we transform the layout of your home to suit the way modern families live.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80",
    alt: "Open plan living space renovation",
  },
  {
    title: "Whole-House Renovations",
    desc: "Complete top-to-bottom transformations. From structural changes to the final touches of decoration — one team, one Project Manager, one seamless experience.",
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=700&q=80",
    alt: "Whole house renovation before and after",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Vision & Brief",
    desc: "We start with a detailed conversation about how you live and what you want to achieve.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our design team creates detailed plans, mood boards, and material specifications.",
  },
  {
    step: "03",
    title: "Fixed Quote",
    desc: "You receive a fully itemised, fixed-price quote — no surprises during the build.",
  },
  {
    step: "04",
    title: "Build",
    desc: "Your dedicated Project Manager coordinates all trades and keeps you updated daily.",
  },
  {
    step: "05",
    title: "Completion",
    desc: "A thorough snag list, final walkthrough, and 10-year guarantee on all works.",
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Kitchen renovation open plan",
    type: "Renovation" as const,
    location: "Chingford, London",
    description: "Complete ground-floor renovation: new kitchen, extended dining area, and new flooring throughout.",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Open plan living room renovation",
    type: "Renovation" as const,
    location: "Loughton, Essex",
    description: "Whole-house renovation including new bathrooms, kitchen extension, and full redecoration.",
  },
  {
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Bathroom renovation",
    type: "Renovation" as const,
    location: "Wanstead, London",
    description: "Luxury master bathroom renovation with walk-in shower, freestanding bath, and marble tiling.",
  },
];

export default function RenovationsPage() {
  return (
    <>
      <PageHero
        title="Full Home Renovations"
        subtitle="Complete home transformations, managed from start to finish. One team, one vision, one outstanding result."
        imageUrl="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85"
        imageAlt="Beautiful renovated open-plan kitchen and living space"
        ctaPrimary={{ href: "/quote", label: "Get a Free Quote" }}
        ctaSecondary={{ href: "/our-work", label: "View Projects" }}
        breadcrumb="Full Renovations"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Design & Build
            </p>
            <h2
              className="text-4xl md:text-5xl text-charcoal mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Your Home, Reimagined
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Whether you&apos;re updating a single room or transforming your
              entire property, Richway delivers a complete design-and-build
              service. With over 30 years of experience, we know how to bring a
              vision to life — on time, on budget, and to the very highest
              standard.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Our Services
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What We Renovate
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renovationServices.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3
                      className="text-2xl text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <Link
                      href="/quote"
                      className="text-amber hover:text-amber-dark font-semibold text-sm transition-colors inline-flex items-center gap-1"
                    >
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Design & Build — The Richway Way
              </h2>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            {approachSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="flex gap-6 pb-10 relative">
                  {i < approachSteps.length - 1 && (
                    <div className="absolute left-[1.625rem] top-14 bottom-0 w-px bg-mid-grey" />
                  )}
                  <div className="flex-shrink-0 w-[3.25rem] h-[3.25rem] rounded-full bg-amber text-white font-bold text-sm flex items-center justify-center z-10"
                    style={{ fontFamily: "var(--font-serif)" }}>
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3
                      className="text-xl text-charcoal mb-2"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { v: "500+", l: "Projects Completed" },
                { v: "30+", l: "Years Experience" },
                { v: "10yr", l: "Guarantee Included" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-4xl font-bold text-amber mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {s.v}
                  </div>
                  <div className="text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
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
                Recent Renovation Projects
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
