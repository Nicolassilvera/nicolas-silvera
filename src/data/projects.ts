export interface Project {
  id: string;
  name: string;
  emoji: string;
  cat: string;
  accent: string;
  desc: string;
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
    name: "Jarvis",
    emoji: "🤖",
    cat: "CRM con IA",
    accent: "#fb7a2b",
    desc: "Prospección B2B y ventas en piloto automático con agentes de IA.",
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
    desc: "Catálogo, cotizador y servicio técnico para balanzas industriales.",
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
    desc: "Tienda de tecnología con MercadoPago, control de stock y panel admin.",
    stack: ["Next.js", "Node", "Express", "MongoDB"],
    url: "#",
    cta: "Ver caso",
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
