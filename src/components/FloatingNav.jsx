import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github } from "lucide-react";

/**
 * Edita SOLO esto para cambiar la navegación.
 * `id` es el id de la sección en el home (ej. <section id="proyectos">).
 */
const name = "Jesús Burgos";
const github = "https://github.com/JesusDBurgos";
const links = [
    { label: "Tecnologías", id: "tecnologias" },
    { label: "Proyectos", id: "projects" },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FloatingNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  // Mientras dura el scroll provocado por un clic, no recalculamos la sección activa.
  const lockUntil = useRef(0);
  const isHome = pathname === "/";

  // Calcula la sección activa según el scroll (sirve también para la última sección).
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return undefined;
    }

    const update = () => {
      if (Date.now() < lockUntil.current) return;
      const elements = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);
      if (elements.length === 0) return;

      const line = window.innerHeight * 0.35;
      let current = null;
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = elements[elements.length - 1].id;

      setActive(current);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };

  const goToSection = (id) => (e) => {
    e.preventDefault();
    // Marca la sección elegida al instante y bloquea el recálculo mientras dura el scroll.
    setActive(id);
    lockUntil.current = Date.now() + 1000;
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  const goTop = () => {
    if (isHome) {
      setActive(null);
      lockUntil.current = Date.now() + 1000;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav
        aria-label="Principal"
        className="pointer-events-auto flex max-w-full items-center gap-1 rounded-full bg-black/50 p-1.5 shadow-lg shadow-black/30 ring-1 ring-white/10 backdrop-blur-md"
      >
        <Link
          to="/"
          onClick={goTop}
          aria-label="Ir al inicio"
          className={`hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:text-white sm:block ${focusRing}`}
        >
          {name}
        </Link>

        <ul className="flex items-center">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={goToSection(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors md:px-4 ${focusRing} ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-sm bg-blue-400" />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`hidden h-9 w-9 shrink-0 place-items-center rounded-full text-slate-400 transition-colors hover:text-white sm:grid ${focusRing}`}
        >
          <Github size={18} />
        </a>
      </nav>
    </header>
  );
};

export default FloatingNav;