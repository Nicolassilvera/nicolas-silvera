"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const GRID_BG: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
  `,
  backgroundSize: "42px 42px",
  backgroundColor: "#08080a",
};

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const realProjects = projects.filter((p) => p.isReal);

  return (
    <section id="proyectos" ref={ref} style={GRID_BG} className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#FF8C00] font-semibold text-xs uppercase tracking-widest">
            Proyectos
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4 leading-tight">
            Lo que construí
          </h2>
          <p className="text-gray-500 text-base max-w-xl">
            Tres proyectos reales, cada uno resolviendo un problema concreto.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              {/* Accent header con logo */}
              <div
                className="relative h-36 flex items-center justify-center"
                style={{ background: `${project.accent}14` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: project.accent }}
                />
                {project.logo ? (
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-5xl">{project.emoji}</span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Category + name */}
                <div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: project.accent }}
                  >
                    {project.cat}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-0.5">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/6 text-gray-400 border border-white/8"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-1 border-t border-white/6 mt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${project.name}`}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      Código
                    </a>
                  )}
                  {project.url && project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.name}`}
                      className="flex items-center gap-1.5 text-xs font-semibold transition-colors ml-auto"
                      style={{ color: project.accent }}
                    >
                      {project.cta}
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {project.url === "#" && (
                    <span className="ml-auto text-[10px] text-gray-600 uppercase tracking-wide font-semibold border border-white/8 rounded-full px-2.5 py-1">
                      En desarrollo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
