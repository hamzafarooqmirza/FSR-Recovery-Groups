import Image from "next/image";
import { Button } from "./Button";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Roadside assistance in the rain" },
  { src: "/images/gallery-2.jpg", alt: "Recovery technician winching a 4x4 out of mud" },
  { src: "/images/gallery-3.jpg", alt: "Close up of a vehicle accident" },
];

function DecorCircleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="34" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
      <path
        d="M40 14a26 26 0 1 1-18.4 7.6"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M14 14v10h10" stroke="white" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <DecorCircleArrow className="pointer-events-none absolute left-2 top-10 hidden h-20 w-20 lg:left-10 lg:block" />
      <DecorCircleArrow className="pointer-events-none absolute right-2 top-10 hidden h-20 w-20 lg:right-10 lg:block" />

      <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Our Photo Gallery<span className="text-red">!</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/70">
          A look at our recovery team in action, from roadside tyre changes
          to winching vehicles out of difficult terrain. These are the jobs
          that keep our customers moving, whatever the weather or location.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#contact">Show more</Button>
        </div>
      </div>
    </section>
  );
}
