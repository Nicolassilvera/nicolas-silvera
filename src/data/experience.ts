export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string;
  technologies: string[];
  achievements: string[];
  type: "full-time" | "freelance" | "contract" | "part-time";
  isTech?: boolean;
}

export const experiences: WorkExperience[] = [
  {
    company: "Freelance / Consultor Independiente",
    role: "Software Engineer & AI Specialist",
    period: "2022 - Presente",
    location: "CABA",
    modality: "Remoto y presencial",
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
    isTech: true,
  },
  {
    company: "TecnoFan",
    role: "Asistente de E-commerce & Atención al Cliente",
    period: "Dic 2024 - Presente",
    location: "Buenos Aires",
    modality: "Híbrido",
    description:
      "Gestión integral de la operación de e-commerce: administración de cuentas en Mercado Libre, TiendaNube y Facebook, control de stock e ingresos, coordinación de despachos y atención postventa. Esta experiencia me dio una visión real de los desafíos operativos de una tienda online, que aplico directamente al desarrollo de soluciones para el comercio electrónico.",
    technologies: [
      "Mercado Libre",
      "TiendaNube",
      "Mercado Envíos",
      "Google Sheets",
      "Excel",
    ],
    achievements: [
      "Administración de múltiples canales de venta (ML, TiendaNube, Facebook)",
      "Gestión de despachos diarios: Mercado Envíos, Flex y correo",
      "Resolución de reclamos y seguimiento de pedidos",
      "Relevamiento de precios y stock con proveedores locales",
    ],
    type: "part-time",
    isTech: false,
  },
  {
    company: "Surely",
    role: "Operador Administrativo",
    period: "Oct 2023 - Feb 2025",
    location: "CABA",
    modality: "Presencial",
    description:
      "Atención al cliente y gestión de incidencias en entorno de alta presión. Prevención de eventos críticos, resolución de consultas complejas y cumplimiento de protocolos con objetivos claros. Una experiencia que reforzó mi capacidad de comunicación y resolución de problemas bajo presión.",
    technologies: [],
    achievements: [
      "Resolución de consultas y situaciones complejas bajo presión",
      "Prevención de eventos generados por usuarios en sistema",
      "Comunicación clara y seguimiento de casos hasta su cierre",
    ],
    type: "full-time",
    isTech: false,
  },
  {
    company: "Hospital de Clínicas José de San Martín",
    role: "Administración de Presupuestos",
    period: "Jul 2023 - Oct 2024",
    location: "CABA",
    modality: "Presencial",
    description:
      "Atención directa al público en institución de salud pública. Organización de turnos, orientación al paciente y resolución de situaciones complejas. Esta experiencia me formó en el trato humano y la capacidad de gestionar procesos administrativos en entornos exigentes.",
    technologies: [],
    achievements: [
      "Atención directa al público y orientación al paciente",
      "Organización de turnos y manejo de tiempos",
      "Resolución de consultas y situaciones de alta complejidad",
    ],
    type: "full-time",
    isTech: false,
  },
];

export const education = [
  {
    degree: "Análisis de Sistemas Informáticos",
    institution: "ORT Argentina",
    period: "Ene 2022 – Jun 2024",
    description:
      "Formación enfocada en lógica de programación, bases de datos y arquitectura de sistemas. Aplicación práctica en la optimización de procesos para mi emprendimiento personal.",
    skills: ["Análisis de sistemas", "Bases de datos", "Scrum", "Arquitectura de software"],
  },
  {
    degree: "Programación Web",
    institution: "Centro de e-Learning UTN FRBA",
    period: "Oct 2022 – Dic 2022",
    description: "HTML, CSS, C#, JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "C#"],
  },
  {
    degree: "Maestro Mayor de Obras",
    institution: "ET Manuel Belgrano",
    period: "Mar 2015 – Mar 2021",
    description: "Formación técnica con orientación en construcción. Base sólida de disciplina, trabajo en equipo y resolución de problemas.",
    skills: ["Autodidacta", "Inglés"],
  },
];

export const stats = [
  { label: "Años de experiencia", value: "+5", suffix: "" },
  { label: "Proyectos entregados", value: "+20", suffix: "" },
  { label: "Clientes satisfechos", value: "+15", suffix: "" },
  { label: "Tecnologías dominadas", value: "+20", suffix: "" },
];
