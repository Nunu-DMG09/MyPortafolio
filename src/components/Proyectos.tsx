import { useState } from "react";
import { FaGithub, FaTelegramPlane, FaReact, FaNodeJs, FaCoffee } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiAstro,
  SiMarkdown,
  SiGraphql,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiAndroid,
  SiSqlite,
  SiCodeigniter,
} from "react-icons/si";

type Project = { id: number; title: string; description?: string; image: string; techs: string[]; repo?: string; demo?: string; type: "hosteado" | "colaborativo" | "personal"; };

const projects: Project[] = [
  { id: 1, title: "Municipalidad Jose Leonardo Ortiz - Sistemas de denuncias", description: "SisRefactorización y unificación de sistemas de denuncias (ambiental, anticorrupción y consumidor) para la Municipalidad de José Leonardo Ortiz, consolidando múltiples procesos en una plataforma integral desarrollada mediante trabajo colaborativo.", image: "/denuncias.png", techs: ["React", "JavaScript", "Tailwind", "PHP", "CodeIgniter"], repo: "https://github.com/Nunu-DMG09/denuncias", demo: "https://jloenlinea.munijlo.gob.pe/seccion/denuncias", type: "colaborativo" },
  { id: 2, title: "Corporación KM GROUP - Página web", description: "Desarrollo de sitio web corporativo para KM Group, consultora especializada en gestión y normativas ISO, diseñado para presentar sus servicios de auditoría, seguridad y sostenibilidad mediante una interfaz moderna que refuerza su identidad empresarial.", image: "/km-group.png", techs: ["HTML", "CSS", "JavaScript", "PHP", "Astro"], repo: "#", demo: "https://corporacionkmperu.com/", type: "hosteado" },
  { id: 3, title: "Vidafy Sergio Mesta - Landing Page", description: "Diseño de Landing Page para la promoción de productos de salud y bienestar Vidafy, estructurada para resaltar los beneficios de calidad de vida con una navegación intuitiva orientada a la captación de clientes.", image: "/vidafysergio.png", techs: ["TypeScript", "React"], repo: "#", demo: "https://sergiomestavidafy.infinityfree.me/", type: "hosteado" },
  { id: 4, title: "Tecnico Joel - Tienda virtual", description: "Desarrollo integral de E-commerce para Técnico Joel, combinando una tienda virtual de productos tecnológicos con un sistema de gestión de inventario personalizado para la administración eficiente de stock y ventas en tiempo real.", image: "/tecnicojoel.png", techs: ["React", "JavaScript", "Express", "MySQL"], repo: "#", demo: "https://tiendatecnicojoel.vercel.app/", type: "hosteado" },
  { id: 5, title: "NunuMedic - Sistema de ventas e inventario", description: "Desarrollo de NUNUMEDIC, sistema web Fullstack para la gestión integral de farmacias, que automatiza inventarios, ventas y reportes en tiempo real mediante una arquitectura escalable construida con React, Node.js y MySQL.", image: "/nunumedic.png", techs: ["MySQL", "Express", "React", "Tailwind", "JavaScript"], repo: "https://github.com/Nunu-DMG09/NunuMedic", demo: "#", type: "personal" },
  { id: 6, title: "Ecolim SAC - Aplicactivo de recolección de datos residuales", description: "Desarrollo de EcolimSac, aplicación móvil para la gestión eficiente de residuos industriales, diseñada para optimizar la recolección, el cumplimiento normativo y el control operativo mediante reportes automatizados y herramientas técnicas.", image: "/nudav-circular1.png", techs: ["AndroidStudio", "Java", "SQLite"], repo: "https://github.com/Nunu-DMG09/EcolimSac", demo: "#", type: "personal" },
];

