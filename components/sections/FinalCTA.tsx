// components/sections/FinalCTA.tsx
import { Container } from "@/components/ui";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative bg-surface overflow-hidden">

      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 40%, rgba(75,123,255,0.12), transparent 70%)",
        }}
      />

      <Container className="py-16 md:py-24">

        <div className="relative mx-auto max-w-3xl text-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A1628] via-[#0E2050] to-[#0A1628] p-6 md:p-10">

          {/* Tag */}
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-mint">
            Ready to move
          </p>

          {/* Heading */}
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
            Stop researching in circles.{" "}
            <span className="text-gold">Get your next move clear.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-xl mx-auto leading-7">
            In one call, you’ll know your country, budget, exams, and exact next steps.
            No confusion. No wasted months.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

            <a
              href="tel:+910000000000"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-light shadow-md"
            >
              Book Free Counseling
            </a>

         
          </div>

        </div>

      </Container>
    </section>
  );
}