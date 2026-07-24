import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TrackRecord } from "@/components/TrackRecord";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TrackRecord />
        <Services />
        <Gallery />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
