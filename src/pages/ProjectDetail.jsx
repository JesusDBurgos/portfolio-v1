import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolio";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  // Scroll al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className="text-white text-center mt-20">Proyecto no encontrado</div>
    );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 px-6 py-12 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Botón Volver */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-slate-400 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Volver al portafolio
        </button>

        {/* Encabezado del Proyecto */}
        <header className="mb-16">
          {/* IMAGEN HERO DEL PROYECTO */}
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

            {/* Título sobre la imagen (opcional, o debajo) */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="flex items-center gap-4 text-sm font-mono text-blue-400 mb-2 bg-slate-900/80 px-3 py-1 rounded inline-block">
                <span>{project.year}</span>
                <span>—</span>
                <span>{project.company}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono text-blue-400 mb-4">
            <span>{project.year}</span>
            <span>—</span>
            <span>{project.company}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.details.solution}
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-8">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white border-b border-blue-500 hover:text-blue-400 pb-1"
              >
                <Github size={18} /> Ver Código
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white border-b border-blue-500 hover:text-blue-400 pb-1"
              >
                <ExternalLink size={18} /> Ver Demo
              </a>
            )}
          </div>
        </header>

        {/* Contenido Principal */}
        <section className="space-y-16">
          {/* Stack Tecnológico */}
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700 text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* El Problema */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">El Problema</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {project.details.problem}
            </p>
          </div>

          {/* Desafíos Técnicos (Bullet points customizados) */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Desafíos Técnicos
            </h2>
            <ul className="grid gap-4">
              {project.details.challenges.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 p-4 bg-slate-800/30 rounded-lg border-l-2 border-blue-500"
                >
                  <span className="text-blue-500 font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-slate-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultado */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Resultado</h2>
            <p className="text-lg text-slate-400 leading-relaxed border-l-4 border-green-500 pl-6">
              {project.details.outcome}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
