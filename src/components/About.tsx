import Image from "next/image";
import { Button } from "./Button";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white pb-20 pt-2 lg:pb-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="font-heading text-2xl font-bold tracking-wide text-red">ABOUT</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="flex items-end gap-[3px]">
              <span className="h-8 w-[3px] rounded-sm bg-red" />
              <span className="h-8 w-[3px] rounded-sm bg-red" />
            </span>
            <span className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              FSR
            </span>
            <span className="flex flex-col justify-center -space-y-1">
              <span className="font-heading text-xs font-semibold tracking-wide text-navy">
                RECOVERY
              </span>
              <span className="font-heading text-xs font-semibold tracking-wide text-red">
                GROUPS
              </span>
            </span>
          </div>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy/70">
            <p>
              FSR Recovery Groups has been providing dependable vehicle
              recovery and roadside assistance for over 15 years. What
              started as a small local towing operation has grown into a
              trusted name across the region, known for prompt response
              times and honest, straightforward service.
            </p>
            <p>
              Every member of our recovery team is fully trained, insured,
              and equipped with the latest tools to handle everything from a
              flat tyre to a full accident recovery. We invest in a modern
              fleet of flatbed trucks and recovery vehicles so your car is
              transported safely, without further damage.
            </p>
            <p>
              Whether you&rsquo;ve broken down on the motorway, been involved
              in a collision, or simply need your vehicle moved, our 24/7
              team is ready to help. We pride ourselves on clear
              communication, fair pricing, and getting you back on the road
              as quickly and safely as possible.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/about" variant="solid">
              Read more
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -bottom-5 h-[92%] w-[35%] bg-navy" />
          <div className="relative overflow-hidden rounded-tr-[180px] shadow-xl">
            <Image
              src="/images/about-tow.jpg"
              alt="Tow truck loading a red car for recovery"
              width={1615}
              height={1080}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
