import React from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaLightbulb } from "react-icons/fa";

export default function AboutMe() {
  const skills = [
    { icon: <FaCode size={26} />, title: "Ingeniería de Software", desc: "Patrones de diseño, código limpio y arquitecturas robustas para sistemas críticos." },
    { icon: <FaLaptopCode size={26} />, title: "UI / UX Design", desc: "Interfaces interactivas, fluidas y centradas absolutamente en la experiencia de usuario." },
    { icon: <FaDatabase size={26} />, title: "Desarrollo Backend", desc: "APIs seguras, gestión de servidores y bases de datos relacionales ultra optimizadas." },
    { icon: <FaLightbulb size={26} />, title: "Resolución de Problemas", desc: "Transformo requerimientos complejos en soluciones tecnológicas elegantes y simples." },
  ];

  return (
    <section id="sobremi" className="max-w-6xl mx-auto px-6 py-32 reveal relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal gap-6 border-b border-white/5 pb-10">
        <div>
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-3">Referencia</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white">Sobre mí</h3>
        </div>
        <p className="text-slate-400 max-w-sm mt-6 md:mt-0 text-left md:text-right hidden md:block text-lg font-light">
          No solo escribo código. Construyo <span className="text-white font-medium">ecosistemas digitales</span> completos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((item, idx) => (
          <article
            key={idx}
            className={`glass-card p-8 rounded-[2rem] reveal group relative overflow-hidden ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
            data-delay={`${idx * 100}`}
          >
            {/* Gradiente interno que sigue al hover (simulado con opacidad) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 bg-black border border-white/10 text-white group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
              {item.icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}