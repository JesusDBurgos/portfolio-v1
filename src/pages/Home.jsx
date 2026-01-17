import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, Server, Brain, Code, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroData, projectsData, servicesData, skillsData, stackWithLogos } from '../data/portfolio';

const Home = () => {

  // Función para scroll suave al dar clic en el menú
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* --- 1. NAVBAR FIXED --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-white tracking-tighter">
            JesusBurgos<span className="text-blue-500">.</span>dev
          </span>
          
          <ul className="flex gap-6 text-sm font-medium text-slate-400">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">Sobre mí</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Servicios</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Proyectos</button></li>
          </ul>
        </div>
      </nav>

      {/* --- 2. HERO + ABOUT + TECH STACK --- */}
      <header id="about" className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-mono mb-6">Hola, mundo. Soy {heroData.name}.</p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            {heroData.role}
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-12">
            {heroData.description}
          </p>
          
          <div className="flex gap-6 text-slate-400 mb-16">
            <a href={heroData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href={heroData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href={heroData.socialLinks.email} className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>

          {/* TECH STACK LOGOS */}
          <div>
            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-6">Tecnologías principales</h3>
            <div className="flex flex-wrap gap-8 items-center grayscale hover:grayscale-0 transition-all duration-500">
              {stackWithLogos.map((tech) => (
                <div key={tech.name} className="group relative flex flex-col items-center gap-2">
                  <img src={tech.url} alt={tech.name} className="h-10 w-10 md:h-12 md:w-12 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute -bottom-6 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </header>

      {/* SECCIÓN DE SERVICIOS (Nuevo contenido) */}
      <section id="services" className="bg-slate-800/30 py-20 px-6">
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
      <main id="projects" className="max-w-5xl mx-auto px-6 py-24">
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

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-600 text-sm bg-slate-950">
        <p>© 2026 {heroData.name}. Backend & AI.</p>
      </footer>
    </div>
  );
};

export default Home;