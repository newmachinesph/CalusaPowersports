import type { Metadata } from "next";
import { BIKES } from "@/lib/bikes";
import { BikeCard } from "@/components/BikeCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Browse motorcycles, scooters, and trikes for rent in Fort Myers — cruisers, sport bikes, adventure bikes, and more.",
};

export default function FleetPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-teal-brand">
          Six ways to ride
        </p>
        <h1 className="font-display text-[length:var(--text-display-s)] text-ink">
          The fleet
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-2">
          Every bike is dealer-serviced, detailed between rentals, and comes
          with a full tank, DOT helmet, and our Southwest Florida ride maps.
          Weekly rates knock roughly 20% off the daily price.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BIKES.map((bike, i) => (
          <BikeCard key={bike.slug} bike={bike} index={i} />
        ))}
      </div>
      <Reveal className="mt-12">
        <p className="text-sm text-ink-2">
          Don&apos;t see what you&apos;re after? We add bikes seasonally —{" "}
          <a
            href="/contact"
            className="font-mono text-xs uppercase tracking-[0.15em] text-teal-brand transition-colors hover:text-accent"
          >
            ask us
          </a>{" "}
          about availability.
        </p>
      </Reveal>
    </div>
  );
}
