"use client";

import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";

const plans = [
  {
    num: "01",
    name: "Essential",
    price: "480",
    description: "Ideal para quem está começando a criar autoridade digital.",
    features: [
      "4 Vídeos Editados por mês",
      "Cortes Inteligentes (Jump Cuts)",
      "Legendas Dinâmicas Básicas",
      "Trilha Sonora Direitos Livres",
      "Suporte via WhatsApp",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    num: "02",
    name: "Scale",
    price: "960",
    description: "Para quem quer escala e posicionamento de alto padrão.",
    features: [
      "8 Vídeos Editados por mês",
      "Edição Autoral Avançada",
      "Design de Legendas Customizado",
      "Motion Graphics e Efeitos",
      "Consultoria de Roteiro Mensal",
    ],
    cta: "Dominar o Mercado",
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 bg-secondary/8 overflow-hidden">
      {/* Atmospheric gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.83_0.19_93_/_0.07),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="section-label mb-4">Planos</p>
          <h2
            className="font-display font-400 text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Invista no seu<br />
            <span className="text-primary">crescimento.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/25 border border-border/25">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col p-10 md:p-14 bg-background group hover:bg-secondary/10 transition-colors duration-300 ${
                plan.popular ? "border-t-2 border-t-primary" : ""
              }`}
            >
              {/* Decorative plan number */}
              <span
                className="absolute top-6 right-8 font-display text-foreground/[0.04] leading-none select-none pointer-events-none"
                style={{ fontSize: "6rem" }}
                aria-hidden
              >
                {plan.num}
              </span>

              {plan.popular && (
                <span className="section-label mb-6 text-primary">
                  ◆ Mais Procurado
                </span>
              )}

              {/* Plan name */}
              <h3
                className="font-display font-400 text-foreground mb-6 leading-none"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-sans text-sm text-muted-foreground">R$</span>
                <span
                  className="font-display font-600 text-primary leading-none"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                >
                  {plan.price}
                </span>
                <span className="font-sans text-muted-foreground text-sm">/mês</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-10">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-border/40 mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 w-4 h-4 border border-primary/50 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/75 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/55552123420309?text=Olá!%20Tenho%20interesse%20no%20plano%20${plan.name}`,
                    "_blank"
                  )
                }
                className={`group/btn relative w-full font-heading font-700 tracking-[0.15em] uppercase text-sm py-4 transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border/60 text-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {plan.cta}
                {!plan.popular && (
                  <span className="absolute inset-0 border border-primary/0 group-hover/btn:border-primary/20 translate-x-1 translate-y-1 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-all duration-300" />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2.5">
            <Shield className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-500">Satisfação garantida</span>
              {" "}— devolvemos o investimento se não gostar do primeiro vídeo.
            </span>
          </div>
          <span className="hidden sm:block text-border/60">·</span>
          <button
            onClick={() =>
              window.open("https://wa.me/55552123420309?text=Tenho%20uma%20dúvida%20sobre%20os%20planos", "_blank")
            }
            className="font-heading text-[0.65rem] font-700 tracking-[0.25em] uppercase text-primary hover:text-primary/70 transition-colors underline underline-offset-4"
          >
            Ainda na dúvida? Fala com a gente →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
