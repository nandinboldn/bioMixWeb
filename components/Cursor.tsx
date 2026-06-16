'use client';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const coreRef = useRef<HTMLDivElement>(null);
  const sightRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const [mounted, setMounted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const core = coreRef.current;
    const sight = sightRef.current;
    const circle = circleRef.current;
    if (!core || !sight || !circle) return;

    const RADIUS = 18;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    circle.style.strokeDasharray = `${CIRCUMFERENCE}`;
    circle.style.strokeDashoffset = `${CIRCUMFERENCE}`;

    let mx = -100,
      my = -100;
    let sx = -100,
      sy = -100;
    let raf: number;

    // Show cursor immediately on first mouse move
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      core.style.opacity = '1';
      sight.style.opacity = '1';
    };

    const lerp = () => {
      // Snap core instantly
      core.style.left = `${mx}px`;
      core.style.top = `${my}px`;

      // Lerp ring
      sx += (mx - sx) * 0.12;
      sy += (my - sy) * 0.12;
      sight.style.left = `${sx}px`;
      sight.style.top = `${sy}px`;

      raf = requestAnimationFrame(lerp);
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setScrollPct(pct);

      // Stroke dashoffset
      const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
      circle.style.strokeDashoffset = `${offset}`;

      // Color transition: desert amber → acid green
      // Amber:  232, 114, 28
      // Green:  122, 158, 26
      const t = pct / 100;
      const r = Math.round(232 + (122 - 232) * t); // 232 → 122
      const g = Math.round(114 + (158 - 114) * t); // 114 → 158
      const b = Math.round(28 + (26 - 28) * t); //  28 →  26

      const color = `rgb(${r}, ${g}, ${b})`;
      circle.style.stroke = color;
      core.style.background = color;
    };
    const onOver = (e: MouseEvent) => {
      const hovering = !!(e.target as Element).closest(
        'a, button, [data-hover]'
      );
      core.classList.toggle('hovering', hovering);
      sight.classList.toggle('hovering', hovering);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Core dot */}
      <div
        ref={coreRef}
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          background: '#e8721c',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          mixBlendMode: 'screen',
          transition: 'width 0.2s, height 0.2s, background 0.2s'
        }}
        className='cursor-core'
      />

      {/* Ring */}
      <div
        ref={sightRef}
        style={{
          position: 'fixed',
          width: '56px',
          height: '56px',
          pointerEvents: 'none',
          zIndex: 999998,
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
        className='cursor-sight'>
        {/* SVG progress ring */}
        <svg
          width='56'
          height='56'
          viewBox='0 0 56 56'
          style={{
            position: 'absolute',
            inset: 0,
            transform: 'rotate(-90deg)',
            overflow: 'visible',
            pointerEvents: 'none'
          }}>
          {/* Track */}
          <circle
            cx='28'
            cy='28'
            r='18'
            fill='none'
            stroke='rgba(232,114,28,0.15)'
            strokeWidth='1.5'
          />
          {/* Progress arc */}
          <circle
            ref={circleRef}
            cx='28'
            cy='28'
            r='18'
            fill='none'
            stroke='#e8721c'
            strokeWidth='1.5'
            strokeLinecap='round'
            style={{ transition: 'stroke-dashoffset 0.08s linear' }}
          />
        </svg>

        {/* % label */}
        {/* <div
          style={{
            position: 'absolute',
            top: '-18px',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            fontFamily: 'monospace',
            fontSize: '8px',
            letterSpacing: '0.15em',
            color: 'rgba(232,114,28,0.8)',
            whiteSpace: 'nowrap'
          }}>
          {scrollPct}%
        </div> */}
      </div>
    </>
  );
}
