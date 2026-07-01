"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const stack = [
  "Next.js", "TypeScript", "Python", "PostgreSQL",
  "MongoDB", "FastAPI", "LangChain", "Claude API",
  "Tailwind CSS", "Vercel", "Node.js", "n8n",
];

const businesses = [
  {
    name: "Balanzas Caballito",
    description:
      "Comercialización y servicio técnico de balanzas industriales. Catálogo online, cotizador y contacto directo.",
    url: "https://balanzas-caballito.vercel.app/index.html",
    accent: "#4f8ef7",
  },
  {
    name: "TecnoFan",
    description:
      "Tienda de consolas portátiles y tecnología. Stock actualizado, pagos integrados y entrega a todo el país.",
    url: "#",
    accent: "#2fbf71",
    soon: true,
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Texto bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
              Sobre mí
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-6 leading-tight">
              Nicolás Silvera
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                En 2021 empecé la carrera de Analista en Sistemas. Desde el primer año
                empecé a aplicar lo que iba aprendiendo en mis propios proyectos, y así
                fue como la tecnología pasó a ser parte de cómo hago crecer mis
                emprendimientos.
              </p>
              <p>
                Hoy tengo dos negocios funcionando:{" "}
                <span className="font-semibold text-[#2D2D2D]">Balanzas Caballito</span>
                , donde comercializamos y damos servicio técnico de balanzas industriales,
                y{" "}
                <span className="font-semibold text-[#2D2D2D]">TecnoFan</span>
                , una tienda de consolas portátiles y tecnología.
              </p>
              <p>
                Todo lo que construí para esas tiendas —el sitio, el catálogo, los
                formularios, las integraciones— lo hice aprendiendo y aplicando las
                herramientas que el momento pedía.
              </p>
            </div>

            {/* Stack de tecnologías */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Tecnologías que uso
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-[#F5F5F5] text-[#2D2D2D] border border-[#E0E0E0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mis negocios */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Mis emprendimientos activos
            </p>

            {businesses.map((biz, i) => (
              <motion.div
                key={biz.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              >
                {biz.soon || biz.url === "#" ? (
                  <div
                    className="block rounded-2xl border border-[#E0E0E0] bg-[#F5F5F5] p-6 opacity-70"
                  >
                    <BusinessCard biz={biz} />
                  </div>
                ) : (
                  <a
                    href={biz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visitar ${biz.name}`}
                    aria-label={`Visitar ${biz.name}`}
                    className="block rounded-2xl border border-[#E0E0E0] bg-[#F5F5F5] p-6 hover:border-[#FF8C00]/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <BusinessCard biz={biz} linked />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function BusinessCard({
  biz,
  linked,
}: {
  biz: { name: string; description: string; accent: string; soon?: boolean };
  linked?: boolean;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: biz.accent }}
          />
          <h3 className="font-display font-semibold text-[#2D2D2D] text-base">
            {biz.name}
          </h3>
        </div>
        {linked ? (
          <ExternalLink
            size={15}
            className="text-gray-400 group-hover:text-[#FF8C00] transition-colors shrink-0 mt-0.5"
          />
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 border border-gray-300 rounded-full px-2 py-0.5 shrink-0">
            Próximamente
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{biz.description}</p>
    </>
  );
}
