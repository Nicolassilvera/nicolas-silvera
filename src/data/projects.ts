export interface Project {
  id: string;
  name: string;
  emoji: string;
  cat: string;
  accent: string;
  desc: string;
  scope?: string[];
  stack: string[];
  url: string;
  cta: string;
  githubUrl?: string;
  isReal: boolean;
  logo?: string;
}

export const projects: Project[] = [
  {
    id: "jarvis",
    name: "JarvisCRM",
    emoji: "🤖",
    cat: "CRM con IA",
    accent: "#fb7a2b",
    desc: "Sistema de gestión comercial con inteligencia artificial para automatizar ventas, prospectar clientes y controlar operaciones.",
    scope: [
      "Panel de control con stock inteligente — seguimiento en tiempo real del inventario y alertas automáticas",
      "Conexión y creación de página web con gestión y control de pedidos integrado al CRM",
      "Herramientas automatizadas para buscar potenciales clientes y agrandar cartera de forma continua",
    ],
    stack: ["Python", "FastAPI", "LangChain", "Claude API"],
    url: "#",
    cta: "Ver código",
    githubUrl: "https://github.com/Nicolassilvera/Asistente-Closer-AI",
    isReal: true,
    logo: "/logos/jarvis.png",
  },
  {
    id: "balanzas-caballito",
    name: "Balanzas Caballito",
    emoji: "⚖️",
    cat: "Web Corporativa",
    accent: "#4f8ef7",
    desc: "Sitio corporativo para una empresa de comercialización y servicio técnico de balanzas industriales.",
    scope: [
      "Catálogo digital de productos con fichas técnicas y especificaciones",
      "Sistema de cotización online directo desde el sitio",
      "Sección de servicio técnico con formulario de solicitud de reparación",
      "SEO orientado a búsquedas de balanzas industriales en CABA y GBA",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    url: "https://balanzas-caballito.vercel.app/index.html",
    cta: "Ver sitio",
    isReal: true,
    logo: "/logos/balanzas-caballito.png",
  },
  {
    id: "tecnofan",
    name: "TecnoFan",
    emoji: "💻",
    cat: "E-commerce",
    accent: "#2fbf71",
    desc: "Tienda online de consolas portátiles y tecnología con pagos integrados y panel de administración.",
    scope: [
      "Tienda online enfocada en consolas portátiles y accesorios",
      "Integración con MercadoPago para pagos seguros en pesos",
      "Control de stock en tiempo real con alertas de bajo inventario",
      "Panel administrativo para gestionar productos, pedidos y envíos",
    ],
    stack: ["Next.js", "Node", "Express", "MongoDB"],
    url: "https://r36-s.vercel.app/",
    cta: "Ver sitio",
    isReal: true,
    logo: "/logos/tecnofan.png",
  },
  {
    id: "inmobiliaria",
    name: "Inmobiliaria",
    emoji: "🏠",
    cat: "Portal de propiedades",
    accent: "#7c6cf0",
    desc: "Buscador con filtros por zona, fichas de propiedad y tours 360°.",
    stack: ["Next.js", "PostgreSQL", "Mapbox", "Cloudinary"],
    url: "#",
    cta: "Ingresar a la página",
    isReal: false,
  },
  {
    id: "restaurante",
    name: "Restaurante",
    emoji: "🍔",
    cat: "Gastronomía",
    accent: "#f25c54",
    desc: "Menú digital, reservas online y pedidos con pago integrado.",
    stack: ["Next.js", "Stripe", "WhatsApp API", "Supabase"],
    url: "#",
    cta: "Ingresar a la página",
    isReal: false,
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    emoji: "🛒",
    cat: "Tienda online",
    accent: "#e85ab8",
    desc: "Carrito, MercadoPago y gestión de envíos, listo para vender.",
    stack: ["Next.js", "MercadoPago", "MongoDB", "Redis"],
    url: "#",
    cta: "Ingresar a la página",
    isReal: false,
  },
  {
    id: "crm-pyme",
    name: "CRM Pyme",
    emoji: "💼",
    cat: "Gestión comercial",
    accent: "#2bb8c9",
    desc: "Pipeline de ventas, seguimiento de clientes y alertas automáticas.",
    stack: ["React", "FastAPI", "PostgreSQL", "Claude API"],
    url: "#",
    cta: "Ingresar a la página",
    isReal: false,
  },
  {
    id: "marketplace-vehicular",
    name: "Marketplace Vehicular",
    emoji: "🚗",
    cat: "Marketplace",
    accent: "#9bcf3a",
    desc: "Publicación de vehículos, filtros avanzados y contacto con el vendedor.",
    stack: ["Next.js", "Node", "PostgreSQL", "Algolia"],
    url: "#",
    cta: "Ingresar a la página",
    isReal: false,
  },
];
