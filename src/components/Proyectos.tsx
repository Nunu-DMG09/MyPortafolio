import React, { useState } from "react";

type Project = {
  id: number;
  title: string;
  image: string;
  techs: string[];
  repo?: string;
  demo?: string;
  type: "colaborativo" | "personal";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto A",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=1",
    techs: ["React", "TypeScript", "Tailwind"],
    repo: "#",
    demo: "#",
    type: "personal",
  },
  {
    id: 2,
    title: "Proyecto B",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=2",
    techs: ["Next.js", "Prisma", "Postgres"],
    repo: "#",
    demo: "#",
    type: "colaborativo",
  },
  {
    id: 3,
    title: "Proyecto C",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=3",
    techs: ["Astro", "MDX"],
    repo: "#",
    demo: "#",
    type: "personal",
  },
  {
    id: 4,
    title: "Proyecto D",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=4",
    techs: ["React", "GraphQL"],
    repo: "#",
    demo: "#",
    type: "colaborativo",
  },
  {
    id: 5,
    title: "Proyecto E",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=5",
    techs: ["Vue", "Tailwind"],
    repo: "#",
    demo: "#",
    type: "personal",
  },
  {
    id: 6,
    title: "Proyecto F",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=6",
    techs: ["Node", "Express"],
    repo: "#",
    demo: "#",
    type: "colaborativo",
  },
  {
    id: 7,
    title: "Proyecto G",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=7",
    techs: ["React", "Vite"],
    repo: "#",
    demo: "#",
    type: "personal",
  },
  {
    id: 8,
    title: "Proyecto H",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=8",
    techs: ["Svelte", "Netlify"],
    repo: "#",
    demo: "#",
    type: "colaborativo",
  },
  {
    id: 9,
    title: "Proyecto I",
    image: "https://source.unsplash.com/collection/190727/800x600?sig=9",
    techs: ["TypeScript", "Tailwind"],
    repo: "#",
    demo: "#",
    type: "personal",
  },
];

export default function Projectos() {
  const [filter, setFilter] = useState<"all" | "colaborativo" | "personal">("all");

  const visible = projects.filter((p) => (filter === "all" ? true : p.type === filter));

  return (
    <section className="max-w-6xl mx-auto px-6 py-16" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-2xl font-bold text-center mb-4" style={{ color: "var(--text-100)" }}>
        Proyectos
      </h2>

      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "all" ? "shadow-md" : "opacity-80"}`}
          style={{
            background: filter === "all" ? "var(--accent-500)" : "transparent",
            color: filter === "all" ? "#000" : "var(--text-100)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("colaborativo")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "colaborativo" ? "shadow-md" : "opacity-80"}`}
          style={{
            background: filter === "colaborativo" ? "var(--accent-500)" : "transparent",
            color: filter === "colaborativo" ? "#000" : "var(--text-100)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          Colaborativos
        </button>
        <button
          onClick={() => setFilter("personal")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${filter === "personal" ? "shadow-md" : "opacity-80"}`}
          style={{
            background: filter === "personal" ? "var(--accent-500)" : "transparent",
            color: filter === "personal" ? "#000" : "var(--text-100)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          Personales
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <article key={p.id} className="bg-[rgba(255,255,255,0.02)] rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-44 sm:h-52 md:h-48 lg:h-56">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold" style={{ color: "var(--text-100)" }}>{p.title}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,0.03)]"
                    style={{ color: "var(--muted-300)" }}
                  >
                    <span className="w-3 h-3 rounded-full bg-[var(--accent-500)] inline-block" aria-hidden />
                    <span>{t}</span>
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-md text-sm font-medium"
                  style={{ background: "transparent", color: "var(--text-100)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  Repo
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-md text-sm font-medium"
                  style={{ background: "var(--accent-500)", color: "#000" }}
                >
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}