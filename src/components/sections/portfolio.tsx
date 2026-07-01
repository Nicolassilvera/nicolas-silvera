"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects, type Project } from "@/data/projects";

// ─── Tipografías del spec (variables inyectadas por next/font) ────────────────
const SPACE = "var(--font-space-grotesk), 'Space Grotesk', sans-serif";
const JETB  = "var(--font-jetbrains-mono), 'JetBrains Mono', monospace";
const INTER = "var(--font-inter), 'Inter', sans-serif";

// ─── Browser Mockup oscuro — desktop cards ────────────────────────────────────
function BrowserMockupDark({ accent }: { accent: string }) {
  return (
    <div style={{
      height: 104, borderRadius: 10,
      background: "#141417",
      border: "1px solid rgba(255,255,255,.07)",
      overflow: "hidden", flexShrink: 0,
    }}>
      <div style={{
        height: 17, background: "#1d1d22",
        display: "flex", alignItems: "center", paddingLeft: 8, gap: 4,
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#3a3a40" }} />
        ))}
      </div>
      <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ height: 6, borderRadius: 3, background: accent, width: "62%" }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,.09)", width: "88%" }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,.05)", width: "75%" }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,.05)", width: "55%" }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,.05)", width: "68%" }} />
      </div>
    </div>
  );
}

// ─── Browser Mockup claro — coverflow + modal ────────────────────────────────
function BrowserMockupLight({ accent, emoji, name, logo }: {
  accent: string; emoji: string; name: string; logo?: string;
}) {
  return (
    <div style={{
      borderRadius: 10, background: "#fafaf8",
      border: "1px solid rgba(0,0,0,.08)",
      overflow: "hidden",
      display: "flex", flexDirection: "column", flex: 1,
    }}>
      {/* barra superior con semáforo */}
      <div style={{
        height: 17, background: "#f0efed", flexShrink: 0,
        display: "flex", alignItems: "center", paddingLeft: 8, gap: 4,
      }}>
        {(["#e0584f", "#e8b53d", "#54b864"] as const).map(c => (
          <div key={c} style={{ width: 5, height: 5, borderRadius: "50%", background: c }} />
        ))}
      </div>

      {/* body: logo centrado si existe, skeletons si no */}
      {logo ? (
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 14px",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: "#fff", border: "1px solid rgba(0,0,0,.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}>
            <Image src={logo} alt={name} width={44} height={44} style={{ objectFit: "contain" }} />
          </div>
          {/* skeleton debajo del logo */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ height: 4, borderRadius: 2, background: accent, width: "55%", margin: "0 auto" }} />
            <div style={{ height: 3, borderRadius: 2, background: "rgba(0,0,0,.06)", width: "70%", margin: "0 auto" }} />
          </div>
        </div>
      ) : (
        <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          <div style={{ height: 6, borderRadius: 3, background: accent, width: "62%" }} />
          <div style={{ height: 5, borderRadius: 3, background: "rgba(0,0,0,.08)", width: "88%" }} />
          <div style={{ height: 5, borderRadius: 3, background: "rgba(0,0,0,.05)", width: "70%" }} />
          <div style={{ height: 5, borderRadius: 3, background: "rgba(0,0,0,.05)", width: "55%" }} />
        </div>
      )}

      {/* barra inferior con nombre */}
      <div style={{
        height: 28, background: "#fff", flexShrink: 0,
        borderTop: "1px solid rgba(0,0,0,.06)",
        display: "flex", alignItems: "center", paddingLeft: 8, gap: 5,
      }}>
        <span style={{ fontSize: 11 }}>{emoji}</span>
        <span style={{
          fontSize: 10, fontWeight: 600, color: "#333",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{name}</span>
      </div>
    </div>
  );
}

// ─── TorusKnot Three.js — sólo desktop ───────────────────────────────────────
function TorusKnotScene({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let running = false;
    let rafId = 0;
    let cleanupFn: (() => void) | undefined;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("three").then((THREE) => {
      const W = 420, H = 360;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
      camera.position.z = 5.8;

      const tk = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.05, 0.34, 140, 18),
        new THREE.MeshBasicMaterial({ color: 0xfb7a2b, wireframe: true, transparent: true, opacity: 0.9 }),
      );
      const tk2 = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.4, 0.16, 120, 12),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.07 }),
      );
      scene.add(tk, tk2);

      const loop = () => {
        if (!running) return;
        rafId = requestAnimationFrame(loop);
        if (!prefersReduced) {
          tk.rotation.x  += 0.006; tk.rotation.y  += 0.009;
          tk2.rotation.x -= 0.003; tk2.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
      };

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries[0].isIntersecting;
          if (visible && !running) { running = true; loop(); }
          else if (!visible)       { running = false; }
        },
        { threshold: 0.05 },
      );
      if (sectionRef.current) observer.observe(sectionRef.current);

      cleanupFn = () => {
        running = false;
        cancelAnimationFrame(rafId);
        observer.disconnect();
        renderer.dispose();
        if (!Array.isArray(tk.material))  tk.material.dispose();
        if (!Array.isArray(tk2.material)) tk2.material.dispose();
        tk.geometry.dispose();
        tk2.geometry.dispose();
      };
    });

    return () => cleanupFn?.();
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", top: 0, right: 0,
        width: 420, height: 360,
        pointerEvents: "none", opacity: 0.9,
      }}
    />
  );
}

