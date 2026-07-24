import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";

type Service = {
  title: string;
  description: string;
  image: string;
  colStart: string;
  colSpan: string;
  rowStart: string;
  rowSpan: string;
  big?: boolean;
};

const services: Service[] = [
  {
    title: "24/7 Vehicle Breakdown Recovery",
    description:
      "Round-the-clock recovery for any breakdown, wherever you are on the road, day or night.",
    image: "/images/service-breakdown.jpg",
    colStart: "lg:col-start-1",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-1",
    rowSpan: "lg:row-span-3",
    big: true,
  },
  {
    title: "Roadside Assistance",
    description:
      "On-the-spot help with minor faults so you can get back on your way without a full tow.",
    image: "/images/service-roadside.jpg",
    colStart: "lg:col-start-2",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Jumpstart Services",
    description:
      "Flat battery? We'll get your engine running again in minutes, anywhere you're parked.",
    image: "/images/service-jumpstart.jpg",
    colStart: "lg:col-start-3",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Winch Out",
    description:
      "Stuck in mud, sand, or a ditch? Our winches pull your vehicle free without further damage.",
    image: "/images/service-winch.jpg",
    colStart: "lg:col-start-4",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-1",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Accident Emergency Assistance",
    description:
      "Fast, careful recovery from the scene of a collision, handled with care and full insurance.",
    image: "/images/service-accident.jpg",
    colStart: "lg:col-start-2",
    colSpan: "lg:col-span-3",
    rowStart: "lg:row-start-2",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Changing Spare Tyre",
    description:
      "Quick, safe roadside tyre changes so a puncture doesn't leave you waiting around.",
    image: "/images/service-tyre.jpg",
    colStart: "lg:col-start-2",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-3",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Refueling",
    description:
      "Run out of fuel? We'll bring enough to get you safely to the nearest station.",
    image: "/images/service-refuel.jpg",
    colStart: "lg:col-start-3",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-3",
    rowSpan: "lg:row-span-1",
  },
  {
    title: "Vehicle Transporting",
    description:
      "Safe, secure transport for vehicles that can't be driven, over any distance.",
    image: "/images/service-transport.jpg",
    colStart: "lg:col-start-4",
    colSpan: "lg:col-span-1",
    rowStart: "lg:row-start-3",
    rowSpan: "lg:row-span-1",
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${s.colStart} ${s.colSpan} ${s.rowStart} ${s.rowSpan}`}
      style={{ minHeight: s.big ? 520 : 230 }}
    >
      <Image
        src={s.image}
        alt={s.title}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3
          className={`font-heading font-bold text-white ${
            s.big ? "text-2xl" : "text-xl"
          } max-w-[85%]`}
        >
          {s.title}
        </h3>
        <p
          className={`mt-2 text-white/80 ${
            s.big ? "max-w-[90%] text-[14px]" : "max-w-[92%] text-[13px]"
          }`}
        >
          {s.description}
        </p>
        <Link
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex items-end gap-[3px]">
            <span className="h-7 w-[4px] -skew-x-12 rounded-sm bg-red" />
            <span className="h-7 w-[4px] -skew-x-12 rounded-sm bg-red" />
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Our Key Service Offerings<span className="text-red">.</span>
          </h2>
        </div>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-navy/70">
          From roadside breakdowns to full accident recovery, our range of
          services covers every situation you might face on the road. Each
          job is handled by trained professionals using the right equipment
          for the task, so whether it&rsquo;s a simple jumpstart or a
          multi-vehicle transport, you can count on a fast, professional
          response, wherever and whenever you need us.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#contact" icon={<WhatsAppIcon className="h-4 w-4" />}>
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
