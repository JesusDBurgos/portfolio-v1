export const heroData = {
  name: "Jesús",
  role: "Backend Developer & AI Enthusiast",
  subheading: "Especializado en Python y arquitecturas escalables. Transformo problemas complejos en lógica de negocio eficiente.",
  about: "Soy un desarrollador apasionado por lo que ocurre 'detrás de cámaras'. Después de profundizar durante el último año en arquitecturas modernas y modelos de Inteligencia Artificial, he vuelto para construir software que no solo funcione, sino que sea robusto y escalable. Me muevo cómodamente entre la lógica de servidores y el entrenamiento de modelos."
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
    title: "Backend Architecture",
    desc: "Diseño sistemas robustos desde cero, priorizando la seguridad, la velocidad y la escalabilidad de la base de datos.",
    icon: "server"
  },
  {
    title: "AI & Model Integration",
    desc: "No solo entreno modelos; los integro en aplicaciones reales para que aporten valor al negocio inmediatamente.",
    icon: "brain"
  },
  {
    title: "API Development",
    desc: "Creo APIs RESTful y GraphQL documentadas y fáciles de consumir para equipos Frontend.",
    icon: "code"
  }
];

export const skillsData = [
  "Python", "PostgreSQL", "FastAPI", "React", "Docker", "TensorFlow", "Git", "Linux"
];