// components/sections/Countries.tsx
import { countries } from "@/lib/countries";
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

export default function Countries() {
  return (
    <Section id="countries" alt>
      <Container className="py-14 md:py-20">

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">

          {/* LEFT */}
          <div>
            <Eyebrow color="accent">Destinations</Eyebrow>

            <Heading size="md" className="mt-2 max-w-xl">
              Pick the country that fits your profile, budget, and long-term plan.
            </Heading>

            <p className="mt-3 max-w-lg text-sm md:text-base leading-7 text-text-muted">
              Each destination opens a different path — faster degrees, easier PR,
              stronger salaries, or lower tuition.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

            {countries.map((c) => (
              <article
                key={c.name}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
              >

                {/* FLAG — FIXED ASPECT RATIO */}
                <div className="mb-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={`https://flagcdn.com/w320/${c.code}.png`}
                    alt={c.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* HEADER */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-sm md:text-base font-semibold text-text">
                    {c.name}
                  </h3>

                  <span className="text-[9px] uppercase tracking-wider text-gold">
                    Popular
                  </span>
                </div>

                {/* TAGLINE */}
                <p className="mt-1 text-[11px] text-gold">
                  {c.tagline}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-2 text-xs md:text-sm leading-6 text-text-muted">
                  {c.benefit}
                </p>

                {/* HIGHLIGHTS */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(c.highlights ?? []).map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-gray-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* HOVER GLOW */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(280px circle at 50% 0%, rgba(201,169,110,0.12), transparent 60%)",
                  }}
                />
              </article>
            ))}

          </div>
        </div>
      </Container>
    </Section>
  );
}