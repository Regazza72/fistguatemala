import { waLink } from "../data";

const field =
  "rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent";

/**
 * Formulario de cotización. Arma un mensaje con los datos y abre WhatsApp.
 * (En Lovable el form hacía GET a wa.me y WhatsApp ignoraba los campos.)
 */
export function CotizacionForm() {
  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const msg = [
      "Solicitud de cotización - FIST",
      `Nombre: ${get("nombre")}`,
      get("empresa") && `Empresa: ${get("empresa")}`,
      get("telefono") && `Teléfono: ${get("telefono")}`,
      get("correo") && `Correo: ${get("correo")}`,
      get("mensaje") && `Servicio que necesita: ${get("mensaje")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <form
      id="cotizacion"
      onSubmit={enviar}
      className="mt-10 scroll-mt-24 rounded-3xl bg-background p-9 shadow-[var(--shadow-hard)]"
    >
      <h3 className="text-2xl font-bold">Solicitar cotización</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Complete sus datos y continúe la conversación por WhatsApp.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <input name="nombre" required maxLength={100} placeholder="Nombre completo" className={field} />
        <input name="empresa" maxLength={100} placeholder="Empresa" className={field} />
        <input name="telefono" type="tel" maxLength={20} placeholder="Teléfono" className={field} />
        <input name="correo" type="email" maxLength={255} placeholder="Correo electrónico" className={field} />
      </div>
      <textarea
        name="mensaje"
        rows={4}
        maxLength={1000}
        placeholder="Cuéntenos qué servicio necesita"
        className={`mt-4 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent`}
      />
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:bg-ink-soft"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
