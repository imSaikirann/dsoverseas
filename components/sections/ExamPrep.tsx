// components/sections/ExamPrep.tsx
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

const exams = [
  {
    name: "IELTS",
    role: "Stronger admissions and visa confidence",
    tag: "Most universities",
  },
  {
    name: "GRE",
    role: "Competitive programs that expect score-backed profiles",
    tag: "USA & Canada",
  },
  {
    name: "Duolingo",
    role: "Faster, flexible application pathways where accepted",
    tag: "Growing acceptance",
  },
];

export default function ExamPrep() {
  return (
    <Section alt>
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow color="gold">Exam prep</Eyebrow>
            <Heading size="md" className="mt-4">
              IELTS, GRE, and Duolingo are the front gate to your application.
            </Heading>
            <p className="mt-5 text-base leading-7 text-text-muted">
              We position exam prep as part of your conversion funnel - better
              scores lead to better admits and stronger visa confidence. It is
              not a side task.
            </p>
          </div>

          <div className="space-y-4">
            {exams.map((exam) => (
              <div
                key={exam.name}
                className="card-hover flex items-center gap-5 rounded-card border border-[var(--border)] bg-canvas px-6 py-5"
              >
                <div className="shrink-0">
                  <p className="font-display text-2xl font-bold text-gold">
                    {exam.name}
                  </p>
                  <span className="mt-0.5 inline-block rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-text-muted">
                    {exam.tag}
                  </span>
                </div>
                <p className="text-sm leading-6 text-text-muted">{exam.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
