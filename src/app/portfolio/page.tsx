import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PortfolioFull } from "@/components/sections/portfolio-full";

export const metadata = {
  title: "Portfolio – Nicolás Silvera",
  description: "Todos los proyectos: sitios reales, e-commerce, agentes de IA y más.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioFull />
      </main>
      <Footer />
    </>
  );
}
