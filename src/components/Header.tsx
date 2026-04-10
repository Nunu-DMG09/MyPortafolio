import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    if (id === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    
    <header className="w-full relative" ref={headerRef} id="top">
      
      
      <div className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[rgba(0,0,0,0.85)] backdrop-blur-2xl border border-white/10 rounded-full px-5 py-3 flex items-center justify-between w-full max-w-5xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          
        
          <a href="#top" onClick={(e) => handleNav(e, "#top")} className="cursor-pointer flex-shrink-0 group z-[110]">
            <img 
              src="/logo-nudav.webp" 
              alt="Nudav Studio" 
              className="w-16 md:w-20 lg:w-24 h-auto object-contain grayscale brightness-200 transition-transform duration-300 group-hover:scale-110" 
            />
          </a>
          
      
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['Experiencia', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
              <li key={item} className="relative group">
                <a className="cursor-pointer hover:text-white transition-colors py-2 block" href={`#${item.toLowerCase()}`} onClick={(e) => handleNav(e, `#${item.toLowerCase()}`)}>
                  {item}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#38BDF8] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Nunu-DMG09" target="_blank" rel="noreferrer" className="cursor-pointer text-slate-300 hover:text-[#38BDF8] transition-colors">
              <FaGithub size={22} />
            </a>
            <div className="w-px h-5 bg-white/10 mx-1"></div>
            <a href="/CV_DAVIDMESTA.pdf" download className="cursor-pointer px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all bg-white/5 text-white border border-white/10 hover:bg-[#38BDF8] hover:border-[#38BDF8] hover:text-black hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              CV
            </a>
          </div>

        
          <button 
            type="button"
            className="md:hidden text-white cursor-pointer p-3 -mr-2 relative z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} className="text-[#38BDF8]" /> : <FaBars size={24} />}
          </button>
        </nav>
      </div>

     
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[90] transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-slate-300 w-full px-6">
            {['Experiencia', 'Proyectos', 'Habilidades', 'Contacto'].map((item) => (
              <li key={item} className="w-full text-center">
                <a className="cursor-pointer block w-full py-3 hover:text-[#38BDF8] transition-colors" href={`#${item.toLowerCase()}`} onClick={(e) => handleNav(e, `#${item.toLowerCase()}`)}>
                  {item}
                </a>
              </li>
            ))}
        </ul>
        <div className="flex flex-col items-center gap-6 mt-4">
          <a href="https://github.com/Nunu-DMG09" target="_blank" rel="noreferrer" className="cursor-pointer text-slate-300 hover:text-[#38BDF8] transition-colors flex items-center gap-3">
            <FaGithub size={28} /> <span className="text-lg font-medium">GitHub</span>
          </a>
          <a href="/CV_DAVIDMESTA.pdf" download className="cursor-pointer px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase bg-[#38BDF8] text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            Descargar CV
          </a>
        </div>
      </div>

      {/* CONTENIDO HERO (Para evitar problemas de overflow, lo encapsulamos solo a este div) */}
      <div className="w-full min-h-[90vh] flex items-center pt-24 pb-8 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 reveal backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">Disponible para proyectos</span>
            </div>
            
            <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[1.1] mb-4 reveal text-gradient">
              David Mesta
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light text-slate-400 mb-6 reveal leading-tight">
              <span className="font-bold text-white">Ingeniería de Software</span> & <br className="hidden md:block"/>
              <span className="font-bold text-white">Desarrollador Full Stack.</span>
            </h2>
            
            <p className="text-base md:text-lg text-slate-500 max-w-lg mb-10 reveal font-light leading-relaxed">
              Creo experiencias digitales inmersivas y arquitecturas escalables. Código que rinde, diseño que impacta.
            </p>
            
            <div className="flex flex-wrap gap-4 reveal justify-center md:justify-start w-full">
              <a href="#proyectos" onClick={(e) => handleNav(e, "#proyectos")} className="cursor-pointer group relative px-8 py-4 rounded-full font-bold transition-all bg-white text-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explorar Trabajo</span>
              </a>
              <a href="https://wa.me/51926700418" target="_blank" rel="noreferrer" className="cursor-pointer px-8 py-4 rounded-full font-bold transition-all border border-white/10 text-white hover:bg-white/5 hover:border-[#38BDF8]/50">
                Contactar
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center reveal animate-float">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#4F46E5] rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000 animate-spin-slow" style={{ animation: "spin 10s linear infinite" }}></div>
              <div className="absolute inset-0 bg-[#000] rounded-[3rem] z-0"></div>
              <img
                src="/david-mesta-2.webp"
                alt="David Mesta"
                className="w-56 h-56 md:w-[380px] md:h-[380px] object-cover rounded-[3rem] relative z-10 border border-white/10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}