const ICON_SIZE = 18;
const colorMap: Record<string, string> = {
  React: "#61dafb",
  TypeScript: "#3178c6",
  Tailwind: "#06b6d4",
  Astro: "#F97316",
  Node: "#3C873A",
  Express: "#3C873A",
  HTML: "#e34f26",
  CSS: "#264de4",
  JavaScript: "#f7df1e",
  PHP: "#777bb4",
  MySQL: "#4479A1",
  CodeIgniter: "#ef3b2d",
  AndroidStudio: "#3DDC84",
  Java: "#e51f24", 
  SQLite: "#003B57",
  Prisma: "#0ea5a4",
  Postgres: "#336791",
  GraphQL: "#e535ab",
  MDX: "#0f172a",
  "Next.js": "#000000",
};

const TechIcon = ({ tech }: { tech: string }) => {
  switch (tech) {
    case "React": return <FaReact size={ICON_SIZE} />;
    case "Node": case "Express": return <FaNodeJs size={ICON_SIZE} />;
    case "TypeScript": return <SiTypescript size={ICON_SIZE} />;
    case "Tailwind": case "Tailwindcss": return <SiTailwindcss size={ICON_SIZE} />;
    case "Next.js": return <SiNextdotjs size={ICON_SIZE} />;
    case "Prisma": return <SiPrisma size={ICON_SIZE} />;
    case "Postgres": case "PostgreSQL": return <SiPostgresql size={ICON_SIZE} />;
    case "Astro": return <SiAstro size={ICON_SIZE} />;
    case "MDX": return <SiMarkdown size={ICON_SIZE} />;
    case "GraphQL": return <SiGraphql size={ICON_SIZE} />;
    case "HTML": return <SiHtml5 size={ICON_SIZE} />;
    case "CSS": return <SiCss3 size={ICON_SIZE} />;
    case "JavaScript": return <SiJavascript size={ICON_SIZE} />;
    case "PHP": return <SiPhp size={ICON_SIZE} />;
    case "MySQL": return <SiMysql size={ICON_SIZE} />;
    case "AndroidStudio": return <SiAndroid size={ICON_SIZE} />;
    case "SQLite": return <SiSqlite size={ICON_SIZE} />;
    case "CodeIgniter": return <SiCodeigniter size={ICON_SIZE} />;
    case "Java": return <FaCoffee size={ICON_SIZE} />;
    default: return <span style={{ fontSize: ICON_SIZE }}>🔧</span>;
  }
};

const isLight = (hex = "#000000") => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0,2),16)/255;
  const g = parseInt(h.substring(2,4),16)/255;
  const b = parseInt(h.substring(4,6),16)/255;
  const srgb = [r,g,b].map((c)=> c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4));
  const lum = 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2];
  return lum > 0.65;
};

export default function Proyectos() {
  const [filter, setFilter] = useState<"hosteado" | "colaborativo" | "personal">("hosteado");
  const visible = projects.filter((p) => p.type === filter);

  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-6 py-32 reveal relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 reveal border-b border-white/5 pb-10">
        <div>
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-3">Portafolio</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white">Proyectos</h3>
        </div>

        <div className="flex gap-2 glass-card p-1.5 rounded-full bg-black/50">
          {['hosteado', 'colaborativo', 'personal'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === f ? 'bg-white text-black' : 'text-slate-400 hover:text-white'}`}
            >
              {f === 'hosteado' ? 'Desplegados' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {visible.map((p, idx) => {
          const [title, subtitle] = p.title.split(" - ", 2);
          return (
            <article key={p.id} className="glass-card rounded-[2.5rem] overflow-hidden reveal group flex flex-col h-full bg-[#050505]" data-delay={`${idx * 100}`}>
              <div className="relative w-full h-72 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10 transition-opacity duration-500"></div>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-black/40">
                  {p.repo && p.type !== "hosteado" && (
                     <a href={p.repo} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"><FaGithub size={24} /></a>
                  )}
                  {p.demo && p.type !== "personal" && (
                     <a href={p.demo} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#38BDF8] text-black flex items-center justify-center hover:scale-110 transition-transform"><FaTelegramPlane size={24} /></a>
                  )}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{title}</h4>
                {subtitle && <span className="text-[#38BDF8] text-sm font-medium mb-6 block">{subtitle}</span>}
                
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.techs.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-slate-300 group-hover:border-[#38BDF8]/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}