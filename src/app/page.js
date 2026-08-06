import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import FeatureBar from "@/components/sections/FeatureBar";
import Problem from "@/components/sections/Problem";
import StartingPoint from "@/components/sections/StartingPoint";
import Discovery from "@/components/sections/Discovery";
import Timeline from "@/components/sections/Timeline";
import FailureModes from "@/components/sections/FailureModes";
import MarketContext from "@/components/sections/MarketContext";
import ContactCTA from "@/components/sections/ContactCTA";
import PracticeDomains from "@/components/sections/PracticeDomains";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeatureBar />
        <Problem />
        <StartingPoint />
        <Discovery />
        <Timeline />
        <FailureModes />
        <MarketContext />
        <PracticeDomains />
        <CTA />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
