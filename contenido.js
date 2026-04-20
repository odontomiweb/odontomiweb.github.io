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
  ubicacion: "Santiago, Chile",
  // Formulario de contacto de Google Forms (embebido)
  formularioGoogle: "https://docs.google.com/forms/d/e/1FAIpQLSfnkDMFTkNQYVtldrT3-fnAQab07mgtxj3CbKN_H-hw0lC7fg/viewform?embedded=true"
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
    icono: "🔍",
    precio: 0
  },
  {
    titulo: "Resinas compuestas estéticas",
    descripcion: "Restauraciones en dientes anteriores y posteriores con materiales de alta estética.",
    icono: "✨",
    precio: 35000
  },
  {
    titulo: "Resinas infiltrantes",
    descripcion: "Tratamiento mínimamente invasivo para manchas blancas y lesiones iniciales de caries.",
    icono: "💧",
    precio: 40000
  },
  {
    titulo: "Blanqueamiento dental",
    descripcion: "Blanqueamiento profesional seguro y efectivo, adaptado a cada paciente.",
    icono: "🦷",
    precio: 100000
  },
  {
    titulo: "Endodoncia (dientes anteriores)",
    descripcion: "Tratamiento de conducto en piezas anteriores con técnica precisa.",
    icono: "🔬",
    precio: 150000
  },
  {
    titulo: "Destartraje y pulido",
    descripcion: "Limpieza supragingival y pulido leve para mantener una boca sana.",
    icono: "🧼",
    precio: 40000
  },
  {
    titulo: "Exodoncias",
    descripcion: "Extracción de muelas del juicio y piezas que requieran retiro.",
    icono: "⚕️",
    precio: 70000
  },
  {
    titulo: "Sellantes y flúor",
    descripcion: "Prevención de caries en niños y adultos, con aplicación tópica de flúor.",
    icono: "🛡️",
    precio: 15000
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
// Todas con consentimiento firmado. Identidad protegida.
// Las imágenes van en la carpeta img/casos/
const CASOS = [
  {
    titulo: "Resinas infiltrantes",
    imagen: "img/casos/resinas-infiltrantes.jpg",
    descripcion: "Eliminación de manchas blancas en una sola sesión, sin desgaste del diente."
  },
  {
    titulo: "Blanqueamiento profesional",
    imagen: "img/casos/blanqueamiento-escala.jpg",
    descripcion: "De tono A3.5 a A1 en una sesión, con aislación total para proteger encías."
  },
  {
    titulo: "Operatoria posterior con resina",
    imagen: "img/casos/operatoria-posterior.jpg",
    descripcion: "Restauración de molar con técnica mínimamente invasiva."
  },
  {
    titulo: "Proceso de blanqueamiento",
    imagen: "img/casos/blanqueamiento-proceso.jpg",
    descripcion: "Pulido previo, aplicación controlada de gel y verificación final."
  },
  {
    titulo: "Restauración de diente anterior",
    imagen: "img/casos/00F1D5D8-ECAA-4CA6-AA61-C7C2C4F99720.jpg",
    descripcion: "Reparación de pieza anterior fracturada con resina compuesta estética."
  },
  {
    titulo: "Blanqueamiento con registro de color",
    imagen: "img/casos/ERHU3775.JPG",
    descripcion: "Tono A3 a A1 con barrera gingival protectora — tres etapas documentadas."
  },
  {
    titulo: "Destartraje y pulido profundo",
    imagen: "img/casos/FD25CF0B-2BC9-4A24-B3F9-EAE51E42D66A.jpg",
    descripcion: "Remoción de tártaro devolviendo brillo natural y salud a la encía."
  }
];


// ---------- RESEÑAS DE PACIENTES ----------
// Agrega reseñas aquí. Cada una tiene: nombre, texto, estrellas (1-5).
// Marca origen: "real" (de IG/DM con autorización) o "paciente" (anonimizada).
const RESENAS = [
  {
    nombre: "Paciente Instagram",
    texto: "Me atendería ya con este doc. Un profesional verdaderamente comprometido con la salud bucal. Y ni qué decir de su calidez y paciencia en la atención.",
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: "Sara R.",
    texto: "Tienes muy buena mano Doctor, yo que soy re cobarde, no sentí ni la anestesia 🙌",
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: "Paciente San Bernardo",
    texto: "Con mucha atención veo sus videos doctor para entender todos los procedimientos. Muy buen trabajo, gracias.",
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: "Camila V.",
    texto: "Llevaba años sin ir al dentista por miedo. El Dr. Tomás me explicó todo paso a paso y me sentí acompañada en todo momento. Cero dolor.",
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Javiera P.",
    texto: "Excelente profesional. Le hice el blanqueamiento y quedó espectacular. Muy cuidadoso y detallista con cada detalle.",
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Francisca L.",
    texto: "Fui con mi hijo de 11 años (TEA) y tuvo una paciencia infinita con él. Por primera vez salió sonriendo del dentista 🥺",
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Matías G.",
    texto: "Le hice resinas estéticas en los dientes de adelante y ni se notan. Trabajo impecable y con una calidez muy poco común.",
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Valentina K.",
    texto: "Súper atento, se toma el tiempo de explicar cada cosa con paciencia. Se nota que le gusta lo que hace.",
    estrellas: 5,
    origen: "paciente"
  }
];


// ---------- DIPLOMAS (imágenes escaneadas) ----------
// Sube los escaneos a img/diplomas/ y agrégalos aquí.
const DIPLOMAS_IMAGENES = [
  { ruta: "img/consulta/titulacion-udd.jpg", titulo: "Titulación Cirujano Dentista — Universidad del Desarrollo 2023" },
  { ruta: "img/diplomas/graduacion-udd.jpg", titulo: "Ceremonia de titulación — Universidad del Desarrollo 2023" }
];


// ---------- PACIENTES FELICES (collage) ----------
// Fotos reales con autorización. Se muestran en un mosaico tipo collage.
const PACIENTES_FELICES = [
  { ruta: "img/pacientes/IMG_5001.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-07.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-02.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-06.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-05.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-08.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-03.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-04.jpg", alt: "Paciente feliz tras su atención" },
  { ruta: "img/pacientes/paciente-01.jpg", alt: "Paciente feliz tras su atención" }
];
