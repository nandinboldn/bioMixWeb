# TERRAVA — Inversa-Inspired Next.js Website

A premium, nature-meets-technology landing page inspired by the Inversa brand aesthetic. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Design Direction

- **Dark, high-contrast** — deep ink backgrounds with cream text and gold accents
- **Nature + technology** — organic SVG illustrations, invasive species motifs, technical details
- **Editorial typography** — Cormorant Garamond display font paired with Syne sans and DM Mono
- **Scroll-driven reveals** — IntersectionObserver-powered staggered animations
- **Custom cursor** — dot + ring cursor with hover states
- **Film grain overlay** — subtle noise texture for depth

## Sections

1. **Navbar** — Fixed, transparent-to-frosted on scroll, mobile hamburger menu
2. **Hero** — Full-viewport, editorial headline, decorative SVG illustration
3. **Stats Bar** — 4-column impact numbers
4. **Mission** — Two-column layout with specimen illustration card
5. **Products** — 4-column grid with hover reveals and unique SVG patterns per product
6. **Process** — 4-step how-it-works with icon illustrations
7. **Impact** — Large numbers + scrolling marquee testimonials
8. **CTA Banner** — Newsletter signup with email input
9. **Footer** — Multi-column links + social + legal

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Customization

### Colors (`tailwind.config.ts`)
```ts
colors: {
  ink: "#0a0a08",       // Primary background
  charcoal: "#141410",  // Secondary background
  cream: "#f2ede4",     // Primary text
  sage: "#8a9a7c",      // Accent green
  gold: "#c9a84c",      // Accent gold
  moss: "#2d3b27",      // Deep green
  earth: "#6b5c47",     // Brown accent
  muted: "#6e6b62",     // Muted text
}
```

### Fonts
- **Display**: Cormorant Garamond (Google Fonts)
- **Sans**: Syne (Google Fonts)
- **Mono**: DM Mono (Google Fonts)

### Adding Real Images
Replace the SVG illustrations in `Mission.tsx` and `Hero.tsx` with `<Image>` components from `next/image`:
```tsx
import Image from "next/image";
<Image src="/your-image.jpg" alt="..." fill className="object-cover opacity-40" />
```

### Product Data
Edit the `products` array in `components/Products.tsx` to add/change products.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | Framework + routing |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility styling |
| Framer Motion | 11 | (installed, ready to use for enhanced animations) |
| Google Fonts | — | Cormorant, Syne, DM Mono |

## File Structure

```
terrava/
├── app/
│   ├── globals.css        # Tailwind directives + grain/cursor CSS
│   ├── layout.tsx         # Root layout with font setup
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── Cursor.tsx         # Custom cursor (client component)
│   ├── Navbar.tsx         # Fixed navigation
│   ├── Hero.tsx           # Full-viewport hero section
│   ├── StatsBar.tsx       # Impact statistics row
│   ├── Mission.tsx        # Mission + specimen illustration
│   ├── Products.tsx       # Product grid with hover effects
│   ├── Process.tsx        # 4-step process section
│   ├── Impact.tsx         # Impact data + marquee testimonials
│   ├── CtaBanner.tsx      # Newsletter signup CTA
│   └── Footer.tsx         # Site footer
├── tailwind.config.ts     # Theme colors + fonts + animations
├── next.config.mjs        # Next.js config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```
