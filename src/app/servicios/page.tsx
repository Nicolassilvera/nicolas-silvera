import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { Technologies } from "@/components/sections/technologies";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Servicios Digitales | Nicolás Silvera",
  description:
    "Desarrollo web, CRM con IA y automatizaciones a medida. Proyectos reales, precios claros y diagnóstico inicial sin cargo.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Prueba social primero — que vean lo que construí antes del pitch */}
        <Portfolio topPadding />
        {/* Paquetes y precios */}
        <Services />
        {/* Stack tecnológico */}
        <Technologies />
        {/* Proceso de trabajo */}
        <HowWeWork />
        {/* FAQ */}
        <Faq />
        {/* Formulario de contacto + WhatsApp */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
