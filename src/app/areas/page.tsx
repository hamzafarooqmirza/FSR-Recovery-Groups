import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Car & Breakdown Recovery Areas | FSR Recovery Group",
  description: "Explore FSR Recovery Group car recovery, breakdown recovery and roadside assistance coverage from Darlington across nearby cities, towns and main roads.",
  alternates: { canonical: "/areas" },
};

const citiesAndTowns = [
  ["Newcastle", "/areas/newcastle"],
  ["Durham", "/areas/durham"],
  ["Darlington", "/areas/darlington"],
  ["Sunderland", "/areas/sunderland"],
  ["Peterlee", "/areas/peterlee"],
  ["Middlesbrough", "/areas/middlesbrough"],
  ["Thirsk", "/areas/thirsk"],
  ["Northallerton", "/areas/northallerton"],
  ["Ripon", "/areas/ripon"],
  ["Catterick", "/areas/catterick"],
  ["Barnard Castle", "/areas/barnard-castle"],
  ["Bishop Auckland", "/areas/bishop-auckland"],
] as const;

const mainRoads = [
  ["A1(M)", "/areas/a1m"],
  ["A66", "/areas/a66"],
  ["A19", "/areas/a19"],
  ["A67", "/areas/a67"],
  ["A68", "/areas/a68"],
  ["A167", "/areas/a167"],
] as const;

const faqs = [
  {
    q: "Do you cover motorways?",
    a: "Yes. We assist drivers broken down on motorways and major routes across the region. Safety is our priority when responding to motorway breakdowns.",
  },
  {
    q: "Can you travel further afield?",
    a: "For long-distance vehicle transport, yes. We can discuss planned moves or transfers further afield. Call us with the details and we will confirm availability and cost.",
  },
  {
    q: "What if I am not sure whether you cover my area?",
    a: "Call or WhatsApp us with your location and vehicle details. We will confirm whether assistance is available for your location and circumstances.",
  },
  {
    q: "Do you charge more for areas further away?",
    a: "Distance is factored into pricing. Once we know your pickup location and destination we will give you a clear quote before proceeding.",
  },
];

const GBP_MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.266181975819!2d-1.5612949233137332!3d54.528801885596664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeed77f7b9c8a489%3A0x3af9f4efbabca787!2sFSR%20Recovery%20Group!5e0!3m2!1sen!2s!4v1784967444093!5m2!1sen!2s";

export default function AreasPage() {
  return (
    <>
      <Header activePath="/areas" />

      <main>
        {/* Page Banner */}
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-map-location-dot flex-shrink-0"></i> Areas Covered
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Recovery Areas from Our Darlington Base
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Explore our car recovery, breakdown recovery, vehicle recovery and roadside assistance coverage across nearby cities, towns and main roads.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href={business.tel} className="btn-glow rounded-full bg-red px-5 py-3.5 text-center text-sm font-bold text-white transition sm:px-7 sm:py-4 sm:text-base">
                <i className="fa-solid fa-phone mr-2"></i>Call {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Cities and Towns */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold uppercase tracking-wider text-red">Cities &amp; Towns</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Recovery Coverage by Location</h2>
              <p className="leading-7 text-navy/70">
                Based in Darlington, FSR Recovery Group provides car recovery, breakdown recovery, vehicle recovery and roadside assistance across the surrounding region. Choose a location for local service information; these are coverage areas, not additional offices.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {citiesAndTowns.map(([name, href]) => (
                <Link key={name} href={href} className="fade-up group flex items-center gap-4 rounded-3xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:border-red/40 hover:shadow-xl">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red"><i className="fa-solid fa-location-dot" /></span>
                  <span className="flex-1"><strong className="block text-lg text-navy group-hover:text-red">{name}</strong><span className="text-sm text-navy/60">View recovery services</span></span>
                  <i className="fa-solid fa-arrow-right text-red" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Roads */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold uppercase tracking-wider text-red">Main Roads</p>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Recovery Coverage on Major Routes</h2>
              <p className="leading-7 text-white/70">Find information about breakdown recovery and roadside assistance on the main roads we cover from our Darlington base.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mainRoads.map(([name, href]) => (
                <Link key={name} href={href} className="fade-up group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[.06] p-6 transition hover:-translate-y-1 hover:border-red/50">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red/15 text-red"><i className="fa-solid fa-road" /></span>
                  <span className="flex-1 text-xl font-bold group-hover:text-red">{name}</span>
                  <i className="fa-solid fa-arrow-right text-red" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="bg-slate-50 py-16">
          <div className="container-site">
            <div className="fade-up mx-auto mb-8 max-w-2xl text-center">
              <p className="mb-3 font-bold text-red">Find Us</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">{business.name} Location</h2>
            </div>
            <div className="fade-up w-full overflow-hidden rounded-3xl border border-navy/10 shadow-2xl" style={{ height: "420px" }}>
              <iframe
                src={GBP_MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`${business.name} Location`}
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-3xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Coverage Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="fade-up rounded-2xl border border-navy/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-navy">
                    <i className="fa-solid fa-circle-question mt-1 flex-shrink-0 text-red"></i>
                    {faq.q}
                  </h3>
                  <p className="pl-7 text-navy/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red py-20 text-center text-white">
          <div className="container-site fade-up">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Not Sure If We Cover You?</h2>
            <p className="mb-8 text-lg text-white/90">
              Call or send a WhatsApp with your location and vehicle details so we can confirm whether assistance is available.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={business.tel} className="rounded-full bg-navy px-8 py-4 font-bold text-white transition hover:bg-navy-light">
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
