"use client";

import { useEffect, useRef } from "react";

export default function Mission() {
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

  return (
    <section id="mission" ref={sectionRef} className="py-28 md:py-40 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* Visual side */}
        <div className="relative order-2 lg:order-1">
          {/* Main visual card */}
          <div
            data-reveal
            className="relative aspect-[3/4] max-w-[420px] mx-auto lg:mx-0"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-sage/15 rounded-sm pointer-events-none" />
            <div className="absolute -inset-8 border border-sage/07 rounded-sm pointer-events-none" />

            {/* SVG Illustration - invasive fish / nature motif */}
            <div className="w-full h-full bg-gradient-to-br from-moss/40 via-charcoal to-ink/80 relative overflow-hidden">
              <svg viewBox="0 0 400 530" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Background gradient shapes */}
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

                {/* Abstract fish silhouette */}
                <g opacity="0.7">
                  <path d="M80 260 Q160 180 280 200 Q340 210 370 260 Q340 310 280 320 Q160 340 80 260Z" fill="#2d3b27" stroke="#8a9a7c" strokeWidth="0.5" />
                  <path d="M80 260 Q50 230 30 200 Q50 260 30 320 Q50 295 80 260Z" fill="#2d3b27" stroke="#8a9a7c" strokeWidth="0.5" />
                  {/* Eye */}
                  <circle cx="310" cy="248" r="10" fill="#c9a84c" opacity="0.6" />
                  <circle cx="310" cy="248" r="5" fill="#0a0a08" />
                  {/* Scales pattern */}
                  {[0,1,2,3,4,5].map(row =>
                    [0,1,2,3,4].map(col => {
                      const x = 110 + col * 38 + (row % 2) * 19;
                      const y = 225 + row * 22;
                      if (x > 340 || y > 310) return null;
                      return (
                        <ellipse key={`${row}-${col}`} cx={x} cy={y} rx="17" ry="13"
                          fill="none" stroke="#8a9a7c" strokeWidth="0.4" opacity="0.5" />
                      );
                    })
                  )}
                </g>

                {/* Water / environment lines */}
                {[0,1,2,3,4,5,6].map(i => (
                  <line key={i} x1="0" y1={380 + i * 22} x2="400" y2={385 + i * 22}
                    stroke="#8a9a7c" strokeWidth="0.4" opacity={0.08 + i * 0.02} strokeDasharray="20 40 60 10" />
                ))}

                {/* Plant/reed silhouettes */}
                <g opacity="0.5" stroke="#2d3b27" strokeWidth="1.5" fill="none">
                  <path d="M60 530 Q55 460 70 400 Q80 350 65 290" />
                  <path d="M75 530 Q82 470 78 410 Q72 360 85 310" />
                  <path d="M330 530 Q335 450 320 390 Q310 340 325 280" />
                  <path d="M345 530 Q340 460 350 400 Q358 360 342 300" />
                </g>

                {/* Corner coordinates / technical feel */}
                <text x="16" y="26" fill="#8a9a7c" fontSize="9" fontFamily="monospace" opacity="0.4">37.7749° N</text>
                <text x="16" y="38" fill="#8a9a7c" fontSize="9" fontFamily="monospace" opacity="0.4">122.4194° W</text>
                <text x="290" y="510" fill="#8a9a7c" fontSize="9" fontFamily="monospace" opacity="0.4">SPECIMEN #0042</text>
              </svg>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>
          </div>

          {/* Floating tag */}
          <div
            data-reveal
            className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-8 bg-charcoal border border-white/08 px-5 py-4 max-w-[200px]"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s 0.3s ease, transform 0.9s 0.3s ease" }}
          >
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-sage mb-1">Species</div>
            <div className="font-display text-[15px] font-light text-cream">Pterois volitans</div>
            <div className="font-mono text-[9px] tracking-[0.12em] text-muted mt-0.5">Lionfish · Atlantic</div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <div
            data-reveal
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-10"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <span>01</span>
            <span className="w-12 h-px bg-sage/40" />
            <span>Our Mission</span>
          </div>

          <h2
            data-reveal
            className="font-display font-light text-[clamp(38px,5vw,64px)] leading-[1.0] text-cream mb-8 tracking-[-0.01em]"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            Nature's problem
            <br />
            <em className="italic text-gold">becomes</em>
            <br />
            nature's cure.
          </h2>

          <div
            data-reveal
            className="space-y-5 mb-12"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            <p className="font-sans text-[13px] leading-[1.85] text-cream/55">
              Invasive species cause over $423 billion in global ecological damage
              each year. They outcompete native wildlife, destabilize food chains,
              and push ecosystems to the brink.
            </p>
            <p className="font-sans text-[13px] leading-[1.85] text-cream/55">
              At TERRAVA, we partner with wildlife agencies and restoration crews
              to harvest these invasive species — transforming them into
              extraordinary leather goods. Every purchase directly funds
              continued removal efforts.
            </p>
          </div>

          {/* Feature list */}
          <div
            data-reveal
            className="space-y-4"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          >
            {[
              "Zero synthetic materials",
              "Full ecological traceability",
              "Carbon-neutral tanning process",
              "Direct agency partnerships",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                <span className="font-sans text-[12px] tracking-wide text-cream/60">{item}</span>
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
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream/50 hover:text-cream flex items-center gap-3 transition-colors duration-300 group w-fit"
            >
              See how it works
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
