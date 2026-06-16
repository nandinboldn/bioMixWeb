const stats = [
  { number: "140+", unit: "M", label: "Invasive fish removed" },
  { number: "12", unit: "K", label: "Acres restored" },
  { number: "8", unit: "", label: "Species partners" },
  { number: "100", unit: "%", label: "Traceable supply chain" },
];

export default function StatsBar() {
  return (
    <div className="border-y border-white/[0.06] bg-charcoal">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="px-8 md:px-10 py-9 border-r border-white/[0.06] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r group hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="font-display font-light text-[44px] leading-none text-cream mb-1">
              {stat.number}
              <span className="text-gold text-[24px]">{stat.unit}</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
