export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    id: "landing",
    name: "Landing Profesional",
    description:
      "Página de presentación de alto impacto para tu negocio o servicio. Diseño moderno, optimizado para conversión y posicionamiento en Google.",
    price: "desde ARS 100.000",
    priceNote: "Entrega en 5-7 días hábiles",
    features: [
      "Diseño personalizado y responsive",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Integración con redes sociales",
      "Hosting configurado",
      "1 mes de soporte incluido",
    ],
    cta: "Solicitar presupuesto",
  },
  {
    id: "web-empresarial",
    name: "Web Empresarial",
    description:
      "Sitio web completo con múltiples secciones, panel de administración, blog y herramientas de marketing. La presencia digital que tu empresa necesita.",
    price: "desde ARS 250.000",
    priceNote: "Entrega en 2-3 semanas",
    features: [
      "Diseño a medida con identidad de marca",
      "Panel administrativo",
      "Blog o noticias",
      "SEO avanzado",
      "Integración con WhatsApp Business",
      "Analytics y métricas",
      "Capacitación incluida",
      "3 meses de soporte",
    ],
    cta: "Solicitar presupuesto",
    highlighted: true,
  },
  {
    id: "crm-sistema",
    name: "CRM o Sistema Interno",
    description:
      "Sistema de gestión personalizado para tu negocio: CRM, control de inventario, facturación, turnos o cualquier proceso que necesite digitalización.",
    price: "desde ARS 700.000",
    priceNote: "Tiempo según alcance del proyecto",
    features: [
      "Análisis y relevamiento de procesos",
      "Desarrollo completamente a medida",
      "Roles y permisos de usuarios",
      "Reportes y exportación de datos",
      "Capacitación al equipo",
      "Soporte técnico continuo",
      "Escalabilidad garantizada",
    ],
    cta: "Agendar diagnóstico",
  },
  {
    id: "automatizacion-ia",
    name: "Automatizaciones e IA",
    description:
      "Integración de inteligencia artificial y automatización en tus procesos. Desde chatbots hasta análisis de datos con IA para tomar mejores decisiones.",
    price: "Presupuesto personalizado",
    priceNote: "Evaluación gratuita del caso",
    features: [
      "Diagnóstico de procesos automatizables",
      "Integración de IA en flujos existentes",
      "Chatbots y asistentes virtuales",
      "Automatización con n8n o Make",
      "Análisis de datos con IA",
      "Capacitación del equipo",
    ],
    cta: "Evaluar mi caso",
  },
];
