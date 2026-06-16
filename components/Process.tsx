"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Field Removal",
    desc: "Trained restoration crews and wildlife agencies remove invasive species directly from vulnerable ecosystems — lionfish speared on reefs, pythons tracked in swamps, carp netted from rivers.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path d="M16 32 L24 16 L32 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <path d="M19 27 L29 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="14" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Ethical Processing",
    desc: "Hides are processed at certified tanneries using low-impact, plant-based methods. No chrome, no heavy metals. Every step traced and documented.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path d="M14 24 Q20 16 24 24 Q28 32 34 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Artisan Craft",
    desc: "Skilled leatherworkers transform each unique hide into a piece that carries its origin story. Imperfections are features — proof of provenance.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <rect x="14" y="18" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <path d="M18 22 L30 22 M18 25.5 L30 25.5 M18 29 L26 29" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M24 12 L24 18" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Verified Impact",
    desc: "A QR code on every product links to live data: which species, which ecosystem, how many removed. Your purchase, made visible.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <path d="M16 28 L20 32 L32 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      </svg>
    ),
  },
];

export default function Process() {
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

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-36 px-8 md:px-12 lg:px-16 bg-charcoal border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div
            data-reveal
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-6"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <span>03</span>
            <span className="w-10 h-px bg-sage/40" />
            <span>The Process</span>
          </div>
          <h2
            data-reveal
            className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[0.95] text-cream tracking-[-0.01em] max-w-xl"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease" }}
          >
            From invasive
            <br />
            to <em className="italic text-gold">invaluable.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-reveal
              className="bg-charcoal p-8 relative group hover:bg-moss/10 transition-colors duration-500"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `opacity 0.8s ${i * 0.1}s ease, transform 0.8s ${i * 0.1}s ease, background-color 0.5s ease`,
              }}
            >
              {/* Number */}
              <div className="font-mono text-[11px] tracking-[0.2em] text-sage/40 mb-8">{step.num}</div>

              {/* Icon */}
              <div className="text-sage mb-6 group-hover:text-gold transition-colors duration-400">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-sans font-medium text-[15px] text-cream mb-3">{step.title}</h3>
              <p className="font-sans text-[12px] leading-[1.8] text-cream/45 font-normal">{step.desc}</p>

              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[72px] right-0 w-px h-12 bg-gradient-to-b from-sage/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          data-reveal
          className="mt-16 p-8 md:p-10 border border-sage/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s 0.5s ease, transform 0.8s 0.5s ease" }}
        >
          <div>
            <p className="font-display text-[22px] font-light text-cream mb-1">
              Curious about traceability?
            </p>
            <p className="font-sans text-[12px] text-cream/45 leading-relaxed">
              Every product ships with a unique origin certificate and live data dashboard.
            </p>
          </div>
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.18em] uppercase bg-sage/15 border border-sage/25 text-sage px-8 py-4 hover:bg-sage hover:text-ink transition-all duration-300 flex-shrink-0"
          >
            See a sample report
          </a>
        </div>
      </div>
    </section>
  );
}
