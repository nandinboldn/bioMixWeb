"use client";

import { useState } from "react";
import { useLang, t } from "@/lib/lang";
import { c } from "@/lib/content";

const patterns = {
  scales: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5].map(row => [0,1,2,3].map(col => (
        <ellipse key={`${row}-${col}`} cx={25+col*50+(row%2)*25} cy={30+row*44} rx="22" ry="28"
          stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
      )))}
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4].map(col => (
        <rect key={`${row}-${col}`}
          x={col*44-5+(row%2)*22} y={row*38-5} width="18" height="18" rx="1"
          transform={`rotate(45 ${col*44+4+(row%2)*22} ${row*38+4})`}
          stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      )))}
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[50,80,100,110,115].map((r,i) => (
        <circle key={i} cx="100" cy="130" r={r} stroke="currentColor" strokeWidth="0.4" opacity={0.15+i*0.04} />
      ))}
    </svg>
  ),
  smooth: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1="0" y1={30+i*32} x2="200" y2={35+i*32}
          stroke="currentColor" strokeWidth="0.4" opacity="0.15" strokeDasharray="12 20 40 8" />
      ))}
    </svg>
  ),
};

const colorMap: Record<string, string> = {
  Amber: "text-gold",
  Sage: "text-sage",
  Earth: "text-earth",
  Moss: "text-moss",
};

const bgMap: Record<string, string> = {
  Amber: "from-gold/10",
  Sage: "from-sage/10",
  Earth: "from-earth/10",
  Moss: "from-moss/20",
};

export default function Products() {
  const { lang } = useLang();
  const p = c.products;
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-14 sm:py-24 md:py-36 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-sage flex items-center gap-3 mb-4 sm:mb-6">
              <span>{t(p.eyebrow, lang)}</span>
            </div>
            <h2 className="font-display font-light text-[clamp(30px,7vw,72px)] leading-[0.95] text-cream tracking-[-0.01em]">
              {p.title[lang][0]}<br />
              <em className="italic text-gold">{p.title[lang][1]}</em><br />
              {p.title[lang][2]}
            </h2>
          </div>
          <div className="text-right">
            <p className="font-sans text-[12px] text-cream/80 italic mb-3 max-w-xs">{t(p.subtitle, lang)}</p>
            <a href="#" className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/80 hover:text-cream flex items-center gap-3 transition-colors duration-300 group justify-end">
              {t(p.viewAll, lang)}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {p.items.map((product) => (
            <div
              key={product.id}
              className="bg-ink relative group cursor-none"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`aspect-[3/4] relative overflow-hidden bg-gradient-to-b ${bgMap[product.color]} to-charcoal`}>
                <div className={`absolute inset-0 ${colorMap[product.color]} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}>
                  {patterns[product.pattern as keyof typeof patterns]}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {product.tag && (
                  <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.15em] uppercase bg-charcoal/80 backdrop-blur-sm text-cream/70 px-3 py-1.5 border border-white/08">
                    {t(product.tag, lang)}
                  </div>
                )}
                <div className={`absolute inset-0 bg-ink/85 flex items-center justify-center p-5 transition-opacity duration-400 ${hoveredId===product.id ? "opacity-100" : "opacity-0"}`}>
                  <p className="font-sans text-[13px] leading-[1.75] text-cream/90 text-center">{t(product.description, lang)}</p>
                </div>
              </div>

              <div className="p-5 border-t border-white/[0.06]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-sans font-medium text-[15px] sm:text-[17px] text-cream mb-0.5">{t(product.name, lang)}</h3>
                    <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-cream/85">{t(product.species, lang)}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-sage">{t(product.region, lang)}</div>
                  <button className="font-mono text-[9px] tracking-[0.15em] uppercase text-cream/80 hover:text-cream transition-colors duration-300 group/btn flex items-center gap-1.5">
                    {lang === 'mn' ? 'Захиалах' : 'Order'}
                    <span className="group-hover/btn:translate-x-0.5 transition-transform">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
