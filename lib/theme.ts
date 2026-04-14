// DS Overseas — Design Token System
// All color/spacing decisions live here. Import in tailwind.config.ts

export const colors = {
  // Backgrounds — alternating section system
  canvas: "#0B0C0E",       // page base (near-black)
  surface: "#111215",      // elevated cards
  surfaceMid: "#16181C",   // mid-level surface
  muted: "#1C1F24",        // subtle background blocks
  border: "rgba(255,255,255,0.07)",
  borderStrong: "rgba(255,255,255,0.12)",

  // Section alternation (lib-style)
  sectionDark: "#0B0C0E",  // primary dark bg
  sectionRaised: "#111215",// slightly lifted

  // Typography
  text: "#F0EDE8",         // warm white — primary
  textMuted: "#7C7B79",    // muted slate
  textFaint: "#3E3D3B",    // very faint

  // Brand accents
  gold: "#C9A96E",         // premium gold
  goldLight: "#E8C98A",
  accent: "#4B7BFF",       // electric blue
  mint: "#5CD6A0",         // success / trust

  // Gradients (use in inline styles or CSS vars)
  heroGrad: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(75,123,255,0.15) 0%, transparent 70%)",
};

export const fonts = {
  display: "'Cormorant Garamond', Georgia, serif",   // luxury editorial
  body: "'DM Sans', sans-serif",                      // clean, readable
  mono: "'DM Mono', monospace",
};

export const radii = {
  card: "1.5rem",
  pill: "9999px",
  sm: "0.75rem",
};

// Section alternation helper — pass index to get bg class
export const sectionBg = (index: number) =>
  index % 2 === 0 ? "bg-canvas" : "bg-surface";