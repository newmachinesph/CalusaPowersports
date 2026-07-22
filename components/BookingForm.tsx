"use client";

import { BIKES } from "@/lib/bikes";

// ponytail: no backend yet — form opens a pre-filled email. Swap for an API
// route + email service (or booking system) when one exists.
export function BookingForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Booking request: ${data.get("bike")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Bike: ${data.get("bike")}`,
      `Pickup date: ${data.get("date")}`,
      `Days: ${data.get("days")}`,
      "",
      `${data.get("message") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:ride@calusapowersports.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-[2px] border border-rule bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent";
  const labelClass =
    "block font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input name="name" required className={`mt-1.5 ${inputClass}`} />
        </label>
        <label className={labelClass}>
          Phone
          <input name="phone" type="tel" required className={`mt-1.5 ${inputClass}`} />
        </label>
      </div>
      <label className={labelClass}>
        Bike
        <select name="bike" className={`mt-1.5 ${inputClass}`}>
          {BIKES.map((b) => (
            <option key={b.slug} value={b.name}>
              {b.name} — ${b.dailyRate}/day
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Pickup date
          <input name="date" type="date" required className={`mt-1.5 ${inputClass}`} />
        </label>
        <label className={labelClass}>
          Number of days
          <input
            name="days"
            type="number"
            min={1}
            max={60}
            defaultValue={1}
            required
            className={`mt-1.5 ${inputClass}`}
          />
        </label>
      </div>
      <label className={labelClass}>
        Anything else?
        <textarea name="message" rows={4} className={`mt-1.5 ${inputClass}`} />
      </label>
      <button
        type="submit"
        className="rounded-[2px] bg-accent px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-accent-2 hover:text-ink active:translate-y-px"
      >
        Send booking request
      </button>
    </form>
  );
}
