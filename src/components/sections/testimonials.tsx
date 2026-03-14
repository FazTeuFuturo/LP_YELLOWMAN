"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, X } from "lucide-react";

const testimonials = [
  {
    videoId: "oOr5iTeD5f0",
    name: "Fabi",
    brand: "Infoprodutora",
    result: "Lançou o 1º curso e vendeu na primeira semana",
    stars: 5,
  },
  {
    videoId: "GEWSO8PbRcw",
    name: "Marcelo",
    brand: "Corcel Mágico",
    result: "Triplicou o engajamento da banda nas redes",
    stars: 5,
  },
];

function Card({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const isPlaceholder = t.videoId.startsWith("PLACEHOLDER");
  const thumb = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        {/* Vertical video */}
        <div
          onClick={() => !isPlaceholder && setPlaying(true)}
          className={`relative aspect-[9/16] w-full overflow-hidden border border-border/30 bg-secondary/20 ${
            !isPlaceholder ? "cursor-pointer group" : ""
          }`}
        >
          {/* Film corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/40 z-10 opacity-60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/40 z-10 opacity-60" />

          {thumb ? (
            <>
              <img
                src={thumb}
                alt={t.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 border border-primary/70 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-5 w-5 text-primary fill-primary translate-x-0.5" />
                </div>
              </div>
            </>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-secondary/30">
              <div className="w-12 h-12 border border-border/50 flex items-center justify-center">
                <Play className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="font-heading text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground/50 text-center px-6">
                Depoimento em vídeo<br />em breve
              </p>
            </div>
          )}

          {/* Frame number */}
          <div className="absolute bottom-4 right-4 font-heading text-[0.55rem] tracking-[0.3em] text-white/20">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Info */}
        <div className="px-1">
          <div className="flex gap-0.5 mb-3">
            {[...Array(t.stars)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
          </div>
          <p
            className="font-display font-400 text-foreground leading-tight mb-3"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
          >
            "{t.result}"
          </p>
          <p className="font-heading font-700 text-sm tracking-[0.1em] uppercase text-foreground">
            {t.name}
          </p>
          <p className="section-label text-muted-foreground/60 mt-1">{t.brand}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {playing && !isPlaceholder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.94)" }}
            onClick={() => setPlaying(false)}
          >
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/40" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/40" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/40" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/40" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-[360px] aspect-[9/16] border border-border/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0&modestbranding=1`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 w-8 h-8 border border-border/50 bg-background/80 flex items-center justify-center text-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Depoimentos</p>
          <h2
            className="font-display font-400 text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Resultados<br />
            <span className="text-primary">reais.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl">
          {testimonials.map((t, i) => (
            <Card key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
