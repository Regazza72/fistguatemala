import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { anclaTema, temasFuerza } from "./FuerzaIntegral";

const etiqueta = "font-display text-sm font-medium uppercase tracking-[0.06em] whitespace-nowrap";

/** "Fuerza Integral ▾" en la barra (computadora): abre un panel con los 7 temas. */
export function MenuFuerzaEscritorio() {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra al hacer clic fuera o con la tecla Escape
  useEffect(() => {
    if (!abierto) return;
    const fuera = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAbierto(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", esc);
    };
  }, [abierto]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-haspopup="true"
        className={`${etiqueta} flex items-center gap-1.5 transition-colors ${abierto ? "text-accent" : "text-ink-foreground hover:text-accent"}`}
      >
        Fuerza Integral
        <ChevronDown className={`h-4 w-4 transition-transform ${abierto ? "rotate-180" : ""}`} />
      </button>
      {abierto && (
        <div className="absolute left-1/2 top-full z-50 mt-5 w-80 -translate-x-1/2 animate-[aparecer_.2s_ease-out] rounded-2xl border border-ink-soft bg-ink p-2 shadow-[var(--shadow-hard)]">
          {temasFuerza.map(({ id, titulo, icon: Icon }) => (
            <a
              key={id}
              href={anclaTema(id)}
              onClick={() => setAbierto(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-steel transition-colors hover:bg-ink-soft/60 hover:text-ink-foreground"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              {titulo}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/** Versión para el menú ☰ (celular y tablet): "Fuerza Integral" se expande dentro de la lista. */
export function MenuFuerzaMovil({ alElegir }: { alElegir: () => void }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="border-b border-ink-soft/40">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        className={`${etiqueta} flex w-full items-center justify-between py-3 text-ink-foreground`}
      >
        Fuerza Integral
        <ChevronDown className={`h-4 w-4 transition-transform ${abierto ? "rotate-180 text-accent" : ""}`} />
      </button>
      {abierto && (
        <div className="pb-3 pl-2">
          {temasFuerza.map(({ id, titulo, icon: Icon }) => (
            <a
              key={id}
              href={anclaTema(id)}
              onClick={alElegir}
              className="flex items-center gap-3 py-2.5 text-sm text-steel hover:text-accent"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              {titulo}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
