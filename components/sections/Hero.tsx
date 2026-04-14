// components/sections/Hero.tsx
import Image from "next/image";
import { trustPoints, stats } from "@/lib/data";
import { Button, Pill, Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background (single source of truth) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner1.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Glow effect (optional but safe) */}
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(75,123,255,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 80% 60%, rgba(201,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left */}
          <div>
            <Pill variant="gold">
              Next intake applications are already moving
            </Pill>

            <h1 className="mt-7 font-display text-display-lg font-bold leading-[1.02] tracking-[-0.025em] text-white">
              Too many choices.{" "}
              <span className="text-gold-gradient">One wrong move</span>{" "}
              can cost you a full intake.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
              We help Indian students choose the right country, shortlist the
              right universities, and handle the application-to-visa journey
              with a clear done-for-you system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#final-cta" variant="primary">
                Book Free Counseling
              </Button>
              <Button href="#process" variant="secondary">
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustPoints.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-gray-200 backdrop-blur"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-card-lg border border-white/10 bg-white/5 p-1 shadow-soft backdrop-blur">
            <div className="rounded-[calc(2rem-4px)] bg-white/5 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Quick Reality Check
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Not sure which country fits your budget?",
                  "Worried your profile is not strong enough?",
                  "Confused about IELTS, GRE, SOP, visa, and loans?",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-xl border border-white/10 bg-black/30 px-4 py-3.5"
                  >
                    <p className="text-sm text-gray-200">{line}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 rounded-xl p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(75,123,255,0.25) 0%, rgba(201,169,110,0.2) 100%)",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  Free first call
                </p>
                <p className="mt-2 text-base text-white">
                  Leave with a country pick, budget direction, and a next-step roadmap.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 px-2 pb-2 pt-1">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-3 text-center">
                  <p className="font-display text-xl font-bold text-gold">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
