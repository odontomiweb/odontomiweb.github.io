// =============================================================
//   CONTENIDO EDITABLE — Dr. Tomás Steinhardt V.
// =============================================================
//   Este archivo contiene TODO el contenido de la página.
//   Edita solo lo que está dentro de las comillas " " o [ ].
//   NO borres las comas ni los corchetes.
//   Guarda el archivo y recarga la página para ver los cambios.
// =============================================================


// ---------- DATOS PROFESIONALES (fijos por ahora) ----------
const PROFESIONAL = {
  nombreCompleto: "Dr. Tomás Steinhardt Valcarce",
  nombreCorto: "Dr. Tomás Steinhardt V.",
  titulo: "Cirujano Dentista",
  registroSIS: "805368",
  lema: "Odontología Mínimamente Invasiva",
  instagram: "odontomi.stein",
  instagramURL: "https://instagram.com/odontomi.stein",
  email: "odontomi.spa@gmail.com",
  ubicacion: "Santiago, Chile"
};


// ---------- TEXTO DE "SOBRE MÍ" ----------
const SOBRE_MI = {
  parrafo1: "Soy cirujano dentista titulado de la Universidad del Desarrollo, con enfoque en odontología integral, cercana y humana. Mi trabajo se basa en la filosofía de la Odontología Mínimamente Invasiva: preservar al máximo el tejido sano, intervenir lo justo y acompañar al paciente con claridad en cada paso.",
  parrafo2: "Atiendo pacientes adultos, niños y personas con condición del espectro autista (TEA), priorizando un trato empático, paciente y adaptado a cada persona.",
  nacionalidades: "Argentina · Alemana",
  idiomas: ["Español (nativo)", "Alemán (B1)", "Inglés (B1)"]
};


// ---------- TRATAMIENTOS ----------
// Edita, agrega o quita tratamientos. Cada uno tiene:
//   titulo:      nombre visible
//   descripcion: 1-2 líneas cortas
//   icono:       emoji representativo (opcional)
const TRATAMIENTOS = [
  {
    titulo: "Evaluación integral",
    descripcion: "Diagnóstico completo y plan de tratamiento personalizado, explicado con claridad.",
    icono: "🔍"
  },
  {
    titulo: "Resinas compuestas estéticas",
    descripcion: "Restauraciones en dientes anteriores y posteriores con materiales de alta estética.",
    icono: "✨"
  },
  {
    titulo: "Resinas infiltrantes",
    descripcion: "Tratamiento mínimamente invasivo para manchas blancas y lesiones iniciales de caries.",
    icono: "💧"
  },
  {
    titulo: "Blanqueamiento dental",
    descripcion: "Blanqueamiento profesional seguro y efectivo, adaptado a cada paciente.",
    icono: "🦷"
  },
  {
    titulo: "Endodoncia (dientes anteriores)",
    descripcion: "Tratamiento de conducto en piezas anteriores con técnica precisa.",
    icono: "🔬"
  },
  {
    titulo: "Destartraje y pulido",
    descripcion: "Limpieza supragingival y pulido leve para mantener una boca sana.",
    icono: "🧼"
  },
  {
    titulo: "Exodoncias",
    descripcion: "Extracción de muelas del juicio y piezas que requieran retiro.",
    icono: "⚕️"
  },
  {
    titulo: "Sellantes y flúor",
    descripcion: "Prevención de caries en niños y adultos, con aplicación tópica de flúor.",
    icono: "🛡️"
  },
  {
    titulo: "Instrucción de higiene oral",
    descripcion: "Enseñanza personalizada de técnicas de cepillado, uso de hilo dental e interdentales.",
    icono: "🪥"
  },
  {
    titulo: "Odontopediatría y pacientes TEA",
    descripcion: "Atención especializada para niños y personas con condición del espectro autista.",
    icono: "🧸"
  },
  {
    titulo: "Sedación consciente (próximamente)",
    descripcion: "Atención con óxido nitroso y oxígeno — en proceso de certificación.",
    icono: "🫁"
  }
];


// ---------- UBICACIONES ----------
// Dos sedes. Para cambiar días/horarios edita el string "horarios".
const UBICACIONES = [
  {
    id: "yany",
    nombre: "Clínica Odontológica Yany",
    direccion: "Luis Pasteur 5719, Vitacura, Santiago",
    horarios: [
      "Martes — mañana",
      "Miércoles — tarde",
      "Jueves — mañana",
      "Sábado — mañana"
    ],
    telefono: "225854250",
    telefonoLink: "tel:+56225854250",
    // Link de Google Maps embebido (search) - se genera automático desde la dirección
    mapaQuery: "Clinica+Odontologica+Yany+Luis+Pasteur+5719+Vitacura",
    textoBotonAgendar: "Agendar en Yany",
    // Al agendar en Yany: llamar + avisar por IG (tal como Tomás pidió)
    accionAgendar: "yany"
  },
  {
    id: "providencia",
    nombre: "Consulta en Providencia",
    direccion: "Guardia Vieja 181, Providencia, Santiago",
    horarios: [
      "Lunes — coordinar",
      "Viernes — coordinar"
    ],
    telefono: null, // WhatsApp privado por ahora
    telefonoLink: null,
    mapaQuery: "Guardia+Vieja+181+Providencia+Santiago",
    textoBotonAgendar: "Coordinar en Providencia",
    // Al coordinar: mensaje por Instagram
    accionAgendar: "providencia"
  }
];


