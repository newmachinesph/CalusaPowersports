# Calusa Powersports

A marketing and booking-request site for a motorcycle rental shop in Fort Myers, Florida. It lists the rental fleet, daily rates, rental requirements, and a booking form, with a dark navy and amber visual design. The repository also holds a small browser tool for making social media graphics.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion.

## What is in it

| Path | Contents |
|------|----------|
| `app/` | Pages: home, `/fleet`, `/pricing`, `/about`, `/contact`; root layout and global styles |
| `components/` | `BikeCard`, `BookingForm`, `Marquee`, `SiteHeader`, `SiteFooter`, and `motion/` (reveal and hero animation helpers) |
| `lib/bikes.ts` | The fleet data (name, category, daily rate, engine, copy) that feeds the fleet, pricing and booking pages |
| `public/` | Logos and bike images |
| `marketing/` | Logo and promo art, plus `social-studio.html` (see below) |
| `design.md` | The design system: tokens, type, motion and CTA rules |

## How it works

- Fleet and pricing pages render from the `BIKES` array in `lib/bikes.ts`. Edit that file to change bikes or rates.
- The booking form (`components/BookingForm.tsx`) has no backend. On submit it opens the visitor's mail client with a pre-filled `mailto:` message.
- Motion uses Framer Motion, wrapped in `MotionConfig` with `reducedMotion="user"`.
- The phone number shown on the site is a placeholder (a 555 number).

## Social Studio

`marketing/social-studio.html` is a standalone file. Open it in a browser, pick a template, edit the text, and download a PNG. It needs no server. See `marketing/README.md`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Checks

```bash
npm run lint     # ESLint (eslint-config-next)
npm run build    # production build
```

There is no test suite.

## Deployment

A standard Next.js app with no required environment variables. Deploy with `npm run build && npm start`, or on any Next.js host such as Vercel.

## License

MIT. See [LICENSE](LICENSE).
