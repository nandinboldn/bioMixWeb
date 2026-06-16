"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-sans font-extrabold text-[15px] tracking-[0.35em] text-cream uppercase"
      >
        TERRAVA
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/50 hover:text-cream transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#products"
        className="hidden md:inline-block font-mono text-[10px] tracking-[0.15em] uppercase bg-cream text-ink px-6 py-3 hover:bg-gold transition-colors duration-300 font-light"
      >
        Shop Now
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-ink/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[48px] font-light italic text-cream/80 hover:text-cream transition-colors"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#products"
          onClick={() => setMenuOpen(false)}
          className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase bg-cream text-ink px-8 py-4"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}
