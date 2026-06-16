import Link from "next/link";

const footerLinks = {
  Shop: ["Lionfish Collection", "Python Goods", "Carp Leather", "Nutria Goods", "Gift Cards"],
  Mission: ["Our Story", "Conservation Partners", "Impact Reports", "Field Notes", "Press"],
  Support: ["Sizing & Care", "Shipping", "Returns", "FAQ", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/[0.06]">
      {/* Top section */}
      <div className="px-8 md:px-12 lg:px-16 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="font-sans font-extrabold text-[16px] tracking-[0.35em] text-cream uppercase mb-4">
              TERRAVA
            </div>
            <p className="font-sans text-[12px] leading-[1.85] text-cream/40 max-w-[260px] mb-8">
              Ethical exotics crafted from invasive species — restoring
              ecosystems one piece at a time.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {["IG", "TW", "YT", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-[9px] tracking-[0.15em] text-cream/30 hover:text-sage transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-sage mb-5">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-[12px] text-cream/35 hover:text-cream/70 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] px-8 md:px-12 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-cream/20">
            © {new Date().getFullYear()} TERRAVA. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono text-[9px] tracking-[0.12em] uppercase text-cream/20 hover:text-cream/50 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
