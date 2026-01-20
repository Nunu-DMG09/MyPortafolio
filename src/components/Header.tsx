import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className="w-full relative" ref={headerRef} style={{ fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" }}>
      <nav className="max-w-6xl mx-auto px-4 py-1 md:py-2 flex items-center">
        <img
          src="/logo-nudav.webp"
          alt="Nudav Studio"
          className="w-40 md:w-48 lg:w-56 h-auto object-contain flex-shrink-0"
          style={{ display: "block" }}
        />

        <div className="hidden md:flex items-center flex-1 justify-end">
          <ul className="flex items-center gap-8 text-base" style={{ color: "#ffffff" }}>
            <li>
              <a className="hover:text-[var(--text-100)] reveal" data-delay="150" href="#experience" onClick={(e) => handleNav(e, "#experience")} style={{ color: "#ffffff" }}>
                Experiencia
              </a>
            </li>
            <li>
              <a className="hover:text-[var(--text-100)] reveal" data-delay="200" href="#projects" onClick={(e) => handleNav(e, "#projects")} style={{ color: "#ffffff" }}>
                Proyectos
              </a>
            </li>
            <li>
              <a className="hover:text-[var(--text-100)] reveal" data-delay="300" href="#about" onClick={(e) => handleNav(e, "#about")} style={{ color: "#ffffff" }}>
                Sobre mí
              </a>
            </li>
            <li>
              <a className="hover:text-[var(--text-100)] reveal" data-delay="300" href="#contact" onClick={(e) => handleNav(e, "#contact")} style={{ color: "#ffffff" }}>
                Contacto
              </a>
            </li>
          </ul>

          <div className="ml-8 flex items-center">
            <a
              href="https://github.com/Nunu-DMG09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:opacity-90 reveal"
              data-delay="500"
              style={{ display: "inline-flex", alignItems: "center", color: "#ffffff", gap: 8 }}
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </nav>

      <div className="w-full min-h-[64vh] flex items-center py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-2">
            <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start md:mr-2 relative">
              <div style={{ display: "inline-block", borderRadius: "9999px", padding: 6 }}>
                <img
                  src="/david-mesta.webp"
                  alt="Foto de Luis David"
                  className="w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 reveal header-avatar"
                  data-delay="600"
                  style={{ borderColor: "#4f46e5" }}
                />
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-right">
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tight reveal"
                data-delay="700"
                style={{ color: "#22c55e", fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial", marginBottom: 8 }}
              >
                David Mesta
              </h1>

              <p
                className="mt-0 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 reveal"
                data-delay="720"
                style={{ color: "#ffffff", opacity: 0.95 }}
              >
                Desarrollador Full Stack
              </p>

              <h3
                className="mt-4 text-base md:text-lg lg:text-xm max-w-2xl mx-auto md:mx-0 reveal"
                data-delay="800"
                style={{ color: "#ffffff" }}
              >
                Apasionado en escribir código, aplicando arquitecturas y código limpio. Me enfoco en crear
                soluciones mantenibles y eficientes usando buenas prácticas y colaboración en equipo. Énfasis en rendimiento, accesibilidad y escalabilidad.
              </h3>

              <div className="mt-8 flex items-center justify-center md:justify-end gap-4">
                <a
                  href="/CV_DAVIDMESTA.pdf"
                  download
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium shadow-sm reveal"
                  data-delay="900"
                  style={{ background: "#4f46e5", color: "#ffffff" }}
                >
                  Descargar mi CV
                </a>
                <a
                  href="mailto:davidmesta09@gmail.com"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium reveal"
                  data-delay="1000"
                  style={{
                    border: "1px solid #22c55e",
                    color: "#22c55e",
                    background: "transparent",
                  }}
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .header-avatar {
          transition: box-shadow 360ms cubic-bezier(.22,.9,.27,1), transform 360ms cubic-bezier(.22,.9,.27,1);
          box-shadow: 0 10px 30px rgba(79,70,229,0.16), 0 0 18px rgba(79,70,229,0.10);
          border: 3px solid #4f46e5;
        }
        .header-avatar:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 80px rgba(79,70,229,0.22), 0 0 40px rgba(79,70,229,0.16);
        }
      `}</style>
    </header>
  );
}