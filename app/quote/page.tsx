import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Get a free, no-obligation quote from Richway Lofts & Extensions. Tell us about your project and we'll be in touch within 24 hours.",
};

const guarantees = [
  { icon: "🆓", text: "Free consultation" },
  { icon: "⏱️", text: "Reply within 24 hours" },
  { icon: "🤝", text: "No obligation" },
  { icon: "📞", text: "Speak to Tom directly" },
];

export default function QuotePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Free Quote
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Get Your Free Quote
            </h1>
            <p className="text-white/70 text-xl max-w-xl">
              Tell us about your project and we&apos;ll arrange a free,
              no-obligation consultation at your home.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                  <QuoteForm />
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl p-7 shadow-sm">
                  <h3
                    className="text-xl text-charcoal mb-5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    {guarantees.map((g) => (
                      <div key={g.text} className="flex items-center gap-3">
                        <span className="text-xl">{g.icon}</span>
                        <span className="text-charcoal/70 text-sm">
                          {g.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-charcoal text-white rounded-xl p-7">
                  <p className="text-white/60 text-sm mb-1">Prefer to call?</p>
                  <a
                    href="tel:01234567890"
                    className="text-amber text-2xl font-bold hover:text-white transition-colors block mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    01234 567 890
                  </a>
                  <p className="text-white/40 text-xs">Mon–Sat, 8am–6pm</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-amber/10 border border-amber/20 rounded-xl p-7">
                  <div className="text-3xl mb-3">⭐</div>
                  <p className="text-charcoal font-semibold mb-2">
                    5-Star Rated
                  </p>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    &ldquo;Tom was a pleasure to work with from start to
                    finish.&rdquo;
                  </p>
                  <p className="text-charcoal/40 text-xs mt-2">
                    — The Chowdhury Family, Chingford
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
