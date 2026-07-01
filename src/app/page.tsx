import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";
import { Services } from "@/components/sections/services";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <Technologies />
        <Services />
        <HowWeWork />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
