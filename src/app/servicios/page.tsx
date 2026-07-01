import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Servicios | Nicolás Silvera",
  description:
    "Landing Profesional, Web Empresarial y CRM con IA integrada. Precios fijos, plazos claros y diagnóstico inicial sin cargo.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
        <HowWeWork />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
