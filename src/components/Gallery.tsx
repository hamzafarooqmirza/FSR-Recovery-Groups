import Image from "next/image";
import { Button } from "./Button";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Roadside assistance in the rain" },
  { src: "/images/gallery-2.jpg", alt: "Recovery technician winching a 4x4 out of mud" },
  { src: "/images/gallery-3.jpg", alt: "Close up of a vehicle accident" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
          Our Photo Gallery<span className="text-red">!</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          gravida ultrices sagittis. Donec rhoncus sapien lacus, sit amet
          dignissim ipsum tristique ut. Integer egestas dignissim quam et
          iaculis. In aliquet, tellus efficitur consequat scelerisque, libero
          ex faucibus tortor, lacinia maximus elit sem ac libero.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
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
