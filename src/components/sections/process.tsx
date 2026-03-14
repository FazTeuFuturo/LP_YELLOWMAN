"use client";

import { motion } from "framer-motion";
import { Camera, Scissors, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Camera,
    title: "Gravar",
    description:
      "Siga nossas orientações de roteiro ou grave livremente. Em 10 minutos você resolve sua parte.",
    tag: "Sua única tarefa",
  },
  {
    num: "02",
    icon: Scissors,
    title: "A gente lapida",
    description:
      "Cortes inteligentes, legendas dinâmicas, trilha premium e correção de cor cinematográfica.",
    tag: "Processo exclusivo",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Tu Posta",
    description:
      "Receba seu vídeo pronto para postar. Mais autoridade, engajamento e muito mais vendas.",
    tag: "Resultado garantido",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 bg-background overflow-hidden">
      {/* Background number watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-foreground/[0.018] leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(18rem, 28vw, 32rem)" }}
        aria-hidden
      >
        03
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Como funciona</p>
          <h2
            className="font-display font-400 text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Do celular<br />
            <span className="text-primary">ao viral.</span>
          </h2>
        </motion.div>

        {/* Steps — editorial numbered list */}
        <div className="flex flex-col divide-y divide-border/30">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-x-8 md:gap-x-16 items-start py-10 hover:bg-secondary/10 transition-colors duration-300 px-4 -mx-4 cursor-default"
              >
                {/* Number + icon */}
                <div className="flex flex-col items-start gap-4">
                  <span
                    className="font-display font-400 text-primary/25 leading-none group-hover:text-primary/50 transition-colors duration-300"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  >
                    {step.num}
                  </span>
                  <div className="p-3 border border-border/40 group-hover:border-primary/30 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="section-label mb-3 block opacity-60">{step.tag}</span>
                  <h3
                    className="font-display font-400 text-foreground mb-3 leading-none"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow — desktop only */}
                <div className="hidden md:flex items-center self-center">
                  <span className="font-heading font-700 text-2xl text-primary/20 group-hover:text-primary/60 transition-colors duration-300">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
