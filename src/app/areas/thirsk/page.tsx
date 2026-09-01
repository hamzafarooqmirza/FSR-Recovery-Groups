import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Need Car Recovery in Thirsk? We've Got You Covered";
const description = "Experience fast car recovery in Thirsk. Get back on the road quickly! Call us now for immediate assistance.";
const path = "/areas/thirsk";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Thirsk",
  h1: "Breakdown Recovery in Thirsk and North Yorkshire",
  heroIntro: "FSR Recovery Group provides dependable vehicle recovery to drivers in Thirsk, covering the market town centre and the rural roads that surround it.",
  heroImage: "/images/gallery-2.jpg",
  heroImageAlt: "Recovery vehicle helping a driver on a rural North Yorkshire road",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Thirsk and the Surrounding Area",
  introParagraphs: [
    "Thirsk's market square, the surrounding rural lanes and the fast-moving A19 and A61 that pass close to the town mean breakdowns here can happen in very different settings. FSR Recovery Group is regularly called to the town centre, nearby villages and the main routes serving Thirsk.",
    "We also assist drivers travelling between North Yorkshire market towns, including those heading toward Northallerton or south toward York, who experience a breakdown near Thirsk.",
    "Whether you've broken down in the town itself or on a country lane nearby, contact us with your location and vehicle details and we'll confirm the quickest way to reach you.",
  ],
  localHighlightsTitle: "Thirsk Coverage Highlights",
  localHighlights: [
    "Thirsk market square and town centre",
    "A19 and A61 routes serving Thirsk",
    "Surrounding North Yorkshire villages and farmland",
    "Routes toward Northallerton and York",
  ],
  situationsTitle: "Common Breakdown Callouts Around Thirsk",
  situationsIntro: "These are among the recovery situations we most often handle in and around Thirsk.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start in Thirsk's town centre or on a farm track nearby is a common local callout." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges or muddy tracks near Thirsk can be winched clear safely." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on country lanes around Thirsk are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A19 or A61 near Thirsk can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Thirsk, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on a rural stretch near Thirsk? We can bring fuel directly to you." },
  ],
  faqs: [
    { question: "Do you cover Thirsk town centre and the market square?", answer: "Yes, we recover vehicles from Thirsk town centre, the market square and surrounding streets." },
    { question: "Can you help on the A19 or A61 near Thirsk?", answer: "Yes, we respond to breakdowns on both the A19 and A61 as they pass near Thirsk." },
    { question: "Do you cover rural villages around Thirsk?", answer: "Yes, we regularly assist drivers in the villages and farmland surrounding Thirsk." },
    { question: "Can you winch a vehicle stuck off-road near Thirsk?", answer: "Yes, we provide winch-out recovery for vehicles stuck on soft ground, verges or farm tracks near Thirsk." },
    { question: "Is recovery available in Thirsk at night?", answer: "Yes, FSR Recovery Group operates 24/7 across Thirsk and the surrounding area." },
    { question: "How far is Thirsk from your Darlington base?", answer: "Thirsk is within our wider North Yorkshire coverage area — call us with your location and we'll confirm response times." },
  ],
  ctaHeading: "Broken Down Near Thirsk?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Northallerton", href: "/areas/northallerton" },
    { label: "Ripon", href: "/areas/ripon" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

export default function ThirskAreaPage() {
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
