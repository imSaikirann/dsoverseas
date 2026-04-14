// components/ui/index.tsx
// Primitive design-system components for Northlane

import React from "react";

// ── Eyebrow label above headings ─────────────────────────────────────────────
export function Eyebrow({
  children,
  color = "gold",
}: {
  children: React.ReactNode;
  color?: "gold" | "accent" | "mint";
}) {
  const colorMap = {
    gold:   "text-gold",
    accent: "text-accent",
    mint:   "text-mint",
  };
  return (
    <p
      className={`font-mono text-xs font-medium uppercase tracking-[0.22em] ${colorMap[color]}`}
    >
      {children}
    </p>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
export function Heading({
  children,
  className = "",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "xl" | "lg" | "md";
}) {
  const sizes = {
    xl: "text-display-xl",
    lg: "text-display-lg",
    md: "text-display-md",
  };
  return (
    <h2
      className={`font-display font-bold text-text leading-[1.04] tracking-[-0.02em] ${sizes[size]} ${className}`}
    >
      {children}
    </h2>
  );
}

// ── Card wrapper ──────────────────────────────────────────────────────────────
export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-card border border-[var(--border)] bg-surface ${
        hover ? "card-hover cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ── Pill / badge ──────────────────────────────────────────────────────────────
export function Pill({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "gold" | "accent";
}) {
  const variants = {
    default: "border border-[var(--border)] bg-muted text-text-muted",
    gold:    "border border-gold/20 bg-gold/8 text-gold",
    accent:  "border border-accent/20 bg-accent/8 text-accent",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

// ── Section wrapper with alternating bg ──────────────────────────────────────
export function Section({
  children,
  className = "",
  id,
  alt = false,           // alt=true → slightly lighter bg
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative section-divider ${alt ? "bg-surface" : "bg-canvas"} ${className}`}
    >
      {children}
    </section>
  );
}

// ── Inner container ───────────────────────────────────────────────────────────
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

// ── Button ────────────────────────────────────────────────────────────────────
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary:   "bg-gold text-canvas font-semibold hover:bg-gold-light",
    secondary: "border border-[var(--border-strong)] text-text font-semibold hover:border-gold/30 hover:text-gold",
    ghost:     "text-text-muted hover:text-text",
  };
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm transition-all duration-200 hover:-translate-y-px";
  const Tag = href ? "a" : "button";
  return (
    // @ts-ignore
    <Tag href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
}