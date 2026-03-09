import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import CTASection from "../components/CTASection";

export const metadata: Metadata = {
  title: "About Richway",
  description:
    "Learn about Richway Lofts & Extensions — 30+ years building homes in London and Essex. Meet Tom and the team behind hundreds of successful projects.",
};

const values = [
  {
    icon: "🏆",
    title: "Quality",
    desc: "We never cut corners. Every project is built to the same standard we'd apply to our own homes — with premium materials, skilled tradespeople, and meticulous attention to detail.",
  },
  {
    icon: "💬",
    title: "Communication",
    desc: "We know how stressful building works can be. That's why we keep you informed at every stage. Your Project Manager is always just a call or message away.",
  },
  {
    icon: "🤝",
    title: "Trust",
    desc: "Our reputation is everything. We've built it over 30 years by doing exactly what we say we'll do — on time, on budget, and to the highest standard.",
  },
];

const accreditations = [
  {
    name: "Velux Specialist",
    desc: "Approved by Velux to install and guarantee their roof window and skylight products to the highest standard.",
    icon: "☀️",
  },
  {
    name: "Federation of Master Builders",
    desc: "A member of the UK's largest trade association for small and medium building companies — recognised for quality and trustworthiness.",
    icon: "🏗️",
  },
  {
    name: "TrustMark",
    desc: "Government-endorsed quality scheme ensuring all tradespeople meet required standards for skill, trading practices, and insurance.",
    icon: "✓",
  },
  {
    name: "Gas Safe",
    desc: "Legally registered to work safely and legally on gas appliances, boilers, and heating systems.",
    icon: "🔥",
  },
  {
    name: "NICEIC",
    desc: "Nationally Inspected and Certificated Electrical Contractor, meeting the highest electrical safety standards.",
    icon: "⚡",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-0 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4 max-w-3xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Built on 30 Years of Excellence
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Tom's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Tom, founder of Richway Lofts and Extensions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-8">
                  <p className="text-white font-semibold text-lg">Tom</p>
                  <p className="text-white/70 text-sm">Founder & Director</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
                  Meet Tom
                </p>
                <h2
                  className="text-4xl text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  The Story Behind Richway
                </h2>
                <div className="space-y-4 text-charcoal/70 leading-relaxed">
                  <p>
                    Richway was founded by Tom over 30 years ago with a simple
                    mission: to build beautiful homes that families love, on
                    time and on budget.
                  </p>
                  <p>
                    Having started as an apprentice builder in the late 1980s,
                    Tom quickly developed a reputation for exceptional
                    craftsmanship and complete reliability. Clients came back
                    again and again — and told their neighbours.
                  </p>
                  <p>
                    Today, Richway has grown into a fully integrated design-and-
                    build company with a team of trusted tradespeople, but the
                    values haven&apos;t changed. Tom is personally involved in
                    every project, and every client gets a dedicated Project
                    Manager to ensure their experience is as smooth and
                    stress-free as possible.
                  </p>
                  <p>
                    Over 500 projects completed. Hundreds of satisfied families
                    across London and Essex. A 10-year guarantee on all our
                    work. That&apos;s the Richway promise.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Our Values
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What We Stand For
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <div className="bg-white rounded-xl p-10 text-center shadow-sm">
                  <span className="text-5xl block mb-5">{v.icon}</span>
                  <h3
                    className="text-2xl text-charcoal mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Our Journey
              </p>
              <h2
                className="text-4xl md:text-5xl text-charcoal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                30 Years in the Making
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-0">
            {[
              { year: "1993", title: "Founded", desc: "Tom starts Richway as a sole trader, focused on quality residential builds in Chingford and the surrounding area." },
              { year: "2000", title: "Team Growth", desc: "Demand grows — Richway expands to a team of dedicated tradespeople covering all aspects of the build process." },
              { year: "2008", title: "Velux Approved", desc: "Richway becomes an approved Velux Specialist Installer, expanding the loft conversion offering." },
              { year: "2015", title: "100th Project", desc: "We celebrate completing our 100th project — a milestone that marks our reputation for excellence." },
              { year: "2020", title: "Federation of Master Builders", desc: "Richway joins the FMB, recognising our commitment to quality, fair trading, and professionalism." },
              { year: "Today", title: "500+ Projects", desc: "With over 500 completed projects and a 5-star rating, Richway continues to transform homes across London and Essex." },
            ].map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div className="flex gap-8 pb-10 relative">
                  {i < 5 && (
                    <div className="absolute left-[3.5rem] top-10 bottom-0 w-px bg-mid-grey" />
                  )}
                  <div className="flex-shrink-0 w-[7rem] text-right">
                    <span className="text-amber font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-amber mt-1 z-10" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
                Accreditations
              </p>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Recognised & Accredited
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((a, i) => (
              <FadeIn key={a.name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <span className="text-3xl block mb-4">{a.icon}</span>
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {a.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
