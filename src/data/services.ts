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
    id: "web-crm-ia",
    name: "Web CRM + Motor de Inteligencia",
    tagline: "Todo lo que tu negocio necesita en un solo sistema",
    description:
      "Sitio web profesional integrado con un CRM inteligente. Gestión de clientes, pipeline de ventas, automatizaciones con IA y presencia digital completa desde el día uno.",
    price: "ARS 500.000",
    delivery: "14-18 días",
    pages: "Ilimitadas",
    revisions: 7,
    features: [
      "Sitio web completo con diseño a medida y responsivo",
      "SEO avanzado y Analytics integrado",
      "Panel de administración de contenido",
      "CRM con pipeline de ventas personalizado",
      "Historial completo de clientes y seguimiento",
      "IA que detecta oportunidades de venta",
      "Alertas automáticas de seguimiento",
      "Panel de métricas y pizarrón diario",
      "Resúmenes ejecutivos generados por IA",
      "Integración WhatsApp y email",
      "Roles y permisos por usuario",
      "Capacitación al equipo incluida",
      "Soporte continuo post-lanzamiento",
    ],
    cta: "Solicitar diagnóstico gratuito",
    highlighted: true,
    badge: "Solución completa",
  },
];
