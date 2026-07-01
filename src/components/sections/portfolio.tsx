"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

export function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const realProjects = projects.filter((p) => p.isReal);

  return (
    <section
      id="proyectos"
      ref={ref}
      className="py-24 bg-[#0c0c0e]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 leading-tight">
            Lo que construí
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {realProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.055] hover:border-white/16 transition-all duration-300 overflow-hidden"
            >
              {/* Accent line left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                style={{ background: project.accent }}
              />

              <div className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-7 pl-8 sm:pl-9">

                {/* Logo */}
                <div
                  className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ background: `${project.accent}18` }}
                >
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-2xl">{project.emoji}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: project.accent }}
                    >
                      {project.cat}
                    </span>
                    {project.url !== "#" ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5">
                        En vivo
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 border border-white/10 rounded-full px-2 py-0.5">
                        En desarrollo
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/8"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links — derecha en desktop */}
                <div className="flex sm:flex-col items-center gap-3 shrink-0 sm:self-center">
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${project.name}`}
                      className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl border transition-all duration-200 hover:scale-105"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}40`,
                        background: `${project.accent}0d`,
                      }}
                    >
                      {project.cta}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${project.name}`}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-200 transition-colors px-3 py-2 rounded-xl border border-white/8 hover:border-white/20"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
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
