export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: "full-time" | "freelance" | "contract";
}

export const experiences: WorkExperience[] = [
  {
    company: "Freelance / Consultor Independiente",
    role: "Software Engineer & AI Specialist",
    period: "2022 - Presente",
    description:
      "Desarrollo de soluciones tecnológicas a medida para comercios, pymes y profesionales. Especialización en automatización con IA, sistemas internos y plataformas web.",
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "Claude API",
      "n8n",
      "PostgreSQL",
      "Docker",
    ],
    achievements: [
      "Más de 20 proyectos entregados exitosamente",
      "Desarrollo de Jarvis: sistema IA personal con múltiples agentes",
      "Automatización de procesos para varias empresas",
      "Implementación de sistemas de ventas online con MercadoPago",
    ],
    type: "freelance",
  },
  {
    company: "Balanzas Caballito",
    role: "Desarrollador Web Full Stack",
    period: "2023 - 2024",
    description:
      "Diseño y desarrollo completo de la plataforma digital de la empresa, incluyendo catálogo de productos, sistema de cotización y panel administrativo.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    achievements: [
      "Incremento del 40% en consultas digitales",
      "Catálogo online con +200 productos",
      "Cotizador automático 24/7",
    ],
    type: "contract",
  },
  {
    company: "Proyectos Java Enterprise",
    role: "Backend Developer",
    period: "2021 - 2023",
    description:
      "Desarrollo de APIs RESTful y sistemas backend con Java y Spring Boot para clientes empresariales. Enfoque en arquitectura limpia, seguridad y rendimiento.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Maven",
    ],
    achievements: [
      "APIs con cobertura de tests >80%",
      "Implementación de autenticación JWT",
      "Optimización de queries con caché Redis",
    ],
    type: "contract",
  },
];

export const education = {
  degree: "Tecnicatura en Desarrollo de Software",
  institution: "Instituto Tecnológico",
  period: "2019 - 2022",
  description: "Formación en programación orientada a objetos, bases de datos, redes y desarrollo web.",
};

export const stats = [
  { label: "Años de experiencia", value: "+5", suffix: "" },
  { label: "Proyectos entregados", value: "+20", suffix: "" },
  { label: "Clientes satisfechos", value: "+15", suffix: "" },
  { label: "Tecnologías dominadas", value: "+20", suffix: "" },
];
