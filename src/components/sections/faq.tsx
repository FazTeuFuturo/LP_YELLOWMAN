"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como eu envio os vídeos para vocês?",
    answer:
      "Após a assinatura, você terá acesso a uma pasta exclusiva no Google Drive ou Dropbox. Basta subir os arquivos brutos lá e nossa equipe recebe a notificação na hora.",
  },
  {
    question: "Qual o prazo de entrega de cada vídeo?",
    answer:
      "Nosso prazo padrão é de 48 a 72 horas úteis após o recebimento do material bruto. Vídeos mais complexos do plano Scale podem levar um pouco mais, dependendo do volume de motion graphics.",
  },
  {
    question: "Posso pedir alterações no vídeo?",
    answer:
      "Sim! Cada vídeo inclui até 2 rodadas de revisões gratuitas para garantir que o resultado final esteja exatamente como você imaginou.",
  },

  {
    question: "Qual a duração máxima dos vídeos brutos?",
    answer:
      "Para o formato de Reels/Shorts, recomendamos que o bruto tenha até 3 minutos. Isso nos permite extrair o melhor conteúdo para um vídeo final de até 60 segundos.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 bg-secondary/8 overflow-hidden">
      {/* Faded watermark */}
      <div
        className="absolute right-0 bottom-0 font-display text-foreground/[0.025] leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(12rem, 20vw, 24rem)" }}
        aria-hidden
      >
        FAQ
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Dúvidas Frequentes</p>
          <h2
            className="font-display font-400 text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Tem duvidas?<br />
            <span className="text-primary">A gente responde.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl divide-y divide-border/30 border-t border-border/30">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between py-7 text-left group"
              >
                <span className="font-display font-400 text-foreground group-hover:text-primary transition-colors duration-200 pr-8"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 border border-border/50 group-hover:border-primary/50 flex items-center justify-center transition-colors duration-200">
                  {openIndex === i
                    ? <Minus className="h-3 w-3 text-primary" />
                    : <Plus className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  }
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed pb-7 text-sm max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
