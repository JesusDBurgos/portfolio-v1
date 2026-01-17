import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-12 relative pl-8 border-l border-slate-700 hover:border-blue-500 transition-colors duration-300">
      {/* Icono decorativo en la línea de tiempo */}
      <div className="absolute -left-3 top-0 bg-slate-900 text-blue-500 rounded-full p-1">
        <Code2 size={20} />
      </div>

      <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 text-lg">{project.description}</p>
      
      {/* Lista de Innovaciones (Bullet points) */}
      <ul className="mb-4 space-y-2">
        {project.innovations.map((item, index) => (
          <li key={index} className="flex items-start text-slate-300 text-sm">
            <span className="mr-2 text-blue-500">▹</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Stack Tecnológico */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 font-mono">
            {tech}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        {project.links.repo && (
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            <Github size={16} /> Ver Código
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;