import React from 'react';
import { Mail, Github, Linkedin, ArrowRight, Server, Brain, Code, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroData, projectsData, servicesData, skillsData, stackWithLogos } from '../data/portfolio';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import FloatingNav from '../components/FloatingNav';

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
      
      <FloatingNav />

      {/* --- 2. HERO + ABOUT + TECH STACK --- */}
      <header id="about" className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <Hero />
        </div>

        {/* TECH STACK LOGOS */}
        <section id="tecnologias">
          <TechStack stack={stackWithLogos} />
        </section>
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
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
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