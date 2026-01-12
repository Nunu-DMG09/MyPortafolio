import { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPrisma, SiPostgresql, SiAstro, SiMarkdown, SiGraphql, SiExpress, SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql, SiAndroid, SiSqlite } from "react-icons/si";

type Project = { id: number; title: string; description?: string; image: string; techs: string[]; repo?: string; demo?: string; type: "hosteado" | "colaborativo" | "personal"; };

const projects: Project[] = [
  { id: 1, title: "Municipalidad Jose Leonardo Ortiz - Sistemas de denuncias", description: "Sistema de denuncias para atención ciudadana.", image: "https://source.unsplash.com/collection/190727/800x600?sig=1", techs: ["React", "JavaScript", "Tailwind", "PHP", "CodeIgniter"], repo: "#", demo: "#", type: "colaborativo" },
  { id: 2, title: "Corporación KM GROUP - Página web", description: "Landing corporativa con CMS ligero.", image: "https://source.unsplash.com/collection/190727/800x600?sig=2", techs: ["HTML", "CSS", "JavaScript", "PHP", "Astro"], repo: "#", demo: "#", type: "hosteado" },
  { id: 3, title: "Sergio Mesta Gomez Vidafy - Landing Page", description: "Landing rápida para presentación de servicios.", image: "https://source.unsplash.com/collection/190727/800x600?sig=3", techs: ["TypeScript", "React"], repo: "#", demo: "#", type: "hosteado" },
  { id: 4, title: "Tecnico Joel - Tienda virtual", description: "E-commerce básico para venta de servicios.", image: "https://source.unsplash.com/collection/190727/800x600?sig=4", techs: ["React", "JavaScript", "Express", "MySQL"], repo: "#", demo: "#", type: "hosteado" },
  { id: 5, title: "NunuMedic", description: "App de citas médicas sencilla.", image: "https://source.unsplash.com/collection/190727/800x600?sig=5", techs: ["MySQL", "Express", "React", "Tailwind", "JavaScript"], repo: "#", demo: "#", type: "personal" },
  { id: 6, title: "Ecolim SAC", description: "Portal informativo para empresa ambiental.", image: "https://source.unsplash.com/collection/190727/800x600?sig=6", techs: ["AndroidStudio", "Java", "SQLite"], repo: "#", demo: "#", type: "personal" },
];

const ICON_SIZE = 28;
const colorMap: Record<string, string> = { React: "#61dafb", TypeScript: "#3178c6", Tailwind: "#06b6d4", Astro: "#F97316", Node: "#3C873A", Express: "#3C873A", HTML: "#e34f26", CSS: "#264de4", JavaScript: "#f7df1e", PHP: "#777bb4", MySQL: "#4479A1", CodeIgniter: "#ef3b2d", AndroidStudio: "#3DDC84", Java: "#007396", SQLite: "#003B57" };

const getIcon = (tech: string) => {
  switch (tech) {
    case "React": return <FaReact size={ICON_SIZE} color={colorMap.React} />;
    case "Node": case "Express": return <FaNodeJs size={ICON_SIZE} color={colorMap.Node} />;
    case "TypeScript": return <SiTypescript size={ICON_SIZE} color={colorMap.TypeScript} />;
    case "Tailwind": case "Tailwindcss": return <SiTailwindcss size={ICON_SIZE} color={colorMap.Tailwind} />;
    case "Next.js": return <SiNextdotjs size={ICON_SIZE} color={colorMap["Next.js"]} />;
    case "Prisma": return <SiPrisma size={ICON_SIZE} color={colorMap.Prisma} />;
    case "Postgres": case "PostgreSQL": return <SiPostgresql size={ICON_SIZE} color={colorMap.Postgres} />;
    case "Astro": return <SiAstro size={ICON_SIZE} color={colorMap.Astro} />;
    case "MDX": return <SiMarkdown size={ICON_SIZE} color={colorMap.MDX} />;
    case "GraphQL": return <SiGraphql size={ICON_SIZE} color={colorMap.GraphQL} />;
    case "HTML": return <SiHtml5 size={ICON_SIZE} color={colorMap.HTML} />;
    case "CSS": return <SiCss3 size={ICON_SIZE} color={colorMap.CSS} />;
    case "JavaScript": return <SiJavascript size={ICON_SIZE} color={colorMap.JavaScript} />;
    case "PHP": return <SiPhp size={ICON_SIZE} color={colorMap.PHP} />;
    case "MySQL": return <SiMysql size={ICON_SIZE} color={colorMap.MySQL} />;
    case "AndroidStudio": return <SiAndroid size={ICON_SIZE} color={colorMap.AndroidStudio} />;
    case "SQLite": return <SiSqlite size={ICON_SIZE} color={colorMap.SQLite} />;
    default: return <span style={{ fontSize: ICON_SIZE }}>🔧</span>;
  }
};

export default function Proyectos() {
  const [filter, setFilter] = useState<"hosteado" | "colaborativo" | "personal">("hosteado");
  const visible = projects.filter((p) => p.type === filter);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 reveal" data-delay="120" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-4xl md:text-5xl font-bold text-center mb-4 reveal" data-delay="200" style={{ color: "var(--text-100)" }}>
        Proyectos
      </h2>

      <div className="flex justify-center gap-3 mb-8 reveal" data-delay="260">
        <button onClick={() => setFilter("hosteado")} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "hosteado" ? "shadow-md" : "opacity-80"}`} style={{ background: filter === "hosteado" ? "var(--accent-500)" : "transparent", color: filter === "hosteado" ? "#000" : "var(--text-100)", border: "1px solid rgba(255,255,255,0.04)" }}>
          Hosteados
        </button>
        <button onClick={() => setFilter("colaborativo")} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "colaborativo" ? "shadow-md" : "opacity-80"}`} style={{ background: filter === "colaborativo" ? "var(--accent-500)" : "transparent", color: filter === "colaborativo" ? "#000" : "var(--text-100)", border: "1px solid rgba(255,255,255,0.04)" }}>
          Colaborativos
        </button>
        <button onClick={() => setFilter("personal")} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "personal" ? "shadow-md" : "opacity-80"}`} style={{ background: filter === "personal" ? "var(--accent-500)" : "transparent", color: filter === "personal" ? "#000" : "var(--text-100)", border: "1px solid rgba(255,255,255,0.04)" }}>
          Personales
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <article key={p.id} className="bg-[rgba(255,255,255,0.02)] rounded-lg overflow-hidden shadow-sm reveal" data-delay={`${320 + p.id * 80}`}>
            <div className="w-full h-44 sm:h-52 md:h-48 lg:h-56 reveal" data-delay={`${380 + p.id * 80}`}>
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold reveal" data-delay={`${440 + p.id * 80}`} style={{ color: "var(--text-100)" }}>{p.title}</h3>
              {p.description && <p className="mt-1 text-sm reveal" data-delay={`${480 + p.id * 80}`} style={{ color: "var(--muted-300)" }}>{p.description}</p>}

              <div className="mt-3 flex flex-wrap gap-2 reveal" data-delay={`${520 + p.id * 80}`}>
                {p.techs.map((t) => (
                  <span key={t} className="flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,0.03)]" style={{ color: "var(--muted-300)" }}>
                    <span className="inline-block text-base" aria-hidden>{getIcon(t)}</span>
                    <span>{t}</span>
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3 reveal" data-delay={`${560 + p.id * 80}`}>
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-md text-sm font-medium" style={{ background: "transparent", color: "var(--text-100)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  Repo
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-md text-sm font-medium" style={{ background: "var(--accent-500)", color: "#000" }}>
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}