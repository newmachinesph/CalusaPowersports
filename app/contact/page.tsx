import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book a motorcycle rental in Fort Myers. Call, email, or send a booking request to Calusa Powersports.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-teal-brand">
          Most rides confirmed within the hour
        </p>
        <h1 className="font-display text-[length:var(--text-display-s)] text-ink">
          Contact &amp; booking
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="rounded-md border border-rule bg-paper-2 p-7 lg:col-span-3">
          <h2 className="font-display text-2xl text-ink">Request a booking</h2>
          <p className="mt-2 text-sm text-ink-2">
            Sends us an email with your details — we&apos;ll reply to confirm
            availability and deposit.
          </p>
          <div className="mt-7">
            <BookingForm />
          </div>
        </Reveal>

        <div className="space-y-6 lg:col-span-2">
          <Reveal delay={0.1} className="rounded-md border border-accent/40 bg-paper-2 p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Prefer to talk?
            </h2>
            <p className="mt-4 leading-relaxed text-ink-2">
              <a
                href="tel:+12395550188"
                className="font-display text-3xl text-ink transition-colors hover:text-accent"
              >
                (239) 555-0188
              </a>
              <br />
              <a
                href="mailto:ride@calusapowersports.com"
                className="text-sm transition-colors hover:text-accent"
              >
                ride@calusapowersports.com
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.2} className="rounded-md border border-rule bg-paper-2 p-7">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-brand">
              Find the shop
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-2">
              2400 Palm Beach Blvd
              <br />
              Fort Myers, FL 33916
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              Open 7 days a week · 8:00am – 6:00pm
            </p>
            <p className="mt-3 text-sm text-ink-2/70">
              Five minutes east of downtown Fort Myers, with free rider parking
              and gear storage while you&apos;re out.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
