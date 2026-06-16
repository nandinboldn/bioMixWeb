"use client";

const testimonials = [
  {
    quote: "Owning a TERRAVA wallet feels genuinely different. It's not just the craft — it's knowing it helped restore a reef.",
    author: "Marina C.",
    role: "Marine Biologist, NOAA",
  },
  {
    quote: "The Python Clutch is the most conversation-starting accessory I own. People are shocked when I explain where it came from.",
    author: "Desiree M.",
    role: "Fashion Editor",
  },
  {
    quote: "As a conservationist, I was skeptical. But their traceability is genuinely impressive — I can see the exact removal event.",
    author: "Dr. James F.",
    role: "Wildlife Ecologist",
  },
  {
    quote: "The leather is extraordinary. Lionfish skin has a texture unlike anything I've worked with in 20 years of leathercraft.",
    author: "Paulo R.",
    role: "Master Leather Artisan",
  },
];

const impactData = [
  { value: "23", unit: "Ecosystems", label: "actively restored through purchases" },
  { value: "4.2M", unit: "lbs", label: "invasive biomass removed to date" },
  { value: "340+", unit: "Jobs", label: "created in restoration communities" },
  { value: "0", unit: "Waste", label: "entire animal utilized, nothing discarded" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 md:py-36 border-t border-white/[0.06]">
      {/* Impact numbers */}
      <div className="px-8 md:px-12 lg:px-16 mb-24 max-w-7xl mx-auto">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-10">
          <span>04</span>
          <span className="w-10 h-px bg-sage/40" />
          <span>Real Impact</span>
        </div>

        <h2 className="font-display font-light text-[clamp(36px,4.5vw,58px)] leading-[0.95] text-cream tracking-[-0.01em] mb-16 max-w-lg">
          The numbers
          <br />
          <em className="italic text-gold">speak clearly.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {impactData.map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6">
              <div className="font-display font-light text-[52px] leading-none text-cream mb-1">
                {item.value}
                <span className="text-gold text-[22px] ml-1">{item.unit}</span>
              </div>
              <p className="font-sans text-[11px] leading-[1.7] text-cream/40 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee testimonials */}
      <div className="overflow-hidden border-y border-white/[0.06] py-px bg-charcoal">
        <div className="flex gap-0 animate-[marquee_30s_linear_infinite]" style={{width: "max-content"}}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[340px] md:w-[420px] flex-shrink-0 px-8 md:px-12 py-10 border-r border-white/[0.06]"
            >
              <p className="font-display font-light text-[16px] leading-[1.6] text-cream/70 italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-sage/40" />
                <div>
                  <div className="font-sans text-[12px] font-medium text-cream">{t.author}</div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
