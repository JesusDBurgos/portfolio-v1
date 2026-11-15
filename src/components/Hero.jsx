import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

/**
 * Edita SOLO este objeto para cambiar el contenido del home.
 * (Nombre y textos son propuestas: ajústalos a tu gusto.)
 */
const profile = {
  name: "Jesús Burgos",
  label: "Desarrollador",
  role: "Software con visión por computador y lenguaje natural.",
  intro:
    "Desarrollo APIs, chatbots y sistemas de análisis de imágenes. Abajo están los proyectos en los que he trabajado.",
  // Colores tomados de las clases de lesiones de RD_API (amarillo, verde, azul, rosa, morado)
  focus: [
    { label: "Visión por computador", color: "bg-emerald-400" },
    { label: "Chatbots", color: "bg-pink-300" },
    { label: "APIs REST", color: "bg-sky-400" },
    { label: "Frontend", color: "bg-yellow-300" },
  ],
  github: "https://github.com/JesusDBurgos",
  linkedin: "https://www.linkedin.com/in/jesus-burgos/",
  email: "jesusdburgos@gmail.com", 
  projectsId: "projects", // id de la sección de proyectos
};

const Hero = () => {
  // Un único momento animado: la "caja de detección" se dibuja al cargar.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  const corner = "absolute h-2 w-2 bg-blue-400";

  return (
    <section className="py-16 md:py-24">
      <div>
        {/* Nombre dentro de una caja de detección, como en un modelo de visión */}
        <div
          className={`relative inline-block border border-blue-400/70 px-5 py-4 transition-all duration-700 ease-out motion-reduce:transition-none md:px-8 md:py-6 ${
            ready ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"
          }`}
        >
          <span className="absolute -top-[26px] -left-px bg-blue-400 px-2 py-1 text-xs font-semibold text-slate-950">
            {profile.label}
          </span>
          <span className={`${corner} -top-1 -left-1`} />
          <span className={`${corner} -top-1 -right-1`} />
          <span className={`${corner} -bottom-1 -left-1`} />
          <span className={`${corner} -bottom-1 -right-1`} />

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-50 sm:text-6xl md:text-8xl">
            {profile.name}
          </h1>
        </div>

        <p className="mt-10 max-w-2xl text-2xl font-medium leading-snug text-slate-200 md:text-3xl">
          {profile.role}
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          {profile.intro}
        </p>

        {/* Áreas de trabajo, con los colores de las clases detectadas */}
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {profile.focus.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm text-slate-300"
            >
              <span className={`h-2.5 w-2.5 rounded-sm ${item.color}`} />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`#${profile.projectsId}`}
            className={`inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-400 ${focusRing}`}
          >
            Ver proyectos <ArrowDown size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/15 transition-colors hover:bg-white/5 ${focusRing}`}
          >
            <Github size={16} /> GitHub
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/15 transition-colors hover:bg-white/5 ${focusRing}`}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100 ${focusRing}`}
            >
              <Mail size={16} /> Escríbeme
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;