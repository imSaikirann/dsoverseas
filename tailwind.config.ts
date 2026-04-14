import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:   "#0B0C0E",
        surface:  "#111215",
        surfaceMid: "#16181C",
        muted:    "#1C1F24",
        text:     "#F0EDE8",
        "text-muted": "#7C7B79",
        "text-faint": "#3E3D3B",
        gold:     "#C9A96E",
        "gold-light": "#E8C98A",
        accent:   "#4B7BFF",
        mint:     "#5CD6A0",
        border:   "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem,5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem,3.5vw,3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        card: "1.5rem",
        "card-lg": "2rem",
      },
      boxShadow: {
        glow:   "0 0 40px rgba(75,123,255,0.08)",
        "gold-glow": "0 0 30px rgba(201,169,110,0.1)",
        soft:   "0 1px 3px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(75,123,255,0.18) 0%, transparent 70%)",
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E8C98A 50%, #C9A96E 100%)",
        "cta-gradient": "linear-gradient(135deg, #0e1a2b 0%, #1a2f5e 50%, #0e1a2b 100%)",
      },
    },
  },
  plugins: [],
};

export default config;