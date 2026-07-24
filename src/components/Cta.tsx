import { Button } from "./Button";

function DecorTruck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 160" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="40" width="150" height="70" rx="6" stroke="#0b2241" strokeWidth="4" />
      <path
        d="M160 60h60l40 30v20h-100V60Z"
        stroke="#0b2241"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <rect x="195" y="72" width="30" height="20" rx="2" stroke="#0b2241" strokeWidth="4" />
      <circle cx="70" cy="118" r="22" stroke="#0b2241" strokeWidth="4" />
      <circle cx="230" cy="118" r="22" stroke="#0b2241" strokeWidth="4" />
      <path d="M10 60h150" stroke="#0b2241" strokeWidth="4" />
    </svg>
  );
}

function DecorWrenchCar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 95c0-30 24-54 54-54s54 24 54 54-24 54-54 54-54-24-54-54Z"
        stroke="#e81a33"
        strokeWidth="4"
      />
      <path
        d="M110 70c14-16 38-16 52 0M150 40l14-14M164 26l16 6-6 16-16-6 6-16Z"
        stroke="#e81a33"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 108c6 10 20 16 34 16s28-6 34-16"
        stroke="#e81a33"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <DecorTruck className="pointer-events-none absolute right-[6%] top-1/2 h-40 w-auto -translate-y-1/2 opacity-[0.06] lg:h-52" />
      <DecorWrenchCar className="pointer-events-none absolute left-[6%] top-1/2 h-32 w-auto -translate-y-1/2 opacity-[0.08] lg:h-44" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-[34px]">
          Need Assistance? We&rsquo;re Here to Get You Back on the Road!
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-navy/70">
          Car trouble can happen anytime, anywhere. Whether you&rsquo;re
          dealing with a breakdown, an accident, or simply need vehicle
          transport, FSR Recovery Group has you covered. Contact us today for
          fast, reliable, and professional service. Let&rsquo;s get you moving
          again, stress-free!
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="tel:+447888502989">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
