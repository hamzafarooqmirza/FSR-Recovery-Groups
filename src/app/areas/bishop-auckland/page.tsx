import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Fast Vehicle Recovery in Bishop Auckland – Call Now!";
const description = "Choose our dependable vehicle recovery in Bishop Auckland for stress-free assistance. Reach out today!";
const path = "/areas/bishop-auckland";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Bishop Auckland",
  h1: "Breakdown Recovery in Bishop Auckland",
  heroIntro: "FSR Recovery Group provides prompt vehicle recovery to drivers in Bishop Auckland and the surrounding County Durham towns and villages.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver in a County Durham market town",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Bishop Auckland",
  introParagraphs: [
    "Bishop Auckland's market town centre, the area around Auckland Castle and the residential streets that spread out from it are all part of our regular coverage. FSR Recovery Group responds to breakdowns throughout the town and the neighbouring communities of Shildon and Spennymoor.",
    "We also cover the A688 and A68 as they serve Bishop Auckland, key routes connecting the town to Darlington and the roads heading toward the Durham Dales and beyond.",
    "Whether you've broken down in the town centre or on a nearby rural road, contact us with your location and vehicle details and we'll confirm the fastest way to help.",
  ],
  localHighlightsTitle: "Bishop Auckland Coverage Highlights",
  localHighlights: [
    "Bishop Auckland town centre and Auckland Castle area",
    "A688 and A68 routes serving Bishop Auckland",
    "Shildon and Spennymoor",
    "Surrounding County Durham villages",
  ],
  situationsTitle: "Common Breakdown Callouts in Bishop Auckland",
  situationsIntro: "These are among the recovery situations we most often handle in and around Bishop Auckland.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery in Bishop Auckland's town centre or a residential street is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures on Bishop Auckland's streets or nearby country roads are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A688 or A68 near Bishop Auckland can be recovered to a suitable garage." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges near the Durham Dales can be winched clear safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Bishop Auckland, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Bishop Auckland? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Bishop Auckland town centre?", answer: "Yes, we recover vehicles from Bishop Auckland town centre and the surrounding streets." },
    { question: "Can you help on the A688 or A68 near Bishop Auckland?", answer: "Yes, we assist drivers who break down on either the A688 or A68 as they serve Bishop Auckland." },
    { question: "Do you cover Shildon and Spennymoor as well as Bishop Auckland?", answer: "Yes, our Bishop Auckland coverage extends to the neighbouring towns of Shildon and Spennymoor." },
    { question: "Is recovery available in Bishop Auckland overnight?", answer: "Yes, FSR Recovery Group operates 24/7 across Bishop Auckland, including nights and weekends." },
    { question: "Can you transport my car from Bishop Auckland to a garage elsewhere?", answer: "Yes, we can arrange transport from Bishop Auckland to an agreed garage, home address or other suitable destination." },
    { question: "How far is Bishop Auckland from your Darlington base?", answer: "Bishop Auckland is close to our Darlington base within our regular County Durham coverage area." },
  ],
  ctaHeading: "Broken Down in Bishop Auckland?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Barnard Castle", href: "/areas/barnard-castle" },
    { label: "A68 Recovery", href: "/areas/a68" },
  ],
};

export default function BishopAucklandAreaPage() {
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
