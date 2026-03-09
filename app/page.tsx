import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/FadeIn";
import ProjectCard from "./components/ProjectCard";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Richway Lofts & Extensions | House Extensions & Loft Conversions London & Essex",
  description:
    "Transforming London & Essex homes for over 30 years. Expert house extensions, loft conversions, and complete renovations. Free consultation, 10-year guarantee.",
};

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "10yr", label: "Guarantee" },
  { value: "5★", label: "Customer Rating" },
];

const services = [
  {
    title: "House Extensions",
    desc: "From rear extensions to wraparounds, we create the space your home deserves.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Modern house extension with large glass doors",
    href: "/extensions",
  },
  {
    title: "Loft Conversions",
    desc: "Unlock your home's hidden potential with a beautifully crafted loft conversion.",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    alt: "Bright loft conversion bedroom with Velux windows",
    href: "/loft-conversions",
  },
  {
    title: "Full Renovations",
    desc: "Complete home transformations, managed from start to finish by your dedicated Project Manager.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Beautifully renovated open-plan kitchen and living area",
    href: "/renovations",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We visit your home, take measurements, and understand your vision.",
    icon: "🏠",
  },
  {
    number: "02",
    title: "Design & Planning",
    desc: "Our architects create detailed plans and handle all planning permissions.",
    icon: "📐",
  },
  {
    number: "03",
    title: "Construction",
    desc: "Your dedicated Project Manager oversees every detail of the build.",
    icon: "🏗️",
  },
  {
    number: "04",
    title: "Completion",
    desc: "We hand over your dream home with a 10-year guarantee.",
    icon: "🎉",
  },
];

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    alt: "Rear house extension Chingford",
    type: "Extension" as const,
    location: "Chingford, London",
    description:
      "Double-storey rear extension with open-plan kitchen and master bedroom above, adding 65m² of living space.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80",
    alt: "Dormer loft conversion Essex",
    type: "Loft" as const,
    location: "Epping, Essex",
    description:
      "Full dormer loft conversion creating two bedrooms with en-suite, transforming the family home.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Full home renovation London",
    type: "Renovation" as const,
    location: "Waltham Forest, London",
    description:
      "Complete ground-floor renovation: new kitchen, extended living space, and stunning bi-fold doors.",
  },
];

const testimonials = [
  {
    name: "The Chowdhury Family",
    location: "Chingford",
    text: "Working with Richway, and in particular Tom, was a pleasure from start to finish. The team were professional, tidy, and always kept us informed. The extension has completely transformed our home and the quality is outstanding.",
  },
  {
    name: "Tom & Katy Evans",
    location: "Chingford",
    text: "Anyone committing to major building works needs to trust who they're working with. I can't tell you how happy I am that we chose Richway. Tom's communication throughout was exceptional, and the finished result exceeded our expectations.",
  },
  {
    name: "Mr & Mrs Griffiths",
    location: "Epping",
    text: "We are so pleased with our extension. Tom and the team went above and beyond to ensure everything was perfect. From the initial consultation to the final handover, the whole experience was stress-free.",
  },
];

const accreditations = [
  "Velux Specialist",
  "Federation of Master Builders",
  "TrustMark",
  "Gas Safe",
  "NICEIC",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85"
          alt="Modern home extension with floor-to-ceiling glass"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              London & Essex
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Transforming London & Essex Homes for Over 30 Years
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
              Expert house extensions, loft conversions, and complete
              renovations — designed and built around you.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded text-lg transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 rounded text-lg transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-warm-grey">
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
                What We Do Best
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <h3
                      className="text-2xl text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link
                      href={service.href}
                      className="text-amber hover:text-amber-dark font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Our Process
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                How We Work
              </h2>
            </div>
          </FadeIn>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:flex items-start gap-0 relative">
            <div className="absolute top-10 left-[12%] right-[12%] h-px bg-mid-grey" />
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15} className="flex-1 flex flex-col items-center text-center px-4">
                <div className="relative w-20 h-20 rounded-full bg-warm-grey border-4 border-white shadow-md flex items-center justify-center mb-6 z-10">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <span className="text-amber font-bold text-xs tracking-widest mb-2">
                  {step.number}
                </span>
                <h3
                  className="text-xl text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-0">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex gap-6 pb-10 relative">
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[1.875rem] top-16 bottom-0 w-px bg-mid-grey" />
                  )}
                  <div className="flex-shrink-0 w-15 h-15 w-[3.75rem] h-[3.75rem] rounded-full bg-warm-grey border-2 border-mid-grey flex items-center justify-center z-10">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-amber font-bold text-xs tracking-widest block mb-1">
                      {step.number}
                    </span>
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

      {/* Featured Projects */}
      <section className="py-24 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
              <div>
                <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                  Featured Projects
                </p>
                <h2
                  className="text-4xl md:text-5xl text-charcoal"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Recent Work
                </h2>
              </div>
              <Link
                href="/our-work"
                className="mt-4 sm:mt-0 text-amber hover:text-amber-dark font-semibold text-sm inline-flex items-center gap-1 transition-colors"
              >
                View All Projects →
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <FadeIn key={project.location} delay={i * 0.15}>
                <ProjectCard {...project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Testimonials
              </p>
              <h2
                className="text-4xl md:text-5xl text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What Our Clients Say
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <div className="flex gap-1 text-amber mb-5">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white border-y border-mid-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-charcoal/40 text-xs uppercase tracking-widest font-semibold mb-8">
              Accreditations & Memberships
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {accreditations.map((a) => (
                <div
                  key={a}
                  className="border border-mid-grey text-charcoal/70 text-sm font-medium px-6 py-3 rounded-full hover:border-amber hover:text-amber transition-colors"
                >
                  {a}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
