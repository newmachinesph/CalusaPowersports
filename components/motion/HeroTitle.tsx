"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Full-bleed hero wrapper: staggered line entrance + scroll parallax drift. */
export function HeroTitle({ lines }: { lines: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      <h1 className="font-display text-[length:var(--text-display)] text-ink">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
    </motion.div>
  );
}
