import Hero from "../sections/Hero";
import Trust from "../sections/Trust";
import Services from "../sections/Services";
import MissionVision from "../sections/MissionVision";
import WhyUs from "../sections/WhyUs";
import Insurance from "../sections/Insurance";

import CTA from "../sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Insurance />
      <MissionVision />
      <WhyUs />
     <CTA />
    </>
  );
}