"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#process", label: "Processo" },
  { href: "#pricing", label: "Planos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "border-b border-border/40 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8 md:px-16">
          {/* Logo */}
          <img
            src="/10.png"
            alt="Yellowman"
            className="h-10 w-auto"
          />

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-[0.65rem] font-600 tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/55552123420309?text=Quero%20saber%20sobre%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeos",
                  "_blank"
                )
              }
              className="hidden sm:block font-heading text-[0.65rem] font-700 tracking-[0.25em] uppercase border border-primary/60 text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Falar Agora
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-16 inset-x-0 z-40 border-b border-border/30 bg-background/98 backdrop-blur-xl md:hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-sm font-700 tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors py-3 border-b border-border/20 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://wa.me/55552123420309?text=Quero%20saber%20sobre%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeos", "_blank");
                }}
                className="mt-4 w-full font-heading text-sm font-700 tracking-[0.2em] uppercase border border-primary text-primary py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Falar com Especialista
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
