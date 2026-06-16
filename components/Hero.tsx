'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    title.style.opacity = '0';
    title.style.transform = 'translateY(40px)';
    const t = setTimeout(() => {
      title.style.transition =
        'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className='relative min-h-screen flex flex-col justify-end overflow-hidden'>
      {/* Background layers */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-ink via-charcoal to-moss/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_25%,rgba(45,59,39,0.55)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_15%_85%,rgba(107,92,71,0.25)_0%,transparent_50%)]" /> */}
      {/* Desert video background */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover opacity-40'>
        <source src='/videos/desert-bg.mp4' type='video/mp4' />
      </video>

      {/* Decorative SVG background illustration */}
      <div className='absolute right-0 top-0 w-[55%] h-full opacity-20 pointer-events-none'>
        <svg
          viewBox='0 0 600 800'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full object-cover'>
          {/* Abstract organic shapes */}
          <ellipse
            cx='400'
            cy='200'
            rx='250'
            ry='350'
            stroke='#8a9a7c'
            strokeWidth='0.5'
            opacity='0.4'
          />
          <ellipse
            cx='350'
            cy='250'
            rx='180'
            ry='280'
            stroke='#c9a84c'
            strokeWidth='0.5'
            opacity='0.3'
          />
          <ellipse
            cx='450'
            cy='180'
            rx='120'
            ry='200'
            stroke='#8a9a7c'
            strokeWidth='0.5'
            opacity='0.2'
          />
          <circle
            cx='380'
            cy='400'
            r='300'
            stroke='#2d3b27'
            strokeWidth='1'
            opacity='0.5'
          />
          <circle
            cx='380'
            cy='400'
            r='240'
            stroke='#2d3b27'
            strokeWidth='0.5'
            opacity='0.3'
          />
          {/* Cross hairs */}
          <line
            x1='380'
            y1='0'
            x2='380'
            y2='800'
            stroke='#8a9a7c'
            strokeWidth='0.3'
            opacity='0.2'
            strokeDasharray='4 8'
          />
          <line
            x1='0'
            y1='400'
            x2='600'
            y2='400'
            stroke='#8a9a7c'
            strokeWidth='0.3'
            opacity='0.2'
            strokeDasharray='4 8'
          />
          {/* Fish scale / invasive species motif */}
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2, 3].map(col => (
              <ellipse
                key={`${row}-${col}`}
                cx={200 + col * 60 + (row % 2) * 30}
                cy={150 + row * 55}
                rx='28'
                ry='36'
                stroke='#c9a84c'
                strokeWidth='0.4'
                fill='none'
                opacity='0.15'
              />
            ))
          )}
        </svg>
      </div>

      {/* Right fade overlay */}
      {/* <div className='absolute right-0 top-0 w-[55%] h-full bg-gradient-to-l from-transparent via-ink/30 to-ink pointer-events-none' />
      <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none' /> */}

      {/* Floating accent orbs */}
      <div className='absolute top-1/4 right-[30%] w-64 h-64 rounded-full bg-moss/20 blur-[80px] animate-float pointer-events-none' />
      <div className='absolute top-1/2 right-[15%] w-48 h-48 rounded-full bg-gold/10 blur-[60px] animate-float [animation-delay:2s] pointer-events-none' />

      {/* Main content */}
      <div className='relative z-10 px-8 md:px-12 lg:px-16 pb-20 md:pb-28 max-w-[800px]'>
        {/* Eyebrow */}
        <div
          className='flex items-center gap-4 mb-7 opacity-0 animate-[fadeSlideUp_0.8s_0.4s_forwards]'
          style={{
            animationName: 'fadeSlideUp',
            animationDuration: '0.8s',
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
          <span className='block w-10 h-px bg-sage/60' />
          <span className='font-mono text-[10px] tracking-[0.22em] uppercase text-sage'>
            Where nature restores itself
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className='font-display font-light text-[clamp(60px,9vw,120px)] leading-[0.90] tracking-[-0.02em] text-cream mb-8'>
          Wear the
          <br />
          <em className='italic text-gradient-gold'>solution,</em>
          <br />
          not the
          <br />
          problem.
        </h1>

        {/* Description */}
        <p
          className='font-sans text-[13px] leading-[1.9] text-cream/55 max-w-[360px] mb-10 font-normal'
          style={{ animation: 'fadeSlideUp 0.8s 0.8s both' }}>
          Invasive species devastate ecosystems. We turn that destruction into
          extraordinary leather goods — restoring balance, one hide at a time.
        </p>

        {/* CTAs */}
        <div
          className='flex flex-wrap items-center gap-8'
          style={{ animation: 'fadeSlideUp 0.8s 1s both' }}>
          <a
            href='#products'
            className='font-mono text-[11px] tracking-[0.15em] uppercase bg-cream text-ink px-8 py-4 hover:bg-gold transition-colors duration-300 font-light'>
            Explore Collection
          </a>
          <a
            href='#mission'
            className='font-mono text-[11px] tracking-[0.15em] uppercase text-cream/55 hover:text-cream flex items-center gap-2 transition-colors duration-300 group'>
            Our Mission
            <span className='group-hover:translate-x-1 transition-transform duration-300'>
              →
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 right-10 md:right-12 z-10 flex flex-col items-center gap-3'>
        <span className='font-mono text-[9px] tracking-[0.25em] uppercase text-cream/30 [writing-mode:vertical-rl]'>
          Scroll
        </span>
        <div className='w-px h-14 bg-gradient-to-b from-cream/30 to-transparent animate-scroll-line' />
      </div>

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
