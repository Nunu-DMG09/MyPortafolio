import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const halfway = (doc.scrollHeight - window.innerHeight) / 2;
      setVisible(window.scrollY > halfway);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button
        aria-label="Ir al inicio"
        onClick={goTop}
        className={`back-to-top ${visible ? "show" : ""}`}
      >
        <span className="b-ring" aria-hidden />
        <span className="b-inner" aria-hidden>
          <FaArrowUp size={20} />
        </span>
      </button>

      <style>{`
        .back-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 48px;  
          height: 48px; 
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          /* Fondo oscuro sólido y borde verde para ser muy notorio */
          background: #0f172a; 
          border: 2px solid #22c55e;
          color: #ffffff;
          cursor: pointer;
          z-index: 60;
          opacity: 0;
          transform: translateY(14px) scale(0.96);
          transition: opacity 360ms cubic-bezier(.22,.9,.27,1), transform 360ms, box-shadow 360ms, background 360ms;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .b-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.3); /* Anillo verde */
          animation: pulse 2000ms infinite;
          pointer-events: none;
        }
        .b-inner {
          position: relative;
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 8px;
        }
        .b-inner svg:first-child { color: #ffffff; transition: color 0.3s;}
        .b-inner svg:last-child { color: #22c55e; transition: color 0.3s;}
        
        .back-to-top:hover { 
          transform: translateY(-6px) scale(1.05); 
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); /* Glow verde intenso */
          background: #1e293b;
        }
        /* Cambio de colores en hover para feedback extra */
        .back-to-top:hover .b-inner svg:first-child { color: #22c55e; }
        .back-to-top:hover .b-inner svg:last-child { color: #ffffff; }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 14px rgba(34, 197, 94, 0.0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.0); }
        }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .b-ring { animation: none; }
          .back-to-top, .back-to-top.show { transition: none; }
        }
      `}</style>
    </>
  );
}