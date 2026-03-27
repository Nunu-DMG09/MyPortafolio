import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-white/5 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-20 blur-sm"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        <h2 className="text-3xl font-black tracking-tighter text-white">DAVID MESTA</h2>
        <p className="text-sm font-medium text-slate-500 tracking-widest text-center uppercase">
          © {new Date().getFullYear()} Nudav Studio<br/>
        </p>
      </div>
    </footer>
  );
}