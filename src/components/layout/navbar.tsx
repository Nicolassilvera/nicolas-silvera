"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Mail, Smartphone, Search } from "lucide-react";

const solutionItems = [
  { label: "Desarrollo Web",       href: "/servicios#desarrollo-web",           Icon: Globe },
  { label: "Email y Hosting",      href: "/servicios#email-hosting",            Icon: Mail },
  { label: "Desarrollo de Apps",   href: "/servicios#desarrollo-aplicaciones",  Icon: Smartphone },
  { label: "Posicionamiento Web",  href: "/servicios#posicionamiento-web",      Icon: Search },
];

const navLinks = [
  { label: "Servicios",  href: "/servicios",   hasDropdown: true  },
  { label: "Proyectos",  href: "/portfolio",   hasDropdown: false },
  { label: "Sobre mí",   href: "/experiencia", hasDropdown: false },
  { label: "Contacto",   href: "#contacto",    hasDropdown: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const pathname = usePathname();
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href.startsWith("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  function linkClass(href: string) {
    return isActive(href)
      ? "text-[#FF8C00]"
      : "text-gray-300 hover:text-[#FF8C00]";
  }

  function openDrop() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setDropdownOpen(true);
  }

  function closeDrop() {
    leaveTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="relative flex items-center h-10 overflow-hidden">
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
                  className="font-display font-bold text-xl tracking-tight text-white"
                >
                  <span className="text-[#FF8C00]">N</span>icolás Silvera
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${linkClass(link.href)}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        onMouseEnter={openDrop}
                        onMouseLeave={closeDrop}
                      >
                        {solutionItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-[#FF8C00] hover:bg-white/5 transition-all duration-150 group"
                          >
                            <item.Icon size={14} className="text-[#FF8C00]/60 group-hover:text-[#FF8C00] transition-colors" />
                            {item.label}
                          </Link>
                        ))}
                        <div className="border-t border-white/10 px-4 py-2.5">
                          <Link
                            href={link.href}
                            onClick={() => setDropdownOpen(false)}
                            className="text-xs text-gray-500 hover:text-[#FF8C00] transition-colors"
                          >
                            Ver todas las soluciones →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${linkClass(link.href)}`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
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
          <div className="px-4 py-3 flex flex-col">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  {/* Row: text navigates, chevron toggles */}
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex-1 py-3.5 font-medium text-base transition-colors ${
                        isActive(link.href) ? "text-[#FF8C00]" : "text-gray-200 hover:text-[#FF8C00]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileDropOpen(!mobileDropOpen)}
                      aria-label="Expandir soluciones"
                      className="ml-1 mr-2 p-2.5 rounded-xl text-gray-400 hover:text-[#FF8C00] hover:bg-white/5 transition-all"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileDropOpen ? "rotate-180 text-[#FF8C00]" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown card */}
                  <AnimatePresence>
                    {mobileDropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="mb-3 bg-[#252525] rounded-2xl border border-white/10 overflow-hidden shadow-xl"
                      >
                        {solutionItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-300 hover:text-[#FF8C00] hover:bg-white/5 transition-all group border-b border-white/5 last:border-0"
                          >
                            <item.Icon size={14} className="text-[#FF8C00]/60 group-hover:text-[#FF8C00] transition-colors" />
                            {item.label}
                          </Link>
                        ))}
                        <div className="border-t border-white/10 px-4 py-2.5">
                          <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xs text-gray-500 hover:text-[#FF8C00] transition-colors"
                          >
                            Ver todas las soluciones →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-3.5 font-medium text-base transition-colors border-b border-white/5 last:border-0 ${linkClass(link.href)}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
