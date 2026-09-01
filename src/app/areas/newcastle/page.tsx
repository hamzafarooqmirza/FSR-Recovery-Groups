import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Swift Newcastle Vehicle Recovery at Your Service";
const description = "Experience peace of mind with our professional vehicle recovery in Newcastle. Call us for immediate support!";
const path = "/areas/newcastle";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Newcastle",
  h1: "Car Recovery & Breakdown Assistance in Newcastle",
  heroIntro: "Broken down in Newcastle upon Tyne? FSR Recovery Group provides fast, reliable vehicle recovery across the city and the surrounding Tyneside area, day or night.",
  heroImage: "/images/gallery-1.jpg",
  heroImageAlt: "Recovery vehicle assisting a stranded car in a UK city",
  badges: ["Available 24/7", "City & Motorway Cover", "Cars & Vans"],
  introHeading: "Breakdown Recovery Across Newcastle",
  introParagraphs: [
    "Newcastle's busy Quayside, city centre one-way system and the approach roads around the Tyne and Redheugh bridges can turn a simple breakdown into a stressful situation. FSR Recovery Group responds to vehicle breakdowns throughout Newcastle upon Tyne, from the city centre out to Gosforth, Jesmond and beyond.",
    "We regularly assist drivers on the A1 Western Bypass and the A167 corridor that carries traffic into and out of the city, as well as on residential streets and retail park car parks. Wherever your vehicle has stopped, tell us your exact location and we will confirm how quickly we can reach you.",
    "As a County Durham based recovery operator, we cover Newcastle as part of our wider North East service area, bringing the same careful vehicle handling and clear communication to every callout in the city.",
  ],
  localHighlightsTitle: "Newcastle Coverage Highlights",
  localHighlights: [
    "Newcastle city centre and the Quayside",
    "A1 Western Bypass and A167 approach routes",
    "Gosforth, Jesmond and surrounding suburbs",
    "Retail parks, industrial estates and residential streets",
  ],
  situationsTitle: "Breakdown Situations We Handle in Newcastle",
  situationsIntro: "From city centre traffic to the outer ring road, these are some of the most common reasons drivers in Newcastle call us for recovery.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Breakdown", text: "Sudden mechanical faults on Newcastle's busy roads can leave a vehicle undriveable — we recover it to a safe location or garage." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat or failing battery is one of the most common breakdown calls we receive from drivers across Newcastle." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Problems", text: "Punctures and blowouts on city streets or the bypass are dealt with quickly and safely." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating Engine", text: "If your vehicle overheats in traffic, we can recover it before further damage occurs." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision in or around Newcastle, we provide prompt, careful recovery of your vehicle." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Caught out on the A1 or in the city centre with an empty tank? We can bring fuel to get you moving." },
  ],
  faqs: [
    { question: "Do you provide vehicle recovery in Newcastle city centre?", answer: "Yes. We recover vehicles from Newcastle city centre, the Quayside and surrounding streets, and can navigate the one-way system to reach you." },
    { question: "How quickly can you reach a breakdown in Newcastle?", answer: "Response times depend on your exact location and current traffic, but we aim to reach drivers in Newcastle as quickly as possible. Call us with your location for an accurate estimate." },
    { question: "Do you recover vehicles on the A1 near Newcastle?", answer: "Yes, we assist drivers who break down on the A1 Western Bypass and other approach roads into Newcastle, following appropriate roadside safety procedures." },
    { question: "Can you take my car from Newcastle to a garage outside the city?", answer: "Yes. We can transport your vehicle from Newcastle to an agreed garage, home address or another suitable destination, including locations outside the city." },
    { question: "Do you cover areas around Newcastle such as Gosforth and Jesmond?", answer: "Yes. Our Newcastle coverage extends to the surrounding suburbs including Gosforth, Jesmond and neighbouring areas — call us to confirm your specific location." },
    { question: "Is recovery available in Newcastle at night or on weekends?", answer: "Yes. FSR Recovery Group operates 24/7, including nights, weekends and public holidays, for breakdowns anywhere in Newcastle." },
    { question: "What should I do while I wait for recovery in Newcastle?", answer: "Move to a safe position away from traffic if possible, switch on your hazard lights, and stay somewhere visible and secure until we arrive." },
  ],
  ctaHeading: "Need Recovery in Newcastle Right Now?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Newcastle and we will confirm the fastest way to get you moving again.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

export default function NewcastleAreaPage() {
  return (
    <>
      <Header activePath="/areas" />
      <main>
        <AreaPageLayout content={content} path={path} />
      </main>
      <Footer />
    </>
  );
}
