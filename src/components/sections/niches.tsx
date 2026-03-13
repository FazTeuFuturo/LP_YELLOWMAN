"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/magicui/marquee";

const niches = [
  "Odontologia",
  "Estética Avançada",
  "Infoprodutos",
  "Gastronomia",
  "E-commerce",
  "Advocacia",
  "Real Estate",
  "Fitness & Saúde",
  "Tecnologia",
  "Consultoria",
];

export default function NichesSection() {
  return (
    <section id="niches" className="relative py-28 bg-background overflow-hidden">

      {/* Decorative faded word */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-foreground/[0.02] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(10rem, 22vw, 26rem)" }}
        aria-hidden
      >
        nichos
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Especialidades</p>
          <h2
            className="font-display font-400 text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Falamos o idioma<br />
            <span className="text-primary">do seu nicho.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows — typography-first, no borders */}
      <div className="relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s] [--gap:0px] py-2">
          {niches.map((n) => (
            <span
              key={n}
              className="font-heading font-700 uppercase tracking-[0.06em] px-10 text-foreground/40 hover:text-primary transition-colors duration-300 cursor-default"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
            >
              {n}
              <span className="ml-10 text-primary/20 font-300">◆</span>
            </span>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:35s] [--gap:0px] py-2 mt-2">
          {niches.slice().reverse().map((n) => (
            <span
              key={n}
              className="font-heading font-700 uppercase tracking-[0.06em] px-10 text-foreground/20 hover:text-primary/70 transition-colors duration-300 cursor-default"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
            >
              {n}
              <span className="ml-10 text-border font-300">◆</span>
            </span>
          ))}
        </Marquee>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
