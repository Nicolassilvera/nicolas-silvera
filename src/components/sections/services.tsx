"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Mail, Smartphone, Search, CheckSquare, MessageCircle, ChevronDown } from "lucide-react";

const WA_NUMBER = "5491140591621";
const EMAIL = "nicolassilverak@gmail.com";

function waLink(service: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hola Nicolás, me interesa conocer más sobre ${service}`
  )}`;
}

type Rubro = { label: string; desc: string };
type RichContent = {
  intro: string;
  example: { label: string; text: string };
  rubros: Rubro[];
  closing: string;
};

type Solution = {
  id: string;
  Icon: React.ElementType;
  label: string;
  tagline: string;
  body: string[];
  richContent?: RichContent;
  features: string[];
};

const solutions: Solution[] = [
  {
    id: "desarrollo-web",
    Icon: Globe,
    label: "Desarrollo Web",
    tagline: "Web + sistema informático a medida con inteligencia artificial integrada.",
    body: [],
    richContent: {
      intro:
        "No es solo un sitio bonito. Es una herramienta que trabaja con vos: web profesional optimizada para tu rubro, más un motor inteligente que aprende de tu negocio y automatiza las tareas que hoy hacés a mano.",
      example: {
        label: "Por ejemplo, en un consultorio odontológico:",
        text: "El chatbot filtra las consultas que llegan por WhatsApp, organiza a los pacientes según el motivo de la visita y llega a confirmar el turno en muchos menos mensajes. Cuando ves la notificación ya sabés exactamente qué quiere el paciente — solo queda coordinar el horario y el pago.",
      },
      rubros: [
        { label: "Ferretería", desc: "Consultas de stock y precios respondidas solas, 24/7" },
        { label: "Inmobiliaria", desc: "Pre-calificación de interesados antes de que llegue al agente" },
        { label: "Taller mecánico", desc: "Turnos organizados automáticamente por tipo de trabajo" },
      ],
      closing:
        "Cada proceso que se automatiza deja de consumir tu tiempo. Y ese tiempo tiene un valor real que se acumula mes a mes — puede representar más de $1.000.000 ARS de ahorro al mes.",
    },
    features: [
      "Sitio web institucional o tienda online optimizada para tu rubro",
      "Chatbot para WhatsApp que filtra consultas, organiza pacientes/clientes y confirma turnos",
      "Panel de administración a medida: agendas, stock, pedidos, reportes",
      "Motor de IA integrado que responde, clasifica y escala solo cuando es necesario",
      "Integración con tus canales actuales — sin cambiar la forma en que trabajás",
    ],
  },
  {
    id: "email-hosting",
    Icon: Mail,
    label: "Email y Hosting",
    tagline: "Tu empresa con dominio propio, correo profesional y alojamiento seguro.",
    body: [
      "Si ya tenés tu sitio o aplicación y necesitás alojarlo correctamente, o si querés un email corporativo con el dominio de tu empresa — ej: info@tuempresa.com.ar — te acompañamos en todo el proceso.",
      "También trabajamos migraciones: traemos tu código fuente a un entorno moderno, configuramos el servidor y dejamos todo funcionando.",
    ],
    features: [
      "Email corporativo con dominio propio de tu empresa",
      "Migración de sitios existentes sin pérdida de datos",
      "Hosting optimizado para Next.js, WordPress y aplicaciones a medida",
      "Soporte técnico continuo post-lanzamiento",
    ],
  },
  {
    id: "desarrollo-aplicaciones",
    Icon: Smartphone,
    label: "Desarrollo de Aplicaciones",
    tagline: "Software a medida — mobile, desktop o web — con soberanía total de tus datos.",
    body: [
      "No todo tiene que estar en la nube. Construimos aplicaciones que corren en tu dispositivo y guardan los datos localmente, bajo tu control. Sin suscripciones, sin dependencias externas.",
      "Un ejemplo concreto es JarvisCRM: un sistema que combina tablero de ventas diarias, control de stock en tiempo real y un asistente IA integrado que actúa como copiloto en la operación del negocio.",
    ],
    features: [
      "CRM con panel de ventas, inventario y alertas automáticas",
      "Asistente de IA integrado como copiloto para la operación diaria",
      "Datos guardados localmente — soberanía total sobre tu información",
      "Versiones mobile y desktop adaptadas al flujo del negocio",
    ],
  },
  {
    id: "posicionamiento-web",
    Icon: Search,
    label: "Posicionamiento Web",
    tagline: "Que te encuentren antes que a tu competencia.",
    body: [
      "Optimización técnica y estratégica para que tu sitio aparezca en los primeros resultados de Google. Trabajamos la estructura del contenido, las palabras clave y la interrelación de todos tus canales digitales.",
      "Un buen posicionamiento no es solo SEO: es asegurarse de que cada canal — web, redes, directorios — apunte en la misma dirección y refuerce la autoridad de tu marca.",
    ],
    features: [
      "Auditoría SEO completa: etiquetas, palabras clave, velocidad de carga",
      "Estrategia de keywords orientada a las búsquedas de tu rubro",
      "Configuración de indexación con Google Search Console",
      "Interrelación de canales: web, redes sociales y directorios",
    ],
  },
];

