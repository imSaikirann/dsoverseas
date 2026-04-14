// components/sections/Services.tsx
import { services } from "@/lib/data";
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

export default function Services() {
  return (
    <Section id="services" alt>
      <Container className="py-16 md:py-24">

        {/* Header */}
        <Eyebrow color="accent">Services</Eyebrow>

        <Heading size="md" className="mt-3 max-w-xl">
          Everything from confused to admitted.
        </Heading>

        <p className="mt-3 max-w-lg text-sm md:text-base text-text-muted leading-7">
          Every step of the journey covered — so you’re never figuring
          things out alone at 2 AM.
        </p>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-5 transition-all duration-300 hover:border-gold/30 hover:bg-white/5"
            >
              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(201,169,110,0.12), transparent 60%)",
                }}
              />

              {/* Number */}
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-[11px] font-mono text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="font-display text-base md:text-lg font-semibold text-text">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs md:text-sm leading-6 text-text-muted">
                {s.description}
              </p>
            </article>
          ))}

        </div>
      </Container>
    </Section>
  );
}