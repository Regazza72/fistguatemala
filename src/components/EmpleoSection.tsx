import { useState } from "react";
import { Send } from "lucide-react";
import { plazas, telefonosReclutamiento, waLink } from "../data";

export function EmpleoSection() {
  const [form, setForm] = useState({
    nombre: "",
    dpi: "",
    telefono: "",
    correo: "",
    departamento: "",
    plaza: plazas[0],
    comentario: "",
  });

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = [
      "Solicitud de empleo - FIST",
      `Nombre: ${form.nombre}`,
      `DPI: ${form.dpi}`,
      `Teléfono: ${form.telefono}`,
      `Correo: ${form.correo}`,
      `Departamento: ${form.departamento}`,
      `Plaza de interés: ${form.plaza}`,
      form.comentario ? `Comentario: ${form.comentario}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent";

  return (
    <section id="empleo" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow text-muted-foreground">Únete al equipo</p>
          <h2 className="accent-rule mt-4 text-4xl font-bold md:text-5xl">Oportunidades laborales</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Buscamos personas con vocación de servicio. Si no cuentas con toda la papelería, nosotros te
            apoyamos a tramitarla: lo indispensable es tu DPI.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Completa el formulario, selecciona la plaza de tu interés y nuestro equipo de reclutamiento
            se comunicará contigo.
          </p>
          <div className="mt-8 rounded-3xl bg-ink p-7 text-ink-foreground">
            <p className="eyebrow text-accent">Contacto de reclutamiento</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-xl">
              {telefonosReclutamiento.map((n) => (
                <a key={n} href={`tel:+502${n}`} className="hover:text-accent">
                  {n.replace(/(\d{4})(\d{4})/, "$1 $2")}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={enviar} className="rounded-3xl border border-border bg-card p-9 shadow-[var(--shadow-hard)]">
          <h3 className="text-2xl font-bold">Formulario de solicitud</h3>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <input
              required
              maxLength={100}
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className={field}
            />
            <input
              required
              maxLength={20}
              placeholder="Número de DPI"
              value={form.dpi}
              onChange={(e) => setForm({ ...form, dpi: e.target.value })}
              className={field}
            />
            <input
              required
              type="tel"
              maxLength={20}
              placeholder="Teléfono"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className={field}
            />
            <input
              type="email"
              maxLength={255}
              placeholder="Correo electrónico (opcional)"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              className={field}
            />
            <input
              maxLength={100}
              placeholder="Departamento / municipio"
              value={form.departamento}
              onChange={(e) => setForm({ ...form, departamento: e.target.value })}
              className={field}
            />
            <select
              value={form.plaza}
              onChange={(e) => setForm({ ...form, plaza: e.target.value })}
              className={field}
              aria-label="Plaza a la que aplica"
            >
              {plazas.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <textarea
            rows={4}
            maxLength={1000}
            placeholder="Experiencia o comentarios (opcional)"
            value={form.comentario}
            onChange={(e) => setForm({ ...form, comentario: e.target.value })}
            className={`${field} mt-4`}
          />
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-accent py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/85"
          >
            <Send className="h-4 w-4" /> Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
