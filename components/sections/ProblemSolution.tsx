// components/sections/ProblemSolution.tsx
import { problemLines, solutionLines } from "@/lib/data";
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

export default function ProblemSolution() {
  return (
    <Section>
      <Container className="py-16 md:py-24">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* PROBLEM */}
          <div>
            <Eyebrow color="accent">The problem</Eyebrow>

            <Heading size="md" className="mt-3 max-w-lg">
              Most students stay stuck because everyone says something different.
            </Heading>

            <div className="mt-6 space-y-2">
              {problemLines.map((line, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/20"
                >
                  {/* Index */}
                  <span className="mt-0.5 text-[10px] font-mono text-red-400/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <p className="text-xs md:text-sm leading-6 text-text-muted">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SOLUTION */}
          <div>
            <Eyebrow color="mint">The solution</Eyebrow>

            <Heading size="md" className="mt-3 max-w-lg">
              A clear system that removes doubt at every step.
            </Heading>

            <div className="mt-6 space-y-2">
              {solutionLines.map((line, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 rounded-xl border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent px-4 py-3 transition hover:border-gold/40"
                >
                  {/* Index */}
                  <span className="mt-0.5 text-[10px] font-mono text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <p className="text-xs md:text-sm leading-6 text-text">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}