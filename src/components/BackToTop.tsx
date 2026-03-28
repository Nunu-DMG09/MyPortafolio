import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

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
    <button
      aria-label="Ir al inicio"
      onClick={goTop}
      className={`fixed right-6 bottom-6 md:right-10 md:bottom-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 z-50 backdrop-blur-xl cursor-pointer group hover:bg-[#38BDF8] hover:scale-110 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(56,189,248,0.3)" }}
    >
      <FaArrowUp size={18} className="text-[#38BDF8] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
    </button>
  );
}