import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { BIKES } from "@/lib/bikes";
import { BikeCard } from "@/components/BikeCard";
import { Marquee } from "@/components/Marquee";
import { HeroTitle } from "@/components/motion/HeroTitle";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";

const HIGHLIGHTS = [
  {
    title: "Gulf Coast routes",
    body: "Free ride maps with every rental — Sanibel Causeway, Pine Island loop, and the Tamiami Trail into the Everglades.",
  },
  {
    title: "All gear included",
    body: "DOT helmets, gloves, and rain gear at no extra charge. Bluetooth comms available for two-up riders.",
  },
  {
    title: "No-hassle booking",
    body: "Reserve by phone or email, pick up in 15 minutes. 24-hour roadside assistance on every ride.",
  },
];

export default function Home() {
  const featured = BIKES.slice(0, 3);

  return (
    <>
      {/* Marquee Hero — the statement IS the fold */}
      <section className="relative flex min-h-[calc(100svh-64px)] flex-col justify-between overflow-hidden">
        <Image
          src="/hero.avif"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-paper/20"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pt-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-teal-brand">
            Fort Myers · Southwest Florida
          </p>
          <HeroTitle
            lines={[
              <Fragment key="l1">Ride the</Fragment>,
              <Fragment key="l2">
                <span className="text-accent">Gulf</span> Coast
              </Fragment>,
              <Fragment key="l3">your way</Fragment>,
            ]}
          />
          <Reveal delay={0.6} className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/fleet"
              className="rounded-[2px] bg-accent px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent-2 hover:text-ink"
            >
              Browse the fleet
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-ink-2">
              Cruisers, sport bikes, adventure machines, and scooters — by the
              day or the week, gear included.
            </p>
          </Reveal>
        </div>

        <div className="relative z-10">
          <Marquee />
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[length:var(--text-display-s)] text-ink">
            Featured rides
          </h2>
          <Link
            href="/fleet"
            className="font-mono text-xs uppercase tracking-[0.15em] text-teal-brand transition-colors hover:text-accent"
          >
            All six bikes →
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((bike, i) => (
            <BikeCard key={bike.slug} bike={bike} index={i} />
          ))}
        </div>
      </section>

      {/* Split — logo + highlights */}
      <section className="border-y border-rule bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 md:grid-cols-2">
          <Reveal className="flex justify-center">
            <div className="rounded-full bg-sand p-12 shadow-2xl">
              <Image
                src="/calusa-powersports-logo.svg"
                alt="Calusa Powersports"
                width={280}
                height={287}
              />
            </div>
          </Reveal>
          <RevealStagger className="space-y-8">
            {HIGHLIGHTS.map((h) => (
              <RevealItem key={h.title}>
                <h3 className="font-display text-2xl text-ink">{h.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-2">
                  {h.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA strip — one button */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-[length:var(--text-display-s)] text-ink">
            Sunshine&apos;s waiting.
            <br />
            <span className="text-accent">So is your bike.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contact"
            className="inline-block rounded-[2px] bg-accent px-9 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent-2 hover:text-ink"
          >
            Book a ride
          </Link>
        </Reveal>
      </section>
    </>
  );
}
