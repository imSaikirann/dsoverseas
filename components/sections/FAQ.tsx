"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Section, Container, Eyebrow, Heading } from "@/components/ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0); // first open by default

  return (
    <Section id="faq">
      <Container className="py-16 md:py-24">

        {/* Header */}
        <Eyebrow color="accent">FAQ</Eyebrow>

        <Heading size="md" className="mt-3 max-w-lg">
          Questions students ask before they stop delaying.
        </Heading>

        {/* List */}
        <div className="mt-8 max-w-2xl space-y-2">

          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition"
              >
                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 md:px-5 md:py-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-text">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-gold" : "text-text-muted"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 md:px-5 text-xs md:text-sm leading-6 text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </Container>
    </Section>
  );
}