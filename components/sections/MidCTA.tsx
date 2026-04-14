// components/sections/MidCTA.tsx
import { Button, Container } from "@/components/ui";

export default function MidCTA() {
  return (
    <section className="relative overflow-hidden bg-canvas">

      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 py-16 md:py-20">

        <div className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-10 text-center">

          {/* Tag */}
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold">
            Limited slots this week
          </p>

          {/* Heading */}
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-text">
            Most students start late.{" "}
            <span className="text-gold">Seats don’t wait.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-3 text-sm md:text-base text-text-muted max-w-xl mx-auto leading-7">
            Free counseling is capped so each student gets real attention.
            Secure your slot before timelines tighten.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

            <Button href="#final-cta" variant="primary">
              Reserve Free Call
            </Button>

         
          </div>

        </div>

      </Container>
    </section>
  );
}