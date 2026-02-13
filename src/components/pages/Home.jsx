import About from "../sections/About";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Investors from "../sections/Investors";
import JoinProfessional from "../sections/JoinPro";
import Services from "../sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Investors />
      <JoinProfessional />
    </main>
  );
}