function RichBody({ content }: { content: RichContent }) {
  return (
    <div className="space-y-5 text-sm">
      <p className="text-gray-600 leading-relaxed">{content.intro}</p>

      {/* Example callout */}
      <div className="bg-orange-50 border-l-4 border-[#FF8C00] rounded-r-xl px-4 py-4">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF8C00] mb-2">
          {content.example.label}
        </p>
        <p className="text-gray-700 leading-relaxed">{content.example.text}</p>
      </div>

      {/* Rubros grid */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
          El mismo esquema aplica en otros rubros
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {content.rubros.map((r) => (
            <div key={r.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">{r.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">{content.closing}</p>
    </div>
  );
}

export function Services({ topPadding = false }: { topPadding?: boolean }) {
  const [openId, setOpenId] = useState<string>(solutions[0].id);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && solutions.some((s) => s.id === hash)) {
      setOpenId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? "" : id));
  }

  return (
    <section
      id="servicios"
      className={`bg-white ${topPadding ? "pt-32 pb-20" : "py-20"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <span className="text-[#FF8C00] font-semibold text-xs uppercase tracking-widest">
            Soluciones
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mt-3 mb-4 leading-tight">
            Un sistema completo para tu comercio
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Presencia digital profesional con inteligencia artificial integrada.
          </p>
        </div>

        <div className="space-y-3">
          {solutions.map((s) => {
            const isOpen = openId === s.id;
            return (
              <div
                key={s.id}
                id={s.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FF8C00]/30 shadow-[0_0_24px_rgba(255,140,0,0.08)]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(s.id)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#FF8C00]" : "bg-[#FF8C00]/10"
                    }`}
                  >
                    <s.Icon size={18} className={isOpen ? "text-white" : "text-[#FF8C00]"} />
                  </div>
                  <span className="flex-1 font-display font-bold text-lg text-gray-900 leading-snug">
                    {s.label}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-[#FF8C00]" : "text-gray-400"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <p className="text-sm sm:text-base font-semibold italic text-gray-700 my-5 leading-snug border-l-4 border-[#FF8C00] pl-4">
                          {s.tagline}
                        </p>

                        {s.richContent ? (
                          <RichBody content={s.richContent} />
                        ) : (
                          <div className="space-y-3 text-gray-600 leading-relaxed mb-6 text-sm">
                            {s.body.map((p, i) => <p key={i}>{p}</p>)}
                          </div>
                        )}

                        <div className="space-y-2.5 mt-6 mb-7">
                          {s.features.map((f, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckSquare size={15} className="shrink-0 mt-0.5 text-[#FF8C00]" />
                              <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={waLink(s.label)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                          >
                            <MessageCircle size={15} />
                            Consultar por WhatsApp
                          </a>
                          <a
                            href={`mailto:${EMAIL}?subject=Consulta sobre ${s.label}`}
                            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-5 py-3 rounded-xl transition-colors text-sm"
                          >
                            Enviar email
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
