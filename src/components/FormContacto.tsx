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
    <section id="contacto" className="max-w-3xl mx-auto px-6 py-12 reveal" data-delay="140" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-3xl md:text-4xl font-extrabold mb-12 text-center reveal" data-delay="200" style={{ color: "#22c55e" }}>
        Contáctame
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 reveal" data-delay="260" style={{ background: "rgba(11,17,29,0.6)", padding: 20, borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col reveal" data-delay="320">
            <span className="text-sm mb-2" style={{ color: "#9ca3af" }}>Nombre</span>
            <input value={name} onChange={(e) => setName(e.target.value)} disabled={status === "sending"} className="px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none" placeholder="Tu nombre" required />
          </label>

          <label className="flex flex-col reveal" data-delay="360">
            <span className="text-sm mb-2" style={{ color: "#9ca3af" }}>Correo</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === "sending"} className="px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none" placeholder="tu@correo.com" required />
          </label>
        </div>

        <label className="flex flex-col reveal" data-delay="400">
          <span className="text-sm mb-2" style={{ color: "#9ca3af" }}>Asunto</span>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} disabled={status === "sending"} className="px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none" placeholder="Asunto (opcional)" />
        </label>

        <label className="flex flex-col reveal" data-delay="440">
          <span className="text-sm mb-2" style={{ color: "#9ca3af" }}>Mensaje</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} disabled={status === "sending"} className="px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none min-h-[160px]" placeholder="Escribe tu mensaje..." required />
        </label>

        <div aria-live="polite" tabIndex={-1} ref={liveRef} className="reveal" data-delay="520">
          {status === "success" && <p className="text-sm" style={{ color: "#22c55e" }}>Mensaje enviado correctamente, Muchas gracias por comunicarte con Nudav Studio.</p>}
          {status === "error" && errorMsg && <p className="text-sm" style={{ color: "#ffb4b4" }}>{errorMsg}</p>}
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={status === "sending"} className="px-6 py-3 rounded-full font-medium reveal" data-delay="580" style={{ background: "linear-gradient(90deg,#22c55e,#16a34a)", color: "#000", boxShadow: "0 10px 30px rgba(34,197,94,0.14)" }}>
            {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          <button type="button" onClick={() => { setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus("idle"); setErrorMsg(""); }} className="px-6 py-3 rounded-full font-medium reveal" data-delay="620" style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#ffffff", background: "transparent" }}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}