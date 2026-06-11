"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, Linkedin, Github, Mail } from "lucide-react";

const rubros = [
  "Comercio / Retail",
  "Gastronomía",
  "Salud / Médico",
  "Educación",
  "Servicios profesionales",
  "Industria / Manufactura",
  "Tecnología",
  "Otro",
];

const tamanos = [
  { value: "micro", label: "Micro (1-5 personas)" },
  { value: "pequeno", label: "Pequeño (5-20 personas)" },
  { value: "mediano", label: "Mediano (20-100 personas)" },
  { value: "grande", label: "Grande (+100 personas)" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    rubro: "",
    tamano: "",
    necesidad: "",
    modalidad: "virtual",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      alert("Hubo un error al enviar. Por favor escribime directamente a nicolassilverak@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="diagnostico" className="parallax-dark py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FF8C00] font-semibold text-sm uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 leading-tight">
              Empecemos con un
              <br />
              <span className="text-[#FF8C00]">diagnóstico gratuito</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Completá el formulario con los datos de tu negocio y te contacto
              para coordinar una primera reunión sin costo. En esa charla
              entendemos el problema y definimos si hay una solución que tenga
              sentido para vos.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Sin compromiso ni costo inicial",
                "Primera reunión virtual o presencial",
                "Propuesta detallada al final del diagnóstico",
                "Respuesta en menos de 24 horas",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FF8C00] shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:nicolassilverak@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
              >
                <Mail size={16} />
                nicolassilverak@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/nicolassilvera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Nicolás Silvera"
                className="text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/nicolassilvera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Nicolás Silvera"
                className="text-gray-400 hover:text-[#FF8C00] transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-[#FF8C00]/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-[#FF8C00]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Mensaje recibido
                </h3>
                <p className="text-gray-600 text-sm">
                  Gracias, {form.nombre.split(" ")[0]}. Te contacto en las
                  próximas 24 horas para coordinar la reunión de diagnóstico.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF8C00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF8C00] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 11 1234-5678"
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF8C00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Rubro *
                    </label>
                    <select
                      name="rubro"
                      required
                      aria-label="Rubro del negocio"
                      value={form.rubro}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF8C00] transition-colors"
                    >
                      <option value="">Seleccioná...</option>
                      {rubros.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Tamaño del negocio
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {tamanos.map((t) => (
                      <label
                        key={t.value}
                        className={`flex items-center justify-center text-center px-3 py-2 rounded-lg border text-xs cursor-pointer transition-all ${
                          form.tamano === t.value
                            ? "border-[#FF8C00] bg-[#FF8C00]/10 text-[#FF8C00] font-semibold"
                            : "border-white/10 bg-white/5 text-gray-400 hover:border-[#FF8C00]/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="tamano"
                          value={t.value}
                          className="sr-only"
                          onChange={handleChange}
                        />
                        {t.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                    ¿Qué necesitás resolver? *
                  </label>
                  <textarea
                    name="necesidad"
                    required
                    rows={3}
                    value={form.necesidad}
                    onChange={handleChange}
                    placeholder="Contame brevemente el problema o lo que querés mejorar en tu negocio..."
                    className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF8C00] transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Preferencia de reunión
                  </label>
                  <div className="flex gap-3">
                    {["virtual", "presencial"].map((m) => (
                      <label
                        key={m}
                        className={`flex-1 flex items-center justify-center py-2.5 rounded-lg border text-sm cursor-pointer capitalize transition-all ${
                          form.modalidad === m
                            ? "border-[#FF8C00] bg-[#FF8C00]/10 text-[#FF8C00] font-semibold"
                            : "border-white/10 bg-white/5 text-gray-400 hover:border-[#FF8C00]/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="modalidad"
                          value={m}
                          className="sr-only"
                          onChange={handleChange}
                        />
                        {m}
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar diagnóstico gratuito
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
