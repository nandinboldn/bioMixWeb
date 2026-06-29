"use client";
import { useEffect, useState } from "react";

export default function BackgroundTransition() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // 25%–80% scroll-д transition явагдана
  const start = 0.25;
  const end = 0.80;
  let t = 0;
  if (progress > start) {
    t = Math.min((progress - start) / (end - start), 1);
  }
  // Ease in-out cubic
  const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Desert зураг — үргэлж доор байна */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pictures/bg-desert.jpg')" }}
      />

      {/* Forest зураг — scroll-оор fade in */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pictures/bg-forest.jpg')",
          opacity: eased,
        }}
      />

      {/* Warm → cool color tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(139,80,20,${0.28 * (1 - eased)}),
            rgba(30,60,20,${0.22 * eased})
          )`,
        }}
      />

      {/* Dark overlay — текст уншигдахын тулд */}
      <div className="absolute inset-0 bg-ink/45" />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/75 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/75 to-transparent" />

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(10,10,8,0.65) 100%)",
        }}
      />
    </div>
  );
}
