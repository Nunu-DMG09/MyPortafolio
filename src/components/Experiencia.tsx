import React from "react";

type Job = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const jobs: Job[] = [
  { title: "Programador Web", company: "Tecnico Joel", date: "10/02/25 — 14/06/25", description: "Encargado del área de Tecnología, desarrollando páginas web y landing pages usando JavaScript, PHP, HTML y CSS; creación de interfaces; optimización de rendimiento y accesibilidad." },
  { title: "Desarrollador Backend", company: "Municipalidad José Leonardo Ortiz", date: "08/08/25 — 21/11/25", description: "Responsable del desarrollo backend de sistemas internos proporcionados por la empresa, implementación y mantenimiento de APIs, integración con bases de datos y optimización de servicios." },
  { title: "Desarrollador Full Stack", company: "Tecnico Joel", date: "25/10/25 — Presente", description: "Líder del área de Desarrollo, coordinación de equipo, definición de arquitectura y desarrollo full‑stack de soluciones escalables y reutilizables." },
];

export default function Experiencia() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 reveal" data-delay="120" aria-labelledby="experience-title">
      <h2 id="experience-title" className="text-3xl md:text-4xl font-extrabold mb-12 text-center reveal" data-delay="200" style={{ color: "var(--text-100)" }}>
        Experiencia
      </h2>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)] transform -translate-x-1/2" />

        <div className="space-y-16">
          {jobs.map((job, idx) => {
            const isLeft = idx % 2 === 0;
            const delay = 300 + idx * 120;
            return (
              <div key={idx} className="relative reveal" data-delay={`${delay}`}>
                <div className="md:grid md:grid-cols-2 md:items-start">
                  <div className={`${isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8 md:text-left"} w-full`}>
                    <div className="inline-block bg-[rgba(255,255,255,0.02)] rounded-md p-6 md:p-8">
                      <p className="text-sm font-medium reveal" data-delay={`${delay + 40}`} style={{ color: "var(--accent-500)" }}>
                        {job.date}
                      </p>
                      <h3 className="mt-3 text-xl md:text-2xl font-semibold reveal" data-delay={`${delay + 80}`} style={{ color: "var(--text-100)" }}>
                        {job.title}
                      </h3>
                      <p className="text-sm md:text-base mt-1 reveal" data-delay={`${delay + 120}`} style={{ color: "var(--muted-300)" }}>
                        {job.company}
                      </p>
                      <p className="mt-4 text-sm md:text-base reveal" data-delay={`${delay + 160}`} style={{ color: "var(--muted-300)" }}>
                        {job.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-10">
                    <div className="flex items-center justify-center">
                      <span
                        className="w-4 h-4 rounded-full reveal"
                        data-delay={`${delay + 20}`}
                        style={{ background: "var(--accent-500)", boxShadow: "0 0 0 8px rgba(42,163,255,0.04)" }}
                        aria-hidden
                      />
                    </div>
                  </div>

                  <div className={`${isLeft ? "md:order-2 md:pl-8 md:text-left" : "md:pr-8 md:text-right"} hidden md:block`} aria-hidden />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}