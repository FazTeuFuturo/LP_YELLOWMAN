"use client";

import { motion } from "framer-motion";
import WordRotate from "@/components/magicui/word-rotate";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: EASE, delay },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background">

      {/* ── Film frame corners — abaixo da navbar (64px) ── */}
      <div className="pointer-events-none absolute z-20" style={{ top: 72, left: 24, right: 24, bottom: 24 }}>
        <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-primary/60" />
        <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-primary/60" />
        <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-primary/60" />
        <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-primary/60" />
      </div>

      {/* ── Frame index — abaixo da navbar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="absolute left-10 z-20 font-heading text-[0.6rem] tracking-[0.45em] text-primary/50 font-semibold select-none"
        style={{ top: 84 }}
      >
        YMN ° EST. 2014 ° FRAME 001
      </motion.div>

      {/* ── Vertical right label ── */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-20 hidden lg:block select-none">
        <span className="font-heading text-[0.6rem] tracking-[0.5em] text-foreground/[0.07] font-bold uppercase whitespace-nowrap">
          Video Editing Studio · Yellowman
        </span>
      </div>

      {/* ── Background — navy atmospheric ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gold radial warm glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_25%_55%,rgba(254,197,42,0.07),transparent_65%)]" />
        {/* Deep right side shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_85%_50%,rgba(0,0,0,0.25),transparent)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-16 lg:px-24 pt-24 pb-32">
        <div className="max-w-4xl w-full">

          {/* Eyebrow */}
          <motion.p {...fadeUp(0.2)} className="section-label mb-8">
            Edição Cinematográfica · Reels & Shorts
          </motion.p>

          {/* ── Main headline in Rollestix ── */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              className="font-display leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              <span className="block text-foreground">Tu cria.</span>
              <span className="block text-foreground">A gente te</span>
              <span className="block">
                <span className="text-foreground">faz </span>
                <span className="text-primary">
                  <WordRotate
                    words={["crescer.", "vender.", "lucrar.", "faturar.", "escalar."]}
                    className="inline-block text-primary"
                    framerProps={{
                      initial: { opacity: 0, y: -16 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: 16 },
                      transition: { duration: 0.45, ease: "easeInOut" },
                    }}
                  />
                </span>
              </span>
            </motion.div>
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="h-0.5 w-28 bg-primary mb-8"
          />

          {/* Body */}
          <motion.p {...fadeUp(0.75)} className="max-w-md text-muted-foreground leading-relaxed mb-10">
            Recupere até{" "}
            <span className="text-foreground font-medium underline decoration-primary/70 underline-offset-4">
              15 horas do seu mês
            </span>{" "}
            com vídeos editados em 72h — qualidade de cinema, sem tocar em um app de edição.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.9)} className="flex flex-wrap items-center gap-6 mb-16">
            <button
              onClick={() => window.open("https://wa.me/55552123420309", "_blank")}
              className="group relative font-heading font-bold tracking-[0.15em] uppercase text-sm bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 rounded-sm"
            >
              Começar Agora
              {/* Offset glow */}
              <span className="absolute inset-0 rounded-sm bg-primary/20 translate-x-1.5 translate-y-1.5 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <a
              href="#portfolio"
              className="font-heading text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
            >
              Ver portfólio →
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(1.05)} className="flex flex-wrap gap-10 sm:gap-14">
            {[
              { v: "5000+", l: "Vídeos Editados" },
              { v: "72h", l: "Entrega Garantida" },
              { v: "4.9★", l: "Avaliação Média" },
            ].map((s, i) => (
              <div key={s.l} className={`flex flex-col gap-1 ${i > 0 ? "relative before:absolute before:-left-5 sm:before:-left-7 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-px before:bg-border/50" : ""}`}>
                <span className="font-display text-3xl text-primary leading-none">{s.v}</span>
                <span className="font-heading text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/70 to-transparent"
        />
        <span className="font-heading text-[0.55rem] tracking-[0.4em] text-primary/50 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
