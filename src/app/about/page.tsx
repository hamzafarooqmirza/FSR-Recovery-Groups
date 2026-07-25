import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoadDivider } from "@/components/RoadDivider";
import { TrackRecord } from "@/components/TrackRecord";
import { Cta } from "@/components/Cta";
import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | FSR Recovery Groups",
  description:
    "Learn about FSR Recovery Groups — 15+ years providing dependable 24/7 vehicle recovery, roadside assistance and transport across the region.",
};

const values = [
  {
    title: "Always Available",
    description:
      "Breakdowns and accidents don't keep office hours, so neither do we. Our team is on call 24 hours a day, every day of the year.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5" />
        <path d="M20 11v9l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fast Response",
    description:
      "A regional fleet of recovery vehicles means we're rarely far away, so help reaches you quickly wherever you've broken down.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
        <path d="M6 24h5l3-9h12l3 9h5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 24v4h28v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="28" r="3" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="27" cy="28" r="3" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Every technician is trained, insured, and equipped to handle your vehicle carefully, minimising the risk of any further damage.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
        <path
          d="M20 6 8 10v10c0 8 5 13.5 12 14 7-.5 12-6 12-14V10L20 6Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d="M15 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fair, Upfront Pricing",
    description:
      "No hidden fees or surprise call-outs. You'll always know the cost before we start, whatever the job.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
        <path
          d="M8 20 20 8l12 4 4 12-12 12-16-16Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="16" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
];

const reasons = [
  "Fully trained, licensed and insured recovery technicians",
  "Modern fleet of flatbed trucks and recovery vehicles",
  "24/7 availability, including nights, weekends and holidays",
  "Transparent, upfront quotes with no hidden charges",
  "Careful handling to avoid any further damage to your vehicle",
  "Friendly, clear communication from call-out to drop-off",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-red" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
      <path d="m7.5 12.5 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-16 pb-2 lg:pt-20">
          <div className="relative mx-auto max-w-[1400px] px-6 text-center lg:px-10">
            <h1 className="font-heading text-[34px] font-extrabold text-white sm:text-[44px]">
              About Us<span className="text-red">.</span>
            </h1>
            <p className="mt-3 text-[15px] text-white/70">
              <span className="text-red">Home</span> / About Us
            </p>
          </div>
          <RoadDivider />
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <div>
              <p className="font-heading text-2xl font-bold tracking-wide text-red">
                OUR STORY
              </p>
              <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                Built On the Roadside, Not in a Boardroom
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy/70">
                <p>
                  FSR Recovery Groups started with a single truck and a
                  simple promise: turn up fast, treat every vehicle like our
                  own, and never leave a customer stranded. Fifteen years
                  later, that promise hasn&rsquo;t changed, even as we&rsquo;ve
                  grown into a full regional recovery operation.
                </p>
                <p>
                  Today our team handles everything from routine roadside
                  callouts to complex accident recoveries, working with
                  private drivers, fleet operators, and insurance partners
                  across the region. We&rsquo;ve invested in a modern fleet
                  and ongoing training so that whatever the job, it&rsquo;s
                  handled properly the first time.
                </p>
                <p>
                  What hasn&rsquo;t changed is how we treat people. A
                  breakdown or accident is stressful enough without dealing
                  with a recovery company that&rsquo;s hard to reach or
                  unclear about pricing. We answer the phone, we explain
                  what&rsquo;s happening, and we get you moving again as
                  quickly and safely as possible.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/#contact" icon={<WhatsAppIcon className="h-4 w-4" />}>
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-5 -bottom-5 h-[92%] w-[35%] bg-navy" />
              <div className="relative overflow-hidden rounded-tr-[180px] shadow-xl">
                <Image
                  src="/images/service-transport.jpg"
                  alt="FSR Recovery Groups vehicle transporter on the highway"
                  width={1735}
                  height={1080}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                What We Stand For<span className="text-red">.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-navy/70">
                Four principles guide every job we take on, from a quick
                jumpstart to a multi-vehicle transport.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-navy/10 p-6 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-red">
                    {v.icon}
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-navy/70">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrackRecord />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <div className="relative overflow-hidden rounded-2xl shadow-xl lg:order-2">
              <Image
                src="/images/gallery-2.jpg"
                alt="FSR Recovery technician winching a vehicle free"
                width={2000}
                height={1333}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="lg:order-1">
              <p className="font-heading text-2xl font-bold tracking-wide text-red">
                WHY CHOOSE US
              </p>
              <h2 className="mt-1 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                What Makes Us Different
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy/70">
                There&rsquo;s no shortage of recovery companies to call. Here&rsquo;s
                why customers across the region choose FSR Recovery Groups
                and stick with us.
              </p>
              <ul className="mt-6 space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[15px] leading-relaxed text-navy/80">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
