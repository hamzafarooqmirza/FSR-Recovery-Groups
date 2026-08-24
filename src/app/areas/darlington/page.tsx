import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AreaPageLayout, type AreaPageContent } from "@/components/AreaPage";
import { business } from "@/data/business";

const title = "Car Recovery Darlington | 24/7 Local Breakdown Recovery | FSR Recovery Group";
const description = "FSR Recovery Group is based in Darlington, providing 24/7 local vehicle recovery, roadside assistance and accident recovery across the town. Call now for fast help.";
const path = "/areas/darlington";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: path }, robots: { index: true, follow: true },
  openGraph: { title, description, url: path, type: "website", siteName: business.name },
  twitter: { card: "summary", title, description },
};

const content: AreaPageContent = {
  category: "city",
  eyebrow: "Darlington",
  h1: "Local Vehicle Recovery in Darlington",
  heroIntro: "FSR Recovery Group is based right here in Darlington, giving us some of the fastest response times anywhere in our coverage area for breakdowns, accidents and roadside emergencies.",
  heroImage: "/images/gallery-3.jpg",
  heroImageAlt: "FSR Recovery Group vehicle attending a breakdown in Darlington",
  badges: ["Local Darlington Base", "Available 24/7", "Cars & Vans"],
  introHeading: "Darlington's Local Recovery Specialist",
  introParagraphs: [
    "Being based at 135 Gladstone St in Darlington means we know the town well — from the pedestrianised town centre and Cornmill shopping area to the retail parks along Yarm Road and the residential streets around Cockerton, Harrowgate Hill and Eastbourne.",
    "We also cover the A1(M) and A66 junctions that serve Darlington, along with the roads connecting to Middleton St George, Hurworth and the surrounding villages, so wherever in the Darlington area your vehicle has broken down, help isn't far away.",
    "Because our base is in Darlington itself, we're often able to respond faster here than in areas further from our depot — call us with your location and vehicle details and we'll confirm how quickly we can be with you.",
  ],
  localHighlightsTitle: "Darlington Coverage Highlights",
  localHighlights: [
    "Darlington town centre and the Cornmill area",
    "A1(M) and A66 junctions serving Darlington",
    "Cockerton, Harrowgate Hill and Eastbourne",
    "Middleton St George, Hurworth and surrounding villages",
  ],
  situationsTitle: "Breakdown Situations We Handle Across Darlington",
  situationsIntro: "As our home town, Darlington is where we respond to the widest range of everyday breakdown and recovery situations.",
  situations: [
    { icon: "fa-solid fa-gears", title: "Mechanical Failure", text: "Engine or mechanical faults anywhere in Darlington are recovered promptly given our local base." },
    { icon: "fa-solid fa-car-battery", title: "Flat Battery & Jumpstarts", text: "A flat battery in a Darlington car park or driveway is one of our most common local callouts." },
    { icon: "fa-solid fa-circle-notch", title: "Flat Tyre or Puncture", text: "We can fit a spare or recover your vehicle if a tyre problem leaves it unsafe to continue in Darlington." },
    { icon: "fa-solid fa-gas-pump", title: "Out of Fuel", text: "Run out of fuel on Yarm Road or in the town centre? We can bring fuel directly to you." },
    { icon: "fa-solid fa-car-burst", title: "Accident Recovery", text: "Following a collision anywhere in Darlington, we provide fast, careful vehicle recovery." },
    { icon: "fa-solid fa-truck-monster", title: "Winch Out", text: "Stuck on soft ground or in a ditch near Darlington's rural edges? We can winch your vehicle free." },
  ],
  faqs: [
    { question: "Are you actually based in Darlington?", answer: "Yes. FSR Recovery Group is based at 135 Gladstone St, Darlington DL3 6LB, which allows us to respond quickly to breakdowns across the town." },
    { question: "How quickly can you reach me in Darlington?", answer: "Because our base is in Darlington, response times here are typically among the fastest in our coverage area. Call us with your location for an accurate estimate." },
    { question: "Do you cover villages just outside Darlington?", answer: "Yes, including Middleton St George, Hurworth and other surrounding villages — call us to confirm coverage for your specific location." },
    { question: "Can you recover my car from a Darlington retail park?", answer: "Yes, we regularly assist drivers whose vehicles have broken down at retail parks and car parks around Darlington." },
    { question: "Do you provide recovery on the A1(M) and A66 near Darlington?", answer: "Yes, we cover both the A1(M) and A66 as they pass Darlington, in addition to town centre and residential callouts." },
    { question: "Is your Darlington service available on weekends and at night?", answer: "Yes, we operate 24/7 in Darlington, including overnight, weekends and public holidays." },
    { question: "Can I visit your Darlington address for a recovery?", answer: "We operate as a mobile recovery service — call or WhatsApp us with your location and vehicle details rather than visiting in person." },
    { question: "Do you recover vans as well as cars in Darlington?", answer: "Yes, we can recover suitable light vans in addition to cars — tell us your vehicle details when you contact us." },
  ],
  ctaHeading: "Local Recovery, Right Here in Darlington",
  ctaText: "As a Darlington-based recovery service, we're ready to respond quickly. Call or WhatsApp us now with your location.",
  nearbyAreas: [
    { label: "Durham", href: "/areas/durham" },
    { label: "Catterick", href: "/areas/catterick" },
    { label: "Barnard Castle", href: "/areas/barnard-castle" },
    { label: "A1(M) Recovery", href: "/areas/a1m" },
  ],
};

export default function DarlingtonAreaPage() {
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
