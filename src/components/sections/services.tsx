"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Globe, Brain, Zap, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── SLIDE VARIANTS ────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const slideTransition = { type: "tween" as const, duration: 0.35 };

// ── SLIDE LABELS ──────────────────────────────────────────
const slideLabels = [
  "Portada",
  "La propuesta",
  "Qué incluye",
  "Caso de ejemplo",
  "Asistente con IA",
  "Cómo funciona",
  "Cómo trabajamos",
];

// ── SLIDE CONTENT ─────────────────────────────────────────
function SlideContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="relative w-full h-full bg-[#0d2035] flex items-center overflow-hidden px-10 md:px-16">
          <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-[#1a4a6e]/60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute right-20 bottom-0 w-52 h-52 rounded-full bg-[#246080]/40 translate-y-1/4 pointer-events-none" />
          <div className="relative z-10 max-w-[60%]">
            <p className="text-[#4db8d4] text-[10px] font-bold tracking-[3px] uppercase mb-4">
              Web CRM + Motor de Inteligencia
            </p>
            <h2 className="text-white font-bold text-2xl md:text-4xl leading-tight mb-4">
              Todo lo que tu negocio<br />necesita en un solo sistema
            </h2>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md">
              Sitio web profesional integrado con un motor de IA. Gestión de clientes,
              búsqueda inteligente por imagen y automatizaciones que trabajan mientras
              tu negocio crece.
            </p>
            <p className="text-gray-600 text-[10px] mt-6">Nicolás · Desarrollo web e inteligencia artificial</p>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="w-full h-full bg-[#f0f4f8] flex flex-col justify-center px-10 md:px-16 py-8">
          <p className="text-[#3a7fa5] text-[10px] font-bold tracking-[3px] uppercase mb-2">La propuesta</p>
          <h2 className="text-[#0d2035] font-bold text-2xl md:text-3xl mb-2">
            Un sistema completo, a la medida de tu negocio
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mb-8">
            Sin límite de páginas, con siete rondas de revisiones y una entrega en 14 a 18 días.
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { val: "∞", label: "Páginas" },
              { val: "7", label: "Revisiones" },
              { val: "14-18d", label: "Entrega" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-gray-100">
                <p className="text-[#3a7fa5] text-3xl md:text-5xl font-bold mb-2">{s.val}</p>
                <p className="text-[#0d2035] font-semibold text-sm md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 2:
      return (
        <div className="w-full h-full bg-white flex flex-col justify-center px-10 md:px-14 py-6">
          <h2 className="text-[#0d2035] font-bold text-2xl md:text-3xl mb-5">Qué incluye</h2>
          <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
            {[
              {
                title: "El sitio",
                items: ["Diseño a medida y responsivo", "SEO avanzado y Analytics", "Panel de administración", "WhatsApp y email integrado"],
              },
              {
                title: "La inteligencia",
                items: ["Búsqueda por imagen con IA", "Detecta oportunidades de venta", "Alertas automáticas", "Panel de métricas diario"],
              },
              {
                title: "El CRM y tu equipo",
                items: ["Pipeline de ventas personalizado", "Historial completo de clientes", "Roles y permisos por usuario", "Capacitación incluida"],
              },
            ].map((col) => (
              <div key={col.title} className="bg-[#f0f6fa] rounded-xl p-4 md:p-5">
                <p className="text-[#3a7fa5] font-bold text-sm md:text-base mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-[#2d3748] text-[11px] md:text-sm leading-snug">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#0d2035] rounded-lg px-5 py-2.5">
            <p className="text-white text-xs md:text-sm font-semibold">Y además: soporte continuo post-lanzamiento.</p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="w-full h-full bg-[#0d2035] flex flex-col justify-center px-10 md:px-16 py-8">
          <p className="text-[#4db8d4] text-[10px] font-bold tracking-[3px] uppercase mb-2">Caso de ejemplo</p>
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-6">Tienda de repuestos sanitarios</h2>
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {[
              { num: "01", title: "Home", desc: "Búsqueda por foto, categorías y los productos más consultados." },
              { num: "02", title: "Catálogo", desc: "Filtros por categoría, precio y acabado, con carrito de consulta." },
              { num: "03", title: "Ficha de producto", desc: "Galería, precio y pedido de asesoramiento por WhatsApp." },
              { num: "04", title: "Asistente con IA", desc: "Compara una foto con el catálogo y deriva a un asesor." },
            ].map((s) => (
              <div key={s.num} className="bg-[#1a3a52] rounded-xl p-4 md:p-5">
                <p className="text-[#4db8d4] text-xl md:text-2xl font-bold mb-2">{s.num}</p>
                <p className="text-white font-semibold text-xs md:text-sm mb-1.5">{s.title}</p>
                <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#246080] rounded-lg px-5 py-2.5">
            <p className="text-white text-xs md:text-sm font-semibold">
              Detrás de la tienda: CRM con pipeline de ventas y panel de métricas.
            </p>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="w-full h-full bg-[#f0f4f8] flex items-center px-10 md:px-12 py-8 gap-6 md:gap-10">
          <div className="flex-1 min-w-0">
            <p className="text-[#3a7fa5] text-[10px] font-bold tracking-[3px] uppercase mb-3">Asistente público</p>
            <h2 className="text-[#0d2035] font-bold text-2xl md:text-3xl leading-tight mb-4">
              Un vendedor digital<br />en el bolsillo de<br />cada visitante
            </h2>
            <ul className="space-y-2.5 text-xs md:text-sm text-[#2d3748]">
              <li className="flex items-start gap-2"><span className="text-[#3a7fa5] leading-5">▸</span>Busca por foto, por texto o por medida.</li>
              <li className="flex items-start gap-2"><span className="text-[#3a7fa5] leading-5">▸</span>Compara productos con datos reales del catálogo.</li>
              <li className="flex items-start gap-2"><span className="text-[#3a7fa5] leading-5">▸</span>Prepara el mensaje para el asesor.</li>
            </ul>
          </div>
          {/* Phone mockups */}
          <div className="flex gap-3 flex-shrink-0">
            <div className="w-36 md:w-44 bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-200" style={{ height: 240 }}>
              <div className="bg-[#0d2035] text-white text-[10px] font-semibold px-3 py-2 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#3a7fa5] flex-shrink-0" />Asistente
              </div>
              <div className="p-2.5 space-y-2">
                <div className="bg-[#e8f0f5] rounded-lg p-2 text-[10px] text-[#0d2035]">Parece un flotante de cisterna.</div>
                <div className="bg-white border border-gray-200 rounded-lg p-2">
                  <span className="bg-[#3a7fa5] text-white text-[9px] font-bold px-1.5 py-0.5 rounded mb-1 inline-block">Flotante 92%</span>
                  <p className="text-[10px] font-semibold text-[#0d2035]">Flotante universal</p>
                  <p className="text-[9px] text-gray-500">$7.450 · SAN-0720</p>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="flex-1 border border-gray-200 rounded-full px-2 py-1 text-[9px] text-gray-400">Escribí…</div>
                  <div className="w-5 h-5 rounded-full bg-[#3a7fa5] flex-shrink-0" />
                </div>
              </div>
            </div>
            <div className="w-36 md:w-44 bg-white rounded-[20px] shadow-lg overflow-hidden border border-gray-200" style={{ height: 240 }}>
              <div className="bg-[#0d2035] text-white text-[10px] font-semibold px-3 py-2 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#3a7fa5] flex-shrink-0" />Asistente
              </div>
              <div className="p-2.5 space-y-2">
                <div className="bg-[#3a7fa5] text-white text-[10px] rounded-lg p-2 ml-4">Compará las dos mezcladoras</div>
                <div className="bg-[#e8f0f5] rounded-lg p-2">
                  <div className="grid grid-cols-3 gap-x-1 gap-y-0.5 text-[9px]">
                    <div />
                    <div className="font-bold text-[#0d2035]">Mono</div>
                    <div className="font-bold text-[#0d2035]">Bi</div>
                    <div className="text-gray-400">Precio</div>
                    <div className="text-[#0d2035]">$68.5k</div>
                    <div className="text-[#0d2035]">$52.6k</div>
                    <div className="text-gray-400">Garantía</div>
                    <div className="text-[#0d2035]">12m</div>
                    <div className="text-[#0d2035]">12m</div>
                  </div>
                  <p className="text-gray-600 mt-1.5 text-[9px]">La bimando cuesta $15.900 menos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="w-full h-full bg-[#f0f4f8] flex flex-col justify-center px-10 md:px-16 py-8">
          <p className="text-[#3a7fa5] text-[10px] font-bold tracking-[3px] uppercase mb-2">Cómo funciona</p>
          <h2 className="text-[#0d2035] font-bold text-2xl md:text-3xl mb-7">
            Del visitante al cliente, sin perder ningún dato
          </h2>
          <div className="flex items-start gap-1.5 md:gap-2">
            {[
              { num: "1", title: "Visita", desc: "Llega desde Google, redes o una foto.", dark: false },
              { num: "2", title: "Producto", desc: "Ve fichas con precio y galería.", dark: false },
              { num: "3", title: "Consulta", desc: "Arma el carrito o pide asesoramiento.", dark: false },
              { num: "4", title: "WhatsApp", desc: "El mensaje llega con el resumen listo.", dark: false },
              { num: "5", title: "CRM", desc: "Queda registrado, con alertas de seguimiento.", dark: true },
            ].map((step, i, arr) => (
              <div key={step.num} className="flex items-center flex-1 gap-1.5">
                <div className={`flex-1 rounded-xl p-3 md:p-4 ${step.dark ? "bg-[#0d2035]" : "bg-white"}`}>
                  <p className={`text-lg md:text-xl font-bold mb-1 ${step.dark ? "text-[#4db8d4]" : "text-[#3a7fa5]"}`}>{step.num}</p>
                  <p className={`font-semibold text-[11px] md:text-sm mb-1 ${step.dark ? "text-white" : "text-[#0d2035]"}`}>{step.title}</p>
                  <p className={`text-[10px] md:text-xs leading-relaxed ${step.dark ? "text-gray-300" : "text-gray-500"}`}>{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-[#3a7fa5] font-bold text-base flex-shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case 6:
      return (
        <div className="w-full h-full bg-[#f0f4f8] flex flex-col justify-center px-10 md:px-16 py-8">
          <p className="text-[#3a7fa5] text-[10px] font-bold tracking-[3px] uppercase mb-2">Cómo trabajamos</p>
          <h2 className="text-[#0d2035] font-bold text-2xl md:text-3xl mb-7">
            Cuatro pasos, entrega en 14 a 18 días
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { num: "1", title: "Diagnóstico inicial", desc: "Revisamos tu negocio y definimos el alcance. Sin cargo." },
              { num: "2", title: "Diseño a medida", desc: "Pantallas con tu marca, para aprobar antes de programar." },
              { num: "3", title: "Desarrollo y revisiones", desc: "Programamos el sitio, el CRM y la IA. Hasta 7 revisiones." },
              { num: "4", title: "Capacitación y lanzamiento", desc: "Capacitamos al equipo, publicamos y seguimos con soporte." },
            ].map((s) => (
              <div key={s.num} className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-100">
                <p className="text-[#3a7fa5] text-xl md:text-2xl font-bold mb-2">{s.num}</p>
                <p className="text-[#0d2035] font-semibold text-[11px] md:text-sm mb-1.5">{s.title}</p>
                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ── STATIC DATA ───────────────────────────────────────────
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

const featureGroups = [
  {
    label: "El sitio",
    accent: false,
    items: [
      { text: "Sitio web con diseño a medida y responsivo" },
      { text: "SEO avanzado y Analytics integrado" },
      { text: "Panel de administración de contenido" },
      { text: "Integración WhatsApp y email" },
    ],
  },
  {
    label: "Motor de Inteligencia",
    accent: true,
    items: [
      {
        text: "Asistente público en la web",
        detail:
          "Chat flotante integrado en tu tienda. El visitante busca por texto, foto o medida y recibe productos reales del catálogo con precio y stock. Prepara el mensaje para WhatsApp con el contexto listo. No inventa datos.",
      },
      {
        text: "Búsqueda por imagen con IA",
        detail:
          "El cliente sube una foto y el sistema la analiza con visión artificial para identificar el producto y buscar coincidencias en el catálogo. Si la imagen no es clara, pide más datos en lugar de inventar.",
      },
      {
        text: "Comparador inteligente entre productos",
        detail:
          "El asistente compara dos o más productos con tablas: precio, características, medidas y compatibilidad. Recomienda según la necesidad real del visitante, sin presionar a comprar.",
      },
      {
        text: "IA que detecta oportunidades de venta",
        detail:
          "Identifica productos con muchas visitas pero pocas consultas, categorías en crecimiento y huecos en el catálogo. Muestra qué productos podrías sumar y cuánto volumen mueve esa categoría.",
      },
      {
        text: "Analista comercial en el panel privado",
        detail:
          "El dueño escribe preguntas normales — '¿qué se visitó más este mes?', '¿qué categoría creció?' — y recibe tablas, gráficos y conclusiones concretas. Compara períodos y detecta tendencias sin saber de análisis de datos.",
      },
      {
        text: "Alertas automáticas de seguimiento",
        detail:
          "El sistema avisa cuando un cliente no fue contactado, una consulta quedó sin respuesta o se detecta un cambio relevante en la actividad del negocio.",
      },
    ],
  },
  {
    label: "CRM y equipo",
    accent: false,
    items: [
      { text: "CRM con pipeline de ventas personalizado" },
      { text: "Historial completo de clientes y seguimiento" },
      { text: "Panel de métricas y pizarrón diario" },
      { text: "Roles y permisos por usuario" },
      { text: "Capacitación al equipo incluida" },
      { text: "Soporte continuo post-lanzamiento" },
    ],
  },
];

const useCases = [
  { icon: "🔧", label: "Ferreterías" },
  { icon: "🏗️", label: "Materiales de construcción" },
  { icon: "💊", label: "Farmacias" },
  { icon: "👗", label: "Indumentaria" },
  { icon: "🛒", label: "Mayoristas" },
  { icon: "🍽️", label: "Gastronomía" },
];

const TOTAL_SLIDES = 7;

// ── MAIN COMPONENT ────────────────────────────────────────
export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  function goTo(next: number) {
    setDirection(next > slide ? 1 : -1);
    setSlide(next);
  }

  return (
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

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

        {/* ── SLIDE CAROUSEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 text-center">
            Galería del sistema
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <SlideContent index={slide} />
              </motion.div>
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={() => slide > 0 && goTo(slide - 1)}
              disabled={slide === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next */}
            <button
              onClick={() => slide < TOTAL_SLIDES - 1 && goTo(slide + 1)}
              disabled={slide === TOTAL_SLIDES - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-4 z-20 text-white/40 text-xs font-mono select-none">
              {slide + 1} / {TOTAL_SLIDES}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                title={slideLabels[i]}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slide ? "w-8 bg-[#FF8C00]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
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
          className="relative rounded-2xl bg-[#2D2D2D] border border-[#FF8C00] shadow-2xl shadow-[#FF8C00]/15"
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
                  Sitio web profesional integrado con un motor de IA. Gestión de clientes,
                  búsqueda inteligente por imagen y automatizaciones que trabajan mientras tu negocio crece.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="font-display font-bold text-4xl text-[#FF8C00] mb-1">ARS 500.000</p>
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
              <div className="space-y-5">
                {featureGroups.map((group) => (
                  <div key={group.label}>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${group.accent ? "text-[#FF8C00]" : "text-gray-500"}`}>
                      {group.label}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item, fi) => {
                        const key = `${group.label}-${fi}`;
                        const isOpen = openFeature === key;
                        return (
                          <li key={fi}>
                            <button
                              className="w-full flex items-start gap-2.5 text-left group"
                              onClick={() =>
                                "detail" in item && item.detail
                                  ? setOpenFeature(isOpen ? null : key)
                                  : undefined
                              }
                            >
                              <Check size={13} className="text-[#FF8C00] mt-0.5 shrink-0" />
                              <span className={`text-sm flex-1 text-gray-300 ${"detail" in item && item.detail ? "group-hover:text-white transition-colors" : ""}`}>
                                {item.text}
                              </span>
                              {"detail" in item && item.detail && (
                                <ChevronDown
                                  size={13}
                                  className={`text-gray-500 mt-0.5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#FF8C00]" : ""}`}
                                />
                              )}
                            </button>
                            <AnimatePresence>
                              {"detail" in item && item.detail && isOpen && (
                                <motion.div
                                  key={key}
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <p className="ml-5 mt-1.5 mb-1 text-[11px] text-gray-400 leading-relaxed border-l border-[#FF8C00]/30 pl-3">
                                    {item.detail}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
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
