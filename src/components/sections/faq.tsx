"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tarda en estar listo mi proyecto?",
    answer:
      "Depende del alcance. Una landing page puede estar en 5-7 días hábiles. Un sitio web empresarial, 2-3 semanas. Un CRM o sistema interno puede llevar de 4 a 12 semanas según la complejidad. En la propuesta siempre incluyo un cronograma detallado.",
  },
  {
    question: "¿Cómo son los pagos?",
    answer:
      "Generalmente trabajo con un anticipo del 40-50% para arrancar el proyecto y el saldo contra entrega, o en cuotas para proyectos más grandes. Acepto transferencia bancaria, MercadoPago y efectivo.",
  },
  {
    question: "¿Puedo reunirme de forma presencial?",
    answer:
      "Sí. Trabajo en Buenos Aires y puedo reunirme presencialmente en la ciudad. También ofrezco reuniones virtuales por Zoom, Meet o Teams para clientes de otras ciudades o del exterior.",
  },
  {
    question: "¿Qué pasa si necesito cambios después del lanzamiento?",
    answer:
      "Todos los proyectos incluyen un período de soporte. Después de eso, ofrezco planes de mantenimiento mensual o trabajo por hora para ajustes y nuevas funcionalidades.",
  },
  {
    question: "¿Me vas a capacitar para usar el sistema?",
    answer:
      "Siempre. La capacitación está incluida en todos los proyectos. No entrego un sistema y desaparezco: me aseguro de que tu equipo sepa operar la herramienta con total autonomía.",
  },
  {
    question: "¿Puedo tener acceso al código fuente?",
    answer:
      "Sí. Todo el código desarrollado es tuyo. Lo subimos a un repositorio de GitHub en tu cuenta para que tengas control total del código.",
  },
  {
    question: "¿Trabajás solo o tenés un equipo?",
    answer:
      "Trabajo principalmente de forma independiente, lo que garantiza comunicación directa y sin intermediarios. Para proyectos de mayor escala, puedo sumar colaboradores especializados bajo mi coordinación.",
  },
  {
    question: "¿Puedo empezar con algo pequeño y luego ampliar?",
    answer:
      "Exactamente así recomiendo arrancar. Un diagnóstico gratuito permite entender el problema y proponer una solución escalable que puede crecer con el negocio. No es necesario invertir todo de entrada.",
  },
];

function FaqItem({
  question,
  answer,
  index,
  isInView,
}: {
  question: string;
  answer: string;
  index: number;
  isInView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-[#E0E0E0] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-[#F5F5F5] transition-colors cursor-pointer"
      >
        <span className="font-display font-semibold text-[#2D2D2D] text-sm sm:text-base">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-[#FF8C00]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-[#E0E0E0] pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-4">
            Dudas frecuentes
          </h2>
          <p className="text-gray-500">
            Respuestas a las preguntas que más recibo antes de arrancar un proyecto.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
