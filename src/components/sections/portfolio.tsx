"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Cpu,
  Layers,
  TrendingUp,
  ExternalLink,
  Github,
} from "lucide-react";

const categoryLabels: Record<Project["category"], string> = {
  ai: "IA & Automatización",
  web: "Web Corporativa",
  ecommerce: "E-commerce",
  system: "Sistema Interno",
  automation: "Automatización",
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <motion.div
      layout
      className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
        expanded
          ? "border-[#FF8C00] shadow-xl shadow-[#FF8C00]/10"
          : "border-[#E0E0E0] hover:border-[#FF8C00]/50 hover:shadow-lg"
      }`}
    >
      {/* Card header — always visible */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-[#F5F5F5]">
            {project.logo && !logoError ? (
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={48}
                height={48}
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Cpu size={22} className="text-[#FF8C00]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-display font-bold text-lg text-[#2D2D2D]">
                {project.name}
              </h3>
              {project.featured && (
                <Badge variant="primary" className="shrink-0">
                  Destacado
                </Badge>
              )}
            </div>
            <Badge variant="outline">{categoryLabels[project.category]}</Badge>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-[#F5F5F5] text-[#2D2D2D] text-xs px-2 py-1 rounded-md font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-[#F5F5F5] text-gray-400 text-xs px-2 py-1 rounded-md">
              +{project.technologies.length - 4} más
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-[#FF8C00] text-sm font-semibold hover:gap-3 transition-all cursor-pointer"
          >
            {expanded ? (
              <>
                Ver menos <ChevronUp size={16} />
              </>
            ) : (
              <>
                Ver caso de éxito <ChevronDown size={16} />
              </>
            )}
          </button>

          <div className="flex items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#FF8C00] text-xs font-medium transition-colors"
              >
                <ExternalLink size={13} />
                Ver sitio
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-400 hover:text-[#FF8C00] text-xs font-medium transition-colors"
              >
                <Github size={13} />
                Ver código
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="border-t border-[#E0E0E0] p-6 space-y-6 bg-[#FAFAFA]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={15} className="text-[#FF8C00]" />
                  <h4 className="font-display font-semibold text-sm text-[#2D2D2D] uppercase tracking-wide">
                    Descripción completa
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu size={15} className="text-[#FF8C00]" />
                  <h4 className="font-display font-semibold text-sm text-[#2D2D2D] uppercase tracking-wide">
                    Arquitectura técnica
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={15} className="text-[#FF8C00]" />
                  <h4 className="font-display font-semibold text-sm text-[#2D2D2D] uppercase tracking-wide">
                    Resultados obtenidos
                  </h4>
                </div>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={15} className="text-[#FF8C00] mt-0.5 shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display font-semibold text-sm text-[#2D2D2D] uppercase tracking-wide mb-3">
                  Stack completo
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FF8C00]/10 text-[#FF8C00] text-xs px-2 py-1 rounded-md font-mono border border-[#FF8C00]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="parallax-dark py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
            Proyectos
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada proyecto tiene una historia: un problema real, una solución
            concreta y un resultado medible para el negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
