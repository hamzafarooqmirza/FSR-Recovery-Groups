import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServiceNavigation } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "24/7 vehicle breakdown recovery, roadside assistance, jumpstarts, winch out, accident recovery, tyre changes, refueling and vehicle transporting across the region.",
};

const services = [
  {
    icon: "fa-solid fa-truck-pickup",
    img: "/images/service-breakdown.jpg",
    alt: "24/7 Vehicle Breakdown Recovery",
    title: "24/7 Vehicle Breakdown Recovery",
    href: "/services/vehicle-breakdown-recovery",
    desc: "Round-the-clock recovery for any breakdown, wherever you are on the road, day or night.",
    key: "vehicle-breakdown-recovery",
    features: [
      "Available day and night",
      "Safe recovery to your chosen location",
    ],
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    img: "/images/service-roadside.jpg",
    alt: "Roadside Assistance",
    title: "Roadside Assistance",
    href: "/services/roadside-assistance",
    desc: "On-the-spot help with minor faults so you can get back on your way without a full tow.",
    key: "roadside-assistance",
    features: [
      "Roadside fault assessment",
      "Recovery arranged when needed",
    ],
  },
  {
    icon: "fa-solid fa-car-battery",
    img: "/images/service-jumpstart.jpg",
    alt: "Jumpstart Services",
    title: "Jumpstart Services",
    ...getServiceNavigation("jumpstart-services"),
    desc: "Flat battery? We'll get your engine running again in minutes, anywhere you're parked.",
    features: [
      "Fast battery restart",
      "Charging issue check",
    ],
  },
  {
    icon: "fa-solid fa-truck-monster",
    img: "/images/service-winch.jpg",
    alt: "Winch Out",
    title: "Winch Out",
    ...getServiceNavigation("winch-out"),
    desc: "Stuck in mud, sand, or a ditch? Our winches pull your vehicle free without further damage.",
    features: [
      "Mud, ditch and difficult-access recovery",
      "Careful, controlled winching",
    ],
  },
  {
    icon: "fa-solid fa-car-burst",
    img: "/images/service-accident.jpg",
    alt: "Accident Emergency Assistance",
    title: "Accident Emergency Assistance",
    ...getServiceNavigation("accident-emergency-assistance"),
    desc: "Fast, careful recovery from the scene of a collision, handled with care and full insurance.",
    features: [
      "Professional scene recovery",
      "Transport to a body shop or storage",
    ],
  },
  {
    icon: "fa-solid fa-circle-dot",
    img: "/images/service-tyre.jpg",
    alt: "Changing Spare Tyre",
    title: "Changing Spare Tyre",
    ...getServiceNavigation("changing-spare-tyre"),
    desc: "Quick, safe roadside tyre changes so a puncture doesn't leave you waiting around.",
    features: [
      "Cars and light vans",
      "Safe roadside fitting",
    ],
  },
  {
    icon: "fa-solid fa-gas-pump",
    img: "/images/service-refuel.jpg",
    alt: "Refueling",
    title: "Refueling",
    ...getServiceNavigation("refueling"),
    desc: "Run out of fuel? We'll bring enough to get you safely to the nearest station.",
    features: [
      "Petrol and diesel delivery",
      "Enough fuel to reach a station",
    ],
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    img: "/images/service-transport.jpg",
    alt: "Vehicle Transporting",
    title: "Vehicle Transporting",
    ...getServiceNavigation("vehicle-transporting"),
    desc: "Safe, secure transport for vehicles that can't be driven, over any distance.",
    features: [
      "Flexible local and long-distance moves",
      "Secure loading and transport",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Get in Touch",
    desc: "Call or message us on WhatsApp with your location and a quick description of the problem.",
    icon: "fa-solid fa-phone",
  },
  {
    step: "02",
    title: "Share Your Details",
    desc: "Tell us your vehicle type, pickup location and destination so we can plan the right response.",
    icon: "fa-solid fa-location-dot",
  },
  {
    step: "03",
    title: "We Reach You",
    desc: "Our team heads to your location and handles your vehicle with care from the moment we arrive.",
    icon: "fa-solid fa-truck-pickup",
  },
  {
    step: "04",
    title: "Safe Drop-Off",
    desc: "We deliver your vehicle to your chosen garage, home or storage location and keep you updated throughout.",
    icon: "fa-solid fa-circle-check",
  },
];

const faqs = [
  {
    q: "How quickly can you reach me?",
    a: "Response times depend on your location and current job volume, but we prioritise urgent roadside enquiries and aim to reach you as quickly as possible.",
  },
  {
    q: "Do you cover areas outside the city?",
    a: "Yes. We regularly cover the wider region including motorways, rural roads and out-of-town areas. Get in touch if you are unsure whether your location is covered.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
  {
    q: "Is my vehicle insured during recovery?",
    a: "Yes, we are fully insured and take care to load, transport and unload every vehicle safely from start to finish.",
  },
  {
    q: "Are you available at night and on weekends?",
    a: "Yes. Our recovery service operates 24 hours a day, seven days a week, including weekends and bank holidays.",
  },
  {
    q: "What details should I provide when I call?",
    a: "Please share your exact location, vehicle make and model, the problem you are experiencing and where you would like the vehicle taken.",
  },
  {
    q: "Can you recover vehicles from motorways?",
    a: "Yes. Move to a safe place where possible, follow motorway safety guidance and tell us your carriageway, direction and nearest marker or junction.",
  },
  {
    q: "Can you transport a vehicle that is not broken down?",
    a: "Yes. We can transport non-running vehicles, dealership purchases and vehicles being moved between homes, garages or storage locations.",
  },
  {
    q: "What types of vehicles can you recover?",
    a: "We assist most cars and light vans. Tell us the vehicle type and condition when you contact us so we can send suitable equipment.",
  },
  {
    q: "Can I travel with my vehicle?",
    a: "Passenger space depends on the recovery vehicle and circumstances. Let us know how many people are with you when you call so we can advise.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header activePath="/services" />

      <main>
        {/* Page Banner */}
        <section className="hero-bg text-white">
          <div className="container-site fade-up py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-red/40 bg-red/15 px-3 py-1.5 text-xs font-semibold text-red-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-screwdriver-wrench flex-shrink-0"></i> Our Services
            </p>
            <h1 className="mb-3 text-3xl leading-tight font-extrabold sm:mb-5 sm:text-4xl lg:text-6xl">
              Roadside Recovery &amp; Towing Services
            </h1>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Practical, professional support for breakdowns, accidents and roadside emergencies across the region.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="tel:+447888502989" className="btn-glow rounded-full bg-red px-5 py-3.5 text-center text-sm font-bold text-white transition sm:px-7 sm:py-4 sm:text-base">
                <i className="fa-solid fa-phone mr-2"></i>Call +44 7888 502989
              </a>
              <a
                href="https://wa.me/447888502989"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-slate-50 py-20">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">What We Offer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-navy lg:text-4xl">Complete Roadside &amp; Recovery Support</h2>
              <p className="text-navy/70">From a flat battery to a full accident recovery, our team handles every job with the same care and attention.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article id={service.key} key={service.title} className="service-card fade-up group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white">
                  <div className="relative overflow-hidden">
                    <Image src={service.img} alt={service.alt} width={1200} height={900} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/95 shadow-lg">
                      <i className={`${service.icon} text-lg text-red`}></i>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-navy">
                      {service.href ? <Link href={service.href} className="transition hover:text-red">{service.title}</Link> : service.title}
                    </h3>
                    <p className="mb-5 text-sm leading-6 text-navy/65">{service.desc}</p>
                    <ul className="mb-6 grid flex-1 gap-2 border-t border-navy/8 pt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-navy/75">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red/10">
                            <i className="fa-solid fa-check text-[10px] text-red"></i>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center gap-3 border-t border-navy/8 pt-5">
                      {service.href && (
                        <Link href={service.href} aria-label={`Learn more about ${service.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:border-red hover:bg-red hover:text-white">
                          <i className="fa-solid fa-arrow-right text-sm"></i>
                        </Link>
                      )}
                      <a
                        href="tel:+447888502989"
                        className="flex-1 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-navy-light"
                      >
                        <i className="fa-solid fa-phone mr-1.5"></i>Call Now
                      </a>
                      <a
                        href="https://wa.me/447888502989"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition hover:bg-green-600"
                        aria-label={`Message about ${service.title} on WhatsApp`}
                      >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-navy py-20 text-white">
          <div className="container-site">
            <div className="fade-up mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-red">How It Works</p>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Simple From First Call to Drop-Off</h2>
              <p className="text-white/70">No confusing steps. Here is exactly what happens when you contact us.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="dark-feature-card fade-up relative p-7">
                  <span className="absolute top-5 right-6 text-3xl font-extrabold text-white/15">{item.step}</span>
                  <i className={`${item.icon} mb-5 text-3xl text-red`}></i>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container-site mx-auto max-w-4xl">
            <div className="fade-up mb-12 text-center">
              <p className="mb-3 font-bold text-red">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-navy lg:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="faq-item fade-up group rounded-2xl border border-navy/10 bg-slate-50">
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-5 font-bold text-navy">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red/10 text-xs font-extrabold text-red">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{faq.q}</span>
                    <i className="fa-solid fa-plus text-sm text-red transition-transform group-open:rotate-45"></i>
                  </summary>
                  <p className="px-5 pb-5 pl-16 text-sm leading-6 text-navy/70">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red py-20 text-center text-white">
          <div className="container-site fade-up">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need a Service Not Listed?</h2>
            <p className="mb-8 text-lg text-white/90">Get in touch and we will let you know how we can help with your specific situation.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+447888502989" className="rounded-full bg-navy px-8 py-4 font-bold text-white transition hover:bg-navy-light">
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/447888502989"
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
