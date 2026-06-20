import type { Metadata } from "next";
import { Inter, Montserrat, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolás Silvera | Software Engineer & AI Specialist",
  description:
    "Transformo problemas operativos en soluciones tecnológicas reales. Software a medida, CRM, automatizaciones con IA y desarrollo web para empresas y pymes.",
  keywords: [
    "software a medida",
    "desarrollo web",
    "automatización",
    "inteligencia artificial",
    "CRM",
    "Next.js",
    "Buenos Aires",
  ],
  authors: [{ name: "Nicolás Silvera" }],
  icons: {
    icon: "/logos/logo-ns.png",
    apple: "/logos/logo-ns.png",
  },
  openGraph: {
    title: "Nicolás Silvera | Soluciones Tecnológicas a Medida",
    description:
      "Software Engineer y AI Specialist. Entiendo tu negocio y construyo la herramienta adecuada para resolverlo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
