import { useState } from "react";
import {
  ShieldCheck,
  Radar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Menu,
  Target,
  Eye,
  BadgeCheck,
} from "lucide-react";
import fistLogo from "./assets/fist-logo.png";
import heroBarcelo from "./assets/hero-barcelo.jpg";
import equipoAcademia from "./assets/equipo-academia.jpg";
import equipoOficina from "./assets/equipo-oficina.jpg";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { EmpleoSection } from "./components/EmpleoSection";
import { CotizacionForm } from "./components/CotizacionForm";
import {
  TEL,
  EMAIL,
  FACEBOOK_RRHH,
  waLink,
  WA_COMERCIAL,
  MENSAJE_WA_INFO,
  nav,
  servicios,
  sectores,
  licencias,
  clientes,
  galeria,
  historia,
} from "./data";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Barra superior */}
      <div className="hidden bg-ink text-ink-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span className="tracking-wide text-steel">
            Licencia DIGESSP · Academia de capacitación autorizada · Cobertura nacional
          </span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </a>
            <a href={`tel:+502${TEL}`} className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> 2311 4600
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink-soft/60 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img src={fistLogo} alt="Logo de FIST S.A." width={307} height={320} className="h-16 w-16 shrink-0 object-contain" />
            <span className="font-display text-3xl font-bold leading-none tracking-[0.2em] text-ink-foreground">
              FIST
            </span>
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-display text-sm font-medium uppercase tracking-[0.12em] text-steel transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden whitespace-nowrap rounded-full bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85 sm:inline-block"
            >
              Solicitar cotización
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="text-ink-foreground xl:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-ink-soft/60 bg-ink px-6 pb-5 xl:hidden">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink-soft/40 py-3 font-display text-sm uppercase tracking-[0.12em] text-steel"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden bg-ink">
        {/* Foto de portada. En pantallas grandes (xl, 1280px+) el bloque toma la proporción de la foto (vertical), alineado a la
            derecha y un poco más alto que la sección para que el agente se vea de la cabeza a las manos.
            El difuminado va sobre la propia foto: de negro sólido en su borde izquierdo a transparente. */}
        <div className="absolute inset-0 xl:inset-auto xl:bottom-0 xl:right-0 xl:h-[112%] xl:aspect-[1122/1402]">
          <img
            src={heroBarcelo}
            alt="Agente de seguridad de FIST en el vestíbulo del hotel Barceló"
            width={1122}
            height={1402}
            className="h-full w-full object-cover object-[50%_20%] xl:object-center"
          />
          <div className="absolute inset-0 bg-ink/75 xl:bg-transparent xl:bg-[linear-gradient(90deg,var(--ink)_0%,oklch(0.145_0_0/0.8)_12%,oklch(0.145_0_0/0.45)_26%,oklch(0.145_0_0/0.15)_38%,transparent_50%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24 md:pb-40 md:pt-36">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Seguridad privada 24/7 en Guatemala</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.95] text-ink-foreground md:text-7xl">
              Tu seguridad <span className="text-accent">nuestra fuerza</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel md:text-lg">
              Desde 2014 brindamos soluciones integrales de seguridad con excelencia operativa,
              protegiendo personas, bienes y organizaciones en todo el territorio nacional.
            </p>
          </div>
        </div>

        {/* Franja destacada */}
        <div className="relative -mb-px bg-accent">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Clock, "Atención inmediata", "Atención de incidencias y refuerzos en el menor tiempo posible."],
              [ShieldCheck, "Personal capacitado", "Formados y evaluados en nuestra academia autorizada."],
              [Radar, "Monitoreo activo", "Control operativo permanente."],
              [BadgeCheck, "Empresa autorizada", "Licencias vigentes ante DIGESSP y DIGECAM."],
            ].map(([Icon, title, desc]) => {
              const I = Icon as typeof Clock;
              return (
                <div key={title as string} className="flex min-w-0 gap-3">
                  <I className="h-6 w-6 shrink-0 text-accent-foreground" strokeWidth={1.6} />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground">
                      {title as string}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-accent-foreground/75">{desc as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section id="nosotros" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-muted-foreground">Nuestra historia</p>
            <h2 className="accent-rule mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Una empresa guatemalteca nacida en 2014
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              FIST S.A. inició sus operaciones el 14 de abril del 2014, fundada por un grupo de
              profesionales visionarios que identificaron el potencial del sector y decidieron poner su
              experiencia al servicio de la seguridad, creando una empresa sólida, ética y comprometida
              con la protección de las personas y los bienes.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Con una misión claramente definida, la compañía emprendió un camino de crecimiento
              constante. Hoy, después de años de esfuerzo, dedicación y mejora continua, FIST S.A. cuenta
              con presencia a nivel nacional y el mismo compromiso, profesionalismo y vocación de servicio
              que inspiraron su nacimiento.
            </p>

            <ol className="mt-10 space-y-6 border-l border-border pl-8">
              {historia.map(({ year, text, items }) => (
                <li key={year} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
                  <p className="font-display text-xl font-bold text-foreground">{year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  {items && (
                    <ul className="mt-2 space-y-1">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="relative">
            <img
              src={equipoAcademia}
              alt="Equipo de agentes de FIST en el campo de tiro durante su capacitación"
              loading="lazy"
              width={1600}
              height={1066}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-hard)]"
            />
            <div className="mt-6 rounded-3xl bg-ink p-8 text-ink-foreground">
              <p className="eyebrow text-accent">Nuestro propósito</p>
              <p className="mt-3 font-display text-2xl leading-snug">
                Generar tranquilidad y confianza protegiendo personas, bienes y organizaciones con
                profesionalismo, integridad y compromiso.
              </p>
            </div>
          </div>
        </div>

        {/* Misión y visión */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {[
            [
              Target,
              "Misión",
              "Proporcionar soluciones de seguridad integrales que permitan a nuestros clientes desarrollar sus actividades con confianza, respaldo y tranquilidad.",
            ],
            [
              Eye,
              "Visión",
              "Ser reconocidos por nuestra capacidad de anticipar riesgos y brindar soluciones integrales de seguridad que generen confianza y tranquilidad a nuestros clientes.",
            ],
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof Target;
            return (
              <article
                key={title as string}
                className="flex gap-6 rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-hard)]"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15">
                  <I className="h-8 w-8 text-accent" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold">{title as string}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{desc as string}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-24 bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-sm text-accent md:text-base">Nuestros servicios</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Soluciones integrales de seguridad</h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map(({ icon: Icon, title, desc, items }) => (
              <article
                key={title}
                className="group rounded-3xl border border-ink-soft/60 bg-ink-soft/25 p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-ink-soft/50"
              >
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{desc}</p>
                {items && (
                  <ul className="mt-3 space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-steel">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <img
            src={equipoOficina}
            alt="Equipo administrativo de FIST S.A. en sus oficinas centrales"
            loading="lazy"
            width={1536}
            height={1024}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-hard)]"
          />
          <div>
            <h2 className="accent-rule text-4xl font-bold md:text-5xl">Segmentos empresariales</h2>
            <ul className="mt-8">
              {sectores.map((s) => (
                <li key={s} className="flex items-center gap-4 py-4">
                  <Check className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-display text-lg uppercase tracking-wide">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galería - carrusel de fotos. El fondo pasa en degradado del gris de Segmentos (arriba)
          al tono de Licencias (abajo) para que la transición entre secciones sea suave. */}
      <section className="overflow-hidden bg-gradient-to-b from-secondary to-background py-16">
        <div className="marquee">
          {/* Más lento que el valor por defecto porque las fotos ocupan mucho más ancho que los logos */}
          <div className="marquee-track" style={{ animationDuration: "140s" }}>
            {[...galeria, ...galeria].map((g, i) => (
              <img
                key={`${g.src}-${i}`}
                src={g.src}
                alt={i < galeria.length ? g.alt : ""}
                aria-hidden={i >= galeria.length || undefined}
                // Carga anticipada (con prioridad baja): con carga diferida las fotos
                // entraban en blanco porque el carrusel las mueve a la pantalla solo.
                loading="eager"
                fetchPriority="low"
                decoding="async"
                width={g.width}
                height={720}
                className="h-56 w-auto shrink-0 rounded-3xl object-cover shadow-[var(--shadow-hard)] md:h-72"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Licencias */}
      <section id="licencias" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Respaldo legal</p>
          <h2 className="accent-rule mt-4 text-4xl font-bold md:text-5xl">Licencias y autorizaciones</h2>
          <p className="mt-4 text-muted-foreground">
            Operamos bajo el marco legal guatemalteco de servicios de seguridad privada, con documentación
            y credenciales vigentes para cada uno de nuestros agentes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {licencias.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 pt-10"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-accent" />
              <Icon className="h-10 w-10 text-accent" strokeWidth={1.4} />
              <h3 className="mt-6 text-xl font-bold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground md:text-5xl">
            ¿Necesita reforzar la seguridad de su operación?
          </h2>
          <p className="max-w-2xl text-accent-foreground/80">
            Realizamos un análisis de riesgo sin costo y le proponemos el esquema de seguridad adecuado
            para su empresa.
          </p>
          <a
            href={waLink(WA_COMERCIAL, MENSAJE_WA_INFO)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-foreground transition-opacity hover:opacity-90"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* Empleo */}
      <EmpleoSection />

      {/* Clientes */}
      <section id="clientes" className="scroll-mt-24 border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="eyebrow text-muted-foreground">Confían en nosotros</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Clientes que protegemos</h2>
          </div>
          <ul className="mt-14 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {clientes.map((c) => (
              <li key={c.name} className="flex h-20 items-center justify-center">
                <img
                  src={c.src}
                  alt={`Logo de ${c.name}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-24 bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Contacto</p>
            <h2 className="accent-rule mt-4 text-4xl font-bold md:text-5xl">Contáctanos</h2>
            <p className="mt-4 text-muted-foreground">
              Visítenos en nuestras oficinas centrales o escríbanos: le atendemos de inmediato.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <dl className="space-y-6">
              {[
                [MapPin, "Oficina central", "12 av. 13-36 Zona 11, Colonia Mariscal, Ciudad de Guatemala"],
                [Phone, "Teléfonos", "Tel. 2311 4600 · WhatsApp 3833 3431"],
                [Mail, "Correo", EMAIL],
                [Clock, "Horario", "Lunes a viernes 8:00 – 17:00 · Sábados 8:00 – 13:00"],
              ].map(([Icon, label, value]) => {
                const I = Icon as typeof Phone;
                return (
                  <div key={label as string} className="flex gap-5 rounded-2xl bg-background p-5">
                    <I className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <dt className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {label as string}
                      </dt>
                      <dd className="mt-1 text-lg">{value as string}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-hard)]">
              <iframe
                title="Ubicación de FIST S.A. en Ciudad de Guatemala"
                src="https://www.google.com/maps?q=12%20avenida%2013-36%20zona%2011%20Colonia%20Mariscal%2C%20Ciudad%20de%20Guatemala&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </div>

          <CotizacionForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-14 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={fistLogo}
                alt="Logo de FIST S.A."
                loading="lazy"
                width={307}
                height={320}
                className="h-14 w-14 object-contain"
              />
              <span className="font-display text-3xl font-bold tracking-[0.2em]">FIST</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-steel">
              Seguridad privada guatemalteca desde 2014. Tu seguridad, nuestra fuerza.
            </p>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] text-accent">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              {servicios.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] text-accent">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>12 av. 13-36 Zona 11, Colonia Mariscal</li>
              <li>Tel. 2311 4600 · WhatsApp 3833 3431</li>
              <li>{EMAIL}</li>
              <li>
                <a href={FACEBOOK_RRHH} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  Facebook (Reclutamiento)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-ink-soft px-6 pt-6 text-xs text-steel">
          © {new Date().getFullYear()} FIST S.A. · Todos los derechos reservados · Guatemala
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
