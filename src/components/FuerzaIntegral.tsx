import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Award,
  Briefcase,
  Building2,
  Car,
  Check,
  ClipboardCheck,
  CloudRain,
  Factory,
  Flashlight,
  GraduationCap,
  HeartHandshake,
  House,
  Landmark,
  PartyPopper,
  Plane,
  Radio,
  Scale,
  Shield,
  ShieldAlert,
  Siren,
  Smartphone,
  Target,
  Truck,
  UserCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import pistola from "../assets/equipamiento/pistola.png";
import revolver from "../assets/equipamiento/revolver.png";
import escopeta from "../assets/equipamiento/escopeta.png";
import chaleco from "../assets/equipamiento/chaleco.png";
import lluvia from "../assets/equipamiento/lluvia.png";
import celular from "../assets/equipamiento/celular.png";
import shocker from "../assets/equipamiento/shocker.png";
import baton from "../assets/equipamiento/baton.png";

/**
 * Sección "Fuerza Integral": 7 temas en pestañas. El menú de la barra enlaza a cada tema con
 * un ancla "#fi-<id>"; esta sección escucha el cambio de ancla, abre la pestaña y se desplaza hasta aquí.
 */
export const temasFuerza: { id: string; titulo: string; icon: LucideIcon }[] = [
  { id: "quienes-somos", titulo: "Quiénes somos", icon: Users },
  { id: "seguridad-fisica", titulo: "Seguridad física", icon: Shield },
  { id: "servicios-especiales", titulo: "Servicios especiales", icon: Siren },
  { id: "pruebas-poligraficas", titulo: "Pruebas poligráficas", icon: ClipboardCheck },
  { id: "traslados-ejecutivos", titulo: "Traslados ejecutivos", icon: Car },
  { id: "formacion", titulo: "Formación de nuestros agentes", icon: GraduationCap },
  { id: "equipamiento", titulo: "Equipamiento básico", icon: Briefcase },
];

export const anclaTema = (id: string) => `#fi-${id}`;

// ---------- piezas de diseño reutilizables ----------
function Intro({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-relaxed text-muted-foreground">{children}</p>;
}

function Subtitulo({ children }: { children: ReactNode }) {
  return <h4 className="mt-10 font-display text-lg font-bold uppercase tracking-wide">{children}</h4>;
}

function Tarjeta({ icon: Icon, titulo, children }: { icon?: LucideIcon; titulo: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </span>
      )}
      <h5 className={`${Icon ? "mt-4" : ""} font-display text-base font-bold uppercase leading-snug`}>{titulo}</h5>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </article>
  );
}

