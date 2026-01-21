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
  Java: "#007396",
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
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const visible = projects.filter((p) => p.type === filter);

  const toggle = (id: number) => setExpanded((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-16 reveal" data-delay="120" aria-labelledby="projects-title">
      <h2
        id="projects-title"
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center reveal"
        data-delay="200"
        style={{ color: "#22c55e" }}
      >
        Proyectos
      </h2>

      <div className="flex justify-center gap-3 mb-8 reveal" data-delay="260">
        <button
          onClick={() => setFilter("hosteado")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${filter === "hosteado" ? "shadow-md" : "opacity-90"}`}
          style={{ background: filter === "hosteado" ? "#4f46e5" : "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.04)" }}
        >
          Desplegados
        </button>
        <button
          onClick={() => setFilter("colaborativo")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${filter === "colaborativo" ? "shadow-md" : "opacity-90"}`}
          style={{ background: filter === "colaborativo" ? "#4f46e5" : "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.04)" }}
        >
          Colaborativos
        </button>
        <button
          onClick={() => setFilter("personal")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${filter === "personal" ? "shadow-md" : "opacity-90"}`}
          style={{ background: filter === "personal" ? "#4f46e5" : "transparent", color: "#ffffff", border: "1px solid rgba(255,255,255,0.04)" }}
        >
          Personales
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((p) => {
          const [left, right] = p.title.split(" - ", 2);
          const desc = p.description ?? "";
          const isLong = desc.length > 120;
          const isExpanded = !!expanded[p.id];
          return (
            <article
              key={p.id}
              className="rounded-lg overflow-hidden reveal transform transition-all duration-500"
              data-delay={`${320 + p.id * 80}`}
              style={{
                background: "#071029",
                border: "1px solid rgba(255,255,255,0.04)",
                position: "relative",
                paddingBottom: 88,
              }}
            >
              <div
                className="w-full h-80 sm:h-88 md:h-72 lg:h-80 reveal"
                data-delay={`${380 + p.id * 80}`}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 600ms cubic-bezier(.22,.9,.27,1)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transformOrigin: "center", willChange: "transform", filter: "brightness(0.95)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-xl md:text-2xl font-semibold reveal"
                  data-delay={`${440 + p.id * 80}`}
                  style={{ color: "#22c55e", lineHeight: 1.05 }}
                >
                  <span style={{ display: "block", paddingBottom: 6, fontSize: "1.5rem", lineHeight: 1.06 }}>
                    {left}
                  </span>
                  {right && (
                    <span className="block" style={{ marginTop: 6, fontSize: "1.2rem", lineHeight: 1.02 }}>
                      {right}
                    </span>
                  )}
                </h3>

                {p.description && (
                  <>
                    <p className="mt-2 text-sm reveal" data-delay={`${480 + p.id * 80}`} style={{ color: "#ffffff" }}>
                      {isLong && !isExpanded ? `${desc.slice(0, 120)}...` : desc}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggle(p.id)}
                        className="mt-2 text-sm rounded-full px-3 py-1 reveal"
                        style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.06)", color: "#22c55e" }}
                      >
                        {isExpanded ? "Leer menos" : "Leer más"}
                      </button>
                    )}
                  </>
                )}

                <div className="mt-4 flex flex-wrap gap-3 reveal" data-delay={`${520 + p.id * 80}`}>
                  {p.techs.map((t) => {
                    const bg = colorMap[t] ?? "#6b7280";
                    const fg = isLight(bg) ? "#000" : "#fff";
                    return (
                      <span
                        key={t}
                        className="tech-pill flex items-center gap-3 text-sm px-3 py-2 rounded-full"
                        style={
                          {
                            background: "rgba(255,255,255,0.03)",
                            transition: "all 280ms cubic-bezier(.22,.9,.27,1)",
                            color: "#9ca3af",
                            ['--tech-color' as any]: bg,
                            ['--tech-foreground' as any]: fg,
                          } as React.CSSProperties
                        }
                        aria-hidden
                      >
                        <span className="tech-icon" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                          <TechIcon tech={t} />
                        </span>
                        <span className="tech-label">{t}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="card-actions" aria-hidden>
                {p.type !== "hosteado" && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Repo"
                    className="flex items-center justify-center rounded-md"
                    style={{ width: 44, height: 44, borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#ffffff", transition: "transform 260ms ease" }}
                  >
                    <FaGithub size={18} />
                  </a>
                )}

                {p.type !== "personal" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live"
                    className="flex items-center justify-center rounded-md"
                    style={{ width: 44, height: 44, borderRadius: 10, background: "#4f46e5", color: "#000", boxShadow: "0 10px 30px rgba(34,197,94,0.14)", transition: "transform 260ms ease" }}
                  >
                    <FaTelegramPlane size={18} />
                  </a>
                )}
              </div>

              <style>{`
                article:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 30px 60px rgba(2,6,23,0.45); }
                article:hover img { transform: scale(1.06); transition: transform 700ms cubic-bezier(.22,.9,.27,1); }

                .tech-pill { cursor: default; }
                .tech-pill:hover {
                  background: var(--tech-color) !important;
                  color: var(--tech-foreground) !important;
                  transform: translateY(-4px) scale(1.03);
                  box-shadow: 0 10px 30px rgba(0,0,0,0.22);
                }
                .tech-pill:hover .tech-icon, .tech-pill:hover .tech-label { color: var(--tech-foreground) !important; }

                .card-actions {
                  position: absolute;
                  right: 16px;
                  bottom: 16px;
                  display: flex;
                  gap: 8px;
                  z-index: 10;
                }

                a[aria-label]:hover { transform: translateY(-3px); }
              `}</style>
            </article>
          );
        })}
      </div>
    </section>
  );
}