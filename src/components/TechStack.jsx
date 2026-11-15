import SectionHeading from "./SectionHeading";

/**
 * TechStack con logos.
 * Uso:  <TechStack stack={stackWithLogos} />
 * Cada elemento de `stack` es { name, url } (igual que tu stackWithLogos actual).
 *
 * Al pasar el mouse o enfocar con teclado sobre un logo aparece una "caja de
 * detección" con el nombre, igual que la del hero.
 */
const TechStack = ({ stack = [] }) => {
  const corner = "absolute h-1.5 w-1.5 bg-blue-400";

  return (
    <div>
      <SectionHeading index="01">Tecnologías principales</SectionHeading>

      <ul className="flex flex-wrap items-center gap-x-6 gap-y-10 md:gap-x-8">
        {stack.map((tech) => (
          <li key={tech.name}>
            <div
              tabIndex={0}
              className="group relative rounded-sm p-3 outline-none"
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="h-10 w-10 transition duration-300 group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none md:h-12 md:w-12"
              />

              {/* Caja de detección (decorativa; el nombre ya está en el alt) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 scale-95 border border-blue-400/70 opacity-0 transition duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
              >
                <span className="absolute -top-[22px] -left-px whitespace-nowrap bg-blue-400 px-2 py-0.5 text-xs font-semibold text-slate-950">
                  {tech.name}
                </span>
                <span className={`${corner} -top-[3px] -left-[3px]`} />
                <span className={`${corner} -top-[3px] -right-[3px]`} />
                <span className={`${corner} -bottom-[3px] -left-[3px]`} />
                <span className={`${corner} -bottom-[3px] -right-[3px]`} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;