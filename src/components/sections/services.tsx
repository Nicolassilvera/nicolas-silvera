"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Globe, Brain, Zap, Users, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Globe,
    title: "Sitio web a medida",
    desc: "Diseño personalizado, SEO, panel de administración y presencia digital profesional desde el día uno.",
  },
  {
    icon: Brain,
    title: "Motor de Inteligencia",
    desc: "IA integrada en tu negocio: búsqueda por imagen, identificación de productos, respuestas automáticas.",
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "Alertas, seguimiento de clientes y tareas repetitivas que se manejan solas mientras vos te enfocás en vender.",
  },
];

const features = [
  "Sitio web completo con diseño a medida y responsivo",
  "SEO avanzado y Analytics integrado",
  "Panel de administración de contenido",
  "Búsqueda de productos por imagen con IA",
  "CRM con pipeline de ventas personalizado",
  "Historial completo de clientes y seguimiento",
  "IA que detecta oportunidades de venta",
  "Alertas automáticas de seguimiento",
  "Panel de métricas y pizarrón diario",
  "Integración WhatsApp y email",
  "Roles y permisos por usuario",
  "Capacitación al equipo incluida",
  "Soporte continuo post-lanzamiento",
];

const useCases = [
  { icon: "🔧", label: "Ferreterías" },
  { icon: "🏗️", label: "Materiales de construcción" },
  { icon: "💊", label: "Farmacias" },
  { icon: "👗", label: "Indumentaria" },
  { icon: "🛒", label: "Mayoristas" },
  { icon: "🍽️", label: "Gastronomía" },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Servicio
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-5 leading-tight">
            Web + Motor de Inteligencia
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Un sistema completo para tu comercio: presencia digital profesional con inteligencia artificial integrada.
            Tu cliente sube una foto — el sistema identifica el producto y lo encuentra en tu catálogo.
          </p>
        </motion.div>

        {/* ── 3 PILLARS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-[#f9f9f9] border border-[#E0E0E0] rounded-2xl p-6 hover:border-[#FF8C00]/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF8C00]/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-[#FF8C00]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#2D2D2D] mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl bg-[#2D2D2D] border border-[#FF8C00] shadow-2xl shadow-[#FF8C00]/15 overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-[#FF8C00] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap">
              Solución completa
            </span>
          </div>

          <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* LEFT */}
            <div className="px-8 pb-8 flex flex-col gap-6">
              <div>
                <p className="text-[#FF8C00] text-xs font-semibold uppercase tracking-widest mb-2">
                  Todo lo que tu negocio necesita en un solo sistema
                </p>
                <h3 className="font-display font-bold text-3xl text-white mb-3">
                  Web CRM +<br />Motor de Inteligencia
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sitio web profesional integrado con un motor de IA. Gestión de clientes, búsqueda inteligente por imagen y automatizaciones que trabajan mientras tu negocio crece.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="font-display font-bold text-4xl text-[#FF8C00] mb-1">
                  ARS 500.000
                </p>
                <p className="text-gray-500 text-xs">Pesos argentinos · Diagnóstico inicial sin cargo</p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                {[
                  { val: "∞", label: "Páginas" },
                  { val: "7", label: "Revisiones" },
                  { val: "14-18d", label: "Entrega" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold text-white">{s.val}</p>
                    <p className="text-[10px] uppercase tracking-wide text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Solicitar diagnóstico gratuito
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="px-8 py-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Qué incluye
              </p>
              <ul className="space-y-3">
                {features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-[#FF8C00] mt-0.5 shrink-0" />
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── USE CASES ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Funciona para cualquier comercio
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((u) => (
              <span
                key={u.label}
                className="inline-flex items-center gap-2 bg-[#f9f9f9] border border-[#E0E0E0] rounded-full px-4 py-2 text-sm font-medium text-gray-600"
              >
                {u.icon} {u.label}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-6">
            El alcance final se define en una reunión de diagnóstico gratuita
          </p>
        </motion.div>

      </div>
    </section>
  );
}
