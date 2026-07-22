# Design — Calusa Powersports

Locked design system. Every page reads this before emitting code.

## Genre
atmospheric — dark, cinematic, coastal. Big condensed uppercase display, deep navy paper, warm amber accent, teal as secondary chroma.

## Macrostructure family
- Marketing (home): Marquee Hero + HP2 marquee-overflow
- Catalogue (fleet): Catalogue grid, mono spec labels
- Content (pricing, about, contact): Split Studio / tabular, same voice

## Theme (custom, brand-anchored)
- `--color-paper`    oklch(17% 0.045 245)  · deep navy (#02192F family)
- `--color-paper-2`  oklch(23% 0.05 245)   · raised navy (#0A2747 family)
- `--color-ink`      oklch(96% 0.01 90)    · warm off-white
- `--color-ink-2`    oklch(72% 0.02 240)   · muted slate
- `--color-rule`     oklch(34% 0.03 245)
- `--color-accent`   oklch(82% 0.14 75)    · amber #F9AA3B
- `--color-accent-2` oklch(66% 0.17 45)    · burnt orange #F0723B
- `--color-teal`     oklch(63% 0.1 190)    · #189E9E
- `--color-focus`    amber, 2px ring, never animated

## Typography
- Display: Anton 400, uppercase, tracking -0.01em, roman only
- Body: Geist 400/500
- Mono: Geist Mono 400 — spec labels, prices, small caps labels
- Hero display: clamp(3.5rem, 10vw, 9rem)

## Motion (framer-motion)
- Easing: cubic-bezier(0.16, 1, 0.3, 1); durations 0.5–0.8s reveals
- Reveal: fade + 24px rise, once, viewport margin -80px, stagger 0.08s
- Hero: scroll parallax on display type (y transform)
- Marquee: CSS keyframes loop, paused under reduced motion
- Cards: hover lift via transform only
- MotionConfig reducedMotion="user" wraps the app

## CTA voice
- Primary: amber fill, navy ink, mono uppercase label, square-ish (radius 2px)
- Secondary: hairline outline, ink text, same mono label

## What pages MUST share
Nav (blur bar + sand logo chip), footer (statement), tokens above, Anton/Geist pairing, CTA voice, marquee divider language.

## What pages MAY differ on
Macrostructure within family, hero treatment, grid density.
