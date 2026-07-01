"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre mí",    href: "#sobre-mi",    external: false },
  { label: "Proyectos",   href: "#proyectos",   external: false },
  { label: "Experiencia", href: "#experiencia", external: false },
  { label: "Contacto",    href: "#contacto",    external: false },
  { label: "Servicios",   href: "/servicios",   external: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / brand — animated swap on scroll */}
          <a href="#" className="relative flex items-center h-10 overflow-hidden">
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

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 font-medium ${
                  link.label === "Servicios"
                    ? "text-[#FF8C00] hover:text-[#FF8C00]/80"
                    : "text-gray-300 hover:text-[#FF8C00]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

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

      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-2 font-medium ${
                  link.label === "Servicios"
                    ? "text-[#FF8C00]"
                    : "text-gray-300 hover:text-[#FF8C00]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
