"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Java", "Spring Boot", "Express"],
  },
  {
    label: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Qdrant"],
  },
  {
    label: "IA & Automatización",
    items: ["Claude API", "OpenAI API", "LangChain", "n8n", "Make"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Vercel", "GitHub Actions", "Linux", "Nginx"],
  },
  {
    label: "Integraciones",
    items: [
      "MercadoPago",
      "WhatsApp API",
      "Gmail API",
      "Stripe",
      "Notion API",
    ],
  },
];

export function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologias" className="parallax-carbon py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Stack tecnológico
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4">
            Herramientas de trabajo
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selecciono la tecnología según el problema a resolver, no al revés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-6 bg-[#FF8C00] rounded-full" />
                <h3 className="font-display font-semibold text-white">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + ti * 0.05 }}
                    className="bg-white/10 border border-white/10 text-gray-300 text-sm px-3 py-1.5 rounded-lg font-mono hover:border-[#FF8C00] hover:text-[#FF8C00] transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
