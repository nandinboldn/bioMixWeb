"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Lionfish Bifold",
    species: "Pterois volitans",
    region: "Florida Gulf",
    price: "$340",
    tag: "Bestseller",
    color: "Amber",
    description: "Hand-stitched wallet from Atlantic lionfish skin. Each piece uniquely patterned by nature.",
    pattern: "scales",
  },
  {
    id: 2,
    name: "Python Clutch",
    species: "Python bivittatus",
    region: "Everglades, FL",
    price: "$680",
    tag: "Limited",
    color: "Sage",
    description: "Minimalist clutch crafted from Burmese python — one of Florida's most destructive invasives.",
    pattern: "diamond",
  },
  {
    id: 3,
    name: "Carp Card Sleeve",
    species: "Cyprinus carpio",
    region: "Great Lakes",
    price: "$145",
    tag: "New",
    color: "Earth",
    description: "Slim card holder from common carp hide. Surprisingly supple, remarkably durable.",
    pattern: "ring",
  },
  {
    id: 4,
    name: "Nutria Tote",
    species: "Myocastor coypus",
    region: "Louisiana Delta",
    price: "$890",
    tag: null,
    color: "Moss",
    description: "Spacious tote in rich nutria leather. Water-resistant, naturally aged, endlessly versatile.",
    pattern: "smooth",
  },
];

const patterns = {
  scales: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5].map(row => [0,1,2,3].map(col => (
        <ellipse key={`${row}-${col}`} cx={25 + col * 50 + (row % 2) * 25} cy={30 + row * 44}
          rx="22" ry="28" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35" />
      )))}
      <ellipse cx="100" cy="130" rx="70" ry="100" stroke="currentColor" strokeWidth="0.3" opacity="0.1" />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5,6].map(row => [0,1,2,3,4].map(col => (
        <rect key={`${row}-${col}`}
          x={col * 44 - 5 + (row % 2) * 22} y={row * 38 - 5}
          width="18" height="18" rx="1"
          transform={`rotate(45 ${col * 44 + 4 + (row % 2) * 22} ${row * 38 + 4})`}
          stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
      )))}
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[50, 80, 100, 110, 115].map((r, i) => (
        <circle key={i} cx="100" cy="130" r={r} stroke="currentColor" strokeWidth="0.4" opacity={0.15 + i * 0.04} />
      ))}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="100" y1="130"
          x2={100 + 120 * Math.cos(i * Math.PI * 2 / 5)}
          y2={130 + 120 * Math.sin(i * Math.PI * 2 / 5)}
          stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
      ))}
    </svg>
  ),
  smooth: (
    <svg viewBox="0 0 200 260" fill="none" className="w-full h-full">
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1="0" y1={30 + i * 32} x2="200" y2={35 + i * 32}
          stroke="currentColor" strokeWidth="0.4" opacity="0.15" strokeDasharray="12 20 40 8" />
      ))}
      <path d="M0 130 Q50 100 100 130 Q150 160 200 130" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 md:py-36 px-8 md:px-12 lg:px-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-6">
              <span>02</span>
              <span className="w-10 h-px bg-sage/40" />
              <span>The Collection</span>
            </div>
            <h2 className="font-display font-light text-[clamp(36px,4.5vw,60px)] leading-[0.95] text-cream tracking-[-0.01em]">
              Each piece tells a
              <br />
              <em className="italic text-gold">restoration story.</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40 hover:text-cream flex items-center gap-3 transition-colors duration-300 group self-start md:self-auto mb-2"
          >
            View all
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-ink relative group cursor-none"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product visual */}
              <div className={`aspect-[3/4] relative overflow-hidden bg-gradient-to-b ${bgMap[product.color]} to-charcoal`}>
                {/* Pattern illustration */}
                <div className={`absolute inset-0 ${colorMap[product.color]} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}>
                  {patterns[product.pattern as keyof typeof patterns]}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.15em] uppercase bg-charcoal/80 backdrop-blur-sm text-cream/70 px-3 py-1.5 border border-white/08">
                    {product.tag}
                  </div>
                )}

                {/* Reveal info on hover */}
                <div className={`absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400`}>
                  <p className="font-sans text-[11px] leading-[1.7] text-cream/60">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Product info */}
              <div className="p-5 border-t border-white/[0.06]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-sans font-medium text-[14px] text-cream mb-0.5">{product.name}</h3>
                    <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">{product.species}</div>
                  </div>
                  <div className="font-display text-[18px] font-light text-cream">{product.price}</div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-sage">{product.region}</div>
                  <button className="font-mono text-[9px] tracking-[0.15em] uppercase text-cream/40 hover:text-cream transition-colors duration-300 group/btn flex items-center gap-1.5">
                    Add
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
