"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FileText,
  Lightbulb,
  Code2,
  BookOpen,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Reunión gratuita para entender tu negocio, tus procesos actuales y los problemas que necesitás resolver.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Relevamiento",
    description:
      "Análisis profundo del estado actual, mapeo de flujos, usuarios y requerimientos funcionales y técnicos.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Propuesta",
    description:
      "Presentación de la solución: arquitectura, tecnologías, alcance, tiempos y presupuesto detallado.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Desarrollo iterativo con actualizaciones frecuentes. Siempre sabés en qué etapa está tu proyecto.",
  },
  {
    number: "05",
    icon: BookOpen,
    title: "Capacitación",
    description:
      "Formación personalizada para que vos y tu equipo puedan operar el sistema con total autonomía.",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Soporte",
    description:
      "Acompañamiento posterior al lanzamiento. Correcciones, mejoras y evolución continua del sistema.",
  },
];

export function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-trabajamos" className="py-24 bg-[#1a1a1a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Metodología
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4">
            Cómo trabajamos juntos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un proceso claro y transparente para que sepas exactamente qué
            esperar en cada etapa del proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#2D2D2D] rounded-2xl p-6 border border-white/5 hover:border-[#FF8C00]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FF8C00]/20 transition-colors">
                    <Icon size={20} className="text-[#FF8C00]" />
                  </div>
                  <span className="font-display font-bold text-4xl text-white/10 leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
