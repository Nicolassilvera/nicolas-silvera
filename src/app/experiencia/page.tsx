import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Experience } from "@/components/sections/experience";

export const metadata = {
  title: "Experiencia – Nicolás Silvera",
  description: "Trayectoria profesional, formación y trabajos anteriores.",
};

export default function ExperienciaPage() {
  return (
    <>
      <Navbar />
      <main>
        <Experience topPadding />
      </main>
      <Footer />
    </>
  );
}
