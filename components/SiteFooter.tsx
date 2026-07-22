import Image from "next/image";
import Link from "next/link";

/* Ft5 Statement footer — big display wordmark, minimal link row */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16">
        <p className="font-display text-[length:var(--text-display-s)] leading-none text-ink/90">
          Ride the <span className="text-accent">Gulf</span> Coast
        </p>

        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex items-start gap-4">
            <span className="rounded-full bg-sand p-1.5">
              <Image
                src="/calusa-powersports-logo.svg"
                alt=""
                width={36}
                height={37}
              />
            </span>
            <p className="text-sm leading-relaxed text-ink-2">
              2400 Palm Beach Blvd, Fort Myers, FL 33916
              <br />
              Open 7 days · 8am – 6pm
              <br />
              <a href="tel:+12395550188" className="text-ink transition-colors hover:text-accent">
                (239) 555-0188
              </a>{" "}
              ·{" "}
              <a
                href="mailto:ride@calusapowersports.com"
                className="text-ink transition-colors hover:text-accent"
              >
                ride@calusapowersports.com
              </a>
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-start gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-2"
          >
            <Link href="/fleet" className="transition-colors hover:text-accent">Fleet</Link>
            <Link href="/pricing" className="transition-colors hover:text-accent">Pricing</Link>
            <Link href="/about" className="transition-colors hover:text-accent">About</Link>
            <Link href="/contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>
        </div>

        <p className="mt-12 border-t border-rule pt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2/70">
          © {new Date().getFullYear()} Calusa Powersports · Ride safe, ride insured
        </p>
      </div>
    </footer>
  );
}
