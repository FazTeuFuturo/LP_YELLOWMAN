"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 1 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as any;

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ShinyButton({
  children,
  className,
  onClick,
}: ShinyButtonProps) {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[linear-gradient(#000,#000),linear-gradient(#000_50%,rgba(18,18,18,0.6)_80%,rgba(18,18,18,0)_100%)] dark:text-white",
        "bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(255,255,255,0)_100%)] text-black",
        "before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_100%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "border border-white/10 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]",
        className,
      )}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,rgba(0,0,0,0.6) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),rgba(0,0,0,1) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <motion.span
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="absolute inset-0 z-10 block bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </motion.button>
  );
}
