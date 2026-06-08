export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  architecture: string;
  technologies: string[];
  results: string[];
  category: "ai" | "web" | "ecommerce" | "system" | "automation";
  featured?: boolean;
  status: "production" | "development" | "completed";
  imageColor: string;
}

export const projects: Project[] = [
  {
    id: "jarvis",
    name: "Jarvis",
    shortDescription:
      "Sistema de inteligencia artificial personal con múltiples agentes especializados para automatización y análisis.",
    fullDescription:
      "Jarvis es mi proyecto insignia: un sistema de IA modular diseñado para automatizar tareas, analizar documentos, gestionar conocimiento empresarial y operar como asistente ejecutivo. Integra múltiples modelos de lenguaje con herramientas propias para crear flujos de trabajo inteligentes.",
    architecture:
      "Backend en Python con FastAPI exponiéndose como microservicios. Capa de orquestación con LangChain y llamadas directas a APIs de Claude y OpenAI. Frontend en Next.js con streaming de respuestas via WebSockets. Base de datos vectorial para memoria persistente.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Claude API",
      "OpenAI API",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Qdrant",
      "Docker",
      "WebSockets",
    ],
    results: [
      "Reducción del 60% en tiempo dedicado a tareas repetitivas",
      "Análisis automático de documentos en segundos",
      "Memoria persistente entre sesiones",
      "Integración con herramientas externas (calendarios, email, CRM)",
    ],
    category: "ai",
    featured: true,
    status: "development",
    imageColor: "#FF8C00",
  },
  {
    id: "balanzas-caballito",
    name: "Balanzas Caballito",
    shortDescription:
      "Plataforma web corporativa para empresa de balanzas industriales con catálogo, cotizador y servicio técnico.",
    fullDescription:
      "Desarrollo completo de la presencia digital para Balanzas Caballito, empresa líder en equipos de pesaje industrial. El proyecto incluyó rediseño de identidad digital, catálogo interactivo de productos, sistema de cotización online y gestión de órdenes de servicio técnico.",
    architecture:
      "Next.js con App Router para SEO optimizado. Panel administrativo para gestión de productos y cotizaciones. Integración con sistema de email para notificaciones automáticas. Hosting en Vercel con CDN global.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Resend",
      "Cloudinary",
    ],
    results: [
      "Aumento del 40% en consultas online",
      "Catálogo digital de más de 200 productos",
      "Sistema de cotización automático 24/7",
      "Posicionamiento SEO en primeras páginas de Google",
    ],
    category: "web",
    featured: true,
    status: "production",
    imageColor: "#2D7DD2",
  },
  {
    id: "tecnofan",
    name: "TecnoFan",
    shortDescription:
      "E-commerce de tecnología con integración de MercadoPago, gestión de inventario y panel administrativo.",
    fullDescription:
      "TecnoFan es una tienda online de productos tecnológicos con carrito de compras, pasarela de pago con MercadoPago, gestión de stock en tiempo real, sistema de órdenes y panel administrativo completo para el negocio.",
    architecture:
      "Frontend Next.js con SSR para SEO. API RESTful en Node.js con Express. MongoDB para flexibilidad de catálogo. MercadoPago SDK para pagos. Sistema de notificaciones con webhooks.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MercadoPago API",
      "JWT",
      "Cloudinary",
      "Vercel",
    ],
    results: [
      "Tienda 100% operativa con pagos en línea",
      "Panel admin para gestión de inventario",
      "Notificaciones automáticas por email",
      "Integración completa con MercadoPago",
    ],
    category: "ecommerce",
    featured: true,
    status: "production",
    imageColor: "#10B981",
  },
  {
    id: "crm-interno",
    name: "CRM & Sistema Interno",
    shortDescription:
      "Sistema de gestión de clientes y operaciones para empresa de servicios con módulos de ventas y seguimiento.",
    fullDescription:
      "Desarrollo de un CRM personalizado para empresa de servicios, incluyendo gestión de pipeline de ventas, seguimiento de interacciones con clientes, reportes automatizados y módulo de facturación simplificado.",
    architecture:
      "Aplicación web en React con backend Spring Boot. Base de datos relacional MySQL con procedimientos almacenados para reportes. Autenticación con JWT y roles. Exportación a Excel y PDF.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "JPA/Hibernate",
      "JWT",
      "iText PDF",
      "Apache POI",
    ],
    results: [
      "Centralización de todos los datos de clientes",
      "Reportes automáticos semanales y mensuales",
      "Reducción del 50% en tiempo de seguimiento",
      "Visibilidad total del pipeline de ventas",
    ],
    category: "system",
    status: "completed",
    imageColor: "#8B5CF6",
  },
  {
    id: "automatizacion-n8n",
    name: "Automatización de Procesos",
    shortDescription:
      "Flujos de automatización empresarial con n8n, Make e integraciones API para eliminar tareas manuales.",
    fullDescription:
      "Diseño e implementación de flujos de automatización para diferentes clientes: sincronización entre sistemas, notificaciones automáticas, procesamiento de formularios, generación de reportes y conexión entre herramientas de negocio.",
    architecture:
      "Orquestación con n8n self-hosted en Docker. Integraciones via REST APIs, webhooks y módulos nativos. Manejo de errores y reintentos automáticos. Monitoreo con alertas en tiempo real.",
    technologies: [
      "n8n",
      "Make (Integromat)",
      "REST APIs",
      "Webhooks",
      "Google Workspace",
      "WhatsApp Business API",
      "Gmail API",
      "Notion API",
    ],
    results: [
      "Eliminación de tareas manuales repetitivas",
      "Notificaciones automáticas a clientes",
      "Sincronización entre múltiples plataformas",
      "Reportes generados automáticamente",
    ],
    category: "automation",
    status: "production",
    imageColor: "#F59E0B",
  },
  {
    id: "java-spring-api",
    name: "APIs Java & Spring Boot",
    shortDescription:
      "APIs RESTful robustas con Spring Boot, autenticación, documentación Swagger y pruebas unitarias.",
    fullDescription:
      "Desarrollo de APIs RESTful enterprise con Spring Boot: diseño de arquitectura en capas, seguridad con Spring Security y JWT, documentación automática con Swagger/OpenAPI, pruebas unitarias e integración con JUnit y Mockito.",
    architecture:
      "Arquitectura en capas: Controller → Service → Repository. Spring Security para autenticación/autorización. OpenAPI 3 para documentación. Caché con Redis. Testing con JUnit 5 y Mockito.",
    technologies: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "JUnit 5",
      "Mockito",
      "Swagger/OpenAPI",
      "Maven",
    ],
    results: [
      "APIs documentadas y probadas al 100%",
      "Autenticación segura con JWT",
      "Cobertura de tests superior al 80%",
      "Performance optimizado con caché",
    ],
    category: "system",
    status: "completed",
    imageColor: "#EF4444",
  },
];
