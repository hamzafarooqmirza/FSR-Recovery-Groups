"use client";

import { useState } from "react";

/**
 * Placeholder testimonials — not sourced from a review platform.
 * Swap in verified customer reviews once available.
 */
const reviews = [
  {
    name: "J. Harding",
    quote:
      "Broke down on the motorway late at night and FSR had someone with me faster than I expected. Really put me at ease.",
  },
  {
    name: "M. Osei",
    quote:
      "Clear pricing from the start, no surprises. The driver was careful loading my car and kept me updated the whole way.",
  },
  {
    name: "S. Patel",
    quote:
      "Called about a flat battery expecting a long wait — they were with me in under 30 minutes and sorted it on the spot.",
  },
  {
    name: "R. Coleman",
    quote:
      "Needed an accident recovery and they handled everything professionally, even helped explain the process for insurance.",
  },
  {
    name: "L. Fitzgerald",
    quote:
      "Friendly team, turned up on time and got my van back on the road without any fuss. Would use again.",
  },
  {
    name: "K. Novak",
    quote:
      "Stuck in mud off a country lane and they winched me out with no damage. Genuinely grateful for the fast response.",
  },
];

const doubled = [...reviews, ...reviews];

export function ReviewsSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className="reviews-track flex gap-5"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((r, i) => (
          <div
            key={i}
            className="testimonial-card flex w-72 flex-shrink-0 flex-col sm:w-80"
          >
            <div className="mb-3 text-base leading-none text-yellow-400">★★★★★</div>
            <p className="flex-1 text-sm leading-7 text-navy/70 italic">&ldquo;{r.quote}&rdquo;</p>
            <div className="mt-4 border-t border-navy/10 pt-3">
              <strong className="block truncate text-sm text-navy">{r.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
