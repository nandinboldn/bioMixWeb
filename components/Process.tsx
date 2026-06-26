"use client";

import { useEffect, useRef } from "react";
import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

export default function Process() {
  const { lang } = useLang();
  const p = c.process;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const icons = [
    <svg key="1" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M24 14 C18 14 12 20 12 28 C12 36 18 42 24 42 C24 42 21 35 24 28 C27 21 34 24 34 24 C34 16 30 14 24 14Z" fill="#7a9e1a" opacity="0.7"/>
      <circle cx="24" cy="20" r="3" fill="#c9a84c" opacity="0.8"/>
    </svg>,
    <svg key="2" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M14 24 Q20 16 24 24 Q28 32 34 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
    </svg>,
    <svg key="3" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="14" y="18" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path d="M18 22 L30 22 M18 25.5 L30 25.5 M18 29 L26 29" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
    </svg>,
    <svg key="4" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <path d="M16 28 L20 32 L32 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    </svg>,
  ];

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-36 px-8 md:px-12 lg:px-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div
            data-reveal
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-6"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <span className="w-10 h-px bg-sage/40" />
            {t(p.eyebrow, lang)}
          </div>
          <h2
            data-reveal
            className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[0.95] text-cream tracking-[-0.01em] max-w-xl"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease" }}
          >
            {p.title[lang][0]}<br />
            <em className="italic text-gold">{p.title[lang][1]}</em><br />
            {p.title[lang][2]}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {p.steps.map((step, i) => (
            <div
              key={step.num}
              data-reveal
              className="bg-charcoal p-8 relative group hover:bg-moss/10 transition-colors duration-500"
              style={{ opacity: 0, transform: "translateY(30px)", transition: `opacity 0.8s ${i*0.1}s ease, transform 0.8s ${i*0.1}s ease, background-color 0.5s ease` }}
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-sage/40 mb-8">{step.num}</div>
              <div className="text-sage mb-6 group-hover:text-gold transition-colors duration-400">{icons[i]}</div>
              <h3 className="font-sans font-medium text-[15px] text-cream mb-3">{t(step.title, lang)}</h3>
              <p className="font-sans text-[12px] leading-[1.8] text-cream/45">{t(step.desc, lang)}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          data-reveal
          className="mt-16 p-8 md:p-10 border border-sage/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s 0.5s ease, transform 0.8s 0.5s ease" }}
        >
          <div>
            <p className="font-display text-[22px] font-light text-cream mb-1">{t(p.ctaTitle, lang)}</p>
            <p className="font-sans text-[12px] text-cream/45 leading-relaxed">{t(p.ctaSub, lang)}</p>
          </div>
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.18em] uppercase bg-sage/15 border border-sage/25 text-sage px-8 py-4 hover:bg-sage hover:text-ink transition-all duration-300 flex-shrink-0"
          >
            {t(p.ctaBtn, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
