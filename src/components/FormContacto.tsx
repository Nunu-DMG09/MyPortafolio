// src/components/FormContacto.tsx
import React, { useState, useRef } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function FormContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const liveRef = useRef<HTMLParagraphElement | null>(null);

  const FORMSPREE_URL = "https://formspree.io/f/mpqqowkq";

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      setErrorMsg("El nombre solo debe contener letras y espacios.");
      setStatus("error");
      liveRef.current?.focus();
      return;
    }

    if (!name || !email || !message) {
      setErrorMsg("Por favor completa nombre, correo y mensaje.");
      setStatus("error");
      liveRef.current?.focus();
      return;
    }

    setStatus("sending");

    try {
      const payload = {
        name,
        email,
        subject,
        message,
        _replyto: email,
      };

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        resetForm();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg(data?.error || "Error al enviar, intenta más tarde.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error de red. Revisa tu conexión.");
    } finally {
      liveRef.current?.focus();
    }
  };

  return (
    <section id="contacto" className="max-w-5xl mx-auto px-6 py-32 reveal">
      <div className="glass-card rounded-[4rem] p-10 md:p-20 relative overflow-hidden bg-black/80">

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4F46E5] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#38BDF8] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">Contáctame</h2>
          <p className="text-slate-400 font-light text-lg md:text-xl">Ayudando a construir soluciones digitales innovadoras.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input value={name} onChange={(e) => setName(e.target.value)} disabled={status === "sending"} className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:bg-white/10 outline-none text-white placeholder-slate-500 transition-all font-medium text-lg shadow-inner" placeholder="Tu Nombre" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === "sending"} className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:bg-white/10 outline-none text-white placeholder-slate-500 transition-all font-medium text-lg shadow-inner" placeholder="Tu Correo" required />
          </div>
          
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} disabled={status === "sending"} className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:border-[#38BDF8] focus:bg-white/10 outline-none text-white placeholder-slate-500 min-h-[200px] transition-all font-medium resize-none text-lg shadow-inner" placeholder="Tu Mensaje" required />

          {status === "success" && <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-center font-semibold text-base backdrop-blur-md">¡Mensaje enviado a la velocidad de la luz! Gracias.</div>}
          
          <button type="submit" disabled={status === "sending"} className="w-full py-6 rounded-3xl font-black text-xl uppercase tracking-widest transition-all bg-white text-black hover:bg-[#38BDF8] hover:text-white hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] disabled:opacity-50 mt-8 group">
            <span className="group-hover:scale-105 transition-transform inline-block">
              {status === "sending" ? "Procesando Datos..." : "Enviar Mensaje"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}