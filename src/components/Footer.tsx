import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base" style={{ color: "#9ca3af" }}>
          Desarrollado por <span style={{ color: "#22c55e", fontWeight: 600 }}>David Mesta</span> alias{" "}
          <span style={{ color: "#22c55e", fontWeight: 600 }}>Nudav Studio</span> © 2026
        </p>
      </div>
    </footer>
  );
}