"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Search, FileText, Lightbulb } from "lucide-react";

const pasos = [
  {
    icon: Search,
    titulo: "Relevamiento gratuito",
    desc: "Entendemos cómo funciona tu negocio hoy: procesos, herramientas y puntos de fricción.",
  },
  {
    icon: FileText,
    titulo: "Diagnóstico claro",
    desc: "Te mostramos qué se puede digitalizar o automatizar y qué impacto real tendría en tu operación.",
  },
  {
    icon: Lightbulb,
    titulo: "Propuesta concreta",
    desc: "Si tiene sentido avanzar, recibís una propuesta con alcance, tecnología, plazo y precio. Sin sorpresas.",
  },
];

export function ServiciosBridge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="parallax-dark py-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF8C00] font-semibold text-xs uppercase tracking-widest">
            ¿Trabajamos juntos?
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4 leading-tight">
            Arrancamos con un
            <br />
            <span className="text-[#FF8C00]">relevamiento gratuito</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            Antes de hablar de precios o tecnología, entiendo tu negocio.
            Hacemos una reunión sin cargo para ver si hay una solución digital
            que realmente valga la pena para vos.
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {pasos.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <motion.div
                key={paso.titulo}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/10 border border-[#FF8C00]/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#FF8C00]" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{paso.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="/servicios"
            className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#e07b00] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Ver servicios y precios
            <ArrowRight size={16} />
          </a>
          <span className="text-gray-600 text-sm">
            Sin compromiso · Respuesta en menos de 24 h
          </span>
        </motion.div>

      </div>
    </section>
  );
}
