import { Github, Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display font-bold text-2xl mb-3">
              <span className="text-[#FF8C00]">N</span>icolás Silvera
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Engineer · AI Automation Specialist · Consultor Tecnológico.
              Transformo problemas operativos en soluciones tecnológicas reales.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nicolassilverak@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
                >
                  <Mail size={14} />
                  nicolassilverak@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/nicolassilvera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
                >
                  <Linkedin size={14} />
                  linkedin.com/in/nicolassilvera
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nicolassilvera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
                >
                  <Github size={14} />
                  github.com/nicolassilvera
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nicolás Silvera. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Desarrollado con Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
