// Contenido del sitio. Los textos e información de FIST se editan aquí,
// sin tocar el diseño de los componentes.
import {
  ShieldCheck,
  UserCheck,
  Truck,
  Cctv,
  Radar,
  BadgeCheck,
  GraduationCap,
  FileCheck2,
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
export const WA = "30024306";
export const EMAIL = "info@fistsaguatemala.com";
export const FACEBOOK_RRHH = "https://www.facebook.com/profile.php?id=61567371314417";

/** Enlace a WhatsApp de FIST, con mensaje opcional precargado. */
export const waLink = (text?: string) =>
  `https://wa.me/502${WA}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Licencias", "#licencias"],
  ["Clientes", "#clientes"],
  ["Empleo", "#empleo"],
  ["Contacto", "#contacto"],
] as const;

export const servicios = [
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

export const historia = [
  ["2016", "Nace FIST S.A. el 16 de enero, fundada por un grupo con amplia experiencia en el sector."],
  ["2018", "Primeros contratos corporativos e industriales y apertura de la academia de capacitación."],
  ["2021", "Integración de seguridad electrónica, monitoreo y custodia de mercadería en ruta."],
  ["Hoy", "Más de 400 agentes activos y cobertura operativa en todo el territorio nacional."],
];

export const telefonosReclutamiento = ["30024306", "30931061", "39239382"];
