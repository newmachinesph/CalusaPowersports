const ITEMS = [
  "Fort Myers",
  "Sanibel",
  "Captiva",
  "Tamiami Trail",
  "Pine Island",
  "Naples",
  "Marco Island",
  "Everglades",
];

/* ponytail: CSS keyframe marquee — framer unnecessary for infinite loops */
export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-rule bg-paper py-5"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display mx-6 flex items-center gap-12 whitespace-nowrap text-2xl text-ink-2/60"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
