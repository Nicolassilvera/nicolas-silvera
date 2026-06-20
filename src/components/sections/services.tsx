"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-4">
            ¿Qué puedo hacer por tu negocio?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Precios fijos, plazos claros. El alcance final se define en una reunión de diagnóstico gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
                service.highlighted
                  ? "bg-[#2D2D2D] border-[#FF8C00] shadow-2xl shadow-[#FF8C00]/20 md:-my-4 z-10"
                  : "bg-white border-[#E0E0E0] hover:border-[#FF8C00]/40 hover:shadow-lg"
              }`}
            >
              {service.highlighted && service.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8C00] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-lg">
                  {service.badge}
                </div>
              )}

              {/* Header */}
              <div className={`px-6 pt-8 pb-5 border-b ${service.highlighted ? "border-white/10" : "border-[#E0E0E0]"}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${service.highlighted ? "text-[#FF8C00]" : "text-[#FF8C00]"}`}>
                  {service.tagline}
                </p>
                <h3 className={`font-display font-bold text-2xl mb-1 ${service.highlighted ? "text-white" : "text-[#2D2D2D]"}`}>
                  {service.name}
                </h3>
                <p className={`text-sm leading-relaxed mt-2 ${service.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                  {service.description}
                </p>
              </div>

              {/* Precio */}
              <div className={`px-6 py-5 border-b ${service.highlighted ? "border-white/10" : "border-[#E0E0E0]"}`}>
                <p className="font-display font-bold text-3xl text-[#FF8C00]">
                  {service.price}
                </p>
              </div>

              {/* Specs clave */}
              <div className={`px-6 py-4 border-b grid grid-cols-3 gap-2 text-center ${service.highlighted ? "border-white/10" : "border-[#E0E0E0]"}`}>
                <div>
                  <p className={`text-lg font-bold ${service.highlighted ? "text-white" : "text-[#2D2D2D]"}`}>
                    {service.pages}
                  </p>
                  <p className={`text-[10px] uppercase tracking-wide mt-0.5 ${service.highlighted ? "text-gray-400" : "text-gray-400"}`}>
                    Páginas
                  </p>
                </div>
                <div>
                  <p className={`text-lg font-bold ${service.highlighted ? "text-white" : "text-[#2D2D2D]"}`}>
                    {service.revisions}
                  </p>
                  <p className={`text-[10px] uppercase tracking-wide mt-0.5 ${service.highlighted ? "text-gray-400" : "text-gray-400"}`}>
                    Revisiones
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-bold leading-tight ${service.highlighted ? "text-white" : "text-[#2D2D2D]"}`}>
                    {service.delivery}
                  </p>
                  <p className={`text-[10px] uppercase tracking-wide mt-0.5 ${service.highlighted ? "text-gray-400" : "text-gray-400"}`}>
                    Entrega
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="px-6 py-5 space-y-2.5 flex-1">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <Check
                      size={14}
                      className="text-[#FF8C00] mt-0.5 shrink-0"
                    />
                    <span className={service.highlighted ? "text-gray-300" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="px-6 pb-7 pt-2">
                <Button
                  variant={service.highlighted ? "primary" : "outline"}
                  className="w-full"
                  onClick={() =>
                    document
                      .getElementById("diagnostico")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          Todos los precios son en pesos argentinos · Diagnóstico inicial sin cargo · El alcance final puede variar
        </motion.p>
      </div>
    </section>
  );
}
