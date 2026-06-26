'use client';

import { useState } from 'react'; // нэмнэ
import Image from 'next/image';
import { useLang, t } from '@/lib/lang';
import { c } from '@/lib/content';

export default function Impact() {
  const { lang } = useLang();
  const imp = c.impact;
  const cta = c.cta; // нэмнэ
  const [email, setEmail] = useState(''); // нэмнэ
  const [submitted, setSubmitted] = useState(false); // нэмнэ

  const handleSubmit = (e: React.FormEvent) => {
    // нэмнэ
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id='impact'
      className='py-24 md:py-36 border-t border-white/[0.06] relative'>
      {/* ── Forest background image ── */}

      <Image
        src={'/pictures/bg-forest.jpg'}
        alt='Forest background'
        fill
        className='object-cover object-center'
        style={{ opacity: 0.25 }}
        priority={false}
      />

      {/* ── Dark overlay — текст уншигдахын тулд ── */}
      <div className='absolute inset-0 bg-ink/70' />

      {/* ── Top fade — өмнөх section-тай нийлэхийн тулд ── */}
      <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent' />

      {/* ── Bottom fade — дараагийн section-тай нийлэхийн тулд ── */}
      <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent' />

      {/* ── Бусад бүх контент relative z-10 болгоно ── */}
      <div className='relative z-10'>
        {/* Impact numbers */}
        <div className='px-8 md:px-12 lg:px-16 mb-24 max-w-7xl mx-auto'>
          <div className='font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center gap-4 mb-10'>
            <span className='w-10 h-px bg-sage/40' />
            {t(imp.eyebrow, lang)}
          </div>

          <h2 className='font-display font-light text-[clamp(36px,4.5vw,58px)] leading-[0.95] text-cream tracking-[-0.01em] mb-16 max-w-lg'>
            {imp.title[lang][0]}
            <br />
            <em className='italic text-gold'>{imp.title[lang][1]}</em>
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            {imp.items.map((item, i) => (
              <div key={i} className='border-t border-white/10 pt-6'>
                <div className='font-display font-light text-[52px] leading-none text-cream mb-1'>
                  {item.value}
                  <span className='text-gold text-[22px] ml-1'>
                    {item.unit}
                  </span>
                </div>
                <p className='font-sans text-[11px] leading-[1.7] text-cream/40 mt-2'>
                  {t(item.label, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee testimonials */}
        <div className='overflow-hidden border-y border-white/[0.06] py-px bg-charcoal'>
          <div
            className='flex gap-0'
            style={{
              width: 'max-content',
              animation: 'marquee 35s linear infinite'
            }}>
            {[...imp.testimonials, ...imp.testimonials].map((t2, i) => (
              <div
                key={i}
                className='w-[340px] md:w-[420px] flex-shrink-0 px-8 md:px-12 py-10 border-r border-white/[0.06]'>
                <p className='font-display font-light text-[16px] leading-[1.6] text-cream/70 italic mb-6'>
                  &ldquo;{t(t2.quote, lang)}&rdquo;
                </p>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-px bg-sage/40' />
                  <div>
                    <div className='font-sans text-[12px] font-medium text-cream'>
                      {t2.author}
                    </div>
                    <div className='font-mono text-[9px] tracking-[0.12em] uppercase text-muted'>
                      {t(t2.role, lang)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CTA — зургийн дээр шууд ═══ */}
      <div className='relative z-10 border-t border-white/10 mt-0 border-t border-white/[0.06] '>
        <div className='px-6 md:px-10 py-28 md:py-40 text-center max-w-3xl mx-auto'>
          <div className='font-mono text-[10px] tracking-[0.22em] uppercase text-sage flex items-center justify-center gap-4 mb-8'>
            <span className='w-8 h-px bg-sage/40' />
            {t(cta.eyebrow, lang)}
            <span className='w-8 h-px bg-sage/40' />
          </div>

          <h2 className='font-display font-light text-[clamp(38px,5vw,68px)] leading-[0.92] text-cream tracking-[-0.02em] mb-6'>
            {cta.title[lang][0]}
            <br />
            <em className='italic text-gold'>{cta.title[lang][1]}</em>
            <br />
            {cta.title[lang][2]}
          </h2>

          <p className='font-sans text-[13px] leading-[1.85] text-cream/50 mb-12 max-w-md mx-auto'>
            {t(cta.subtitle, lang)}
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col sm:flex-row gap-0 max-w-sm mx-auto'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t(cta.placeholder, lang)}
                required
                className='flex-1 bg-white/[0.06] border border-white/10 px-5 py-4 font-mono text-[11px] tracking-wider text-cream placeholder-cream/25 outline-none focus:border-sage/50 transition-all duration-300'
              />
              <button
                type='submit'
                className='bg-cream text-ink font-mono text-[10px] tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold transition-colors duration-300 flex-shrink-0 font-light'>
                {t(cta.btn, lang)}
              </button>
            </form>
          ) : (
            <div className='flex items-center justify-center gap-4 py-4'>
              <div className='w-2 h-2 rounded-full bg-sage' />
              <span className='font-mono text-[11px] tracking-[0.15em] uppercase text-sage'>
                {t(cta.success, lang)}
              </span>
            </div>
          )}

          <p className='font-mono text-[9px] tracking-[0.12em] uppercase text-cream/20 mt-6'>
            {t(cta.fine, lang)}
          </p>
        </div>
      </div>

      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </section>
  );
}
