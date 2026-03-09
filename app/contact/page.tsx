import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Richway Lofts & Extensions. Call, email, or fill in our contact form for a free consultation about your house extension or loft conversion.",
};

const contactDetails = [
  {
    icon: "📞",
    title: "Phone",
    content: "01234 567 890",
    href: "tel:01234567890",
    sub: "Mon–Sat 8am–6pm",
  },
  {
    icon: "✉️",
    title: "Email",
    content: "info@richway.co.uk",
    href: "mailto:info@richway.co.uk",
    sub: "We reply within 24 hours",
  },
  {
    icon: "📍",
    title: "Service Area",
    content: "London & Essex",
    href: null,
    sub: "Chingford, Epping, Waltham Forest, Redbridge & surrounding areas",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contact Us
            </h1>
            <p className="text-white/70 text-xl max-w-xl">
              Ready to start your project? We&apos;d love to hear from you.
              Get in touch for a free, no-obligation consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <h2
                  className="text-3xl text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Get in Touch
                </h2>
              </FadeIn>

              {contactDetails.map((detail, i) => (
                <FadeIn key={detail.title} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center text-2xl">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal/50 uppercase tracking-wide mb-1">
                        {detail.title}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-charcoal font-semibold hover:text-amber transition-colors"
                        >
                          {detail.content}
                        </a>
                      ) : (
                        <p className="text-charcoal font-semibold">
                          {detail.content}
                        </p>
                      )}
                      <p className="text-charcoal/50 text-sm mt-0.5">
                        {detail.sub}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* Service Area */}
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl p-6 border border-mid-grey">
                  <h3
                    className="text-lg text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Areas We Cover
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Chingford",
                      "Epping",
                      "Waltham Forest",
                      "Redbridge",
                      "Wanstead",
                      "Woodford",
                      "Loughton",
                      "Buckhurst Hill",
                      "Theydon Bois",
                      "Highams Park",
                      "Leytonstone",
                      "All of London & Essex",
                    ].map((area) => (
                      <span
                        key={area}
                        className="text-xs bg-warm-grey text-charcoal/70 px-3 py-1.5 rounded-full border border-mid-grey"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                  <h2
                    className="text-2xl text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="text-charcoal/60 text-sm mb-8">
                    Fill in the form and we&apos;ll get back to you within 24
                    hours to arrange a free consultation.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 bg-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-white text-center sm:text-left">
                <p className="text-xl font-semibold">
                  Prefer to speak directly?
                </p>
                <p className="text-white/80">
                  Call Tom directly on our main number
                </p>
              </div>
              <a
                href="tel:01234567890"
                className="flex-shrink-0 bg-white text-amber font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/90 transition-colors"
              >
                📞 01234 567 890
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
