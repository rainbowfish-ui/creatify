import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
    </div>
  );
}
