import type { Metadata } from "next";
import Link from "next/link";
import { BIKES } from "@/lib/bikes";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Daily and weekly motorcycle rental rates in Fort Myers, plus rental requirements and what's included.",
};

const WEEKLY_DISCOUNT = 0.8;

const INCLUDED = [
  "DOT-approved helmet (and a passenger helmet on 2-up bikes)",
  "Gloves and rain gear",
  "Full tank of fuel at pickup",
  "Unlimited miles within Florida",
  "24-hour roadside assistance",
  "Southwest Florida ride maps",
];

const REQUIREMENTS = [
  "Age 21+ (25+ for the Street Glide and R 1250 GS)",
  "Valid motorcycle endorsement — except the Can-Am Ryker, which needs only a standard driver's license in Florida",
  "Major credit card for the security deposit ($500–$1,000 by model)",
  "Basic rental insurance included; damage waivers available at the counter",
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-teal-brand">
          Simple rates, no surprises
        </p>
        <h1 className="font-display text-[length:var(--text-display-s)] text-ink">
          Pricing
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-2">
          Rates include gear, unlimited Florida miles, and roadside assistance.
          Book seven days and the weekly rate saves you about 20%.
        </p>
      </Reveal>

      <Reveal className="mt-12 overflow-x-auto rounded-md border border-rule bg-paper-2">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-rule">
              <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink-2">Bike</th>
              <th className="px-5 py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink-2">Category</th>
              <th className="px-5 py-4 text-right font-mono text-xs uppercase tracking-[0.15em] text-ink-2">Daily</th>
              <th className="px-5 py-4 text-right font-mono text-xs uppercase tracking-[0.15em] text-ink-2">Weekly</th>
            </tr>
          </thead>
          <tbody>
            {BIKES.map((bike) => (
              <tr key={bike.slug} className="border-b border-rule/50 last:border-b-0">
                <td className="px-5 py-4 font-bold text-ink">{bike.name}</td>
                <td className="px-5 py-4 text-ink-2">{bike.category}</td>
                <td className="px-5 py-4 text-right font-mono font-bold text-accent">
                  ${bike.dailyRate}
                </td>
                <td className="px-5 py-4 text-right font-mono text-ink-2">
                  ${Math.round(bike.dailyRate * 7 * WEEKLY_DISCOUNT)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-md border border-rule bg-paper-2 p-7">
          <h2 className="font-display text-2xl text-ink">Every rental includes</h2>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="font-mono text-teal-brand">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="rounded-md border border-rule bg-paper-2 p-7">
          <h2 className="font-display text-2xl text-ink">What you&apos;ll need</h2>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-2">
            {REQUIREMENTS.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="font-mono text-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-16 flex flex-col items-center gap-6 border-t border-rule pt-16 text-center">
        <h2 className="font-display text-3xl text-ink">
          Ready to lock in a date?
        </h2>
        <p className="max-w-md text-sm text-ink-2">
          Multi-week and group rates available — just ask.
        </p>
        <Link
          href="/contact"
          className="rounded-[2px] bg-accent px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent-2 hover:text-ink"
        >
          Request a booking
        </Link>
      </Reveal>
    </div>
  );
}
