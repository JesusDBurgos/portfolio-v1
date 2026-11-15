# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Jesús Burgos | Portfolio

Portfolio personal de **Jesús Burgos**, desarrollador enfocado en backend e inteligencia artificial aplicada. El sitio reúne proyectos, tecnologías y áreas de trabajo en una interfaz adaptable a escritorio y móvil.

## Contenido

- Presentación y navegación flotante con enlaces a tecnologías, proyectos y perfiles profesionales.
- Stack tecnológico con iconos de cada herramienta.
- Sección de enfoque técnico: backend, IA aplicada, APIs e integración.
- Proyectos con descripción, tecnologías, enlaces a repositorios y detalles desplegables sobre problema, solución, retos y resultado.

### Proyectos destacados

- **Diagnóstico de Retinopatía:** prototipo de análisis de imágenes de fondo de ojo con clasificación, detección y segmentación. [Ver repositorio](https://github.com/JesusDBurgos/RD_API).
- **Asistente Virtual Académico:** plataforma con chatbot conversacional y detección facial, desarrollada en equipo. [Ver repositorio](https://github.com/Ivandjt226/Z_Django).

## Tecnologías

- React 19 y React Router
- Vite 7
- Tailwind CSS 4
- Lucide React

## Requisitos

- Node.js 20.19 o posterior, o 22.12 o posterior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Clona el repositorio y ejecuta estos comandos desde su carpeta. Vite mostrará en la terminal la dirección local para abrir el sitio.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada. |

## Personalización

- Edita los proyectos, servicios y tecnologías en `src/data/portfolio.js`.
- Ajusta la presentación en `src/components/Hero.jsx`.
- Actualiza los enlaces de navegación y redes en `src/components/FloatingNav.jsx`.
- Modifica la composición de la página en `src/pages/Home.jsx`.

## Despliegue

El proyecto puede desplegarse en plataformas compatibles con Vite. El build de producción es `npm run build` y sus archivos se generan en `dist/`. El archivo `vercel.json` incluye la reescritura necesaria para servir la aplicación de una sola página en Vercel.

## Autor

[Jesús Burgos en GitHub](https://github.com/JesusDBurgos) · [LinkedIn](https://www.linkedin.com/in/jesus-burgos/)
