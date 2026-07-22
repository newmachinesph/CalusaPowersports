import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule/60 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="rounded-sm bg-sand px-3 py-1.5">
          <Image
            src="/logo-horizontal.png"
            alt="Calusa Powersports — Motorcycle Rentals, Southwest FL"
            width={191}
            height={40}
            priority
          />
        </Link>

        {/* ponytail: native <details> mobile menu, no client JS */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink-2 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-[2px] bg-accent px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent-2 hover:text-ink"
          >
            Book a ride
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-[2px] border border-rule px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink">
            Menu
          </summary>
          <nav
            className="absolute right-0 mt-2 flex w-48 flex-col rounded-md border border-rule bg-paper-2 p-2 shadow-2xl"
            aria-label="Mobile navigation"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink-2 hover:bg-paper-3 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
