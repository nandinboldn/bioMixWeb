'use client';
import { useLang, t } from '@/lib/lang';
import { c } from '@/lib/content';

export default function StatsBar() {
  const { lang } = useLang();
  return (
    <div className="border-y border-white/[0.06] bg-charcoal">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {c.stats.items.map((stat, i) => (
          <div key={i}
            className="px-8 md:px-10 py-9 border-r border-white/[0.06] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r group hover:bg-white/[0.02] transition-colors duration-300">
            <div className="font-display font-light text-[44px] leading-none text-cream mb-1">
              {stat.number}<span className="text-gold text-[24px]">{stat.unit}</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted mt-1">
              {t(stat.label, lang)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
