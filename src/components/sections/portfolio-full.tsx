"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, X, CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";

function thumbUrl(url: string) {
  return `https://image.thum.io/get/width/1200/crop/900/${url.replace(/\/index\.html$/, "/")}`;
}

// ─── Browser chrome screenshot ────────────────────────────────────────────────
function SitePreview({ url, accent }: { url: string; accent: string }) {
  const [errored, setErrored] = useState(false);
  const displayUrl = url.replace(/^https?:\/\//, "");

  if (url === "#") {
    return (
      <div
        className="relative h-44 overflow-hidden rounded-t-2xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${accent}14, ${accent}06)` }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Próximamente</span>
      </div>
    );
  }

  return (
    <div
      className="relative h-44 overflow-hidden rounded-t-2xl"
      style={{ background: `linear-gradient(135deg, ${accent}14, ${accent}06)` }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-200 border-b border-gray-300">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white rounded text-[10px] text-gray-400 px-2 py-0.5 truncate">
          {displayUrl}
        </div>
      </div>
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbUrl(url)}
          alt={displayUrl}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      )}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${accent}22` }}>
            <ArrowUpRight size={18} style={{ color: accent }} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Modal detalle ────────────────────────────────────────────────────────────
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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1 w-full" style={{ background: project.accent }} />

          <div className="flex items-start gap-4 p-6 pb-4">
            <div
              className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-gray-100"
              style={{ background: `${project.accent}18` }}
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
              <h3 className="font-display font-bold text-xl text-gray-900 leading-tight">{project.name}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="shrink-0 p-1.5 text-gray-400 hover:text-gray-700 transition-colors rounded-lg hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>

          <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{project.desc}</p>

          {project.scope && project.scope.length > 0 && (
            <div className="px-6 pb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Alcance del proyecto</p>
              <ul className="space-y-3">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: project.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="px-6 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 pb-6 pt-2 border-t border-gray-100">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
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
              <span className="ml-auto text-xs text-gray-400 uppercase tracking-wide font-semibold">En desarrollo</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
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
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={onClick}
      className="group text-left rounded-2xl border border-gray-200 bg-white hover:border-[#FF8C00]/40 hover:shadow-[0_0_24px_rgba(255,140,0,0.12)] transition-all duration-300 overflow-hidden w-full cursor-pointer flex flex-col shadow-sm"
    >
      <SitePreview url={project.url} accent={project.accent} />

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.accent }}>
            {project.cat}
          </span>
          {isLive ? (
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
              En vivo
            </span>
          ) : (
            <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">
              Próximamente
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-base text-gray-900 mb-2 leading-snug">{project.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400 group-hover:text-[#FF8C00] transition-colors">
            Ver detalle
          </span>
          <ArrowUpRight
            size={15}
            className="text-gray-400 group-hover:text-[#FF8C00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
      </div>
    </motion.button>
  );
}

// ─── Portfolio full page ──────────────────────────────────────────────────────
export function PortfolioFull() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<Project | null>(null);

  const realProjects = projects.filter((p) => p.isReal);
  const demoProjects = projects.filter((p) => !p.isReal);

  return (
    <>
      <section ref={ref} className="bg-gray-50 pt-32 pb-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-[#FF8C00] font-semibold text-xs uppercase tracking-widest">
              Portfolio completo
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mt-3 mb-4 leading-tight">
              Todos los proyectos
            </h1>
            <p className="text-gray-500 text-base max-w-xl">
              Proyectos en producción y prototipos en desarrollo. Tocá cualquiera para ver el detalle, el stack y los links.
            </p>
          </motion.div>

          {/* Real projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">En producción</p>
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
          </motion.div>

          {/* Demo / coming soon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Próximamente</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {demoProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isInView={isInView}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
