"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Bike } from "@/lib/bikes";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BikeCard({ bike, index = 0 }: { bike: Bike; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-md border border-rule bg-paper-2"
    >
      <div className="relative aspect-[8/5] overflow-hidden">
        <Image
          src={bike.image}
          alt={`${bike.name} rental motorcycle`}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-[2px] bg-paper/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-teal-brand backdrop-blur-sm">
          {bike.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-bold text-ink">{bike.name}</h3>
          <p className="shrink-0 font-mono text-lg font-bold text-accent">
            ${bike.dailyRate}
            <span className="text-xs font-normal text-ink-2">/day</span>
          </p>
        </div>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2">
          {bike.engine} · {bike.seats === 2 ? "2-up" : "solo"}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">{bike.blurb}</p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-[2px] border border-rule px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Reserve
        </Link>
      </div>
    </motion.article>
  );
}
