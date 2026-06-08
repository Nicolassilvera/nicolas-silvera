"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education } from "@/data/experience";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const typeLabels = {
  "full-time": "Tiempo completo",
  freelance: "Freelance",
  contract: "Contrato",
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Trayectoria
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#2D2D2D] mt-3 mb-4">
            Experiencia profesional
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E0E0E0]" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#FF8C00] flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-[#FF8C00]" />
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E0E0]">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <h3 className="font-display font-bold text-[#2D2D2D] text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-[#FF8C00] font-semibold text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                        <span className="text-xs bg-[#E0E0E0] text-gray-600 px-2 py-0.5 rounded-full">
                          {typeLabels[exp.type]}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#F5F5F5] text-[#2D2D2D] text-xs px-2 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1">
                      {exp.achievements.map((ach, ai) => (
                        <li
                          key={ai}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <span className="text-[#FF8C00] mt-0.5">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: experiences.length * 0.15 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#E0E0E0] flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-gray-400" />
                </div>

                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E0E0]">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-display font-bold text-[#2D2D2D]">
                        {education.degree}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {education.institution}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm shrink-0">
                      {education.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
