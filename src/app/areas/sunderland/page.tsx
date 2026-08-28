import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Vehicle Recovery Sunderland | 24/7 Breakdown Recovery | FSR Recovery Group";
const description = "FSR Recovery Group provides 24/7 breakdown recovery and roadside assistance across Sunderland and Wearside, including the A19 and A1231. Call now for fast help.";
const path = "/areas/sunderland";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Sunderland",
  h1: "Breakdown Recovery Across Sunderland",
  heroIntro: "From the city centre to the coast, FSR Recovery Group provides reliable vehicle recovery and roadside assistance to drivers throughout Sunderland and Wearside.",
  heroImage: "/images/service-roadside.jpg",
  heroImageAlt: "Roadside assistance technician helping a driver in Sunderland",
  badges: ["Available 24/7", "City & Coastal Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Sunderland and Wearside",
  introParagraphs: [
    "Sunderland's mix of city centre streets, coastal roads and busy retail areas around the Bridges shopping centre means breakdowns can happen almost anywhere. FSR Recovery Group responds to callouts across the city, from the Wear riverside to the seafront at Roker and Seaburn.",
    "We also cover the A19 and A1231 as they serve Sunderland, along with routes connecting to Washington and South Tyneside, giving commuters and visitors a dependable option if their vehicle lets them down.",
    "Wherever you've broken down in Sunderland, tell us your location and vehicle details and we'll advise on the quickest way to get you moving again or recovered to a suitable destination.",
  ],
  localHighlightsTitle: "Sunderland Coverage Highlights",
  localHighlights: [
    "Sunderland city centre and the Bridges area",
    "A19 and A1231 routes into and around the city",
    "Roker, Seaburn and the coastal road",
    "Washington and surrounding Wearside suburbs",
  ],
  situationsTitle: "Common Breakdown Callouts in Sunderland",
  situationsIntro: "These are among the most frequent reasons Sunderland drivers call on us for recovery support.",
  situations: [
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A flat battery in a Sunderland car park or on a residential street is a common reason for our callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures from city centre kerbs or coastal road debris are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Breakdown", text: "If your vehicle develops a mechanical fault in Sunderland, we can recover it to a suitable garage." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine in traffic near the Bridges can be recovered before it causes further damage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "We provide prompt recovery following a collision on Sunderland's roads or the A19." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on the coastal road or A1231? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you cover Sunderland city centre for breakdown recovery?", answer: "Yes, we recover vehicles from Sunderland city centre and the surrounding streets, including near the Bridges shopping area." },
    { question: "Can you help if I break down on the A19 near Sunderland?", answer: "Yes, we assist drivers who break down on the A19 as it passes Sunderland, following appropriate roadside safety procedures." },
    { question: "Do you cover the Sunderland coastal areas like Roker and Seaburn?", answer: "Yes, our Sunderland coverage extends to Roker, Seaburn and the surrounding coastal roads." },
    { question: "How far is Sunderland from your Darlington base?", answer: "Sunderland is part of our wider North East coverage area — call us with your location and we'll confirm response times." },
    { question: "Can you transport my car from Sunderland to a garage elsewhere?", answer: "Yes, we can arrange vehicle transport from Sunderland to an agreed garage, home address or other destination." },
    { question: "Is recovery available in Sunderland overnight?", answer: "Yes, FSR Recovery Group operates 24/7 in Sunderland, including nights, weekends and holidays." },
    { question: "Do you cover Washington as well as Sunderland city itself?", answer: "Yes, Washington and the surrounding Wearside suburbs are included in our Sunderland coverage area." },
  ],
  ctaHeading: "Need Recovery in Sunderland?",
  ctaText: "Call or WhatsApp FSR Recovery Group with your location in Sunderland and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Newcastle", href: "/areas/newcastle" },
    { label: "Peterlee", href: "/areas/peterlee" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

export default function SunderlandAreaPage() {
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
