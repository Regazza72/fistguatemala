import { useEffect, useRef } from "react";

/**
 * Video decorativo en bucle, sin sonido. No se descarga hasta que la sección está cerca de la
 * pantalla (preload="none" + IntersectionObserver) y se pausa al salir de ella para no gastar datos.
 * Con "reducir movimiento" activado en el sistema, se queda en la imagen fija (poster).
 */
export function VideoSeccion({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px" },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className="aspect-video w-full rounded-3xl object-cover shadow-[var(--shadow-hard)]"
    />
  );
}
