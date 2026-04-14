"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

const navItems = ["Services", "Process", "Countries", "FAQ"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const solidHeader = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solidHeader
          ? "border-b border-white/10 bg-canvas/92 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:px-10">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
              DS Overseas
            </p>
            <p className="hidden text-xs text-gray-300 sm:block">
              Study abroad, without the chaos.
            </p>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-200 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#final-cta" variant="primary" className="px-6 py-3">
              Free Counseling
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-canvas transition hover:bg-gold-light"
            >
              Free Call
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur"
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 rounded-3xl border border-white/10 bg-white/[0.05] p-3 md:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-gray-200 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
