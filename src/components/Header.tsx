import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <header className="w-full relative" ref={headerRef}>
      <nav className="max-w-6xl mx-auto px-4 py-1 md:py-2 flex items-center">
        <img
          src="/logo-nudav.webp"
          alt="Nudav Studio"
          className="w-40 md:w-48 lg:w-56 h-auto object-contain flex-shrink-0"
          style={{ display: "block" }}
        />

        <ul className="hidden md:flex items-center flex-1 justify-end gap-4 text-base" style={{ color: "#ffffff" }}>
          <li>
            <a className="hover:text-[var(--text-100)] reveal" data-delay="150" href="#experience">
              Experiencia
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-100)] reveal" data-delay="200" href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-100)] reveal" data-delay="300" href="#about">
              Sobre mí
            </a>
          </li>
          <li className="flex items-center gap-4">
            <a className="hover:text-[var(--text-100)] reveal" data-delay="400" href="#contact">
              Contacto
            </a>
            <a
              href="https://github.com/Nunu-DMG09"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:opacity-90 ml-3 reveal"
              data-delay="500"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="w-full min-h-[64vh] flex items-center py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-2">
            <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start md:mr-2 relative">
              <img
                src="/david-mesta.webp"
                alt="Foto de Luis David"
                className="w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 reveal"
                data-delay="600"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              />
            </div>

            <div className="md:w-2/3 text-center md:text-right">
              <h1
                className="text-4xl md:text-7xl lg:text-5xl font-extrabold leading-tight reveal"
                data-delay="700"
                style={{ color: "var(--text-100)" }}
              >
                Luis David Mesta Gonzales
              </h1>

              <h3
                className="mt-4 text-base md:text-lg lg:text-xm max-w-2xl mx-auto md:mx-0 reveal"
                data-delay="800"
                style={{ color: "var(--muted-300)" }}
              >
                Apasionado en escribir código, aplicando arquitecturas y código limpio. Me enfoco en crear
                soluciones mantenibles y eficientes usando buenas prácticas y colaboración en equipo. Énfasis en rendimiento, accesibilidad y escalabilidad.
              </h3>

              <div className="mt-8 flex items-center justify-center md:justify-end gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium shadow-sm reveal"
                  data-delay="900"
                  style={{ background: "var(--text-100)", color: "#000" }}
                >
                  Descargar mi CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium reveal"
                  data-delay="1000"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-100)",
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
    </header>
  );
}