"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";

const navLinks = [
  { label: "Servicios",  href: "#servicios",   scroll: true  },
  { label: "Contacto",   href: "#diagnostico",  scroll: true  },
];

export function NavbarServicios() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="relative flex items-center h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {scrolled ? (
                <motion.div
                  key="logo-img"
                  initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/logos/logo-ns.png"
                    alt="Nicolás Silvera"
                    width={40}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
              ) : (
                <motion.span
                  key="logo-text"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="font-display font-bold text-xl text-white tracking-tight"
                >
                  <span className="text-[#FF8C00]">N</span>icolás Silvera
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Volver al inicio */}
            <a
              href="/"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <ArrowLeft size={14} />
              Inicio
            </a>

            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleScroll(link.href)}
                className="text-sm text-gray-300 hover:text-[#FF8C00] transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors py-2 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </a>
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleScroll(link.href)}
                className="text-left text-gray-300 hover:text-[#FF8C00] transition-colors py-2 font-medium bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
