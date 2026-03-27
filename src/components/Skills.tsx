import React from "react";
import { FaCoffee, FaDatabase, FaReact, FaNodeJs, FaTools, FaGithub, FaLock, FaNetworkWired, FaPaperPlane } from "react-icons/fa";
import { SiJavascript, SiPython, SiPhp, SiExpress, SiTailwindcss, SiCodeigniter, SiMysql, SiPostgresql, SiVite, SiSqlite, SiMariadb, SiTypescript } from "react-icons/si";

const sections = [
  {
    title: "Lenguajes de Programación",
    items: [
      { id: "java", label: "Java", icon: FaCoffee, color: "#e51f24" }, 
      { id: "javascript", label: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { id: "python", label: "Python", icon: SiPython, color: "#3776AB" },
      { id: "php", label: "PHP", icon: SiPhp, color: "#777bb4" },
      { id: "sql", label: "SQL", icon: FaDatabase, color: "#38bdf8" }, 
      { id: "typescript", label: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "Frameworks & Librerías",
    items: [
      { id: "react", label: "React", icon: FaReact, color: "#61dafb" },
      { id: "express", label: "Express.js", icon: SiExpress, color: "#FFFFFF" },
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
      { id: "mariadb", label: "MariaDB", icon: SiMariadb, color: "#FFFFFF" },
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
    <section id="habilidades" className="max-w-6xl mx-auto px-6 py-32 reveal">
      <div className="text-center mb-24 reveal">
        <h2 className="text-xs font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-3">Tech Stack</h2>
        <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white">Stack Tecnológico</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((sec, sidx) => (
          <div key={sec.title} className="glass-card p-10 md:p-12 rounded-[3rem] reveal relative overflow-hidden" data-delay={`${sidx * 100}`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            
            <h4 className="text-xl font-bold text-white mb-10 flex items-center gap-4 relative z-10">
              <span className="w-2 h-2 bg-[#38BDF8] rounded-full shadow-[0_0_10px_#38BDF8]"></span>
              {sec.title}
            </h4>
            
            <div className="flex flex-wrap gap-4 relative z-10">
              {sec.items.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.id} className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/5 bg-black hover:bg-white/5 transition-all duration-300 group cursor-default shadow-lg">
                    <Icon size={20} style={{ color: it.color }} className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter group-hover:drop-shadow-[0_0_8px_currentColor]" />
                    <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">{it.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}