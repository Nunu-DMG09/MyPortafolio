import React from "react";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded flex items-center justify-center font-bold"
            style={{ background: "var(--accent-500)" }}
            aria-hidden
          >
            A
          </div>
          <span className="font-semibold text-lg" style={{ color: "var(--text-100)" }}>
            Mi Portafolio
          </span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm" style={{ color: "var(--muted-300)" }}>
          <li><a className="hover:text-[var(--text-100)]" href="#projects">Proyectos</a></li>
          <li><a className="hover:text-[var(--text-100)]" href="#about">Sobre mí</a></li>
          <li><a className="hover:text-[var(--text-100)]" href="#contact">Contacto</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full text-sm" style={{ color: "var(--text-100)", border: "1px solid rgba(255,255,255,0.06)" }}>
            Docs
          </button>
          <button className="px-4 py-2 rounded-full text-sm" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-100)" }}>
            Contacto
          </button>
        </div>
      </nav>

    
      <div className="w-full py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: "var(--text-100)" }}>
            The web framework for content-driven websites
          </h1>
          <p className="mt-6" style={{ color: "var(--muted-300)" }}>
            Astro powers the world's fastest marketing sites, blogs, e-commerce websites, and more.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-full font-medium" style={{ background: "var(--text-100)", color: "#000" }}>
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full font-medium" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-100)" }}>
              Learn Astro
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}