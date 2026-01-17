export const heroData = {
  name: "Jesús Burgos",
  role: "Backend Developer & AI Enthusiast",
  description: "Desarrollador Backend enfocado en Python. Disfruto construyendo la lógica detrás de las aplicaciones y explorando cómo integrar Inteligencia Artificial en soluciones funcionales. Mi enfoque está en el código que no se ve pero hace que todo funcione. Tras un periodo de profundización en arquitecturas modernas, construyo software robusto entendiendo el 'cómo' y el 'por qué' de las cosas.",
  socialLinks: {
    github: "https://github.com/TU_USUARIO",
    linkedin: "https://linkedin.com/in/TU_USUARIO",
    email: "mailto:tu@email.com"
  }
};

export const projectsData = [
  {
    id: "chatbot-unab",
    title: "Asistente Virtual Académico",
    shortDescription: "Chatbot inteligente para automatizar la orientación en Ing. Mecatrónica.",
    // Usamos una imagen abstracta de tecnología por ahora
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
    company: "UNAB",
    stack: ["Python", "Dialogflow", "React", "PostgreSQL"],
    details: {
      problem: "La facultad recibía cientos de correos repetitivos sobre mallas curriculares y requisitos.",
      solution: "Sistema conversacional capaz de interpretar lenguaje natural y consultar requisitos académicos en tiempo real.",
      challenges: [
        "Diseñar un flujo de diálogo que manejara interrupciones.",
        "Integrar la API de la universidad (Legacy).",
        "Reducir la latencia de respuesta a menos de 200ms."
      ],
      outcome: "Reducción del 40% en consultas presenciales."
    },
    links: { repo: "https://github.com/...", demo: null }
  },
  {
    id: "retinopatia-ia",
    title: "Diagnóstico de Retinopatía",
    shortDescription: "Sistema de visión por computador para detectar lesiones en retinas.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
    company: "Personal",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    details: {
      problem: "El diagnóstico temprano requiere expertos no siempre disponibles.",
      solution: "Pipeline de Deep Learning que pre-procesa imágenes y detecta anomalías.",
      challenges: [
        "Normalizar imágenes con diferentes condiciones de luz.",
        "Evitar overfitting con dataset limitado.",
        "Exponer el modelo pesado vía API ligera."
      ],
      outcome: "Modelo con 92% de precisión en segmentación."
    },
    links: { repo: "https://github.com/...", demo: null }
  },
  {
    id: "model-serving-api",
    title: "ML Model Serving API",
    shortDescription: "Infraestructura Backend para desplegar modelos de IA en producción.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
    company: "Open Source",
    stack: ["FastAPI", "Docker", "Redis", "Celery"],
    details: {
      problem: "Los modelos en notebooks no son utilizables en apps reales.",
      solution: "Arquitectura de microservicios para inferencia asíncrona.",
      challenges: [
        "Manejar picos de tráfico.",
        "Gestión de versiones de modelos.",
        "Validación estricta de datos."
      ],
      outcome: "API capaz de servir 100+ peticiones concurrentes."
    },
    links: { repo: "https://github.com/...", demo: null }
  }
];

// NUEVA SECCIÓN: Lo que puedo hacer por ti
export const servicesData = [
  {
    title: "Desarrollo Backend",
    desc: "Estructuro el lado del servidor utilizando Python (FastAPI/Flask) y gestiono bases de datos PostgreSQL, asegurando que la información se procese y guarde de forma ordenada y eficiente.",
    icon: "server"
  },
  {
    title: "Integración de IA",
    desc: "Experiencia entrenando modelos básicos (Visión/NLP) y, lo más importante, exponiéndolos mediante código para que dejen de ser un script y pasen a ser parte de una aplicación útil.",
    icon: "brain"
  },
  {
    title: "Desarrollo de APIs & Integración",
    desc: "Construyo el puente entre los datos y el usuario. Diseño APIs RESTful eficientes y bien documentadas, facilitando una integración fluida con el Frontend u otros servicios externos.",
    icon: "code"
  }
];

export const skillsData = [
  "Python", "PostgreSQL", "FastAPI", "React", "Docker", "TensorFlow", "Git", "Linux"
];

// STACK CON LOGOS (URLs de Devicon)
export const stackWithLogos = [
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];