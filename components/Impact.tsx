"use client";

import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

export default function Impact() {
  const { lang } = useLang();
  const imp = c.impact;

  return (
    <section id="impact" className="py-24 md:py-36 border-t border-white/[0.06]">
      {/* Impact numbers */}
      <div className="px-8 md:px-12 lg:px-16 mb-24 max-w-7xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-10">
          <span className="w-10 h-px bg-sage/40" />
          {t(imp.eyebrow, lang)}
        </div>

        <h2 className="font-display font-light text-[clamp(36px,4.5vw,58px)] leading-[0.95] text-cream tracking-[-0.01em] mb-16 max-w-lg">
          {imp.title[lang][0]}<br />
          <em className="italic text-gold">{imp.title[lang][1]}</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {imp.items.map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <div className="font-display font-light text-[52px] leading-none text-cream mb-1">
                {item.value}<span className="text-gold text-[22px] ml-1">{item.unit}</span>
              </div>
              <p className="font-sans text-[11px] leading-[1.7] text-cream/40 mt-2">{t(item.label, lang)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee testimonials */}
      <div className="overflow-hidden border-y border-white/[0.06] py-px bg-charcoal">
        <div className="flex gap-0" style={{ width: "max-content", animation: "marquee 35s linear infinite" }}>
          {[...imp.testimonials, ...imp.testimonials].map((t2, i) => (
            <div key={i} className="w-[340px] md:w-[420px] flex-shrink-0 px-8 md:px-12 py-10 border-r border-white/[0.06]">
              <p className="font-display font-light text-[16px] leading-[1.6] text-cream/70 italic mb-6">
                &ldquo;{t(t2.quote, lang)}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-sage/40" />
                <div>
                  <div className="font-sans text-[12px] font-medium text-cream">{t2.author}</div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{t(t2.role, lang)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </section>
  );
}
