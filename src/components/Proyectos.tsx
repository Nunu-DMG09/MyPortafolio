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
  { id: 1, title: "Municipalidad Jose Leonardo Ortiz - Sistemas de denuncias", description: "Sistema de denuncias para atención ciudadana.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=1", techs: ["React", "JavaScript", "Tailwind", "PHP", "CodeIgniter"], repo: "#", demo: "#", type: "colaborativo" },
  { id: 2, title: "Corporación KM GROUP - Página web", description: "Landing corporativa con CMS ligero.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=2", techs: ["HTML", "CSS", "JavaScript", "PHP", "Astro"], repo: "#", demo: "#", type: "hosteado" },
  { id: 3, title: "Sergio Mesta Gomez Vidafy - Landing Page", description: "Landing rápida para presentación de servicios.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=3", techs: ["TypeScript", "React"], repo: "#", demo: "#", type: "hosteado" },
  { id: 4, title: "Tecnico Joel - Tienda virtual", description: "E-commerce básico para venta de servicios.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=4", techs: ["React", "JavaScript", "Express", "MySQL"], repo: "#", demo: "#", type: "hosteado" },
  { id: 5, title: "NunuMedic", description: "App de citas médicas sencilla.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=5", techs: ["MySQL", "Express", "React", "Tailwind", "JavaScript"], repo: "#", demo: "#", type: "personal" },
  { id: 6, title: "Ecolim SAC", description: "Portal informativo para empresa ambiental.", image: "https://source.unsplash.com/collection/190727/1200x900?sig=6", techs: ["AndroidStudio", "Java", "SQLite"], repo: "#", demo: "#", type: "personal" },
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
    case "Java": return <FaCoffee size={ICON_SIZE} />; // fallback icon for Java
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
    <section className="max-w-6xl mx-auto px-6 py-16 reveal" data-delay="120" aria-labelledby="projects-title">
      <h2
        id="projects-title"
        className="text-4xl md:text-5xl font-bold text-center mb-4 reveal"
        data-delay="200"
        style={{ color: "#22c55e", paddingBottom: 24 }}
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
        {visible.map((p) => (
          <article
            key={p.id}
            className="rounded-lg overflow-hidden reveal transform transition-all duration-500"
            data-delay={`${320 + p.id * 80}`}
            style={{
              background: "#071029",
              border: "1px solid rgba(255,255,255,0.04)",
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
              <h3 className="text-xl md:text-2xl font-semibold reveal" data-delay={`${440 + p.id * 80}`} style={{ color: "#22c55e" }}>
                {p.title}
              </h3>
              {p.description && <p className="mt-2 text-sm reveal" data-delay={`${480 + p.id * 80}`} style={{ color: "#ffffff" }}>{p.description}</p>}

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
                          transition: "all 260ms cubic-bezier(.22,.9,.27,1)",
                          color: "#9ca3af",
                          ['--tech-color' as any]: bg,
                          ['--tech-foreground' as any]: fg,
                        } as React.CSSProperties
                      }
                      aria-hidden
                    >
                      <span className="tech-icon" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "currentColor" }}>
                        <TechIcon tech={t} />
                      </span>
                      <span className="tech-label" style={{ color: "currentColor" }}>{t}</span>
                    </span>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-3 reveal items-center" data-delay={`${560 + p.id * 80}`}>
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

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live"
                  className="flex items-center justify-center rounded-md"
                  style={{ width: 44, height: 44, borderRadius: 10, background: "#22c55e", color: "#000", boxShadow: "0 10px 30px rgba(34,197,94,0.14)", transition: "transform 260ms ease" }}
                >
                  <FaTelegramPlane size={18} />
                </a>
              </div>
            </div>

            <style>{`
              article:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 30px 60px rgba(2,6,23,0.45); }
              article:hover img { transform: scale(1.06); transition: transform 700ms cubic-bezier(.22,.9,.27,1); }

              .tech-pill { cursor: default; color: #9ca3af; }
              .tech-pill .tech-icon svg { fill: currentColor; stroke: currentColor; }
              .tech-pill:hover {
                background: var(--tech-color);
                color: var(--tech-foreground);
                transform: translateY(-4px) scale(1.02);
                box-shadow: 0 10px 30px rgba(0,0,0,0.18);
              }
              .tech-pill:hover .tech-icon svg { fill: currentColor !important; stroke: currentColor !important; }
              .tech-pill svg { transition: fill 200ms ease, stroke 200ms ease, transform 200ms ease; }

              a[aria-label]:hover { transform: translateY(-3px); }
            `}</style>
          </article>
        ))}
      </div>
    </section>
  );
}