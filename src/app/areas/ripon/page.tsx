import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Ripon's Trusted Car Recovery Service - Get Help Now";
const description = "Experience trustworthy car recovery in Ripon. We’re ready to assist you anytime, anywhere. Reach out today!";
const path = "/areas/ripon";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Ripon",
  h1: "Vehicle Recovery in Ripon",
  heroIntro: "FSR Recovery Group provides dependable breakdown recovery to drivers in Ripon, one of North Yorkshire's smallest cities, and the surrounding countryside.",
  heroImage: "/images/about-tow.jpg",
  heroImageAlt: "Recovery vehicle assisting a driver near a cathedral city",
  badges: ["Available 24/7", "City & Rural Cover", "Cars & Vans"],
  introHeading: "Recovery Support for Ripon and the Surrounding Area",
  introParagraphs: [
    "Ripon's compact city centre around the market place and Cathedral, along with the rural roads that lead out toward Harrogate and the Yorkshire Dales, both fall within our coverage area. FSR Recovery Group responds to breakdowns throughout Ripon and the surrounding villages.",
    "We also cover the A61 and the nearby A1(M) as they serve Ripon, giving drivers travelling to or from the city a reliable recovery option if a vehicle problem occurs.",
    "Whether you've broken down in Ripon's centre or on a quieter road nearby, contact us with your location and vehicle details and we'll confirm the quickest way to help.",
  ],
  localHighlightsTitle: "Ripon Coverage Highlights",
  localHighlights: [
    "Ripon city centre and the market place",
    "A61 and nearby A1(M) routes",
    "Routes toward Harrogate and the Yorkshire Dales",
    "Surrounding rural villages and farmland",
  ],
  situationsTitle: "Common Breakdown Callouts Around Ripon",
  situationsIntro: "These are among the recovery situations we most often handle in and around Ripon.",
  situations: [
    { icon: "fa-solid fa-key", title: "Vehicle Won't Start", text: "A car that won't start in Ripon's city centre or on a rural drive is a common local callout." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre", text: "Punctures on Ripon's streets or the surrounding country roads are dealt with quickly and safely." },
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles stuck on soft ground near Ripon can be winched clear safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the A61 near Ripon can be recovered to a suitable garage." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision near Ripon, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel near Ripon? We can bring fuel directly to your location." },
  ],
  faqs: [
    { question: "Do you recover vehicles from Ripon city centre?", answer: "Yes, we recover vehicles from Ripon city centre, including the market place and surrounding streets." },
    { question: "Can you help on the A61 near Ripon?", answer: "Yes, we assist drivers who break down on the A61 as it serves Ripon." },
    { question: "Do you cover villages around Ripon?", answer: "Yes, our Ripon coverage extends to the surrounding villages and rural North Yorkshire roads." },
    { question: "Is recovery available in Ripon overnight?", answer: "Yes, FSR Recovery Group operates 24/7 across Ripon, including nights, weekends and holidays." },
    { question: "Can you transport my car from Ripon to a garage elsewhere?", answer: "Yes, we can arrange transport from Ripon to an agreed garage, home address or other suitable destination." },
    { question: "How far is Ripon from your Darlington base?", answer: "Ripon sits toward the southern edge of our coverage area — call us with your location and we'll confirm response times." },
  ],
  ctaHeading: "Broken Down in Ripon?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your location and we'll confirm the fastest way to help.",
  nearbyAreas: [
    { label: "Thirsk", href: "/areas/thirsk" },
    { label: "Catterick", href: "/areas/catterick" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function RiponAreaPage() {
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
