"use client";

import { useState } from "react";
import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

export default function CtaBanner() {
  const { lang } = useLang();
  const cta = c.cta;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-br from-moss/50 via-ink to-charcoal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(45,59,39,0.4),transparent)]" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="600" cy="250" r="400" stroke="#8a9a7c" strokeWidth="0.5" />
          <circle cx="600" cy="250" r="300" stroke="#8a9a7c" strokeWidth="0.3" />
          <circle cx="600" cy="250" r="200" stroke="#8a9a7c" strokeWidth="0.3" />
          <circle cx="600" cy="250" r="100" stroke="#8a9a7c" strokeWidth="0.3" />
          <line x1="200" y1="250" x2="1000" y2="250" stroke="#8a9a7c" strokeWidth="0.3" strokeDasharray="8 16" />
          <line x1="600" y1="0" x2="600" y2="500" stroke="#8a9a7c" strokeWidth="0.3" strokeDasharray="8 16" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-10 py-28 md:py-40 text-center max-w-3xl mx-auto">
        <div className="font-mono text-[13px] tracking-[0.16em] uppercase text-sage flex items-center justify-center gap-4 mb-8">
          <span className="w-8 h-px bg-sage/40" />
          {t(cta.eyebrow, lang)}
          <span className="w-8 h-px bg-sage/40" />
        </div>

        <h2 className="font-display font-light text-[clamp(44px,5.5vw,80px)] leading-[0.92] text-cream tracking-[-0.02em] mb-6">
          {cta.title[lang][0]}<br />
          <em className="italic text-gold">{cta.title[lang][1]}</em><br />
          {cta.title[lang][2]}
        </h2>

        <p className="font-sans text-[16px] leading-[1.85] text-cream/85 mb-12 max-w-md mx-auto">
          {t(cta.subtitle, lang)}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t(cta.placeholder, lang)}
              required
              className="flex-1 bg-white/[0.06] border border-white/10 px-5 py-4 font-mono text-[11px] tracking-wider text-cream placeholder-cream/25 outline-none focus:border-sage/50 focus:bg-white/[0.08] transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-cream text-ink font-mono text-[10px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold transition-colors duration-300 flex-shrink-0 font-light"
            >
              {t(cta.btn, lang)}
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-2 h-2 rounded-full bg-sage" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-sage">
              {t(cta.success, lang)}
            </span>
          </div>
        )}

        <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream/60 mt-6">
          {t(cta.fine, lang)}
        </p>
      </div>
    </section>
  );
}
