export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  delivery: string;
  pages: string;
  revisions: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

export const services: Service[] = [
  {
    id: "landing",
    name: "Landing Profesional",
    tagline: "Presencia de impacto desde el día 1",
    description:
      "Página de presentación de alto impacto para tu negocio o servicio. Diseño a medida, SEO básico y formulario de contacto.",
    price: "ARS 75.000",
    delivery: "2-3 días",
    pages: "3",
    revisions: 2,
    features: [
      "Diseño personalizado y responsivo",
      "SEO básico",
      "Formulario de contacto",
      "Integración redes sociales y WhatsApp",
      "Carga de contenido incluida",
      "Código fuente entregado",
    ],
    cta: "Empezar ahora",
  },
  {
    id: "web-empresarial",
    name: "Web Empresarial",
    tagline: "La presencia digital que tu empresa necesita",
    description:
      "Sitio completo con múltiples secciones, panel de administración y herramientas de marketing. Incluye todo lo del plan anterior.",
    price: "ARS 190.000",
    delivery: "5-7 días",
    pages: "7",
    revisions: 5,
    features: [
      "Todo lo del plan anterior",
      "Hasta 7 páginas a medida",
      "Panel de administración",
      "Blog o noticias",
      "SEO avanzado",
      "Comentarios detallados en el código",
      "Analytics integrado",
      "3 meses de soporte",
    ],
    cta: "Solicitar presupuesto",
    highlighted: true,
    badge: "Más popular",
  },
  {
    id: "crm-ia",
    name: "CRM con IA Integrada",
    tagline: "Un sistema que entiende tu negocio",
    description:
      "CRM a medida con inteligencia artificial. Seguimiento de clientes, pipeline de ventas, análisis con IA y alertas automáticas.",
    price: "ARS 500.000",
    delivery: "14-18 días",
    pages: "Ilimitadas",
    revisions: 7,
    features: [
      "Pipeline de ventas personalizado",
      "Historial completo de clientes",
      "IA que detecta oportunidades de venta",
      "Alertas automáticas de seguimiento",
      "Panel de métricas y pizarrón diario",
      "Resúmenes ejecutivos generados por IA",
      "Roles y permisos por usuario",
      "Integración WhatsApp y email",
      "Capacitación al equipo incluida",
      "Soporte continuo post-lanzamiento",
    ],
    cta: "Quiero mi CRM",
  },
];
