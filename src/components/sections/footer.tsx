"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#portfolio",    label: "Portfólio" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing",      label: "Planos" },
  { href: "https://instagram.com/yellowman", label: "Instagram", external: true },
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/30 overflow-hidden">
      {/* Atmospheric bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_50%_100%,oklch(0.83_0.19_93_/_0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Main CTA block */}
        <div className="py-20 border-b border-border/30 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="section-label mb-4">Pronto para começar?</p>
            <h2
              className="font-display font-400 text-foreground leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              Bora gravar?<br />
              <span className="text-primary">Comece a brilhar.</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://wa.me/55552123420309", "_blank")}
            className="group relative flex-shrink-0 font-heading font-700 tracking-[0.15em] uppercase text-sm text-primary border border-primary/70 px-10 py-5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 self-start md:self-end"
          >
            Falar com Especialista
            <span className="absolute inset-0 border border-primary/20 translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="/10.png"
            alt="Yellowman"
            className="h-8 w-auto opacity-70"
          />

          <nav className="flex flex-wrap justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                className="font-heading text-[0.6rem] font-600 tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="font-heading text-[0.6rem] tracking-[0.2em] text-muted-foreground/40 uppercase">
            © {new Date().getFullYear()} Yellowman
          </p>
        </div>
      </div>
    </footer>
  );
}
