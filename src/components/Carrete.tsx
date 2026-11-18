import { useEffect, useState } from "react";
import { carrete } from "../data";

/** Milisegundos que permanece cada foto antes de pasar a la siguiente. */
const INTERVALO = 4500;

/**
 * Carrete de fotos con transición de fundido (las fotos se reemplazan en el mismo lugar,
 * sin deslizarse). Se detiene al pasar el mouse encima y respeta "reducir movimiento".
 * Solo se montan las fotos ya mostradas y la siguiente, para no descargar todas de golpe.
 */
export function Carrete() {
  const [actual, setActual] = useState(0);
  const [anterior, setAnterior] = useState<number | null>(null);
  const [cargadas, setCargadas] = useState(2);
  const [pausado, setPausado] = useState(false);

  const ir = (i: number) => {
    setActual((a) => {
      if (a !== i) setAnterior(a);
      return i;
    });
  };

  useEffect(() => {
    if (pausado || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActual((i) => {
      setAnterior(i);
      return (i + 1) % carrete.length;
    }), INTERVALO);
    return () => window.clearInterval(id);
  }, [pausado]);

  // Al mostrar una foto, prepara la siguiente
  useEffect(() => {
    setCargadas((n) => Math.max(n, Math.min(actual + 2, carrete.length)));
  }, [actual]);

  return (
    <div onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-ink shadow-[var(--shadow-hard)]">
        {carrete.slice(0, cargadas).map((foto, i) => (
          <img
            key={foto.src}
            src={foto.src}
            alt={foto.alt}
            aria-hidden={i !== actual || undefined}
            width={1200}
            height={800}
            decoding="async"
            // La foto actual aparece encima (z-10) mientras la anterior sigue visible debajo,
            // así a mitad de la transición nunca se ve el fondo.
            className={`absolute inset-0 h-full w-full object-cover ${
              i === actual
                ? "z-10 opacity-100 transition-opacity duration-1000 ease-in-out"
                : i === anterior
                  ? "z-0 opacity-100"
                  : "z-0 opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5" role="tablist" aria-label="Fotos de FIST">
        {carrete.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            role="tab"
            aria-selected={i === actual}
            aria-label={`Ver foto ${i + 1} de ${carrete.length}`}
            onClick={() => {
              setCargadas((n) => Math.max(n, i + 1));
              ir(i);
            }}
            className={`h-1.5 rounded-full transition-all ${i === actual ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-steel"}`}
          />
        ))}
      </div>
    </div>
  );
}
