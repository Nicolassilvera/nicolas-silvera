"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Cada solución es a medida. Los precios son puntos de partida;
            el alcance final se define en una reunión de diagnóstico gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
                service.highlighted
                  ? "bg-[#2D2D2D] border-[#FF8C00] shadow-2xl shadow-[#FF8C00]/20 p-7 lg:-my-4 lg:scale-[1.03] z-10"
                  : "bg-white border-[#E0E0E0] hover:border-[#FF8C00]/50 hover:shadow-lg p-6"
              }`}
            >
              {service.highlighted && service.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF8C00] text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-lg">
                  {service.badge}
                </div>
              )}

              <div className="mb-4">
                <h3
                  className={`font-display font-bold text-xl mb-2 ${
                    service.highlighted ? "text-white" : "text-[#2D2D2D]"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlighted ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="font-display font-bold text-2xl text-[#FF8C00]">
                  {service.price}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    service.highlighted ? "text-gray-400" : "text-gray-400"
                  }`}
                >
                  {service.priceNote}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={15}
                      className="text-[#FF8C00] mt-0.5 shrink-0"
                    />
                    <span
                      className={
                        service.highlighted ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
