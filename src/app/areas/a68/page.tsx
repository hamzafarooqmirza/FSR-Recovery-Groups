import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "A68 Breakdown Recovery Services Available 24/7";
const description = "Fast and reliable A68 breakdown recovery services at your fingertips. Contact us for immediate assistance!";
const path = "/areas/a68";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "road",
  eyebrow: "A68",
  h1: "Breakdown Recovery on the A68",
  heroIntro: "The A68 is a scenic but sometimes challenging route running through Bishop Auckland and out toward the Pennine fringe. FSR Recovery Group provides 24/7 recovery for breakdowns anywhere along the A68 in our coverage area.",
  heroImage: "/images/about-tow.jpg",
  heroImageAlt: "Recovery vehicle on a rural moorland road",
  badges: ["Rural Route", "Available 24/7", "Cars & Vans"],
  introHeading: "Recovery Along the A68",
  introParagraphs: [
    "Passing through Bishop Auckland and heading toward the higher ground of the North Pennines, the A68 combines town-centre traffic with quieter, more exposed rural stretches — each presenting different recovery needs.",
    "The higher sections of the A68 can be affected by weather, and the road's twists and gradients mean breakdowns and minor collisions are not unusual. FSR Recovery Group is experienced in recovering vehicles from this type of terrain.",
    "If you break down on the A68, try to find a safe pull-in if one is available, stay visible, and call us with your exact location so we can plan the safest and quickest route to reach you.",
  ],
  localHighlightsTitle: "A68 Coverage Highlights",
  localHighlights: [
    "Bishop Auckland and the surrounding town roads",
    "Rural stretches heading toward the Durham Dales",
    "Higher ground and exposed Pennine-fringe sections",
    "Connections toward the Scottish Borders",
  ],
  situationsTitle: "Common A68 Breakdown Situations",
  situationsIntro: "These are among the most frequent reasons drivers call us for recovery on the A68.",
  situations: [
    { icon: "fa-solid fa-truck-monster", title: "Stuck on Rural Ground", text: "Vehicles that leave the road on the A68's rural stretches can be winched clear safely." },
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "A mechanical fault on the exposed sections of the A68 needs a careful, prompt recovery response." },
    { icon: "fa-solid fa-circle-notch", title: "Tyre Damage", text: "Punctures on the A68's rougher rural surfaces are dealt with quickly and safely." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision on the A68, we provide prompt, careful vehicle recovery." },
    { icon: "fa-solid fa-snowflake", title: "Weather-Related Breakdowns", text: "Wind and rain on the higher parts of the A68 can affect vehicles — we respond as conditions allow." },
    { icon: "fa-solid fa-gas-pump", title: "Running Out of Fuel", text: "Fewer fuel stops on the rural A68 mean running low is a real risk — we can bring fuel to you." },
  ],
  faqs: [
    { question: "Do you recover vehicles on the rural sections of the A68?", answer: "Yes, we regularly recover vehicles from the rural and higher-ground sections of the A68 near Bishop Auckland." },
    { question: "What should I do if I break down on the A68 in poor weather?", answer: "Find a safe pull-in if one is available, stay visible and warm, and call us with your exact location so we can plan the safest route to you." },
    { question: "Do you cover the A68 near Bishop Auckland?", answer: "Yes, the section of the A68 through and around Bishop Auckland is within our regular coverage area." },
    { question: "Can you recover a vehicle that has left the road on the A68?", answer: "Yes, we provide winch-out recovery for vehicles that have left the carriageway or become stuck on the verge." },
    { question: "Is A68 recovery available overnight?", answer: "Yes, FSR Recovery Group operates 24/7 on the A68, including overnight and in poor weather where it's safe to respond." },
    { question: "Can you take my vehicle from the A68 to a garage?", answer: "Yes, once recovered from the A68, we can transport your vehicle to an agreed garage, home address or other suitable destination." },
  ],
  ctaHeading: "Broken Down on the A68?",
  ctaText: "Call or WhatsApp FSR Recovery Group now with your exact location on the A68, and we'll confirm the fastest way to reach you.",
  nearbyAreas: [
    { label: "Bishop Auckland", href: "/areas/bishop-auckland" },
    { label: "Durham", href: "/areas/durham" },
    { label: "A167 Recovery", href: "/areas/a167" },
  ],
};

export default function A68AreaPage() {
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