// ---------- EXPERIENCIA LABORAL ----------
const EXPERIENCIA = [
  {
    lugar: "Grupo Odontológico Yany",
    rol: "Atención directa a pacientes",
    periodo: "Jul 2025 — actualidad",
    descripcion: "Atención integral a más de 300 pacientes mensuales, procedimientos de baja y mediana complejidad."
  },
  {
    lugar: "Clínica Odonto Art",
    rol: "Atención directa a pacientes",
    periodo: "Dic 2024 — Jul 2025",
    descripcion: "Más de 200 pacientes mensuales, procedimientos de baja y mediana complejidad."
  },
  {
    lugar: "Clínica Dental Uno Salud",
    rol: "Atención directa a pacientes",
    periodo: "Abr — Oct 2024",
    descripcion: "Atención a más de 800 pacientes en la comuna de Macul: urgencias, operatoria y prevención."
  },
  {
    lugar: "MovilCare",
    rol: "Atención en clínica dental móvil",
    periodo: "Mar — Sept 2024",
    descripcion: "Evaluaciones y prevención a trabajadores de empresas privadas (Carozzi, Derco, Sotraser, SLEP Colchagua)."
  },
  {
    lugar: "CESFAM Santiago Nueva Extremadura",
    rol: "Internado Clínico Asistencial",
    periodo: "2023",
    descripcion: "Atención directa a más de 1000 niños y adultos en La Pintana: cirugía, rehabilitación y prevención."
  }
];


// ---------- FORMACIÓN Y DIPLOMADOS ----------
const FORMACION = {
  titulo: {
    institucion: "Universidad del Desarrollo",
    grado: "Cirujano Dentista",
    anio: "2023"
  },
  educacionPrevia: [
    "Gymnasium bei St. Anna, Augsburgo — Intercambio 2015",
    "Colegio Alemán de Santiago — Educación Media (2007–2015)"
  ],
  // Orden: Universidad Católica (UC) → Universidad del Desarrollo (UDD) → OCEUP → próximamente
  diplomados: [
    { nombre: "Actualización en Evaluación y Manejo de Urgencias Ambulatorias", institucion: "Universidad Católica" },
    { nombre: "IAAS y Autorización Sanitaria", institucion: "CAS — Universidad del Desarrollo" },
    { nombre: "Habilidades Fundamentales en Gestión Odontológica", institucion: "CAS — Universidad del Desarrollo" },
    { nombre: "Ventas y Estrategia Comercial en Salud", institucion: "OCEUP" },
    { nombre: "Gestión de APS (Atención Primaria de Salud)", institucion: "OCEUP" },
    { nombre: "Salud Pública y Comunitaria", institucion: "OCEUP" },
    { nombre: "Gestión de la Calidad y Acreditación en Salud", institucion: "OCEUP" },
    { nombre: "Sedación consciente con óxido nitroso y oxígeno (próximamente)", institucion: "En proceso de certificación" }
  ]
};


// ---------- CASOS CLÍNICOS ----------
// Cuando tengas las fotos listas, agrégalas aquí.
// Cada caso tiene: antes (ruta), despues (ruta), descripcion.
// IMPORTANTE: solo pacientes con consentimiento firmado. Proteger identidad.
// Las imágenes van en la carpeta img/casos/
const CASOS = [
  // Ejemplo (descomenta cuando tengas fotos):
  // {
  //   titulo: "Resina compuesta estética — anterior",
  //   antes: "img/casos/caso1-antes.jpg",
  //   despues: "img/casos/caso1-despues.jpg",
  //   descripcion: "Restauración estética con resina compuesta, preservando tejido sano."
  // },
];


// ---------- RESEÑAS DE PACIENTES ----------
// Agrega reseñas aquí. Cada una tiene: nombre, texto, estrellas (1-5).
const RESENAS = [
  // Ejemplos — reemplaza con tus reseñas reales:
  {
    nombre: "Paciente (ejemplo)",
    texto: "Atención muy profesional y cercana. Explicó cada paso del tratamiento con paciencia.",
    estrellas: 5
  },
  {
    nombre: "Paciente (ejemplo)",
    texto: "Llegué con mucho miedo al dentista y salí tranquila. Recomiendo 100%.",
    estrellas: 5
  }
];


// ---------- DIPLOMAS (imágenes escaneadas) ----------
// Sube los escaneos a img/diplomas/ y agrégalos aquí.
const DIPLOMAS_IMAGENES = [
  // { ruta: "img/diplomas/titulo-udd.jpg", titulo: "Título profesional UDD 2023" },
];
