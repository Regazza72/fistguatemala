// Contenido del sitio. Los textos e información de FIST se editan aquí,
// sin tocar el diseño de los componentes.
import {
  ShieldCheck,
  UserCheck,
  Truck,
  ConciergeBell,
  Car,
  Radar,
  BadgeCheck,
  GraduationCap,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";
import iga from "./assets/clientes/iga.png";
import way from "./assets/clientes/way.png";
import cofino from "./assets/clientes/cofino.png";
import barcelo from "./assets/clientes/barcelo.png";
import aprofam from "./assets/clientes/aprofam.png";
import japon from "./assets/clientes/japon.png";
import arceyuz from "./assets/clientes/arceyuz.png";
import sanfernando from "./assets/clientes/sanfernando.png";
import galerias from "./assets/clientes/galerias.png";
import casma from "./assets/clientes/casma.png";
import termica from "./assets/clientes/termica.png";
import depot from "./assets/clientes/depot.png";
import sushi from "./assets/clientes/sushi.png";
import nabla from "./assets/clientes/nabla.png";

export const TEL = "23114600";
/** Comercial: Miguel Ángel Tórtola. Botón flotante, franja "¿Necesita reforzar…?" y formulario de cotización. */
export const WA_COMERCIAL = "38333431";
/** Mensaje precargado del botón flotante y de la franja "¿Necesita reforzar…?". */
export const MENSAJE_WA_INFO = "Hola FIST, quiero información sobre sus servicios de seguridad.";
/** Reclutamiento: recibe el formulario de empleo. */
export const WA_EMPLEO = "30381095";
export const EMAIL = "info@fistsaguatemala.com";
export const FACEBOOK_RRHH = "https://www.facebook.com/profile.php?id=61567371314417";

/** Enlace a WhatsApp del número indicado, con mensaje opcional precargado. */
export const waLink = (numero: string, text?: string) =>
  `https://wa.me/502${numero}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Licencias", "#licencias"],
  ["Clientes", "#clientes"],
  ["Empleo", "#empleo"],
  ["Contacto", "#contacto"],
] as const;

export const servicios: { icon: LucideIcon; title: string; desc: string; items?: string[] }[] = [
  {
    icon: ShieldCheck,
    title: "Agentes de Seguridad",
    desc: "Guardias de seguridad perfilados y evaluados bajo rigurosos métodos de evaluación, capacitados bajo estrictos estándares en nuestra academia y puesto de trabajo.",
  },
  {
    icon: UserCheck,
    title: "Seguridad Ejecutiva",
    desc: "Protección personal armada, altos ejecutivos, familias y personajes públicos.",
  },
  {
    icon: ConciergeBell,
    title: "Anfitriones de Seguridad",
    desc: "Agentes de seguridad con don de servicio y atención personalizada, capacitados para brindar servicios en corporativos, centros y plazas comerciales, así como en edificios residenciales.",
  },
  {
    icon: Truck,
    title: "Custodios",
    desc: "A través de nuestro personal brindamos seguridad en transporte de mercadería y productos en tránsito de manera recurrente, garantizando el resguardo de los activos de su empresa.",
  },
  {
    icon: Car,
    title: "Traslado y Transporte Ejecutivo",
    desc: "Nuestro objetivo es que el cliente viaje seguro junto a sus acompañantes, ideal para altos ejecutivos, directivos de empresas y visitas internacionales.",
    items: [
      "Vehículos último modelo: sedán, SUV, microbuses, pick-up y camionetas 4×4 blindadas y convencionales.",
      "Pilotos profesionales bilingües.",
    ],
  },
  {
    icon: Radar,
    title: "Inteligencia y Gestión de Riesgos",
    desc: "Análisis de riesgo, estudios de seguridad e investigaciones para anticipar amenazas antes de que ocurran.",
  },
];

export const sectores = [
  "Industria y manufactura",
  "Centros logísticos y bodegas",
  "Corporativos y oficinas",
  "Centros comerciales",
  "Bancario y financiero",
];

export const licencias = [
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

/** Fotos del carrusel (debajo de Segmentos empresariales), en src/assets/carrusel/. */
const fotosCarrusel = import.meta.glob<string>("./assets/carrusel/*.jpg", { eager: true, import: "default" });
const foto = (n: number) => fotosCarrusel[`./assets/carrusel/carrusel-${String(n).padStart(2, "0")}.jpg`];

/** Ancho real de cada foto (todas miden 720 px de alto); evita saltos en el carrusel mientras cargan. */
const anchoFoto = (src: string) =>
  [2, 5, 8, 11, 14].some((n) => src === foto(n)) ? 480 : src === foto(17) ? 576 : 1080;

export const galeria: { src: string; alt: string; width: number }[] = ([

  { src: foto(1), alt: "Agentes de FIST en práctica de tiro en la academia" },
  { src: foto(2), alt: "Anfitrión de seguridad de FIST en la entrada de un hotel" },
  { src: foto(3), alt: "Práctica de tiro supervisada por instructor de FIST" },
  { src: foto(4), alt: "Agentes en el aula de capacitación de la academia FIST" },
  { src: foto(5), alt: "Agente de seguridad de FIST en el lobby de un edificio corporativo" },
  { src: foto(6), alt: "Instructores de capacitación de FIST en el campo de tiro" },
  { src: foto(7), alt: "Instructor de FIST demostrando técnica de tiro en el aula" },
  { src: foto(8), alt: "Agente de FIST resguardando un edificio de APROFAM" },
  { src: foto(9), alt: "Agente de FIST practicando tiro en el polígono" },
  { src: foto(10), alt: "Clase teórica en la academia de capacitación de FIST" },
  { src: foto(11), alt: "Agente de FIST resguardando una tienda Way" },
  { src: foto(12), alt: "Grupo de agentes recibiendo instrucciones en el campo de entrenamiento" },
  { src: foto(13), alt: "Instructor de FIST frente a un grupo de agentes en capacitación" },
  { src: foto(14), alt: "Agente de FIST frente a las instalaciones de APROFAM" },
  { src: foto(15), alt: "Agentes en capacitación atendiendo a su instructor" },
  { src: foto(16), alt: "Instructor de FIST en el polígono de tiro" },
  { src: foto(17), alt: "Anfitrión de seguridad de FIST en el vestíbulo del hotel Barceló" },
  { src: foto(18), alt: "Agentes de FIST en entrenamiento físico" },
  { src: foto(19), alt: "Agentes de FIST en práctica de tiro grupal" },
  { src: foto(20), alt: "Agentes de FIST, hombres y mujeres, en práctica de tiro" },
] as { src: string; alt: string }[]).map((g) => ({ ...g, width: anchoFoto(g.src) }));

export const clientes = [
  { src: iga, name: "IGA" },
  { src: way, name: "Agencia Way" },
  { src: cofino, name: "Cofiño Stahl" },
  { src: barcelo, name: "Barceló" },
  { src: aprofam, name: "APROFAM" },
  { src: japon, name: "Almacenes Japón" },
  { src: arceyuz, name: "Arceyuz" },
  { src: sanfernando, name: "Plaza San Fernando" },
  { src: galerias, name: "Galerías del Sur" },
  { src: casma, name: "CASMA" },
  { src: termica, name: "Térmica" },
  { src: depot, name: "Central Depot" },
  { src: sushi, name: "Sushi Itto" },
  { src: nabla, name: "Nabla" },
];

export const plazas = [
  "Agente de seguridad",
  "Anfitrión / Recepción",
  "Custodio",
  "Operador de monitoreo",
  "Jefe de grupo",
  "Supervisor de operaciones",
  "Coordinador de operaciones",
];

export const historia: { year: string; text: string; items?: string[] }[] = [
  { year: "2014", text: "Nace FIST S.A. el 14 de abril." },
  {
    year: "2016",
    text: "Primeros contratos corporativos e industriales.",
    items: ["Licencia de academia de capacitación y formación de agentes de seguridad privada."],
  },
  {
    year: "2021",
    text: "Integración de seguridad electrónica y monitoreo 24/7.",
    items: [
      "Servicios de inteligencia y gestión de riesgos.",
      "Investigaciones privadas.",
      "Poligrafías y socioeconómicos.",
    ],
  },
  { year: "Hoy", text: "Transporte y traslado ejecutivo / corporativo." },
];

export const telefonosReclutamiento = ["30381095", "39239382"];
