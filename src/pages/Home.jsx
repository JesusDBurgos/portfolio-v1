import { Server, Brain, Code } from 'lucide-react';
import { heroData, projectsData, servicesData, stackWithLogos } from '../data/portfolio';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import FloatingNav from '../components/FloatingNav';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const serviceIcons = { server: Server, brain: Brain, code: Code };

const Home = () => {

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      <FloatingNav />

      {/* --- HERO + TECH STACK --- */}
      <header id="about" className="pt-10 pb-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <Hero />
        </div>

        <section id="tecnologias">
          <TechStack stack={stackWithLogos} />
        </section>
      </header>

      {/* SECCIÓN DE SERVICIOS (Nuevo contenido) */}
      <section id="services" className="border-y border-slate-800/80 bg-slate-950/40 px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="02">Mi Enfoque Técnico</SectionHeading>
          
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-blue-300">
                De la lógica al producto
              </p>
              <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
                Sistemas útiles, desde el dato hasta la interfaz.
              </h3>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-400">
                Conecto backend, modelos y aplicaciones para que cada pieza
                resuelva una parte concreta del problema.
              </p>
              <div className="mt-8 flex items-center gap-3 font-mono text-xs text-slate-500">
                <span aria-hidden="true" className="h-px w-8 bg-blue-400" />
                BACKEND · IA · INTEGRACIÓN
              </div>
            </Reveal>

            <div className="divide-y divide-slate-800 border-y border-slate-800">
              {servicesData.map((service, idx) => {
                const Icon = serviceIcons[service.icon];

                return (
                  <Reveal
                    as="article"
                    key={service.title}
                    delay={idx * 100}
                    className="grid grid-cols-[2rem_1fr] gap-4 py-6 md:grid-cols-[3rem_1fr] md:gap-5"
                  >
                    <span className="pt-1 font-mono text-xs text-slate-500">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon aria-hidden="true" size={18} className="shrink-0 text-blue-400" />
                        <h4 className="text-lg font-semibold text-slate-100">
                          {service.title}
                        </h4>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
                        {service.desc}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase text-slate-500">
                        {service.tools.map((tool) => (
                          <li key={tool} className="flex items-center gap-2">
                            <span aria-hidden="true" className="h-1 w-1 bg-blue-400/70" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS CON IMÁGENES */}
      <main id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <SectionHeading index="03">Proyectos Seleccionados</SectionHeading>
        
        <div className="space-y-20 md:space-y-28">
          {projectsData.map((project, i) => (
            <Reveal key={project.id} delay={i * 120}>
              <ProjectCard project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-600 text-sm bg-slate-950">
        <p>© 2026 {heroData.name}. Backend & AI.</p>
      </footer>
    </div>
  );
};

export default Home;