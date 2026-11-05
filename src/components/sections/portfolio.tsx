"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";

// ─── Modal de detalle ─────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-lg bg-[#111113] border border-white/12 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1 w-full" style={{ background: project.accent }} />

          <div className="flex items-start gap-4 p-6 pb-4">
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-white/10"
              style={{ background: `${project.accent}1a` }}
            >
              {project.logo ? (
                <Image src={project.logo} alt={project.name} width={34} height={34} className="object-contain" />
              ) : (
                <span className="text-xl">{project.emoji}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                {project.cat}
              </span>
              <h3 className="font-display font-bold text-xl text-white leading-tight">{project.name}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="shrink-0 p-1.5 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/8"
            >
              <X size={18} />
            </button>
          </div>

          <p className="px-6 pb-4 text-sm text-gray-400 leading-relaxed">{project.desc}</p>

          {project.scope && project.scope.length > 0 && (
            <div className="px-6 pb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Alcance del proyecto</p>
              <ul className="space-y-3">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: project.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="px-6 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/8">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 pb-6 pt-2 border-t border-white/8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Github size={14} /> GitHub
              </a>
            )}
            {project.url !== "#" && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:opacity-90"
                style={{ background: project.accent, color: "#fff" }}>
                {project.cta} <ArrowUpRight size={14} />
              </a>
            )}
            {project.url === "#" && !project.githubUrl && (
              <span className="ml-auto text-xs text-gray-600 uppercase tracking-wide font-semibold">En desarrollo</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Card de proyecto ─────────────────────────────────────────────────────────
function ProjectCard({ project, index, isInView, onClick }: {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  const isLive = project.url !== "#";

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group text-left rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/16 transition-all duration-300 overflow-hidden w-full cursor-pointer flex flex-col"
    >
      {/* Visual header */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}06)` }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-25 blur-xl"
          style={{ background: project.accent }}
        />
        <div
          className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full opacity-15 blur-lg"
          style={{ background: project.accent }}
        />

        {/* Logo / emoji */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg"
          style={{ background: `${project.accent}1a` }}
        >
          {project.logo ? (
            <Image src={project.logo} alt={project.name} width={42} height={42} className="object-contain" />
          ) : (
            <span className="text-3xl">{project.emoji}</span>
          )}
        </div>

        {/* Live / dev badge */}
        <div className="absolute top-3 right-3">
          {isLive ? (
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-2 py-0.5">
              En vivo
            </span>
          ) : (
            <span className="text-[10px] font-semibold text-gray-500 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
              En desarrollo
            </span>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `${project.accent}50` }} />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: project.accent }}>
          {project.cat}
        </span>
        <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">{project.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.desc}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/8">
              {tech}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-white/6">
          <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
            Ver detalle
          </span>
          <ArrowUpRight
            size={15}
            className="text-gray-600 group-hover:text-gray-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
      </div>
    </motion.button>
  );
}

// ─── Portfolio principal ──────────────────────────────────────────────────────
export function Portfolio({ topPadding = false }: { topPadding?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<Project | null>(null);

  const realProjects = projects.filter((p) => p.isReal);

  return (
    <>
      <section
        id="proyectos"
        ref={ref}
        className={`bg-[#0c0c0e] ${topPadding ? "pt-32 pb-24" : "py-24"}`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[#FF8C00] font-semibold text-xs uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4 leading-tight">
              Lo que construí
            </h2>
            <p className="text-gray-500 text-base max-w-xl">
              Proyectos reales — tocá cualquiera para ver el detalle, el stack y los links.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {realProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