function ListaCheck({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Vinetas({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Equipo({ src, nombre, ancho = "max-w-[150px]" }: { src?: string; nombre: string; ancho?: string }) {
  return (
    <figure className="flex flex-col items-center rounded-2xl border border-border bg-white p-5">
      <div className="flex h-28 w-full items-center justify-center">
        {src ? (
          <img src={src} alt={nombre} loading="lazy" className={`max-h-full w-auto object-contain ${ancho}`} />
        ) : (
          <Flashlight className="h-14 w-14 text-accent" strokeWidth={1.25} aria-hidden="true" />
        )}
      </div>
      <figcaption className="mt-4 text-center text-sm font-medium">{nombre}</figcaption>
    </figure>
  );
}

// ---------- contenido de cada tema ----------
const contenido: Record<string, ReactNode> = {
  "quienes-somos": (
    <>
      <Intro>
        Somos una empresa especializada en seguridad, con más de 12 años de experiencia brindando soluciones
        integrales para empresas de diversos sectores. Diseñamos e implementamos proyectos y programas de
        seguridad adaptados a las necesidades específicas de cada operación, garantizando altos estándares de
        protección, eficiencia y cumplimiento.
      </Intro>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        Nuestro compromiso es ofrecer un servicio confiable y de excelencia, respaldado por un equipo de
        profesionales altamente capacitados y con amplia experiencia en el sector. Trabajamos de manera
        estratégica para prevenir riesgos, proteger sus activos y contribuir a la continuidad y crecimiento de su
        negocio.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["+12 años", "de experiencia"],
          ["Soluciones", "a la medida de cada operación"],
          ["Personal", "altamente capacitado"],
        ].map(([n, t]) => (
          <div key={n} className="rounded-2xl bg-ink p-6 text-ink-foreground">
            <p className="font-display text-2xl font-bold text-accent">{n}</p>
            <p className="mt-1 text-sm text-steel">{t}</p>
          </div>
        ))}
      </div>
    </>
  ),

  "seguridad-fisica": (
    <div className="grid gap-4 sm:grid-cols-2">
      <Tarjeta icon={Landmark} titulo="Seguridad bancaria">
        Especialista en seguridad para el sector financiero, entrenado en control de accesos, prevención de
        incidentes y atención al cliente.
      </Tarjeta>
      <Tarjeta icon={House} titulo="Seguridad residencial">
        Protege a residentes, visitantes e instalaciones mediante controles de accesos vehiculares y personales,
        vigilancia preventiva y atención permanente.
      </Tarjeta>
      <Tarjeta icon={UserCheck} titulo="Seguridad ejecutiva / anfitrión">
        Profesionales seleccionados y evaluados rigurosamente, preparados para brindar protección, atención
        especializada y una experiencia de servicio de excelencia en edificios y oficinas.
      </Tarjeta>
      <Tarjeta icon={Factory} titulo="Seguridad industrial">
        Especialista en la protección de activos y operaciones industriales: mantener entornos seguros, prevenir
        pérdidas y contribuir a la continuidad de los procesos productivos.
      </Tarjeta>
      <Tarjeta icon={Truck} titulo="Seguridad custodia a bordo">
        Personal para resguardo de mercadería en tránsito, custodios tipo comando.
      </Tarjeta>
    </div>
  ),

  "servicios-especiales": (
    <>
      <Intro>
        Brindamos servicios de seguridad física temporales y a demanda, adaptados a necesidades específicas.
        Contamos con cobertura diurna y nocturna, refuerzos operativos, atención de eventos y personal altamente
        calificado para garantizar la protección y continuidad de sus operaciones.
      </Intro>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Tarjeta icon={ShieldAlert} titulo="Contingencias y emergencias empresariales">
          <Vinetas
            items={[
              "Refuerzo de la seguridad física en las afueras de fábricas o fincas para evitar vandalismo o invasiones temporales.",
              "Fallas de sistemas permanentes: cubrir turnos extraordinarios si las alarmas de un comercio colapsan o si una infraestructura (como un portón de un centro comercial) sufre daños y queda expuesta temporalmente.",
            ]}
          />
        </Tarjeta>
        <Tarjeta icon={PartyPopper} titulo="Eventos sociales privados">
          Custodia en los parqueos y entradas de fincas o salones para asegurar que solo ingresen invitados y
          evitar incidentes con la delincuencia común.
        </Tarjeta>
        <Tarjeta icon={Building2} titulo="Eventos masivos y corporativos">
          Conciertos, festivales y ferias: control de accesos, manejo de multitudes y resguardo de perímetros;
          asambleas de accionistas y conferencias.
        </Tarjeta>
      </div>
    </>
  ),

  "pruebas-poligraficas": (
    <>
      <p className="eyebrow text-muted-foreground">Servicios de evaluaciones poligráficas</p>
      <div className="mt-3">
        <Intro>
          Es una herramienta científica de diagnóstico orientada a verificar la confiabilidad, honestidad e
          integridad del recurso humano. A través de tecnología avanzada que registra reacciones
          psicofisiológicas, permite evaluar la veracidad de testimonios en procesos de contratación o auditorías
          internas.
        </Intro>
      </div>

      <Subtitulo>Se aplica principalmente en tres modalidades</Subtitulo>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {[
          ["Pre-empleo", "Filtrado de candidatos para puestos de confianza."],
          ["Rutina / permanencia", "Evaluaciones periódicas de control interno."],
          ["Específicas", "Investigación de incidentes o pérdidas."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border-l-4 border-accent bg-card p-5 shadow-sm">
            <p className="font-display font-bold uppercase">{t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <Subtitulo>Ventajas competitivas</Subtitulo>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Tarjeta icon={Users} titulo="Optimización del reclutamiento">
          Reduce drásticamente el riesgo de contratar personal con antecedentes deshonestos o vínculos delictivos.
        </Tarjeta>
        <Tarjeta icon={ShieldAlert} titulo="Mitigación de riesgos internos">
          Actúa como un fuerte elemento disuasivo contra fraudes, fugas de información y robos.
        </Tarjeta>
        <Tarjeta icon={HeartHandshake} titulo="Protección de la reputación">
          Asegura que el equipo comparta los valores éticos de la organización, protegiendo la imagen de la
          empresa.
        </Tarjeta>
        <Tarjeta icon={Award} titulo="Toma de decisiones certificada">
          Proporciona informes técnicos y objetivos que sirven de respaldo legal y administrativo para la gestión
          del talento humano.
        </Tarjeta>
      </div>

      <Subtitulo>De nuestro servicio</Subtitulo>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          <>
            Poligrafista con certificación APA (
            <a
              href="https://www.polygraph.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-2 hover:text-accent"
            >
              American Polygraph Association
            </a>
            ).
          </>,
          "Psicólogos en investigación.",
          "Técnicas avanzadas de interrogación y análisis de gráficos psicofisiológicos.",
          'Experto en entrevista forense: destreza para aplicar técnicas de entrevista profunda y detectar "contramedidas" (intentos del evaluado de engañar al equipo).',
          "Objetividad y apego al protocolo: apego estricto a las normas internacionales, lo que incluye no realizar más de 5 a 6 exámenes diarios para garantizar la exactitud del análisis de las gráficas.",
          "Instalaciones adecuadas y privadas (libres de tránsito de personal).",
          "Informes profesionales de 24 a 48 horas.",
        ].map((item, i) => (
          <li key={i} className="flex gap-4 rounded-2xl bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-accent">
              {i + 1}
            </span>
            <span className="pt-1">{item}</span>
          </li>
        ))}
      </ol>
    </>
  ),

  "traslados-ejecutivos": (
    <>
      <Intro>
        Brindamos servicios de transporte ejecutivo de alta gama mediante una moderna flota de vehículos blindados
        y convencionales. Contamos con pilotos profesionales altamente capacitados en conducción segura, protocolo
        ejecutivo y servicio al cliente, garantizando una atención personalizada, discreta y eficiente en cada
        traslado.
      </Intro>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h4 className="font-display text-lg font-bold uppercase">Nuestro compromiso</h4>
          <ListaCheck
            items={[
              "Cobertura a nivel nacional.",
              "Pilotos bilingües con experiencia en atención a ejecutivos nacionales e internacionales.",
              "Máximos estándares de seguridad y confiabilidad.",
              "Flexibilidad para traslados individuales o de grupos acompañados.",
              "Atención personalizada adaptada a las necesidades de cada cliente.",
            ]}
          />
        </div>
        <div className="flex flex-col justify-between rounded-2xl bg-ink p-6 text-ink-foreground">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
              <Plane className="h-5 w-5 text-accent" strokeWidth={1.75} />
            </span>
            <h4 className="mt-4 font-display text-lg font-bold uppercase">Servicios especializados</h4>
            <p className="mt-1 text-sm font-medium text-accent">Atención a ejecutivos y visitantes extranjeros</p>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              Ofrecemos servicios de recepción y traslado desde el Aeropuerto Internacional hacia hoteles, oficinas
              corporativas o cualquier destino requerido, garantizando puntualidad, seguridad y una experiencia de
              primer nivel.
            </p>
          </div>
        </div>
      </div>
    </>
  ),

  formacion: (
    <>
      <Intro>Curso de seguridad impartido por instructores acreditados, enfocado en:</Intro>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Tarjeta icon={Scale} titulo="Marco legal y normativo">
          <Vinetas
            items={[
              "Decreto 52-2010, Ley de Servicios de Seguridad Privada",
              "Derecho penal",
              "Prevención de lavado de dinero",
            ]}
          />
        </Tarjeta>
        <Tarjeta icon={Shield} titulo="Seguridad operativa">
          <Vinetas
            items={[
              "Control de accesos",
              "Seguridad en instalaciones",
              "Patrullajes",
              "Detección de comportamientos sospechosos",
              "Funciones específicas según el puesto",
            ]}
          />
        </Tarjeta>
        <Tarjeta icon={Radio} titulo="Manejo de emergencias">
          <Vinetas items={["Manejo de crisis", "Uso y manejo de extintores", "Uso de radio transmisor"]} />
        </Tarjeta>
        <Tarjeta icon={HeartHandshake} titulo="Formación profesional">
          <Vinetas
            items={[
              "Ética profesional",
              "Relaciones humanas e interpersonales",
              "Valores y cualidades del agente",
              "Reglas de oro de la seguridad",
            ]}
          />
        </Tarjeta>
        <Tarjeta icon={Target} titulo="Capacitación táctica">
          <Vinetas
            items={["Características y uso de armas de fuego", "Práctica de tiro en polígono", "Seguridad bancaria"]}
          />
        </Tarjeta>
      </div>
    </>
  ),

  equipamiento: (
    <>
      <Intro>
        Cada agente cuenta con el equipo necesario para cumplir su función de forma segura y profesional.
      </Intro>
      {[
        {
          titulo: "Dotación reglamentaria",
          icon: Shield,
          items: [
            { src: pistola, nombre: "Arma corta tipo pistola 9 mm" },
            { src: revolver, nombre: "Arma corta tipo revólver" },
            { src: escopeta, nombre: "Arma larga tipo escopeta", ancho: "max-w-[240px]" },
          ],
        },
        {
          titulo: "Protección",
          icon: CloudRain,
          items: [
            { src: chaleco, nombre: "Chaleco táctico" },
            { src: lluvia, nombre: "Equipo de lluvia" },
          ],
        },
        {
          titulo: "Comunicación e iluminación",
          icon: Smartphone,
          items: [
            { src: celular, nombre: "Celular corporativo" },
            { src: undefined, nombre: "Linternas LED recargables" },
          ],
        },
      ].map((grupo) => (
        <div key={grupo.titulo}>
          <h4 className="mt-10 flex items-center gap-3 font-display text-lg font-bold uppercase tracking-wide">
            <grupo.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
            {grupo.titulo}
          </h4>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
            {grupo.items.map((it) => (
              <Equipo key={it.nombre} {...it} />
            ))}
          </div>
        </div>
      ))}
      <div className="mt-10 rounded-3xl bg-ink p-6 text-ink-foreground md:p-8">
        <h4 className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-wide">
          <Zap className="h-5 w-5 text-accent" strokeWidth={1.75} />
          Equipo no letal <span className="text-sm font-medium normal-case tracking-normal text-steel">(opcional)</span>
        </h4>
        <p className="mt-2 text-sm text-steel">En caso se requiera, podemos instalar equipo no letal, como por ejemplo:</p>
        <div className="mt-5 grid grid-cols-2 gap-4 text-foreground md:max-w-xl">
          <Equipo src={shocker} nombre="Shocker eléctrico" />
          <Equipo src={baton} nombre="Shocker tipo bastón" ancho="max-w-[200px]" />
        </div>
      </div>
    </>
  ),
};

export function FuerzaIntegral() {
  const [activo, setActivo] = useState(temasFuerza[0].id);
  const seccion = useRef<HTMLElement>(null);

  // Abre la pestaña indicada por el ancla (#fi-<id>) al cargar y cuando cambia desde el menú.
  useEffect(() => {
    const aplicar = () => {
      const id = window.location.hash.replace("#fi-", "");
      if (!temasFuerza.some((t) => t.id === id)) return;
      setActivo(id);
      seccion.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    aplicar();
    window.addEventListener("hashchange", aplicar);
    return () => window.removeEventListener("hashchange", aplicar);
  }, []);

  // En celular las pestañas van en una fila con desplazamiento horizontal: centra la pestaña activa.
  const lista = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cont = lista.current;
    const tab = cont?.querySelector<HTMLElement>(`#tab-${activo}`);
    if (!cont || !tab || cont.scrollWidth <= cont.clientWidth) return;
    cont.scrollTo({ left: tab.offsetLeft - (cont.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [activo]);

  const tema = temasFuerza.find((t) => t.id === activo)!;

  return (
    <section ref={seccion} id="fuerza-integral" className="scroll-mt-32 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted-foreground">Fuerza Integral de Seguridad Total</p>
          <h2 className="accent-rule mt-4 text-4xl font-bold md:text-5xl">Fuerza Integral</h2>
          <p className="mt-4 text-muted-foreground">
            Conozca en detalle quiénes somos, nuestros servicios, la formación de nuestros agentes y el equipo con el
            que trabajan.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Pestañas: verticales en computadora, en fila desplazable en celular */}
          <div
            ref={lista}
            role="tablist"
            aria-label="Temas de Fuerza Integral"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:sticky lg:top-36 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {temasFuerza.map(({ id, titulo, icon: Icon }) => {
              const sel = id === activo;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={sel}
                  aria-controls="panel-fuerza"
                  onClick={() => {
                    setActivo(id);
                    history.replaceState(null, "", anclaTema(id));
                  }}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left font-display text-sm font-semibold uppercase tracking-wide transition-colors lg:w-full ${
                    sel ? "bg-ink text-ink-foreground shadow-[var(--shadow-hard)]" : "bg-secondary text-foreground hover:bg-border"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${sel ? "text-accent" : "text-muted-foreground"}`} strokeWidth={2} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{titulo}</span>
                </button>
              );
            })}
          </div>

          <div
            id="panel-fuerza"
            role="tabpanel"
            aria-labelledby={`tab-${activo}`}
            className="min-w-0 rounded-3xl border border-border bg-secondary/50 p-6 md:p-10"
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold md:text-3xl">
              <tema.icon className="h-7 w-7 shrink-0 text-accent" strokeWidth={1.75} />
              {tema.titulo}
            </h3>
            <div key={activo} className="mt-6 animate-[aparecer_.35s_ease-out]">
              {contenido[activo]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
