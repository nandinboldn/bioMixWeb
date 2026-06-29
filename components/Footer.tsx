"use client";

import Image from "next/image";
import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const f = c.footer;
  const cols = f.cols[lang];

  return (
    <footer className="bg-charcoal border-t border-white/[0.06]">
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image alt="biomix logo" src="/pictures/biomix_logo_final.png" width={160} height={40} />
            </div>
            <p className="font-sans text-[13px] leading-[1.8] text-cream/80 max-w-[260px] mb-6">
              {t(f.tagline, lang)}
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="font-mono text-[11px] tracking-[0.06em] text-cream/80">{f.contact.phone}</div>
              <div className="font-mono text-[11px] tracking-[0.06em] text-cream/80">{f.contact.email}</div>
              <div className="font-mono text-[11px] tracking-[0.06em] text-cream/80">{f.contact.web}</div>
              <div className="font-mono text-[10px] tracking-[0.08em] text-cream/70 leading-relaxed">{t(f.contact.addr, lang)}</div>
            </div>

            <div className="flex items-center gap-5">
              {["FB", "IG", "LI"].map((s) => (
                <a key={s} href="#"
                  className="font-mono text-[9px] tracking-[0.15em] text-cream/75 hover:text-sage transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([category, links]) => (
            <div key={category}>
              <div className="font-sans font-extrabold text-[14px] sm:text-[15px] tracking-[0.25em] text-cream uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-3">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[13px] leading-[1.8] text-cream/80 hover:text-cream/70 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] px-5 sm:px-8 md:px-12 lg:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-cream/75">
            {t(f.copy, lang)}
          </div>
          <div className="flex items-center gap-6">
            {f.legal[lang].map((item) => (
              <a key={item} href="#"
                className="font-mono text-[11px] tracking-[0.1em] uppercase text-cream/70 hover:text-cream/50 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