// ─── Card desktop con tilt 3D ─────────────────────────────────────────────────
function ProjectCard({ project, onVerMas }: { project: Project; onVerMas: () => void }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ry = ((e.clientX - rect.left) / rect.width  - 0.5) * 16;
    const rx = (0.5 - (e.clientY - rect.top)  / rect.height) * 12;
    e.currentTarget.style.transform     = `translateY(-7px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    e.currentTarget.style.borderColor   = "rgba(251,122,43,.55)";
    e.currentTarget.style.boxShadow     = "0 26px 48px -18px rgba(251,122,43,.4)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform   = "";
    e.currentTarget.style.borderColor = "";
    e.currentTarget.style.boxShadow   = "";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "linear-gradient(160deg, rgba(32,32,37,.92), rgba(15,15,18,.94))",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 16, padding: 14,
        display: "flex", flexDirection: "column", gap: 11,
        transformStyle: "preserve-3d",
        transition: "transform .28s cubic-bezier(.2,.7,.2,1), border-color .28s, box-shadow .28s",
        height: "100%",
      }}
    >
      <BrowserMockupDark accent={project.accent} />

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
          <span style={{ fontSize: 17 }}>{project.emoji}</span>
          <span style={{ fontFamily: SPACE, fontWeight: 600, fontSize: 15, color: "#f4f3f1" }}>
            {project.name}
          </span>
          {project.isReal && (
            <span style={{
              fontFamily: JETB, fontSize: 9, textTransform: "uppercase",
              letterSpacing: ".06em", background: "rgba(251,122,43,.15)",
              color: "#fb7a2b", borderRadius: 4, padding: "2px 6px", marginLeft: "auto",
            }}>Real</span>
          )}
        </div>
        <div style={{ fontFamily: JETB, fontSize: 10, textTransform: "uppercase", letterSpacing: ".05em", color: "#fb7a2b" }}>
          {project.cat}
        </div>
      </div>

      <p style={{ fontFamily: INTER, fontSize: 12.5, color: "#9a9893", lineHeight: 1.5, minHeight: 38, flex: 1 }}>
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {project.stack.map(t => (
          <span key={t} style={{
            fontFamily: JETB, fontSize: 10, color: "#b9b7b1",
            background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 5, padding: "3px 7px",
          }}>{t}</span>
        ))}
      </div>

      <button
        onClick={onVerMas}
        style={{
          fontFamily: SPACE, fontWeight: 600, fontSize: 13, color: "#fb7a2b",
          background: "none", border: "none", padding: 0,
          cursor: "pointer", alignSelf: "flex-start",
        }}
      >
        Ver más →
      </button>
    </div>
  );
}

// ─── Modal compartido ─────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const href = project.githubUrl ?? (project.url !== "#" ? project.url : undefined);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(5,5,7,.82)", backdropFilter: "blur(7px)",
        zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
      }}
    >
      <motion.div
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
        style={{
          width: "100%", maxWidth: 540,
          background: "#101013",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 20,
          boxShadow: "0 30px 80px -20px rgba(0,0,0,.85)",
          overflow: "hidden",
        }}
      >
        {/* preview */}
        <div style={{ height: 210, padding: 16, display: "flex" }}>
          <BrowserMockupLight accent={project.accent} emoji={project.emoji} name={project.name} logo={project.logo} />
        </div>

        {/* cuerpo */}
        <div style={{ padding: "0 24px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
            {project.logo ? (
              <div style={{ width: 40, height: 40, borderRadius: 10, overflow: "hidden", background: "rgba(255,255,255,.08)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={project.logo} alt={project.name} width={40} height={40} style={{ objectFit: "contain" }} />
              </div>
            ) : (
              <span style={{ fontSize: 24 }}>{project.emoji}</span>
            )}
            <span style={{ fontFamily: SPACE, fontWeight: 600, fontSize: 23, color: "#fff" }}>
              {project.name}
            </span>
            <span style={{
              fontFamily: JETB, fontSize: 10, textTransform: "uppercase",
              letterSpacing: ".05em", background: "#fb7a2b", color: "#0a0a0b",
              borderRadius: 20, padding: "3px 10px", fontWeight: 600,
              marginLeft: "auto", whiteSpace: "nowrap",
            }}>{project.cat}</span>
          </div>

          <p style={{ fontFamily: INTER, fontSize: 14, color: "#a8a6a1", lineHeight: 1.6, marginBottom: 14 }}>
            {project.desc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 22 }}>
            {project.stack.map(t => (
              <span key={t} style={{
                fontFamily: JETB, fontSize: 10, color: "#b9b7b1",
                background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)",
                borderRadius: 5, padding: "3px 7px",
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block", textAlign: "center",
                  background: "#fb7a2b", color: "#0a0a0b",
                  fontFamily: SPACE, fontWeight: 600, fontSize: 15,
                  padding: "13px 0", borderRadius: 10, textDecoration: "none",
                }}
              >
                {project.cta} ↗
              </a>
            ) : (
              <button
                disabled
                style={{
                  display: "block", width: "100%",
                  background: "rgba(251,122,43,.25)", color: "#fb7a2b",
                  fontFamily: SPACE, fontWeight: 600, fontSize: 15,
                  border: "1px dashed rgba(251,122,43,.4)", borderRadius: 10,
                  padding: "13px 0", cursor: "not-allowed", opacity: 0.7,
                }}
              >
                Próximamente ↗
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                display: "block", width: "100%",
                background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)",
                color: "#fff", fontFamily: SPACE, fontWeight: 500, fontSize: 14,
                padding: "12px 0", borderRadius: 10, cursor: "pointer",
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Portfolio — componente principal ─────────────────────────────────────────
export function Portfolio() {
  const sectionRef  = useRef<HTMLElement>(null);
  const isInView    = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(1);
  const [modal, setModal] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const touchStartX = useRef(0);

  const realProjects = projects.filter(p => p.isReal);

  const openModal  = (i: number) => setModal({ open: true, index: i });
  const closeModal = ()          => setModal(m => ({ ...m, open: false }));

  const clamp = (v: number) => Math.max(0, Math.min(realProjects.length - 1, v));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) setActiveIndex(prev => clamp(prev + (delta > 0 ? 1 : -1)));
  };

  const GRID_BG = {
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
    `,
    backgroundSize: "42px 42px",
    backgroundColor: "#08080a",
  } as React.CSSProperties;

  return (
    <section id="proyectos" ref={sectionRef} style={{ position: "relative", ...GRID_BG }}>

      {/* ══════════════ DESKTOP ≥ 900px ══════════════ */}
      <div className="hidden min-[900px]:block" style={{ padding: "54px 56px 60px", position: "relative" }}>

        <TorusKnotScene sectionRef={sectionRef} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 620, marginBottom: 44 }}
        >
          <div style={{ fontFamily: JETB, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "#fb7a2b", marginBottom: 14 }}>
            PROYECTOS
          </div>
          <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 40, lineHeight: 1.05, color: "#fff", marginBottom: 14 }}>
            Lo que puedo construir para tu negocio
          </h2>
          <p style={{ fontFamily: INTER, fontSize: 15, color: "#9a9893", lineHeight: 1.55 }}>
            Proyectos reales entregados y plantillas listas para adaptar a tu rubro — cada una pensada para resolver un problema concreto.
          </p>
        </motion.div>

        {/* coverflow desktop — cards dark glass más grandes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* stage 3D */}
          <div
            style={{ position: "relative", height: 420, perspective: 1400 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
              {realProjects.map((p, i) => {
                const o    = i - activeIndex;
                const absO = Math.abs(o);
                const isActive = o === 0;
                return (
                  <div
                    key={p.id}
                    onClick={() => absO > 0 && setActiveIndex(i)}
                    style={{
                      position: "absolute",
                      width: 280, height: 380,
                      left: "50%", top: "50%",
                      marginLeft: -140, marginTop: -190,
                      transform: `translateX(${o * 300}px) translateZ(${-absO * 220}px) rotateY(${o * -32}deg) scale(${isActive ? 1.04 : 0.82})`,
                      zIndex: 100 - absO,
                      opacity: absO > 3 ? 0 : Math.max(0.25, 1 - absO * 0.28),
                      pointerEvents: absO > 3 ? "none" : "auto",
                      transition: "transform .55s cubic-bezier(.2,.7,.2,1), opacity .4s, box-shadow .3s, border-color .3s",
                      borderRadius: 16, padding: 18,
                      display: "flex", flexDirection: "column", gap: 14,
                      cursor: absO > 0 ? "pointer" : "default",
                      background: isActive
                        ? "linear-gradient(160deg, rgba(42,42,47,.97), rgba(22,22,26,.99))"
                        : "linear-gradient(160deg, rgba(32,32,37,.88), rgba(15,15,18,.9))",
                      border: `1px solid ${isActive ? "rgba(251,122,43,.55)" : "rgba(255,255,255,.07)"}`,
                      boxShadow: isActive ? "0 32px 64px -20px rgba(251,122,43,.4)" : "none",
                    }}
                  >
                    <BrowserMockupDark accent={p.accent} />

                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        {p.logo ? (
                          <div style={{ width: 30, height: 30, borderRadius: 8, overflow: "hidden", background: "rgba(255,255,255,.08)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Image src={p.logo} alt={p.name} width={30} height={30} style={{ objectFit: "contain" }} />
                          </div>
                        ) : (
                          <span style={{ fontSize: 20, flexShrink: 0 }}>{p.emoji}</span>
                        )}
                        <span style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 17, color: "#f4f3f1" }}>
                          {p.name}
                        </span>
                        {p.isReal && (
                          <span style={{
                            fontFamily: JETB, fontSize: 9, textTransform: "uppercase",
                            letterSpacing: ".06em", background: "rgba(251,122,43,.18)",
                            color: "#fb7a2b", borderRadius: 4, padding: "2px 6px", marginLeft: "auto",
                          }}>Real</span>
                        )}
                      </div>
                      <div style={{ fontFamily: JETB, fontSize: 10, textTransform: "uppercase", letterSpacing: ".06em", color: "#fb7a2b" }}>
                        {p.cat}
                      </div>
                    </div>

                    <p style={{ fontFamily: INTER, fontSize: 13, color: "#9a9893", lineHeight: 1.55, flex: 1 }}>
                      {p.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {p.stack.map(t => (
                        <span key={t} style={{
                          fontFamily: JETB, fontSize: 10, color: "#b9b7b1",
                          background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.06)",
                          borderRadius: 5, padding: "3px 7px",
                        }}>{t}</span>
                      ))}
                    </div>

                    {isActive && (
                      <button
                        onClick={e => { e.stopPropagation(); openModal(i); }}
                        style={{
                          fontFamily: SPACE, fontWeight: 600, fontSize: 13, color: "#0a0a0b",
                          background: "#fb7a2b", border: "none", borderRadius: 8,
                          padding: "9px 18px", cursor: "pointer", alignSelf: "flex-start",
                        }}
                      >
                        Ver más →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* prev / next + dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 28 }}>
            <button
              onClick={() => setActiveIndex(prev => clamp(prev - 1))}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.14)",
                background: "rgba(255,255,255,.04)",
                color: "#fff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >‹</button>

            <div style={{ display: "flex", gap: 6 }}>
              {realProjects.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir a ${p.name}`}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? 20 : 6,
                    height: 6, borderRadius: 3,
                    background: i === activeIndex ? "#fb7a2b" : "rgba(255,255,255,.2)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "width .3s cubic-bezier(.2,.7,.2,1), background .3s",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveIndex(prev => clamp(prev + 1))}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.14)",
                background: "rgba(255,255,255,.04)",
                color: "#fff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >›</button>
          </div>
        </motion.div>
      </div>

      {/* ══════════════ MOBILE < 900px ══════════════ */}
      <div className="block min-[900px]:hidden" style={{ padding: "48px 0 40px" }}>

        {/* header centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", padding: "0 24px", marginBottom: 36 }}
        >
          <div style={{ fontFamily: JETB, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#fb7a2b", marginBottom: 10 }}>
            PROYECTOS
          </div>
          <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 24, lineHeight: 1.1, color: "#fff", marginBottom: 10 }}>
            Lo que puedo construir para tu negocio
          </h2>
          <p style={{ fontFamily: INTER, fontSize: 13, color: "#9a9893", lineHeight: 1.55 }}>
            Proyectos reales y plantillas por rubro.
          </p>
        </motion.div>

        {/* coverflow stage */}
        <div
          style={{ position: "relative", height: 270, perspective: 1200 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
            {realProjects.map((p, i) => {
              const o    = i - activeIndex;
              const absO = Math.abs(o);
              return (
                <div
                  key={p.id}
                  onClick={() => absO > 0 && setActiveIndex(i)}
                  style={{
                    position: "absolute",
                    width: 170, height: 230,
                    left: "50%", top: "50%",
                    marginLeft: -85, marginTop: -115,
                    transform: `translateX(${o * 120}px) translateZ(${-absO * 150}px) rotateY(${o * -38}deg) scale(${o === 0 ? 1.02 : 0.86})`,
                    zIndex: 100 - absO,
                    opacity: absO > 2 ? 0 : 1,
                    pointerEvents: absO > 2 ? "none" : "auto",
                    transition: "transform .55s cubic-bezier(.2,.7,.2,1), opacity .4s",
                    borderRadius: 12, overflow: "hidden",
                    display: "flex", flexDirection: "column",
                    cursor: absO > 0 ? "pointer" : "default",
                  }}
                >
                  <BrowserMockupLight accent={p.accent} emoji={p.emoji} name={p.name} logo={p.logo} />
                </div>
              );
            })}
          </div>
        </div>

        {/* prev / next */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 16 }}>
          {(["‹", "›"] as const).map((ch, idx) => (
            <button
              key={ch}
              onClick={() => setActiveIndex(prev => clamp(prev + (idx === 0 ? -1 : 1)))}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.14)",
                background: "rgba(255,255,255,.04)",
                color: "#fff", fontSize: 20, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* detalle de la card activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ padding: "20px 24px 0", textAlign: "center" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 20 }}>{projects[activeIndex].emoji}</span>
              <span style={{ fontFamily: SPACE, fontWeight: 600, fontSize: 18, color: "#fff" }}>
                {projects[activeIndex].name}
              </span>
            </div>
            <p style={{ fontFamily: INTER, fontSize: 12.5, color: "#a8a6a1", lineHeight: 1.55, marginBottom: 16 }}>
              {projects[activeIndex].desc}
            </p>
            <button
              onClick={() => openModal(activeIndex)}
              style={{
                background: "#fb7a2b", color: "#0a0a0b",
                fontFamily: SPACE, fontWeight: 600, fontSize: 14,
                border: "none", borderRadius: 10, padding: "10px 22px", cursor: "pointer",
              }}
            >
              Ver más →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ══════════════ MODAL ══════════════ */}
      <AnimatePresence>
        {modal.open && (
          <ProjectModal
            key="modal"
            project={projects[modal.index]}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
