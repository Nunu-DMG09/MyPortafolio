import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiPrisma, SiPostgresql, 
  SiAstro, SiMarkdown, SiGraphql, SiExpress, SiHtml5, SiCss3, 
  SiJavascript, SiPhp, SiMysql, SiAndroid, SiSqlite, SiCodeigniter 
} from "react-icons/si";

type ProjectType = "hosteado" | "colaborativo" | "personal";

type Project = { 
  id: number; 
  title: string; 
  description?: string; 
  image: string; 
  techs: string[]; 
  repo?: string; 
  demo?: string; 
  type: ProjectType; 
};

const projects: Project[] = [
  { id: 1, title: "Municipalidad Jose Leonardo Ortiz - Sistemas de denuncias", description: "Refactorización y unificación de sistemas de denuncias (ambiental, anticorrupción y consumidor) para la Municipalidad, consolidando procesos en una plataforma integral.", image: "/denuncias.png", techs: ["React", "JavaScript", "Tailwind", "PHP", "CodeIgniter"], repo: "https://github.com/Nunu-DMG09/denuncias", demo: "https://jloenlinea.munijlo.gob.pe/seccion/denuncias", type: "colaborativo" },
  { id: 2, title: "Corporación KM GROUP - Página web", description: "Sitio web corporativo para consultora especializada en gestión y normativas ISO. Diseñado para presentar servicios de auditoría y sostenibilidad mediante una interfaz moderna.", image: "/km-group.png", techs: ["HTML", "CSS", "JavaScript", "PHP", "Astro"], repo: "#", demo: "https://corporacionkmperu.com/", type: "hosteado" },
  { id: 3, title: "Vidafy Sergio Mesta - Landing Page", description: "Diseño de Landing Page estructurada para resaltar los beneficios de salud y calidad de vida con una navegación intuitiva orientada a la captación de clientes.", image: "/vidafysergio.png", techs: ["TypeScript", "React"], repo: "#", demo: "https://sergiomestavidafy.infinityfree.me/", type: "hosteado" },
  { id: 4, title: "Tecnico Joel - Tienda virtual", description: "E-commerce completo combinando tienda virtual de productos tecnológicos con un sistema de gestión de inventario para administración de stock en tiempo real.", image: "/tecnicojoel.png", techs: ["React", "JavaScript", "Express", "MySQL"], repo: "#", demo: "https://tiendatecnicojoel.vercel.app/", type: "hosteado" },
  { id: 5, title: "NunuMedic - Sistema de ventas", description: "Sistema Fullstack para gestión integral de farmacias, automatiza inventarios y reportes en tiempo real con arquitectura escalable.", image: "/nunumedic.png", techs: ["MySQL", "Express", "React", "Tailwind", "JavaScript"], repo: "https://github.com/Nunu-DMG09/NunuMedic", demo: "#", type: "personal" },
  { id: 6, title: "Ecolim SAC - Recolección residual", description: "Aplicación móvil para gestión de residuos industriales, optimizando la recolección y cumplimiento normativo mediante reportes automatizados.", image: "/nudav-circular1.png", techs: ["AndroidStudio", "Java", "SQLite"], repo: "https://github.com/Nunu-DMG09/EcolimSac", demo: "#", type: "personal" },
  { id: 7, title: "Municipalidad Jose Leonardo Ortiz - Rendición de cuentas 2026", description: "Rendición de cuentas para la Municipalidad de José Leonardo Ortiz, presentando el desempeño y los resultados obtenidos durante el año 2026.", image: "/rendicion.jfif", techs: ["React", "TypeScript", "Tailwind", "PHP", "CodeIgniter"], repo: "#", demo: "https://rendicion-cuentas.munijlo.gob.pe/", type: "colaborativo" },
];

export default function Proyectos() {
  const [filter, setFilter] = useState<ProjectType>("hosteado");
  const visible = projects.filter((p) => p.type === filter);
  
  const filterOptions: ProjectType[] = ['hosteado', 'colaborativo', 'personal'];

  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-6 py-16 md:py-32 reveal relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 reveal border-b border-white/5 pb-8">
        <div className="text-center md:text-left">
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-2">Portafolio</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">Casos de Estudio</h3>
        </div>

        <div className="flex gap-1 md:gap-2 glass-card p-1.5 rounded-full bg-black/50 overflow-x-auto max-w-full hide-scrollbar">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`cursor-pointer px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${filter === f ? 'bg-white text-black' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              {f === 'hosteado' ? 'Desplegados' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {visible.map((p) => {
          const [title, subtitle] = p.title.split(" - ", 2);
          return (
            
            <article key={p.id} className="glass-card rounded-4xl overflow-hidden group flex flex-col bg-[#050505] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] h-full">
              
              <div className="relative w-full h-56 md:h-64 overflow-hidden border-b border-white/5 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                <img src={p.image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100" />
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{title}</h4>
                {subtitle && <span className="text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4 block">{subtitle}</span>}
                
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {p.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-6 mb-6 pt-6 border-t border-white/5">
                    {p.repo && p.repo !== "#" && (
                       <a href={p.repo} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center gap-2 text-xs font-bold text-white hover:text-[#38BDF8] transition-colors group/link">
                         <FaGithub size={18} className="group-hover/link:scale-110 transition-transform" /> Repositorio
                       </a>
                    )}
                    {p.demo && p.demo !== "#" && (
                       <a href={p.demo} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center gap-2 text-xs font-bold text-[#38BDF8] hover:text-white transition-colors group/link">
                         <FaExternalLinkAlt size={16} className="group-hover/link:scale-110 transition-transform" /> Visitar Web
                       </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-xl border border-white/5 bg-white/5 text-slate-300 group-hover:border-[#38BDF8]/30 transition-colors shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}