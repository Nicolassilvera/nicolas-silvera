"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#1a1a1a] flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="hero-grid absolute inset-0 opacity-5" />

      {/* Orange glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#FF8C00]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-[#FF8C00]/10 border border-[#FF8C00]/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-[#FF8C00]" />
              <span className="text-[#FF8C00] text-sm font-medium">
                Software Engineer · AI Specialist · Consultor
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
            >
              Nicolás
              <br />
              <span className="text-[#FF8C00]">Silvera</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed mb-4"
            >
              Transformo problemas operativos en{" "}
              <span className="text-white font-medium">
                soluciones tecnológicas reales.
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(0.45)}
              className="text-gray-500 text-base leading-relaxed mb-10"
            >
              No vendo páginas web. Entiendo tu negocio, identifico oportunidades
              y construyo la herramienta adecuada para resolverlas.
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                type="button"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("diagnostico")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Solicitar diagnóstico gratuito
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("proyectos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver proyectos
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center gap-8 mt-12"
            >
              {[
                { value: "+5", label: "años de exp." },
                { value: "+20", label: "proyectos" },
                { value: "+15", label: "clientes" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-2xl text-[#FF8C00]">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: profile photo — visible en todos los tamaños */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Orange glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-[#FF8C00]/20 blur-2xl scale-110" />

              <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-[#FF8C00]/30 shadow-2xl shadow-[#FF8C00]/10">
                <Image
                  src="/logos/foto_perfil.png"
                  alt="Nicolás Silvera"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#FF8C00] rounded-xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl">
                <p className="font-display font-bold text-white text-xs lg:text-sm">
                  Disponible ahora
                </p>
                <p className="text-orange-100 text-xs">para nuevos proyectos</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-[#2D2D2D] border border-[#FF8C00]/20 rounded-xl px-3 py-2 lg:px-4 lg:py-3 shadow-xl">
                <p className="text-[#FF8C00] text-xs font-medium">CABA, Argentina</p>
                <p className="text-gray-400 text-xs">Remoto y presencial</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-gray-600 text-xs uppercase tracking-widest">scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-[#FF8C00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
