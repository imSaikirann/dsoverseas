// components/sections/Hero.tsx
import Image from "next/image";
import { trustPoints, stats } from "@/lib/data";
import { Button, Pill, Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-canvas">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/banner1.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] [filter:brightness(0.62)_saturate(0.78)_contrast(1.02)] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/52" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.5)_0%,rgba(10,10,10,0.16)_38%,rgba(10,10,10,0.62)_100%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 45% at 50% -12%, rgba(201,169,110,0.12) 0%, transparent 68%), radial-gradient(ellipse 34% 26% at 82% 22%, rgba(255,255,255,0.06) 0%, transparent 64%)",
        }}
      />

      <Container className="relative z-10 pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-24 md:pt-36 lg:pb-32 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <Pill variant="gold">
              Next intake applications are already moving
            </Pill>

            <h1 className="mt-5 max-w-[12ch] font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:mt-7 sm:max-w-[11ch] sm:text-6xl md:text-7xl">
              Too many choices.{" "}
              <span className="text-gold-gradient">One wrong move</span>{" "}
              can cost you a full intake.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-200 sm:mt-6 sm:text-lg">
              We help Indian students choose the right country, shortlist the
              right universities, and handle the application-to-visa journey
              with a clear done-for-you system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#final-cta" variant="primary" className="w-full sm:w-auto">
                Book Free Counseling
              </Button>
              <Button href="#process" variant="secondary" className="w-full border-white/35 text-white hover:border-gold/30 hover:text-gold sm:w-auto">
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {trustPoints.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-white/18 bg-black/20 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-card-lg border border-white/10 bg-black/18 p-1 shadow-soft backdrop-blur-md">
            <div className="rounded-[calc(2rem-4px)] bg-white/[0.04] p-5 sm:p-7">
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
                    className="rounded-xl border border-white/10 bg-black/28 px-4 py-3.5"
                  >
                    <p className="text-sm text-gray-200">{line}</p>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 rounded-2xl p-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.22) 0%, rgba(255,255,255,0.08) 100%)",
                  border: "1px solid rgba(201,169,110,0.24)",
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
                <div key={s.label} className="px-2 py-3 text-center sm:px-4">
                  <p className="font-display text-lg font-bold text-gold sm:text-xl">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-gray-300 sm:text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
