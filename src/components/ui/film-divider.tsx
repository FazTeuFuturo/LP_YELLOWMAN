"use client";

import Marquee from "@/components/magicui/marquee";

const segments = [
  "YELLOWMAN",
  "EDIÇÃO CINEMATOGRÁFICA",
  "REELS",
  "SHORTS",
  "DESDE 2014",
  "5000+ VÍDEOS",
];

export default function FilmDivider({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden border-y border-border/30 bg-secondary/10 py-3 select-none">
      <Marquee
        reverse={reverse}
        className="[--duration:22s] [--gap:0px]"
        repeat={6}
      >
        {segments.map((s) => (
          <span
            key={s}
            className="font-heading text-[0.6rem] font-700 tracking-[0.45em] text-muted-foreground/40 px-6"
          >
            {s}
            <span className="ml-6 text-primary/30">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
