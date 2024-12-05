import Achievements from "@/components/landing-page/achievements";
import Benefits from "@/components/landing-page/benefits";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import Pricing from "@/components/landing-page/pricing";
import Services from "@/components/landing-page/services";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Achievements />
      <Services />
      <Benefits />
      <Pricing />
    </div>
  );
}
