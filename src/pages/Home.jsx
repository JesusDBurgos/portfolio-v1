import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, Server, Brain, Code, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroData, projectsData, servicesData, skillsData } from '../data/portfolio';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* HEADER / HERO */}
      <header className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-mono mb-4">Hello, world. I am {heroData.name}.</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            {heroData.role}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            {heroData.subheading}
          </p>
          
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </div>
      </header>

      {/* SECCIÓN DE SERVICIOS (Nuevo contenido) */}
      <section className="bg-slate-800/30 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-12">Mi Enfoque Técnico</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
                  {/* Renderizado condicional de iconos simples */}
                  {idx === 0 && <Server size={24} />}
                  {idx === 1 && <Brain size={24} />}
                  {idx === 2 && <Code size={24} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS CON IMÁGENES */}
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-12">Proyectos Seleccionados</h3>
        
        <div className="space-y-12">
          {projectsData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="group block">
              <article className="grid md:grid-cols-2 gap-8 items-center bg-slate-800/20 rounded-2xl p-6 hover:bg-slate-800/40 transition-all duration-300 border border-transparent hover:border-slate-700">
                
                {/* Imagen del proyecto */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Contenido Texto */}
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-blue-400 mb-3">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.company}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map(t => (
                      <span key={t} className="text-xs font-mono text-slate-500 px-2 py-1 bg-slate-900 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-bold text-white">
                    Ver caso de estudio <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* SOBRE MÍ (Nuevo contenido) */}
      <section className="py-20 px-6 border-t border-slate-800 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Sobre mí</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {heroData.about}
            </p>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-xs font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Un icono grande o tu memoji aquí */}
          <div className="text-slate-800">
            <Terminal size={120} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-600 text-sm bg-slate-950">
        <p>© 2026 {heroData.name}. Backend & AI.</p>
      </footer>
    </div>
  );
};

export default Home;