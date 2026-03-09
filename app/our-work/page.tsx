import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import CTASection from "../components/CTASection";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse our portfolio of house extensions, loft conversions, and full renovations across London and Essex. 500+ completed projects.",
};

export default function OurWorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1
              className="text-5xl md:text-6xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Work
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Browse our portfolio of 500+ completed projects across London and
              Essex. From single-storey extensions to complete home
              transformations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-warm-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>

      <CTASection />
    </>
  );
}
