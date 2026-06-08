"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Atención personalizada con comunicación directa con quien desarrolla",
  "Reuniones presenciales y virtuales según tu preferencia",
  "Soluciones tecnológicas a medida, no plantillas genéricas",
  "Capacitación incluida para que tu equipo pueda operar el sistema",
  "Soporte posterior al lanzamiento",
  "Entiendo tu negocio antes de proponer cualquier solución",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
              Sobre mí
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-6 leading-tight">
              Tecnología al servicio
              <br />
              <span className="text-[#FF8C00]">de tu negocio</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Soy Nicolás Silvera, Software Engineer y AI Automation Specialist
                con más de 5 años de experiencia desarrollando soluciones
                tecnológicas para comercios, pymes y empresas de distintos rubros.
              </p>
              <p>
                Mi enfoque es diferente: antes de escribir una línea de código,
                entiendo tu operación, identifico los cuellos de botella y propongo
                la solución que realmente va a impactar en tu negocio. No vendo
                tecnología por vender, vendo resultados medibles.
              </p>
              <p>
                Trabajo con las tecnologías más modernas —Next.js, Python, IA,
                automatizaciones— pero siempre con un criterio práctico: la
                herramienta tiene que resolver el problema, no complicarlo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <h3 className="font-display font-semibold text-lg text-[#2D2D2D] mb-6">
                Por qué trabajar conmigo
              </h3>
              <ul className="space-y-3">
                {differentials.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#FF8C00] mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
