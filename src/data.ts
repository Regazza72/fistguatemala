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
import aeme from "./assets/clientes/aeme.png";
import iga from "./assets/clientes/iga.png";
import way from "./assets/clientes/way.png";
import cofino from "./assets/clientes/cofino.png";
import barcelo from "./assets/clientes/barcelo.png";
import aprofam from "./assets/clientes/aprofam.png";
import japon from "./assets/clientes/japon.png";
import mixco from "./assets/clientes/mixco.png";
import sanfernando from "./assets/clientes/sanfernando.png";
import galerias from "./assets/clientes/galerias.png";
import termica from "./assets/clientes/termica.png";
import sushi from "./assets/clientes/sushi.png";

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

export const clientes = [
  { src: aeme, name: "AEME" },
  { src: iga, name: "IGA School" },
  { src: way, name: "Agencia Way" },
  { src: cofino, name: "Cofiño Stahl" },
  { src: barcelo, name: "Barceló Hotels & Resorts" },
  { src: aprofam, name: "APROFAM" },
  { src: japon, name: "Almacenes Japón" },
  { src: mixco, name: "Mixco Norte Complejo Industrial" },
  { src: sanfernando, name: "Plaza San Fernando" },
  { src: galerias, name: "Galerías del Sur" },
  { src: termica, name: "Térmica" },
  { src: sushi, name: "Sushi Itto" },
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
