"use client";

import { motion } from "framer-motion";
import VideoCard from "@/components/cards/video-card";

const portfolioItems = [
  { videoId: "ioIIUaGiIZU", title: "Estética de Alto Padrão",    category: "Estética" },
  { videoId: "9vtaSqxPPzo", title: "Gastronomia e Experiência",  category: "Culinária" },
  { videoId: "DMSEvjhdres", title: "Conexão e Storytelling",     category: "Sentimental" },
  { videoId: "SMF9U0yLbvM", title: "Estratégia e Vendas",        category: "Infoprodutor" },
  { videoId: "apTyLZkJb_g", title: "Transformação de Sorrisos",  category: "Odontologia" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-28 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Header — left aligned, editorial */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Portfólio</p>
            <h2
              className="font-display font-400 text-foreground leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              Estilo<br />
              <span className="text-primary">de cinema.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-xs text-sm leading-relaxed md:text-right"
          >
            Não paramos na edição. Criamos narrativas que prendem a atenção e geram desejo imediato.
            <span className="block mt-3 section-label text-muted-foreground/50">Clique para assistir</span>
          </motion.p>
        </div>

        {/* Vertical grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <VideoCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
