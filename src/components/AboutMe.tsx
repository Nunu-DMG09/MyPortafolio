import React from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaLightbulb } from "react-icons/fa";

export default function AboutMe() {
  const interests = [
    { 
      icon: <FaCode size={24} />, 
      title: "Ingeniería de Software", 
      desc: "Escribo código limpio y mantenible aplicando buenas prácticas y arquitecturas de software sólidas para garantizar sistemas escalables.", 
      color: "#22c55e" 
    },
    { 
      icon: <FaLightbulb size={24} />, 
      title: "Consultoría y Calidad", 
      desc: "Brindo asesoría técnica a clientes para entregar soluciones de alta calidad, enfocadas en plataformas sostenibles y eficientes.", 
      color: "#4f46e5" 
    },
    { 
      icon: <FaDatabase size={24} />, 
      title: "Desarrollo Moderno", 
      desc: "Me apasiona utilizar tecnologías modernas, implementando APIs robustas, autenticación segura y gestión optimizada de bases de datos.", 
      color: "#F97316" 
    },
    { 
      icon: <FaLaptopCode size={24} />, 
      title: "Enfoque UI / UX", 
      desc: "Comprometido con el aprendizaje continuo en diseño de interfaces y experiencia de usuario para crear productos intuitivos y atractivos.", 
      color: "#06b6d4" 
    },
  ];

  return (
    <section id="sobremi" className="max-w-5xl mx-auto px-6 py-20 reveal" data-delay="120" aria-labelledby="about-title">
      <h2
        id="about-title"
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 reveal"
        data-delay="200"
        style={{ color: "#22c55e", paddingBottom: 18 }}
      >
        Sobre Mí
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {interests.map((item, idx) => {
          const base = 260 + idx * 100;
          return (
            <article
              key={idx}
              className="interest-card p-6 md:p-8 rounded-lg reveal transform transition-all duration-400"
              data-delay={`${base}`}
              style={{
                background: "#071029",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="interest-icon inline-flex items-center justify-center rounded-lg reveal"
                  data-delay={`${base + 40}`}
                  style={{
                    width: 56,
                    height: 56,
                    background: `${item.color}20`,
                    color: item.color,
                    transition: "all 320ms cubic-bezier(.22,.9,.27,1)",
                  }}
                  aria-hidden
                >
                  {item.icon}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold reveal" data-delay={`${base + 80}`} style={{ color: "#22c55e" }}>
                  {item.title}
                </h3>
              </div>

              <p className="text-sm md:text-base reveal text-left" data-delay={`${base + 120}`} style={{ color: "#ffffff", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>

      <style>{`
        .interest-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(2,6,23,0.35); }
        .interest-card:hover .interest-icon { transform: scale(1.08) rotate(5deg); box-shadow: 0 12px 30px rgba(0,0,0,0.18); }
      `}</style>
    </section>
  );
}