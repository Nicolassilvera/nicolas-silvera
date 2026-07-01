"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };
}

const stack = [
  "Next.js", "TypeScript", "Python", "PostgreSQL",
  "FastAPI", "LangChain", "Claude API", "Tailwind CSS",
  "Node.js", "MongoDB", "Vercel", "n8n",
];

const businesses = [
  {
    name: "Balanzas Caballito",
    description: "Comercialización y servicio técnico de balanzas industriales.",
    url: "https://balanzas-caballito.vercel.app/index.html",
    accent: "#4f8ef7",
  },
  {
    name: "TecnoFan",
    description: "Tienda de consolas portátiles y tecnología.",
    url: "https://r36-s.vercel.app/",
    accent: "#2fbf71",
  },
];

export function Hero() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen bg-[#1a1a1a] flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="hero-grid absolute inset-0 opacity-5" />

      {/* Orange glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#FF8C00]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <div>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8"
            >
              Nicolás
              <br />
              <span className="text-[#FF8C00]">Silvera</span>
            </motion.h1>

            <motion.div {...fadeUp(0.25)} className="space-y-4 text-gray-400 leading-relaxed mb-8">
              <p>
                En 2021 empecé la carrera de Analista en Sistemas. Desde el primer año
                empecé a aplicar lo que iba aprendiendo en mis propios proyectos, y así
                fue como la tecnología pasó a ser parte de cómo hago crecer mis
                emprendimientos.
              </p>
              <p>
                Hoy tengo dos negocios funcionando:{" "}
                <span className="text-white font-medium">Balanzas Caballito</span>
                , donde comercializamos y damos servicio técnico de balanzas industriales,
                y{" "}
                <span className="text-white font-medium">TecnoFan</span>
                , una tienda de consolas portátiles y tecnología.
              </p>
              <p>
                Todo lo que construí para esas tiendas —el sitio, el catálogo, los
                formularios, las integraciones— lo hice aprendiendo y aplicando las
                herramientas que el momento pedía.
              </p>
            </motion.div>

            {/* Tech pills */}
            <motion.div {...fadeUp(0.4)}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">
                Tecnologías que uso
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Ver proyectos */}
            <motion.div {...fadeUp(0.5)} className="mt-8">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-xl hover:border-[#FF8C00]/60 hover:text-[#FF8C00] transition-all duration-200"
              >
                Ver proyectos →
              </button>
            </motion.div>
          </div>

          {/* Right: photo + businesses */}
          <div className="flex flex-col gap-6">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#FF8C00]/20 blur-2xl scale-110" />
                <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#FF8C00]/30 shadow-2xl shadow-[#FF8C00]/10">
                  <Image
                    src="/logos/foto_perfil.png"
                    alt="Nicolás Silvera"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                </div>
                <div className="absolute -top-3 -left-3 bg-[#2D2D2D] border border-[#FF8C00]/20 rounded-xl px-3 py-2 shadow-xl">
                  <p className="text-[#FF8C00] text-xs font-medium">CABA, Argentina</p>
                  <p className="text-gray-400 text-xs">Remoto y presencial</p>
                </div>
              </div>
            </motion.div>

            {/* Business cards */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                Mis emprendimientos
              </p>
              {businesses.map((biz, i) => (
                <motion.div
                  key={biz.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                >
                  {biz.url === "#" ? (
                    <div className="rounded-xl border border-white/8 bg-white/3 px-4 py-3 opacity-60">
                      <BizCard biz={biz} />
                    </div>
                  ) : (
                    <a
                      href={biz.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visitar ${biz.name}`}
                      aria-label={`Visitar ${biz.name}`}
                      className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:border-[#FF8C00]/40 hover:bg-white/8 transition-all duration-200 group"
                    >
                      <BizCard biz={biz} linked />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function BizCard({
  biz,
  linked,
}: {
  biz: { name: string; description: string; url: string; accent: string };
  linked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ background: biz.accent }}
        />
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">{biz.name}</p>
          <p className="text-gray-500 text-xs leading-snug">{biz.description}</p>
        </div>
      </div>
      {linked ? (
        <ExternalLink size={13} className="text-gray-600 group-hover:text-[#FF8C00] transition-colors shrink-0" />
      ) : (
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-600 border border-white/10 rounded-full px-2 py-0.5 shrink-0">
          Próximo
        </span>
      )}
    </div>
  );
}
