"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">

        {/* Logo */}
        <div>
          <p
            className={`font-display text-lg font-semibold tracking-tight ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            DS Overseas
          </p>
          <p
            className={`text-xs ${
              scrolled ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Study abroad, without the chaos.
          </p>
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {["Services", "Process", "Countries", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm transition ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button href="#final-cta" variant="primary">
          Free Counseling
        </Button>
      </div>
    </header>
  );
}