import React from "react";

type Job = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Programador Web",
    company: "Tecnicos Joel",
    date: "10/02/24 — 14/06/25",
    description: "Desarrollo de interfaces con React/TypeScript, optimización de rendimiento y accesibilidad.",
  },
  {
    title: "Desarrollador Backend",
    company: "Municipalidad José Leonardo Ortiz",
    date: "08/08/25 — Actual",
    description: "Implementación de landing pages, CMS y componentes reutilizables con enfoque en UI/UX.",
  },
];

export default function Experiencia() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20" aria-labelledby="experience-title">
      <h2
        id="experience-title"
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center"
        style={{ color: "var(--text-100)" }}
      >
        Experiencia
      </h2>

      <div className="relative">
        {/* Línea central vertical (visible en md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)] transform -translate-x-1/2" />

        <div className="space-y-16">
          {jobs.map((job, idx) => {
            const isLeft = idx % 2 === 0; // 0 -> izquierda, 1 -> derecha
            return (
              <div key={idx} className="relative">
                <div className="md:grid md:grid-cols-2 md:items-start">
                  {/* Contenido lado izquierdo */}
                  <div className={`${isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8 md:text-left"} w-full`}>
                    <div className="inline-block bg-[rgba(255,255,255,0.02)] rounded-md p-6 md:p-8">
                      <p className="text-sm font-medium" style={{ color: "var(--accent-500)" }}>
                        {job.date}
                      </p>
                      <h3 className="mt-3 text-xl md:text-2xl font-semibold" style={{ color: "var(--text-100)" }}>
                        {job.title}
                      </h3>
                      <p className="text-sm md:text-base mt-1" style={{ color: "var(--muted-300)" }}>
                        {job.company}
                      </p>
                      <p className="mt-4 text-sm md:text-base" style={{ color: "var(--muted-300)" }}>
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Punto central */}
                  <div className="md:col-span-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-10">
                    <div className="flex items-center justify-center">
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ background: "var(--accent-500)", boxShadow: "0 0 0 8px rgba(42,163,255,0.04)" }}
                        aria-hidden
                      />
                    </div>
                  </div>

                  {/* Spacer / otro lado (para mantener la columna opuesta) */}
                  <div className={`${isLeft ? "md:order-2 md:pl-8 md:text-left" : "md:pr-8 md:text-right"} hidden md:block`} aria-hidden>
                    {/* espacio vacío para balancear layout en md+ */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}