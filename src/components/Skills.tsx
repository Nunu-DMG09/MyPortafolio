import React from "react";
import { FaCoffee, FaDatabase, FaReact, FaNodeJs, FaTools, FaGithub, FaLock, FaNetworkWired, FaPaperPlane } from "react-icons/fa";
import { SiJavascript, SiPython, SiPhp, SiExpress, SiTailwindcss, SiCodeigniter, SiMysql, SiPostgresql, SiVite, SiSqlite, SiMariadb } from "react-icons/si";

const sections = [
  {
    title: "Lenguajes de Programación",
    items: [
      { id: "java", label: "Java", icon: FaCoffee, color: "#e51f24" }, // CAMBIO: Rojo
      { id: "javascript", label: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { id: "python", label: "Python", icon: SiPython, color: "#3776AB" },
      { id: "php", label: "PHP", icon: SiPhp, color: "#777bb4" },
      { id: "sql", label: "SQL", icon: FaDatabase, color: "#38bdf8" }, // CAMBIO: Azul brillante notorio
    ],
  },
  {
    title: "Frameworks & Librerías",
    items: [
      { id: "react", label: "React", icon: FaReact, color: "#61dafb" },
      { id: "express", label: "Express.js", icon: SiExpress, color: "#000000" },
      { id: "node", label: "Node.js", icon: FaNodeJs, color: "#3C873A" },
      { id: "tailwind", label: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { id: "codeigniter", label: "CodeIgniter 4", icon: SiCodeigniter, color: "#ef3b2d" },
      { id: "knex", label: "Knex.js", icon: FaTools, color: "#4f46e5" },
    ],
  },
  {
    title: "Bases de Datos",
    items: [
      { id: "mysql", label: "MySQL", icon: SiMysql, color: "#4479A1" },
      { id: "postgres", label: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { id: "sqlite", label: "SQLite", icon: SiSqlite, color: "#003B57" },
      { id: "mariadb", label: "MariaDB", icon: SiMariadb, color: "#003545" },
    ],
  },
  {
    title: "Herramientas & Tecnologías",
    items: [
      { id: "git", label: "Git / GitHub", icon: FaGithub, color: "#F05032" },
      { id: "jwt", label: "JWT Authentication", icon: FaLock, color: "#10B981" },
      { id: "rest", label: "REST APIs", icon: FaNetworkWired, color: "#8B5CF6" },
      { id: "vite", label: "Vite", icon: SiVite, color: "#646cff" },
      { id: "axios", label: "Axios", icon: FaPaperPlane, color: "#00A2FF" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="max-w-4xl mx-auto px-6 py-12 reveal" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl md:text-4xl font-extrabold mb-12 text-center reveal" style={{ color: "#22c55e" }}>
        Habilidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((sec, sidx) => {
          const sectionDelay = 220 + sidx * 120;
          return (
            <div key={sec.title} className="flex flex-col items-center reveal" data-delay={`${sectionDelay}`}>
              <div className="flex items-center justify-center gap-3 mb-3">
                <h3 className="text-lg font-semibold text-center" style={{ color: "#ffffff", padding: "6px 8px" }}>{sec.title}</h3>
              </div>

              <div className="flex flex-col gap-3 items-center w-full">
                {sec.items.map((it, idx) => {
                  const Icon = it.icon;
                  const itemDelay = sectionDelay + 80 + idx * 60;
                  return (
                    <div
                      key={it.id}
                      className="skill-item flex items-center gap-4 p-3 rounded-lg w-full max-w-sm reveal"
                      data-delay={`${itemDelay}`}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        transition: "transform 220ms cubic-bezier(.22,.9,.27,1), box-shadow 220ms",
                        cursor: "default",
                      }}
                      aria-hidden
                    >
                      <div
                        className="skill-icon w-10 h-10 rounded-full flex items-center justify-center reveal"
                        data-delay={`${itemDelay + 40}`}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: `1px solid rgba(255,255,255,0.03)`,
                          color: it.color,
                          transition: "transform 220ms, box-shadow 220ms, background 220ms",
                          flex: "0 0 40px",
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <span style={{ color: "#ffffff", fontWeight: 600 }}>{it.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .skill-item:hover {
          transform: translateX(6px);
          box-shadow: 0 14px 40px rgba(2,6,23,0.45);
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.025));
        }
        .skill-item:hover .skill-icon {
          transform: scale(1.06);
          box-shadow: 0 8px 30px rgba(2,6,23,0.35);
        }
      `}</style>
    </section>
  );
}