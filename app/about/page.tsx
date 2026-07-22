import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Calusa Powersports is a rider-owned motorcycle rental shop in Fort Myers, named for the original people of Southwest Florida's Gulf Coast.",
};

const ROUTES = [
  {
    title: "Sanibel & Captiva",
    body: "Cross the causeway at sunrise, shell-hunt at Bowman's Beach, lunch at the marina. The Vespa's favorite day out.",
  },
  {
    title: "Tamiami Trail",
    body: "US-41 through Big Cypress to the Everglades — airboats, gators, and the straightest horizon in Florida. GS territory.",
  },
  {
    title: "Naples & Marco Island",
    body: "Coastal cruising past Bonita Springs to Fifth Avenue, then out to Marco for sunset. Built for the Street Glide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Split Studio — story | emblem */}
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-teal-brand">
                Rider owned · Gulf Coast raised
              </p>
              <h1 className="font-display text-[length:var(--text-display-s)] text-ink">
                Named for the fierce people
              </h1>
            </Reveal>
            <RevealStagger className="mt-8 space-y-5 leading-relaxed text-ink-2">
              <RevealItem>
                <p>
                  We&apos;re named for the Calusa — the &ldquo;fierce
                  people&rdquo; who navigated Southwest Florida&apos;s coastline
                  for centuries before anyone paved the Tamiami Trail. Like
                  them, we think the best way to know this coast is to move
                  through it.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Calusa Powersports started with two Harleys and a shed off
                  Palm Beach Boulevard. Today we run a hand-picked fleet out of
                  Fort Myers, serving riders headed to Sanibel, Naples, the
                  Everglades, and everywhere the Gulf breeze reaches.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Every bike is owner-maintained and dealer-serviced. We ride
                  what we rent — ask us for a route and you&apos;ll get one we
                  took last weekend.
                </p>
              </RevealItem>
            </RevealStagger>
          </div>
          <Reveal delay={0.15} className="flex justify-center">
            <div className="rounded-full bg-sand p-12 shadow-2xl">
              <Image
                src="/calusa-powersports-logo.svg"
                alt="Calusa Powersports emblem"
                width={300}
                height={307}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <Marquee />

      <div className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <h2 className="font-display text-3xl text-ink">
            Where we&apos;ll point you
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ROUTES.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.08}
              className="rounded-md border border-rule bg-paper-2 p-6"
            >
              <h3 className="font-display text-xl text-ink">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{r.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            href="/fleet"
            className="font-mono text-xs uppercase tracking-[0.15em] text-teal-brand transition-colors hover:text-accent"
          >
            Pick your bike →
          </Link>
        </Reveal>
      </div>
    </>
  );
}
