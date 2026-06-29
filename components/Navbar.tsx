'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLang, t } from '@/lib/lang';
import { c } from '@/lib/content';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = c.nav.links[lang];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 sm:py-6 transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>

        {/* Logo */}
        <Link href='/' className='flex items-center flex-shrink-0'>
          <Image alt='biomix logo' src='/pictures/biomix_logo_final.png' width={130} height={34} className='sm:w-[160px] md:w-[200px]' priority />
        </Link>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-10'>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className='font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-cream/85 hover:text-cream transition-colors duration-300'>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + CTA */}
        <div className='flex items-center gap-2 sm:gap-3'>
          {/* Lang toggle — always visible */}
          <div className='flex items-center border border-white/20 overflow-hidden'>
            <button
              onClick={() => setLang('mn')}
              className={`font-mono text-[10px] sm:text-[11px] tracking-[0.1em] px-2.5 sm:px-3 py-1.5 sm:py-2 transition-all duration-200 ${
                lang === 'mn' ? 'bg-cream text-ink font-medium' : 'text-cream/70 hover:text-cream'
              }`}>
              МН
            </button>
            <div className='w-px h-4 bg-white/20' />
            <button
              onClick={() => setLang('en')}
              className={`font-mono text-[10px] sm:text-[11px] tracking-[0.1em] px-2.5 sm:px-3 py-1.5 sm:py-2 transition-all duration-200 ${
                lang === 'en' ? 'bg-cream text-ink font-medium' : 'text-cream/70 hover:text-cream'
              }`}>
              EN
            </button>
          </div>

          {/* CTA — desktop only */}
          <a href='#products' className='hidden md:inline-block font-mono text-[10px] lg:text-[11px] tracking-[0.12em] uppercase bg-cream text-ink px-4 lg:px-6 py-2.5 sm:py-3 hover:bg-gold transition-colors duration-300 font-light'>
            {t(c.nav.cta, lang)}
          </a>

          {/* Hamburger — mobile only */}
          <button
            className='md:hidden flex flex-col gap-[5px] p-2 ml-1'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'>
            <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`md:hidden fixed inset-0 bg-ink/97 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className='font-display text-[38px] sm:text-[48px] font-light italic text-cream/80 hover:text-cream transition-colors'
            style={{ transitionDelay: `${i * 60}ms` }}>
            {l.label}
          </a>
        ))}

        {/* Lang in mobile menu */}
        <div className='flex items-center border border-white/20 mt-2'>
          {(['mn', 'en'] as const).map((l, i) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-mono text-[11px] tracking-[0.15em] uppercase px-6 py-3 transition-all ${
                lang === l ? 'bg-cream text-ink' : 'text-cream/50'
              } ${i === 0 ? 'border-r border-white/20' : ''}`}>
              {l === 'mn' ? 'МН' : 'EN'}
            </button>
          ))}
        </div>

        <a
          href='#products'
          onClick={() => setMenuOpen(false)}
          className='font-mono text-[11px] tracking-[0.2em] uppercase bg-cream text-ink px-8 py-4 hover:bg-gold transition-colors'>
          {t(c.nav.cta, lang)}
        </a>
      </div>
    </>
  );
}
