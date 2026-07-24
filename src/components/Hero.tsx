import Image from "next/image";
import { Button } from "./Button";
import { WhatsAppIcon } from "./icons";
import { RoadDivider } from "./RoadDivider";

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

function DecorCloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M25 45h50a15 15 0 0 0 2-29.8A20 20 0 0 0 39 10 17 17 0 0 0 12 27a13 13 0 0 0 13 18Z"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="2"
      />
    </svg>
  );
}

function DecorPlus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 2v16M2 10h16" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-14 pb-4 lg:pt-20">
      <DecorCircleArrow className="pointer-events-none absolute left-2 top-24 h-24 w-24 lg:left-10" />
      <DecorCloud className="pointer-events-none absolute left-[18%] top-14 h-14 w-24 lg:top-10" />
      <DecorCircleArrow className="pointer-events-none absolute right-[6%] top-32 h-20 w-20" />
      <DecorPlus className="pointer-events-none absolute right-[22%] top-16 h-5 w-5" />
      <DecorPlus className="pointer-events-none absolute left-[46%] bottom-24 h-4 w-4" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-6 lg:px-10">
        <div className="relative z-10">
          <h1 className="font-heading text-[32px] font-extrabold leading-[1.2] text-white sm:text-[38px] lg:text-[44px]">
            Why FSR Recovery Groups Stands Out as the Best Choice for Towing
            Services<span className="text-red">.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa
            erat, varius tempus tincidunt in, vehicula quis orci. Sed faucibus
            ultrices velit vel bibendum. Proin magna velit, euismod eget urna
            vitae, viverra semper quam. Pellentesque aliquet ornare lacus, sit
            amet semper orci venenatis ac.
          </p>
          <div className="mt-8">
            <Button href="#contact" icon={<WhatsAppIcon className="h-4 w-4" />}>
              Call Now
            </Button>
          </div>
          <div className="relative mt-10 hidden h-16 w-px border-l-2 border-dotted border-white/50 sm:block">
            <span className="absolute -top-1.5 -left-[5px] h-3 w-3 rounded-full bg-white" />
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <Image
            src="/images/hero-mechanic.png"
            alt="FSR Recovery mechanics servicing a red car"
            width={1100}
            height={387}
            priority
            className="w-full max-w-[640px] object-contain lg:max-w-none"
          />
        </div>
      </div>

      <RoadDivider />
    </section>
  );
}
