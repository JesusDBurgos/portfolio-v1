import { useId, useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

/**
 * ProjectCard
 * - La imagen y el texto se superponen y se alternan de lado (prop `reverse`).
 * - Los `details` del proyecto (problema, solución, retos, resultado) se
 *   despliegan al pulsar "Ver detalles".
 * - Solo usa clases core de Tailwind v3 + lucide-react (Github, ExternalLink, ChevronDown).
 */
const ProjectCard = ({ project, reverse = false }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const description = project.description ?? project.shortDescription;
  const innovations = project.innovations ?? [];
  const stack = project.stack ?? [];
  const links = project.links ?? {};
  const details = project.details;
  const hasDetails = Boolean(
    details &&
      (details.problem ||
        details.solution ||
        details.outcome ||
        details.challenges?.length)
  );

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

  return (
    <article className="group mb-20 grid grid-cols-1 items-center md:mb-28 md:grid-cols-12">
      {/* Imagen */}
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-3xl bg-white/5 md:row-start-1 ${
          reverse ? "md:col-start-6 md:col-end-13" : "md:col-start-1 md:col-end-8"
        }`}
      >
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      {/* Panel de texto */}
      <div
        className={`relative z-10 mx-4 -mt-10 rounded-2xl bg-black/60 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md md:mx-0 md:mt-0 md:row-start-1 md:p-8 ${
          reverse ? "md:col-start-1 md:col-end-8" : "md:col-start-6 md:col-end-13"
        }`}
      >
        <h3 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          {project.title}
        </h3>

        {description && (
          <p className="mt-3 max-w-prose leading-relaxed text-slate-400">
            {description}
          </p>
        )}

        {innovations.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {innovations.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {stack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Acciones */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-400 ${focusRing}`}
            >
              <Github size={16} /> Ver código
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/15 transition-colors hover:bg-white/5 ${focusRing}`}
            >
              <ExternalLink size={16} /> Ver demo
            </a>
          )}
          {hasDetails && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-100 ${focusRing}`}
            >
              {open ? "Ocultar detalles" : "Ver detalles"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 motion-reduce:transition-none ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Detalles desplegables */}
        {hasDetails && (
          <div
            id={panelId}
            aria-hidden={!open}
            className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <dl className="space-y-5 border-t border-white/10 pt-6 text-sm leading-relaxed">
                {details.problem && (
                  <div>
                    <dt className="font-medium text-slate-100">Problema</dt>
                    <dd className="mt-1 text-slate-400">{details.problem}</dd>
                  </div>
                )}
                {details.solution && (
                  <div>
                    <dt className="font-medium text-slate-100">Solución</dt>
                    <dd className="mt-1 text-slate-400">{details.solution}</dd>
                  </div>
                )}
                {details.challenges?.length > 0 && (
                  <div>
                    <dt className="font-medium text-slate-100">Retos</dt>
                    <dd className="mt-1">
                      <ul className="space-y-1.5 text-slate-400">
                        {details.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {details.outcome && (
                  <div>
                    <dt className="font-medium text-slate-100">Resultado</dt>
                    <dd className="mt-1 text-slate-400">{details.outcome}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;