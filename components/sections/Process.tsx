// components/sections/Process.tsx
import { processSteps } from "@/lib/data";
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

export default function Process() {
  return (
    <Section id="process">
      <Container className="py-20 md:py-28">
        <Eyebrow color="gold">Process</Eyebrow>
        <Heading size="md" className="mt-4 max-w-xl">
          Five steps from indecision to landing abroad.
        </Heading>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <div
              key={step.label}
              className="relative rounded-card border border-[var(--border)] bg-surface p-6"
            >
              {/* Connector line (not last) */}
              {i < processSteps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-4 bg-[var(--border)] md:block" />
              )}
              <span className="font-mono text-xs font-medium tracking-[0.18em] text-gold/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-text">
                {step.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}