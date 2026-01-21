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

const Icon = ({ kind }: { kind: "briefcase" | "building" | "calendar" }) => {
  if (kind === "building")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
        <path fill="currentColor" d="M3 21V3h10v18H3zm14 0V7h4v14h-4z" />
      </svg>
    );
  if (kind === "calendar")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
        <path fill="currentColor" d="M7 10h5v5H7zM3 5v16h18V5H3zm2 2h14v12H5V7z" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden focusable="false">
      <path fill="currentColor" d="M2 7h20v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm6-4h8v2H8V3z" />
    </svg>
  );
};

export default function Experiencia() {
  return (
    <section id="experiencia" className="max-w-5xl mx-auto px-6 py-20 reveal" data-delay="120" aria-labelledby="experience-title">
      <h2
        id="experience-title"
        className="text-3xl md:text-4xl font-extrabold mb-12 text-center reveal"
        data-delay="200"
        style={{ color: "#22c55e" }} // título en color sólido contrastante (verde)
      >
        Experiencia
      </h2>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)] transform -translate-x-1/2" />

        <div className="space-y-16">
          {jobs.map((job, idx) => {
            const isLeft = idx % 2 === 0;
            const delay = 300 + idx * 120;
            const iconKind: "briefcase" | "building" | "calendar" =
              job.company.toLowerCase().includes("municipalidad") ? "building" : idx === 0 ? "calendar" : "briefcase";

            return (
              <div key={idx} className="relative reveal" data-delay={`${delay}`}>
                <div className="md:grid md:grid-cols-2 md:items-start">
                  <div className={`${isLeft ? "md:pr-8 md:text-right" : "md:order-2 md:pl-8 md:text-left"} w-full`}>
                    <div
                      className="inline-block rounded-md p-6 md:p-8 transition-transform duration-300 ease-[cubic-bezier(.22,.9,.27,1)] hover:-translate-y-2 hover:shadow-2xl focus-within:-translate-y-2"
                      style={{
                        background: "#071029", // fondo sólido de la card (oscuro)
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <div className="flex items-center gap-3" aria-hidden>
                          <span
                            className="inline-flex items-center justify-center rounded-md"
                            style={{
                              width: 40,
                              height: 40,
                              background: "#4f46e5", // pill icon background - color sólido (indigo)
                              boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
                              color: "#ffffff",
                              flexShrink: 0,
                              transition: "transform 280ms ease, box-shadow 280ms ease",
                            }}
                          >
                            <Icon kind={iconKind} />
                          </span>

                          <span className="text-sm font-medium" style={{ color: "#a3a3a3" }}>
                            {job.date}
                          </span>
                        </div>

                        <div className="hidden md:block" aria-hidden>
                          {/* visual balance on desktop */}
                        </div>
                      </div>

                      <h3 className="mt-3 text-xl md:text-2xl font-semibold reveal" data-delay={`${delay + 80}`} style={{ color: "#22c55e" }}>
                        {job.title}
                      </h3>

                      <p className="text-sm md:text-base mt-1 reveal" data-delay={`${delay + 120}`} style={{ color: "#ffffff" }}>
                        {job.company}
                      </p>

                      <p className="mt-4 text-sm md:text-base reveal" data-delay={`${delay + 160}`} style={{ color: "#ffffff", lineHeight: 1.6 }}>
                        {job.description}
                      </p>

                      {/* Pill "Destacado" (color sólido) + indicador de impacto (color sólido) */}
                      <div className="mt-4 flex items-center gap-3">
                        <span
                          aria-hidden
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            background: "#4f46e5", // color sólido (indigo)
                            color: "#ffffff",
                            boxShadow: "0 8px 20px rgba(79,70,229,0.15)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden focusable="false">
                            <path fill="currentColor" d="M12 2l2.6 6.6L21 11l-5 3.6L17.2 21 12 17.8 6.8 21 8 14.6 3 11l6.4-2.4L12 2z" />
                          </svg>
                          Destacado
                        </span>

                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 10px",
                            borderRadius: 999,
                            border: "1px solid rgba(255,255,255,0.03)",
                            color: "#ffffff",
                            fontSize: 13,
                            background: "transparent",
                          }}
                        >
                          <span
                            aria-hidden
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: 6,
                              background: "#F97316", // indicador de impacto sólido (orange)
                              boxShadow: "0 4px 12px rgba(249,115,22,0.14)",
                              display: "inline-block",
                            }}
                          />
                          <span>Impacto: Alto</span>
                        </div>
                      </div>
                      {/* /Pill e indicador */}
                    </div>
                  </div>

                  <div className="md:col-span-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-10">
                    <div className="flex items-center justify-center">
                      <span
                        className="w-4 h-4 rounded-full reveal"
                        data-delay={`${delay + 20}`}
                        style={{ background: "#4f46e5", boxShadow: "0 0 0 8px rgba(79,70,229,0.06)" }}
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

      <style>{`
        .inline-block:focus-within { outline: none; box-shadow: 0 14px 40px rgba(0,0,0,0.32); }
        .inline-block:hover .inline-flex { transform: translateY(-4px); }
      `}</style>
    </section>
  );
}