export const heroData = {
  name: "Jesús Burgos",
  role: "Backend Developer & AI Enthusiast",
  description: "Desarrollador Backend enfocado en Python. Disfruto construyendo la lógica detrás de las aplicaciones y explorando cómo integrar Inteligencia Artificial en soluciones funcionales. Mi enfoque está en el código que no se ve pero hace que todo funcione. Tras un periodo de profundización en arquitecturas modernas, construyo software robusto entendiendo el 'cómo' y el 'por qué' de las cosas.",
  socialLinks: {
    github: "https://github.com/JesusDBurgos",
    linkedin: "https://linkedin.com/in/jesus-burgos",
    email: "mailto:jesusdburgost@gmail.com"
  }
};

export const projectsData = [
  {
    id: "retinopatia-ia",
    title: "Diagnóstico de Retinopatía",
    shortDescription: "Prototipo de apoyo al análisis de imágenes de fondo de ojo.",
    description: "Prototipo de apoyo al análisis de imágenes de fondo de ojo: clasifica, detecta y segmenta lesiones retinianas.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    year: "2024",
    company: "UNAB",
    innovations: [
      "Clasificación con InceptionV3 (transfer learning) y módulos de atención CBAM.",
      "Detección con YOLO de microaneurismas, hemorragias, exudados duros y blandos, y disco óptico.",
      "Segmentación con SAM 2.1 guiada por las detecciones, con máscaras por color sobre la imagen.",
      "Preprocesamiento: recorte del fondo de ojo, CLAHE en espacio LAB y sustracción de fondo.",
      "API FastAPI dockerizada y frontend en React."
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "YOLO", "SAM 2", "OpenCV", "FastAPI", "React", "Docker"],
    details: {
      problem: "El diagnóstico temprano requiere especialistas que no siempre están disponibles.",
      solution: "Pipeline que preprocesa la imagen, clasifica, detecta lesiones y devuelve una segmentación visual.",
      challenges: [
        "Normalizar imágenes con diferentes condiciones de iluminación.",
        "Combinar varios modelos pesados (clasificador, detector y segmentador) detrás de una API."
      ],
      outcome: "Prototipo end-to-end: del envío de la imagen en el navegador al resultado visual con lesiones marcadas."
    },
    links: { repo: "https://github.com/JesusDBurgos/RD_API", demo: null }
  },
  {
    id: "chatbot-unab",
    title: "Asistente Virtual Académico",
    shortDescription: "Orientador vocacional con chatbot y detección facial, desarrollado en equipo en la UNAB.",
    description: "Orientador vocacional desarrollado en la UNAB en un equipo de dos personas: una plataforma web con chatbot conversacional y detección facial. Mi aporte fue el chatbot y el módulo de visión.",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    year: "2023",
    company: "UNAB",
    innovations: [
      "Chatbot conversacional con Rasa que orienta al usuario en lenguaje natural.",
      "Módulo de detección facial con OpenCV integrado a la plataforma.",
      "API REST con Django REST Framework y frontend en React.",
      "Servicios orquestados con Docker Compose; trabajo colaborativo en GitHub."
    ],
    stack: ["Python", "Django REST", "Rasa", "OpenCV", "React", "Docker"],
    details: {
      problem: "Los aspirantes y estudiantes necesitan orientación vocacional accesible, sin depender de una cita presencial.",
      solution: "Plataforma web con un asistente conversacional (Rasa) y detección facial (OpenCV), conectada a una API REST.",
      challenges: [
        "Integrar chatbot, visión por computador, API y frontend como servicios separados con Docker Compose.",
        "Coordinar el desarrollo entre dos personas sobre un mismo repositorio."
      ],
      outcome: "Proyecto académico completo, de la API a la interfaz, desarrollado en pareja durante 2023."
    },
    links: { repo: "https://github.com/Ivandjt226/Z_Django", demo: null }
  },
];

// NUEVA SECCIÓN: Lo que puedo hacer por ti
export const servicesData = [
  {
    title: "Backend orientado a producto",
    desc: "Diseño servicios en Python con FastAPI o Flask, conectados a PostgreSQL. Priorizo una lógica clara y una estructura que facilite mantener y desplegar la aplicación.",
    tools: ["Python", "FastAPI", "PostgreSQL"],
    icon: "server"
  },
  {
    title: "IA aplicada a la experiencia",
    desc: "Integro modelos de visión por computador y NLP en flujos completos: reciben datos, ejecutan inferencias y devuelven resultados que la aplicación puede usar.",
    tools: ["Visión por computador", "NLP", "OpenCV"],
    icon: "brain"
  },
  {
    title: "APIs e integración",
    desc: "Conecto frontend, backend y servicios externos mediante APIs REST documentadas. He llevado esos flujos desde pruebas locales hasta servicios orquestados con Docker.",
    tools: ["REST", "Docker", "React"],
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