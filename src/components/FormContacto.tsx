// src/components/FormContacto.tsx
import React, { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function FormContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Replace with your Formspree endpoint: https://formspree.io/f/your_id
  const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!name || !email || !message) {
      setErrorMsg("Por favor completa nombre, correo y mensaje.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Error al enviar, intenta más tarde.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error de red. Revisa tu conexión.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--text-100)" }}>
        Contáctame
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm mb-2" style={{ color: "var(--muted-300)" }}>Nombre</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none"
              placeholder="Tu nombre"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm mb-2" style={{ color: "var(--muted-300)" }}>Correo</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none"
              placeholder="tu@correo.com"
              required
            />
          </label>
        </div>

        <label className="flex flex-col">
          <span className="text-sm mb-2" style={{ color: "var(--muted-300)" }}>Asunto</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none"
            placeholder="Asunto (opcional)"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-2" style={{ color: "var(--muted-300)" }}>Mensaje</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-3 py-3 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] focus:outline-none min-h-[140px]"
            placeholder="Escribe tu mensaje..."
            required
          />
        </label>

        {errorMsg && <p className="text-sm" style={{ color: "#ffb4b4" }}>{errorMsg}</p>}
        {status === "success" && <p className="text-sm" style={{ color: "var(--accent-500)" }}>Mensaje enviado correctamente.</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-5 py-3 rounded-full font-medium"
            style={{
              background: "var(--accent-500)",
              color: "#000",
            }}
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          <button
            type="button"
            onClick={() => { setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus("idle"); setErrorMsg("") }}
            className="px-5 py-3 rounded-full font-medium"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text-100)",
              background: "transparent",
            }}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}