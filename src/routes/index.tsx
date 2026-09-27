import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  UserCheck,
  Truck,
  Cctv,
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
  GraduationCap,
  FileCheck2,
  Send,
} from "lucide-react";
import { useState } from "react";
import fistLogo from "../assets/fist-logo.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import heroAgente from "@/assets/hero-agente.jpg";
import servicioAgentes from "@/assets/servicio-agentes.jpg";
import monitoreo from "@/assets/monitoreo.jpg";
import formacion from "@/assets/formacion.jpg";
import aeme from "@/assets/clientes/aeme.png.asset.json";
import iga from "@/assets/clientes/iga.png.asset.json";
import way from "@/assets/clientes/way.png.asset.json";
import cofino from "@/assets/clientes/cofino.png.asset.json";
import barcelo from "@/assets/clientes/barcelo.png.asset.json";
import aprofam from "@/assets/clientes/aprofam.png.asset.json";
import japon from "@/assets/clientes/japon.png.asset.json";
import mixco from "@/assets/clientes/mixco.png.asset.json";
import sanfernando from "@/assets/clientes/sanfernando.png.asset.json";
import galerias from "@/assets/clientes/galerias.png.asset.json";
import termica from "@/assets/clientes/termica.png.asset.json";
import sushi from "@/assets/clientes/sushi.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIST | Seguridad Privada en Guatemala desde 2016" },
      {
        name: "description",
        content:
          "FIST S.A. brinda agentes de seguridad, custodia, seguridad electrónica e inteligencia en toda Guatemala. Más de 400 agentes y licencias DIGESSP.",
      },
      { property: "og:title", content: "FIST | Seguridad Privada en Guatemala" },
      {
        property: "og:description",
        content:
          "Protegemos personas, bienes y organizaciones con profesionalismo, integridad y compromiso. Cobertura nacional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TEL = "23114600";
const WA = "30024306";

const servicios = [
  {
    icon: ShieldCheck,
    title: "Agentes de Seguridad",
    desc: "Puestos fijos con agentes uniformados, capacitados en academia propia y supervisados en campo las 24 horas.",
  },
  {
    icon: UserCheck,
    title: "Seguridad Ejecutiva y Anfitrión",
    desc: "Protección de ejecutivos y atención de imagen corporativa con perfil de servicio, discreción y protocolo.",
  },
  {
    icon: Truck,
    title: "Custodia",
    desc: "Acompañamiento de mercadería y unidades de transporte en ruta, con control de recorrido y reporte de incidencias.",
  },
  {
    icon: Cctv,
    title: "Seguridad Electrónica",
    desc: "CCTV, control de accesos y alarmas integradas a monitoreo permanente para reforzar la operación física.",
  },
  {
    icon: Radar,
    title: "Inteligencia y Gestión de Riesgos",
    desc: "Análisis de riesgo, estudios de seguridad e investigaciones para anticipar amenazas antes de que ocurran.",
  },
];

const sectores = [
  "Industria y manufactura",
  "Centros logísticos y bodegas",
  "Corporativos y oficinas",
  "Centros comerciales",
  "Bancario y financiero",
];

const licencias = [
  {
    icon: BadgeCheck,
    title: "Licencia de operación DIGESSP",
    desc: "Empresa autorizada y supervisada por la Dirección General de Servicios de Seguridad Privada del Ministerio de Gobernación.",
  },
  {
    icon: FileCheck2,
    title: "Licencia DIGECAM",
    desc: "Registro y control de armamento vigente ante la Dirección General de Control de Armas y Municiones.",
  },
  {
    icon: GraduationCap,
    title: "Academia autorizada",
    desc: "Centro de capacitación propio y avalado para la formación inicial y continua de nuestros agentes.",
  },
];

const clientes = [
  { src: aeme.url, name: "AEME" },
  { src: iga.url, name: "IGA School" },
  { src: way.url, name: "Agencia Way" },
  { src: cofino.url, name: "Cofiño Stahl" },
  { src: barcelo.url, name: "Barceló Hotels & Resorts" },
  { src: aprofam.url, name: "APROFAM" },
  { src: japon.url, name: "Almacenes Japón" },
  { src: mixco.url, name: "Mixco Norte Complejo Industrial" },
  { src: sanfernando.url, name: "Plaza San Fernando" },
  { src: galerias.url, name: "Galerías del Sur" },
  { src: termica.url, name: "Térmica" },
  { src: sushi.url, name: "Sushi Itto" },
];

const plazas = [
  "Agente de seguridad",
  "Anfitrión / Recepción",
  "Custodio",
  "Operador de monitoreo",
  "Jefe de grupo",
  "Supervisor de operaciones",
  "Coordinador de operaciones",
];

const historia = [
  ["2016", "Nace FIST S.A. el 16 de enero, fundada por un grupo con amplia experiencia en el sector."],
  ["2018", "Primeros contratos corporativos e industriales y apertura de la academia de capacitación."],
  ["2021", "Integración de seguridad electrónica, monitoreo y custodia de mercadería en ruta."],
  ["Hoy", "Más de 400 agentes activos y cobertura operativa en todo el territorio nacional."],
];

const nav = [
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Licencias", "#licencias"],
  ["Clientes", "#clientes"],
  ["Empleo", "#empleo"],
  ["Contacto", "#contacto"],
];

function Index() {
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
            <a href="mailto:info@fistsaguatemala.com" className="flex items-center gap-2 hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> info@fistsaguatemala.com
            </a>
            <a href={`tel:+502${TEL}`} className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> 2311 4600
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink-soft/60 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img src={fistLogo} alt="Logo de FIST S.A." width={816} height={816} className="h-11 w-11 shrink-0 object-contain" />
            <span className="font-display text-3xl font-bold leading-none tracking-[0.2em] text-ink-foreground">
              FIST
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
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
              className="hidden rounded-full bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85 sm:inline-block"
            >
              Solicitar cotización
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              className="text-ink-foreground lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-ink-soft/60 bg-ink px-6 pb-5 lg:hidden">
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
        <img
          src={heroAgente}
          alt="Agente de seguridad de FIST con uniforme gris resguardando un edificio corporativo en Guatemala"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover object-[78%_top] md:object-[72%_top]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.10_0_0)_34%,oklch(0.10_0_0/0.72)_56%,transparent_86%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-24 md:pb-40 md:pt-36">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Seguridad privada 24/7 en Guatemala</p>
            <h1 className="mt-5 text-5xl font-bold leading-[0.95] text-ink-foreground md:text-7xl">
              Protegemos con <span className="text-accent">profesionalismo</span>, valores y humanidad
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel md:text-lg">
              Desde 2016 brindamos soluciones integrales de seguridad con excelencia operativa. Más de
              400 agentes activos protegiendo personas, bienes y organizaciones en todo el territorio
              nacional.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-accent px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85"
              >
                Solicitar cotización
              </a>
              <a
                href={`tel:+502${TEL}`}
                className="rounded-full border border-steel/50 px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Llamar 2311 4600
              </a>
            </div>
          </div>
        </div>

        {/* Franja destacada estilo portada */}
        <div className="relative -mb-px bg-accent">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Clock, "Respuesta inmediata", "Atención de incidencias y refuerzos en el menor tiempo posible."],
              [ShieldCheck, "Personal certificado", "Formados y evaluados en nuestra academia autorizada."],
              [Radar, "Supervisión activa", "Rondas de supervisión y control operativo permanente."],
              [BadgeCheck, "Empresa registrada", "Licencias vigentes ante DIGESSP y DIGECAM."],
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
      <section id="nosotros" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-muted-foreground">Nuestra historia</p>
            <h2 className="accent-rule mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Una empresa guatemalteca nacida en 2016
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              FIST S.A. inició operaciones el 16 de enero de 2016, fundada por un grupo visionario que
              identificó el potencial del sector y aprovechó su experiencia para crear una empresa
              profesional, ética y comprometida con la seguridad de las personas.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Comenzó con pocos clientes y una misión clara. Hoy, tras años de crecimiento sostenido,
              consolidamos presencia nacional con más de 400 agentes activos y la misma convicción que
              nos vio nacer.
            </p>

            <ol className="mt-10 space-y-6 border-l border-border pl-8">
              {historia.map(([year, text]) => (
                <li key={year} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
                  <p className="font-display text-xl font-bold text-foreground">{year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative">
            <img
              src={formacion}
              alt="Formación de agentes de seguridad de FIST en revista matutina"
              loading="lazy"
              width={1600}
              height={912}
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
              "Brindar soluciones integrales de seguridad con excelencia operativa, protegiendo a nuestros clientes mediante un equipo íntegro, disciplinado y comprometido.",
            ],
            [
              Eye,
              "Visión",
              "Ser un referente en seguridad privada, reconocida por la confianza que inspira, la excelencia de su operación y una cultura que desarrolla personas extraordinarias.",
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
      <section id="servicios" className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Servicios</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Soluciones integrales de seguridad</h2>
            <p className="mt-4 text-steel">
              Cada operación se diseña según el riesgo específico del cliente, con supervisión activa y
              medición de resultados.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-3xl border border-ink-soft/60 bg-ink-soft/25 p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-ink-soft/50"
              >
                <Icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{desc}</p>
              </article>
            ))}
            <div className="relative hidden overflow-hidden rounded-3xl lg:block">
              <img
                src={servicioAgentes}
                alt="Agentes de seguridad de FIST con uniforme gris patrullando un centro comercial"
                loading="lazy"
                width={1200}
                height={912}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <img
            src={monitoreo}
            alt="Central de monitoreo de FIST con cámaras de circuito cerrado"
            loading="lazy"
            width={1200}
            height={912}
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-hard)]"
          />
          <div>
            <p className="eyebrow text-muted-foreground">Sectores que atendemos</p>
            <h2 className="accent-rule mt-4 text-4xl font-bold md:text-5xl">
              Experiencia en entornos exigentes
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
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

      {/* Licencias */}
      <section id="licencias" className="mx-auto max-w-7xl px-6 py-24">
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

      {/* Clientes - carrusel */}
      <section id="clientes" className="overflow-hidden bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="eyebrow text-muted-foreground">Confían en nosotros</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Clientes que protegemos</h2>
        </div>
        <div className="marquee mt-14">
          <div className="marquee-track">
            {[...clientes, ...clientes].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl bg-card p-4 shadow-sm"
              >
                <img
                  src={c.src}
                  alt={`Logo de ${c.name}`}
                  loading="lazy"
                  width={440}
                  height={260}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
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
            href={`https://wa.me/502${WA}`}
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

      {/* Contacto */}
      <section id="contacto" className="bg-secondary py-24">
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
                [Phone, "Teléfonos", "Tel. 2311 4600 · WhatsApp 3002 4306"],
                [Mail, "Correo", "info@fistsaguatemala.com"],
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

          <form
            className="mt-10 rounded-3xl bg-background p-9 shadow-[var(--shadow-hard)]"
            action={`https://wa.me/502${WA}`}
            method="get"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Solicitar cotización</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Complete sus datos y continúe la conversación por WhatsApp.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input
                name="nombre"
                required
                maxLength={100}
                placeholder="Nombre completo"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
              <input
                name="empresa"
                maxLength={100}
                placeholder="Empresa"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
              <input
                name="telefono"
                maxLength={20}
                placeholder="Teléfono"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
              <input
                name="correo"
                type="email"
                maxLength={255}
                placeholder="Correo electrónico"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </div>
            <textarea
              name="text"
              rows={4}
              maxLength={1000}
              placeholder="Cuéntenos qué servicio necesita"
              className="mt-4 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-ink py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:bg-ink-soft"
            >
              Enviar solicitud
            </button>
          </form>
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
                width={816}
                height={816}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-3xl font-bold tracking-[0.2em]">FIST</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-steel">
              Seguridad privada guatemalteca desde 2016. Protegemos con profesionalismo, valores y
              humanidad.
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
              <li>Tel. 2311 4600 · WhatsApp 3002 4306</li>
              <li>info@fistsaguatemala.com</li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61567371314417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
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

function EmpleoSection() {
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
    window.open(`https://wa.me/502${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent";

  return (
    <section id="empleo" className="mx-auto max-w-7xl px-6 py-24">
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
              {["30024306", "30931061", "39239382"].map((n) => (
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