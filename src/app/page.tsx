import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";
import { ServiciosBridge } from "@/components/sections/servicios-bridge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <Technologies />
        <ServiciosBridge />
      </main>
      <Footer />
    </>
  );
}
