import React from "react";

const jobs = [
  { title: "Desarrollador Full Stack", company: "Tecnico Joel", date: "Oct 2025 — Presente", desc: "Liderazgo en el área de desarrollo. Definición de arquitecturas y desarrollo full-stack de soluciones escalables y reutilizables." },
  { title: "Desarrollador Backend", company: "Municipalidad J.L.O.", date: "Ago 2025 — Nov 2025", desc: "Responsable del desarrollo backend de sistemas internos, implementación de APIs e integración segura con bases de datos." },
  { title: "Programador Web", company: "Tecnico Joel", date: "Feb 2025 — Jun 2025", desc: "Desarrollo de landing pages interactivas. Foco intensivo en optimización de rendimiento, SEO técnico y accesibilidad." },
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="max-w-5xl mx-auto px-6 py-16 md:py-20 reveal">
      <div className="text-center mb-24 reveal">
        <h2 className="text-xs font-bold tracking-[0.3em] text-[#38BDF8] uppercase mb-3">Trayectoria</h2>
        <h3 className="text-5xl md:text-6xl font-black tracking-tight text-white">Experiencia</h3>
      </div>

      <div className="relative ml-8 md:ml-0">
      
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#38BDF8] to-transparent md:-translate-x-1/2 opacity-30"></div>

        <div className="space-y-20">
          {jobs.map((job, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal w-full reveal group" data-delay={`${idx * 150}`}>
                
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16 md:text-left"}`}>
                  <div className="glass-card p-8 rounded-[2rem]">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold text-[#38BDF8] uppercase tracking-widest mb-6">
                      {job.date}
                    </span>
                    <h4 className="text-3xl font-bold text-white mb-2 leading-tight">{job.title}</h4>
                    <span className="text-base text-slate-300 font-medium mb-5 block">{job.company}</span>
                    <p className="text-slate-500 font-light leading-relaxed">{job.desc}</p>
                  </div>
                </div>

              
                <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-black border-[4px] border-[#38BDF8] transform -translate-x-1/2 group-hover:shadow-[0_0_20px_#38BDF8] group-hover:scale-150 transition-all duration-500 z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}