import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A19 Breakdown Recovery | 24/7 Motorway-Standard Recovery | FSR Recovery Group";
const description = "FSR Recovery Group provides 24/7 breakdown recovery on the A19 between Teesside, Sunderland, Peterlee and Thirsk. Call now for fast, reliable roadside recovery.";
const path = "/areas/a19";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A19",
  h1: "24/7 Breakdown Recovery on the A19",
  heroIntro: "The A19 is a fast, dual-carriageway route linking Teesside, Sunderland and the North East coast. FSR Recovery Group provides 24/7 recovery along the A19 through Middlesbrough, Peterlee, Sunderland and toward Thirsk.",
  heroImage: "/images/service-breakdown.jpg",
  heroImageAlt: "Recovery vehicle on a busy dual carriageway",
  badges: ["Available 24/7", "Dual Carriageway Route", "Cars & Vans"],
  introHeading: "Recovery Along the A19",
  introParagraphs: [
    "Running from North Yorkshire, past Thirsk and Teesside, up through Peterlee, Sunderland and on toward Tyneside, the A19 is one of the busiest routes in our coverage area, carrying a mix of commuter and long-distance traffic.",
    "A breakdown on a fast dual carriageway like the A19 can be particularly dangerous, and we treat every A19 callout with the same care as a motorway recovery, prioritising your safety while we work.",
    "If you break down on the A19, move to the verge or a place of relative safety where possible, put your hazard lights on, and call us with your exact location, including the nearest junction or landmark.",
  ],
  localHighlightsTitle: "A19 Coverage Highlights",
  localHighlights: [
    "Thirsk and the North Yorkshire section of the A19",
    "Teesside and the Middlesbrough interchange",
    "Peterlee and the East Durham stretch",
    "Sunderland and routes toward Tyneside",
  ],
  situationsTitle: "Common A19 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A19.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Failure at Speed", text: "A mechanical fault at dual-carriageway speed on the A19 needs a prompt, careful recovery response." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery", text: "A vehicle that stalls and won't restart on the A19 verge is a common recovery callout." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Blowout", text: "A tyre blowout at speed on the A19 can be dangerous — we recover the vehicle once it's safe to do so." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A19, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-temperature-high", title: "Overheating", text: "An overheating engine on a long A19 journey is recovered before it causes further damage." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Running low on fuel on a long A19 stretch happens more than you'd think — we can bring fuel to you." },
  ],
  faqs: [
    { question: "Do you recover vehicles broken down on the A19?", answer: "Yes, we respond to breakdowns anywhere along the A19 through our coverage area, from Thirsk to Sunderland." },
    { question: "Is the A19 treated as a motorway for recovery purposes?", answer: "The A19 is a fast dual carriageway, and we apply the same safety-first approach we use for motorway recovery when responding here." },
    { question: "What should I do if I break down on the A19?", answer: "Move to the verge or a place of relative safety if possible, switch on your hazard lights, and call us with your exact location before staying safe until we arrive." },
    { question: "Do you cover the A19 near Middlesbrough and Teesside?", answer: "Yes, the Teesside section of the A19, including the Middlesbrough interchange, is within our regular coverage area." },
    { question: "Can you recover a vehicle from the A19 near Peterlee?", answer: "Yes, we cover the A19 as it passes Peterlee and the East Durham area." },
    { question: "Is A19 recovery available at night?", answer: "Yes, FSR Recovery Group operates 24/7 on the A19, including overnight and weekend breakdowns." },
  ],
  ctaHeading: "Broken Down on the A19?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A19, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Middlesbrough", href: "/areas/middlesbrough" },
    { label: "Sunderland", href: "/areas/sunderland" },
    { label: "Peterlee", href: "/areas/peterlee" },
    { label: "Thirsk", href: "/areas/thirsk" },
  ],
};

export default function A19AreaPage() {
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
