'use client';

import { useEffect, useRef } from 'react';
import { useLang, t } from '@/lib/lang';
import { c } from '@/lib/content';

export default function Hero() {
  const { lang } = useLang();
  const hero = c.hero;
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    title.style.opacity = '0';
    title.style.transform = 'translateY(40px)';
    const tid = setTimeout(() => {
      title.style.transition = 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(tid);
  }, []);

  const titles = hero.title[lang];

  return (
    <section className='relative min-h-screen flex flex-col justify-end overflow-hidden'>
      {/* Decorative SVG — desktop only */}
      <div className='hidden md:block absolute right-0 top-0 w-[55%] h-full opacity-20 pointer-events-none'>
        <svg viewBox='0 0 600 800' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full object-cover'>
          <ellipse cx='400' cy='200' rx='250' ry='350' stroke='#8a9a7c' strokeWidth='0.5' opacity='0.4' />
          <ellipse cx='350' cy='250' rx='180' ry='280' stroke='#c9a84c' strokeWidth='0.5' opacity='0.3' />
          <circle cx='380' cy='400' r='300' stroke='#2d3b27' strokeWidth='1' opacity='0.5' />
          <circle cx='380' cy='400' r='240' stroke='#2d3b27' strokeWidth='0.5' opacity='0.3' />
          <line x1='380' y1='0' x2='380' y2='800' stroke='#8a9a7c' strokeWidth='0.3' opacity='0.2' strokeDasharray='4 8' />
          <line x1='0' y1='400' x2='600' y2='400' stroke='#8a9a7c' strokeWidth='0.3' opacity='0.2' strokeDasharray='4 8' />
        </svg>
      </div>

      {/* Floating orbs — desktop only */}
      <div className='hidden md:block absolute top-1/4 right-[30%] w-64 h-64 rounded-full bg-moss/20 blur-[80px] animate-float pointer-events-none' />
      <div className='hidden md:block absolute top-1/2 right-[15%] w-48 h-48 rounded-full bg-gold/10 blur-[60px] animate-float [animation-delay:2s] pointer-events-none' />

      {/* Content */}
      <div className='relative z-10 px-5 sm:px-8 md:px-12 lg:px-16 pb-16 sm:pb-20 md:pb-28 pt-24 sm:pt-0 max-w-[95vw] sm:max-w-[800px]'>

        {/* Eyebrow — single line, no wrap */}
        <div className='flex items-center gap-3 mb-5 sm:mb-7' style={{ animation: 'fadeSlideUp 0.8s 0.4s both' }}>
          <span className='block w-6 sm:w-10 h-px bg-sage/60 flex-shrink-0' />
          <span className='font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.22em] uppercase text-sage font-medium whitespace-nowrap overflow-hidden text-ellipsis'>
            {t(hero.eyebrow, lang)}
          </span>
        </div>

        {/* Title — mobile much smaller */}
        <h1
          ref={titleRef}
          className='font-display font-light leading-[0.93] tracking-[-0.01em] text-cream mb-6 sm:mb-8'
          style={{ fontSize: 'clamp(42px, 11vw, 120px)' }}
        >
          {titles[0]}
          <br />
          <em className='italic text-gradient-gold'>{titles[1]}</em>
          <br />
          {titles[2]}
        </h1>

        {/* Description */}
        <p
          className='font-sans text-[13px] sm:text-[15px] leading-[1.75] text-cream/90 max-w-[340px] sm:max-w-[420px] mb-8 sm:mb-10 font-normal'
          style={{ animation: 'fadeSlideUp 0.8s 0.8s both' }}
        >
          {t(hero.desc, lang)}
        </p>

        {/* CTAs */}
        <div
          className='flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8'
          style={{ animation: 'fadeSlideUp 0.8s 1s both' }}
        >
          <a
            href='#products'
            className='font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase bg-cream text-ink px-6 sm:px-8 py-3 sm:py-4 hover:bg-gold transition-colors duration-300 font-light w-full sm:w-auto text-center sm:text-left'
          >
            {t(hero.cta1, lang)}
          </a>
          <a
            href='#mission'
            className='font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-cream/90 hover:text-cream flex items-center gap-2 transition-colors duration-300 group'
          >
            {t(hero.cta2, lang)}
            <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator — hidden on small phones */}
      <div className='hidden sm:flex absolute bottom-8 sm:bottom-10 right-5 sm:right-12 z-10 flex-col items-center gap-3'>
        <span className='font-mono text-[9px] tracking-[0.25em] uppercase text-cream/70 [writing-mode:vertical-rl]'>Scroll</span>
        <div className='w-px h-10 sm:h-14 bg-gradient-to-b from-cream/30 to-transparent animate-scroll-line' />
      </div>

      <style>{`
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
}
