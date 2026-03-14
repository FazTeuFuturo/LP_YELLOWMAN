"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Vídeos Editados", sub: "Projetos entregues" },
  { value: 72, suffix: "h", label: "Entrega Garantida", sub: "Prazo máximo" },
  { value: 4.9, suffix: "★", label: "Avaliação Média", sub: "Clientes parceiros" },
  { value: 10, suffix: "+", label: "Anos de Mercado", sub: "Desde 2014" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(t); }
      else setCount(isDecimal ? Math.round(cur * 10) / 10 : Math.floor(cur));
    }, 1400 / steps);
    return () => clearInterval(t);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref} className="font-display font-400 text-primary tabular-nums"
      style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 1 }}>
      {isDecimal ? count.toFixed(1) : count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative border-y border-border/25 bg-secondary/8 overflow-hidden">
      {/* Subtle gold wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,oklch(0.83_0.19_93_/_0.04),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col gap-2 py-10 px-6 text-center relative ${i < 3 ? "md:border-r border-border/25" : ""
                } ${i < 2 ? "border-r border-border/25 md:border-r-0" : ""}`}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <span className="font-heading font-700 text-sm tracking-[0.1em] uppercase text-foreground mt-1">
                {s.label}
              </span>
              <span className="font-sans text-xs text-muted-foreground">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
