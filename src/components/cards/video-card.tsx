"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  category: string;
}

export default function VideoCard({ videoId, title, category }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  const getCleanID = (url: string) => {
    if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
    return url;
  };

  const id = getCleanID(videoId);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        onClick={() => setPlaying(true)}
        className="group relative overflow-hidden cursor-pointer bg-secondary/15 border border-border/30 hover:border-primary/30 transition-colors duration-400"
      >
        {/* Vertical aspect */}
        <div className="relative aspect-[9/16] w-full overflow-hidden">
          <img
            src={thumb}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Play — editorial style */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 border border-primary/70 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-primary/10 backdrop-blur-sm">
              <Play className="h-5 w-5 text-primary fill-primary translate-x-0.5" />
            </div>
          </div>

          {/* Film corner — top left */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <p className="font-heading text-[0.55rem] sm:section-label mb-1 opacity-80 uppercase tracking-widest">{category}</p>
            <h3 className="font-display italic font-400 text-white text-lg sm:text-xl leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
      </motion.article>

      {/* Video modal */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.94)" }}
            onClick={() => setPlaying(false)}
          >
            {/* Film corners around modal */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/40" />
            <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/40" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/40" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/40" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-[360px] aspect-[9/16] overflow-hidden border border-border/30"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
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
