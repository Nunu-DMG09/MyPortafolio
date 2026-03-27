import React, { useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full relative overflow-hidden" ref={headerRef}>
   
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[rgba(0,0,0,0.4)] backdrop-blur-2xl border border-white/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <img src="/logo-nudav.webp" alt="Nudav Studio" className="w-22 md:w-30 lg:w-50 h-auto object-contain flex-shrink-0 grayscale brightness-200 transition-transform duration-300 hover:scale-105" />
          
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['Experiencia', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
              <li key={item} className="relative group">
                <a className="hover:text-white transition-colors py-2" href={`#${item.toLowerCase()}`} onClick={(e) => handleNav(e, `#${item.toLowerCase()}`)}>
                  {item}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#38BDF8] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Nunu-DMG09" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-[#38BDF8] transition-colors">
              <FaGithub size={24} />
            </a>
            <div className="w-px h-5 bg-white/10 mx-1"></div>
            <a href="/CV_DAVIDMESTA.pdf" download className="px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all bg-white/5 text-white border border-white/10 hover:bg-[#38BDF8] hover:border-[#38BDF8] hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              CV
            </a>
          </div>
        </nav>
      </div>

    
      <div className="w-full min-h-screen flex items-center pt-32 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          
          <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 reveal backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">Disponible para proyectos</span>
            </div>
            
            <h1 className="text-6xl md:text-[6rem] font-black tracking-tighter leading-[1] mb-6 reveal text-gradient" data-delay="100">
              David Mesta
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-light text-slate-400 mb-8 reveal leading-tight" data-delay="200">
              Ingeniería de Software & <br className="hidden md:block"/>
              <span className="font-bold text-white">Desarrollador Full Stack.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-500 max-w-lg mb-12 reveal font-light leading-relaxed" data-delay="300">
              Creo experiencias digitales inmersivas y arquitecturas escalables. Código que rinde, diseño que impacta.
            </p>
            
            <div className="flex flex-wrap gap-5 reveal justify-center md:justify-start w-full" data-delay="400">
              <a href="#proyectos" onClick={(e) => handleNav(e, "#proyectos")} className="group relative px-8 py-4 rounded-full font-bold transition-all bg-white text-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explorar Trabajo</span>
              </a>
              <a href="https://wa.me/51926700418" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full font-bold transition-all border border-white/10 text-white hover:bg-white/5 hover:border-[#38BDF8]/50">
                Contactar
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center reveal animate-float" data-delay="200">
            <div className="relative group">
            
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#4F46E5] rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-spin-slow" style={{ animation: "spin 10s linear infinite" }}></div>
              <div className="absolute inset-0 bg-[#000] rounded-[3rem] z-0"></div>
              <img
                src="/david-mesta.webp"
                alt="David Mesta"
                className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-[3rem] relative z-10 border border-white/10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}