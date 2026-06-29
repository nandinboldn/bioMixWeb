"use client";

import { useEffect, useRef } from "react";
import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

export default function Mission() {
  const { lang } = useLang();
  const m = c.mission;
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const titles = m.title[lang];

  return (
    <section id="mission" ref={sectionRef} className="py-28 md:py-40 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* Visual side */}
        <div className="relative order-2 lg:order-1">
          <div
            data-reveal
            className="relative aspect-[3/4] max-w-[420px] mx-auto lg:mx-0"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
          >
            <div className="absolute -inset-4 border border-sage/15 rounded-sm pointer-events-none" />
            <div className="absolute -inset-8 border border-sage/07 rounded-sm pointer-events-none" />
            <div className="w-full h-full bg-gradient-to-br from-moss/40 via-charcoal to-ink/80 relative overflow-hidden">
              <svg viewBox="0 0 400 530" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="glow1" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#2d3b27" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0a0a08" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="glow2" cx="70%" cy="70%" r="50%">
                    <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0a08" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="530" fill="url(#glow1)" />
                <rect width="400" height="530" fill="url(#glow2)" />
                {[60,80,100,120,130].map((r,i) => (
                  <circle key={i} cx="200" cy="265" r={r} stroke="#8a9a7c" strokeWidth="0.5" opacity={0.15+i*0.04} fill="none"/>
                ))}
                {[40,80,120,160,200,240,280,320,360].map((x,i) => (
                  <line key={i} x1={x} y1="0" x2={x} y2="530" stroke="#2d3b27" strokeWidth="0.3" opacity="0.2"/>
                ))}
                {/* Center emblem */}
                <circle cx="200" cy="265" r="55" fill="#141410" stroke="#8a9a7c" strokeWidth="1" opacity="0.9"/>
                <path d="M200 235C190 235 178 248 178 265C178 282 190 295 200 295C200 295 196 283 200 272C204 261 216 265 216 265C216 248 210 235 200 235Z" fill="#7a9e1a" opacity="0.8"/>
                <circle cx="200" cy="252" r="5" fill="#c9a84c" opacity="0.9"/>
                <text x="200" y="310" textAnchor="middle" fill="#8a9a7c" fontSize="10" fontFamily="monospace" opacity="0.7">BIOMIX</text>
                <circle cx="200" cy="265" r="68" stroke="#c9a84c" strokeWidth="0.4" opacity="0.3" strokeDasharray="3 5"/>
                {/* Soil layers at bottom */}
                {["#6b5c47","#4a3520","#2d3b27","#1a1510"].map((col,i) => (
                  <rect key={i} x={80+i*3} y={430+i*10} width={240-i*6} height={7} rx="1" fill={col} opacity={0.5+i*0.12}/>
                ))}
                <text x="16" y="22" fill="#8a9a7c" fontSize="9" fontFamily="monospace" opacity="0.35">BIOMIX_SOIL</text>
                <text x="16" y="518" fill="#6b5c47" fontSize="9" fontFamily="monospace" opacity="0.3">pH 6.5–7.5</text>
              </svg>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>
          </div>

          {/* Floating spec tag */}
          <div
            data-reveal
            className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-8 bg-charcoal border border-white/08 px-5 py-4 max-w-[200px]"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s 0.3s ease, transform 0.9s 0.3s ease" }}
          >
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-sage mb-1">{t(m.specimen.label, lang)}</div>
            <div className="font-display text-[15px] font-light text-cream">{t(m.specimen.name, lang)}</div>
            <div className="font-mono text-[9px] tracking-[0.12em] text-cream/70 mt-0.5">{m.specimen.sub}</div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <div
            data-reveal
            className="font-mono text-[13px] tracking-[0.16em] uppercase text-sage flex items-center gap-4 mb-10"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <span className="w-12 h-px bg-sage/40" />
            {t(m.eyebrow, lang)}
          </div>

          <h2
            data-reveal
            className="font-display font-light text-[clamp(44px,5.5vw,76px)] leading-[1.0] text-cream mb-8 tracking-[-0.01em]"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            {titles[0]}<br />
            <em className="italic text-gold">{titles[1]}</em><br />
            {titles[2]}<br />
            {titles[3]}
          </h2>

          <div
            data-reveal
            className="space-y-5 mb-12"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <p className="font-sans text-[15px] leading-[1.85] text-cream/90">{t(m.body1, lang)}</p>
            <p className="font-sans text-[15px] leading-[1.85] text-cream/90">{t(m.body2, lang)}</p>
          </div>

          <div
            data-reveal
            className="space-y-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            {m.features[lang].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                <span className="font-sans text-[14px] tracking-wide text-cream/90">{item}</span>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-12"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <a
              href="#process"
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream/85 hover:text-cream flex items-center gap-3 transition-colors duration-300 group w-fit"
            >
              {t(m.cta, lang)}
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
