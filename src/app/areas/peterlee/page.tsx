import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Breakdown Recovery Peterlee | 24/7 Vehicle Recovery | FSR Recovery Group";
const description = "FSR Recovery Group provides 24/7 vehicle breakdown recovery and roadside assistance across Peterlee and East Durham, including the A19 and A182. Call now.";
const path = "/areas/peterlee";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Peterlee",
  h1: "Vehicle Recovery in Peterlee and East Durham",
  heroIntro: "FSR Recovery Group provides dependable breakdown recovery and roadside assistance across Peterlee, from the town centre to the surrounding East Durham villages.",
  heroImage: "/images/service-breakdown.jpg",
  heroImageAlt: "Breakdown recovery vehicle helping a driver near Peterlee",
  badges: ["Available 24/7", "Town & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Peterlee Drivers",
  introParagraphs: [
    "Peterlee's residential neighbourhoods, industrial estates and the surrounding East Durham countryside each present different recovery challenges. FSR Recovery Group is regularly called to breakdowns in the town centre, on the estates and along the rural lanes that connect Peterlee to nearby villages.",
    "We also cover the A19 and A182 as they serve Peterlee, along with routes toward Easington, Horden and the coast, so wherever your vehicle has stopped in the area, help is available.",
    "Whether you're commuting through Peterlee or based locally, contact us with your location and vehicle details and we'll confirm the best way to get you moving again.",
  ],
  localHighlightsTitle: "Peterlee Coverage Highlights",
  localHighlights: [
    "Peterlee town centre and residential estates",
    "A19 and A182 routes serving Peterlee",
    "Easington, Horden and the East Durham coast",
    "Industrial estates and rural lanes around the town",
  ],
  situationsTitle: "Common Breakdown Callouts Around Peterlee",
  situationsIntro: "These are among the recovery situations we most often deal with in and around Peterlee.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start on a Peterlee estate or driveway is one of our most common local callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures on Peterlee's estate roads or the A19 are dealt with quickly and safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the way through Peterlee can be recovered to a garage of your choice." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft verges or farm tracks near Peterlee can be winched clear." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Peterlee or on the A19, we provide prompt, careful recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "If you've run out of fuel around Peterlee, we can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you cover Peterlee town centre and its estates?", answer: "Yes, we recover vehicles from Peterlee town centre and the surrounding residential estates." },
    { question: "Can you assist on the A19 near Peterlee?", answer: "Yes, we respond to breakdowns on the A19 as it passes Peterlee, following appropriate roadside safety procedures." },
    { question: "Do you cover villages around Peterlee like Easington and Horden?", answer: "Yes, our Peterlee coverage extends to Easington, Horden and other nearby East Durham villages." },
    { question: "Can you recover a vehicle from a rural lane near Peterlee?", answer: "Yes, we regularly assist with recovery from rural lanes and farm tracks in the East Durham countryside around Peterlee." },
    { question: "Is recovery available in Peterlee at night?", answer: "Yes, we operate 24/7 across Peterlee, including overnight and weekend callouts." },
    { question: "Can you transport my car from Peterlee to a garage elsewhere?", answer: "Yes, we can arrange transport from Peterlee to an agreed garage, home address or other destination." },
  ],
  ctaHeading: "Broken Down Near Peterlee?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Durham", href: "/areas/durham" },
    { label: "A19 Recovery", href: "/areas/a19" },
  ],
};

export default function PeterleeAreaPage() {
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
