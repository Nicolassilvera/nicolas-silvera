"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education } from "@/data/experience";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const typeLabels = {
  "full-time": "Tiempo completo",
  freelance: "Freelance",
  contract: "Contrato",
  "part-time": "Part-time",
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="relative overflow-hidden bg-[#F5F5F5] py-24" ref={ref}>
      <svg
        aria-hidden="true"
        className="scan-line-wave"
        viewBox="0 0 1440 16"
        preserveAspectRatio="none"
        height={16}
      >
        <defs>
          <filter id="scan-glow" x="-5%" y="-200%" width="110%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Wide soft glow underneath */}
        <path
          d="M-10,8 C70,2 130,14 220,6 C300,0 355,15 445,8 C515,3 575,13 665,5 C745,0 815,14 895,8 C955,3 1035,12 1115,6 C1195,1 1255,14 1345,7 C1405,3 1430,10 1450,8"
          stroke="#FF8C00"
          strokeWidth="8"
          strokeOpacity="0.25"
          fill="none"
        />
        {/* Sharp main wave */}
        <path
          d="M-10,8 C70,2 130,14 220,6 C300,0 355,15 445,8 C515,3 575,13 665,5 C745,0 815,14 895,8 C955,3 1035,12 1115,6 C1195,1 1255,14 1345,7 C1405,3 1430,10 1450,8"
          stroke="#FF8C00"
          strokeWidth="2"
          fill="none"
          filter="url(#scan-glow)"
        />
      </svg>
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
          <p className="text-gray-500 max-w-2xl mx-auto">
            Más allá del código: una trayectoria variada que me da perspectiva real
            sobre cómo funcionan los negocios y qué necesitan.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E0E0E0]" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex gap-6"
                >
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 ${
                      exp.isTech
                        ? "bg-white border-[#FF8C00]"
                        : "bg-white border-[#E0E0E0]"
                    }`}
                  >
                    <Briefcase
                      size={18}
                      className={exp.isTech ? "text-[#FF8C00]" : "text-gray-400"}
                    />
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E0E0]">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                      <div>
                        <h3 className="font-display font-bold text-[#2D2D2D] text-lg leading-tight">
                          {exp.role}
                        </h3>
                        <p className={`font-semibold text-sm mt-0.5 ${exp.isTech ? "text-[#FF8C00]" : "text-gray-500"}`}>
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

                    <div className="flex items-center gap-1 mb-3">
                      <MapPin size={12} className="text-gray-400" />
                      <span className="text-gray-400 text-xs">
                        {exp.location} · {exp.modality}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {exp.technologies.length > 0 && (
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
                    )}

                    <ul className="space-y-1">
                      {exp.achievements.map((ach, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-[#FF8C00] mt-0.5 shrink-0">▸</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: experiences.length * 0.12 + i * 0.1 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-[#E0E0E0] flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-gray-400" />
                  </div>

                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#E0E0E0]">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <div>
                        <h3 className="font-display font-bold text-[#2D2D2D]">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-500 text-sm">{edu.institution}</p>
                      </div>
                      <p className="text-gray-400 text-sm shrink-0">{edu.period}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.skills.map((skill) => (
                        <span key={skill} className="bg-[#F5F5F5] text-gray-500 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
