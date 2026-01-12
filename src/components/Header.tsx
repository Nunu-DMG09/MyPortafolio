import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="w-11 h-11 rounded flex items-center justify-center font-bold"
            style={{ background: "var(--accent-500)" }}
            aria-hidden
          >
            ND
          </div>
          <span className="font-semibold text-lg" style={{ color: "var(--text-100)" }}>
            NuDav
          </span>
        </div>

        <ul className="hidden md:flex gap-8 text-xl" style={{ color: "#ffffff" }}>
          <li>
            <a className="hover:text-[var(--text-100)]" href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a className="hover:text-[var(--text-100)]" href="#about">
              Sobre mí
            </a>
          </li>
          <li className="flex items-center gap-4">
            <a className="hover:text-[var(--text-100)]" href="#contact">
              Contacto
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:opacity-90 ml-3"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <FaGithub size={28} />
            </a>
          </li>
        </ul>
      </nav>

      <hr className="border-t border-[rgba(255,255,255,0.06)] mt-2" />

      <div className="w-full min-h-[72vh] flex items-center py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-4">
            <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start md:mr-4">
              <img
                src="/david-mesta.webp"
                alt="Foto de Luis David"
                className="w-44 h-44 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              />
            </div>

            <div className="md:w-2/3 text-center md:text-right">
              <h1
                className="text-4xl md:text-7xl lg:text-5xl font-extrabold leading-tight"
                style={{ color: "var(--text-100)" }}
              >
                Luis David Mesta Gonzales
              </h1>

              <h3
                className="mt-4 text-base md:text-lg lg:text-xm max-w-2xl mx-auto md:mx-0"
                style={{ color: "var(--muted-300)" }}
              >
                Apasionado en escribir código, aplicando arquitecturas y código limpio. Me enfoco en crear
                soluciones mantenibles y eficientes usando buenas prácticas y colaboración en equipo. Énfasis en rendimiento, accesibilidad y escalabilidad.
              </h3>

              <div className="mt-8 flex items-center justify-center md:justify-end gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium shadow-sm"
                  style={{ background: "var(--text-100)", color: "#000" }}
                >
                  Descargar mi CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-full text-base font-medium"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-100)", background: "transparent" }}
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