// =============================================================
//   CONTENIDO EDITABLE — Dr. Tomás Steinhardt V.
// =============================================================
//   Cada texto traducible tiene 3 idiomas: es, en, de
//   Solo edita entre las comillas. No borres comas ni llaves.
// =============================================================


// ---------- DATOS PROFESIONALES ----------
const PROFESIONAL = {
  nombreCompleto: "Dr. Tomás Steinhardt Valcarce",
  nombreCorto: "Dr. Tomás Steinhardt V.",
  titulo: {
    es: "Cirujano Dentista",
    en: "Dentist",
    de: "Zahnarzt"
  },
  registroSIS: "805368",
  lema: {
    es: "Odontología Mínimamente Invasiva",
    en: "Minimally Invasive Dentistry",
    de: "Minimalinvasive Zahnmedizin"
  },
  instagram: "odontomi.stein",
  instagramURL: "https://instagram.com/odontomi.stein",
  email: "odontomi.spa@gmail.com",
  ubicacion: "Santiago, Chile",
  formularioGoogle: "https://docs.google.com/forms/d/e/1FAIpQLSfnkDMFTkNQYVtldrT3-fnAQab07mgtxj3CbKN_H-hw0lC7fg/viewform?embedded=true"
};


// ---------- TEXTO DE "SOBRE MÍ" ----------
const SOBRE_MI = {
  parrafo1: {
    es: "Soy cirujano dentista titulado de la Universidad del Desarrollo, con enfoque en odontología integral, cercana y humana. Mi trabajo se basa en la filosofía de la Odontología Mínimamente Invasiva: preservar al máximo el tejido sano, intervenir lo justo y acompañar al paciente con claridad en cada paso.",
    en: "I'm a dentist graduated from Universidad del Desarrollo, with a focus on comprehensive, close and human dentistry. My work is based on the philosophy of Minimally Invasive Dentistry: preserving healthy tissue as much as possible, intervening only when needed and guiding the patient with clarity at every step.",
    de: "Ich bin Zahnarzt mit Abschluss an der Universidad del Desarrollo, mit Fokus auf ganzheitliche, persönliche und menschliche Zahnmedizin. Meine Arbeit basiert auf der Philosophie der minimalinvasiven Zahnmedizin: gesundes Gewebe maximal erhalten, nur so viel eingreifen wie nötig und die Patient:innen bei jedem Schritt klar begleiten."
  },
  parrafo2: {
    es: "Atiendo pacientes adultos, niños y personas con condición del espectro autista (TEA) y otras condiciones del neurodesarrollo, discapacidad intelectual, motora o sensorial — priorizando un trato empático, paciente y adaptado a cada persona.",
    en: "I treat adult patients, children and people with autism spectrum condition (ASC) and other neurodevelopmental conditions, intellectual, motor or sensory disabilities — prioritizing empathic, patient and personalized care.",
    de: "Ich behandle Erwachsene, Kinder und Menschen mit Autismus-Spektrum-Störung (ASS) sowie anderen neurologischen Entwicklungsstörungen, intellektuellen, motorischen oder sensorischen Beeinträchtigungen — stets mit Empathie, Geduld und individuell angepasster Betreuung."
  },
  idiomas: {
    es: ["Español", "Alemán", "Inglés"],
    en: ["Spanish", "German", "English"],
    de: ["Spanisch", "Deutsch", "Englisch"]
  }
};


// ---------- TRATAMIENTOS ----------
const TRATAMIENTOS = [
  {
    titulo: { es: "Evaluación integral", en: "Comprehensive evaluation", de: "Ganzheitliche Untersuchung" },
    descripcion: {
      es: "Diagnóstico completo y plan de tratamiento personalizado, explicado con claridad.",
      en: "Complete diagnosis and personalized treatment plan, clearly explained.",
      de: "Vollständige Diagnose und individueller Behandlungsplan, klar erläutert."
    },
    icono: "🔍",
    precio: 0
  },
  {
    titulo: { es: "Resinas compuestas estéticas", en: "Aesthetic composite resins", de: "Ästhetische Komposit-Restaurationen" },
    descripcion: {
      es: "Restauraciones en dientes anteriores y posteriores con materiales de alta estética.",
      en: "Restorations on anterior and posterior teeth with high-aesthetic materials.",
      de: "Restaurationen an Front- und Seitenzähnen mit hochästhetischen Materialien."
    },
    icono: "✨",
    precio: 35000
  },
  {
    titulo: { es: "Resinas infiltrantes", en: "Resin infiltration", de: "Kariesinfiltration" },
    descripcion: {
      es: "Tratamiento mínimamente invasivo para manchas blancas y lesiones iniciales de caries.",
      en: "Minimally invasive treatment for white spots and early caries lesions.",
      de: "Minimalinvasive Behandlung bei White Spots und beginnenden Kariesläsionen."
    },
    icono: "💧",
    precio: 40000
  },
  {
    titulo: { es: "Blanqueamiento dental", en: "Teeth whitening", de: "Zahnaufhellung" },
    descripcion: {
      es: "Blanqueamiento profesional seguro y efectivo, adaptado a cada paciente.",
      en: "Safe and effective professional whitening, tailored to each patient.",
      de: "Sichere und effektive professionelle Zahnaufhellung, individuell angepasst."
    },
    icono: "🦷",
    precio: 100000
  },
  {
    titulo: { es: "Endodoncia (dientes anteriores)", en: "Root canal (anterior teeth)", de: "Wurzelbehandlung (Frontzähne)" },
    descripcion: {
      es: "Tratamiento de conducto en piezas anteriores con técnica precisa.",
      en: "Root canal treatment on anterior teeth with precise technique.",
      de: "Wurzelkanalbehandlung an Frontzähnen mit präziser Technik."
    },
    icono: "🔬",
    precio: 150000
  },
  {
    titulo: { es: "Destartraje y pulido", en: "Scaling and polishing", de: "Zahnsteinentfernung und Politur" },
    descripcion: {
      es: "Limpieza supragingival y pulido leve para mantener una boca sana.",
      en: "Supragingival cleaning and light polishing to maintain oral health.",
      de: "Supragingivale Reinigung und leichte Politur für eine gesunde Mundhöhle."
    },
    icono: "🧼",
    precio: 40000
  },
  {
    titulo: { es: "Exodoncias", en: "Extractions", de: "Zahnextraktionen" },
    descripcion: {
      es: "Extracción de muelas del juicio y piezas que requieran retiro.",
      en: "Wisdom teeth and other extractions when required.",
      de: "Entfernung von Weisheitszähnen und weiteren Zähnen bei Bedarf."
    },
    icono: "⚕️",
    precio: 70000
  },
  {
    titulo: { es: "Sellantes y flúor", en: "Sealants and fluoride", de: "Fissurenversiegelung und Fluoridierung" },
    descripcion: {
      es: "Prevención de caries en niños y adultos, con aplicación tópica de flúor.",
      en: "Caries prevention in children and adults, with topical fluoride application.",
      de: "Kariesprävention bei Kindern und Erwachsenen mit topischer Fluoridierung."
    },
    icono: "🛡️",
    precio: 15000
  },
  {
    titulo: { es: "Instrucción de higiene oral", en: "Oral hygiene instruction", de: "Mundhygiene-Anleitung" },
    descripcion: {
      es: "Enseñanza personalizada de técnicas de cepillado, uso de hilo dental e interdentales.",
      en: "Personalized teaching of brushing, flossing and interdental techniques.",
      de: "Individuelle Anleitung zu Putztechnik, Zahnseide und Interdentalreinigung."
    },
    icono: "🪥"
  },
  {
    titulo: { es: "Odontopediatría y pacientes TEA", en: "Pediatric dentistry and ASC patients", de: "Kinderzahnheilkunde und ASS-Patient:innen" },
    descripcion: {
      es: "Atención especializada para niños y personas con condición del espectro autista.",
      en: "Specialized care for children and people with autism spectrum condition.",
      de: "Spezialisierte Betreuung für Kinder und Menschen mit Autismus-Spektrum-Störung."
    },
    icono: "🧸"
  },
  {
    titulo: {
      es: "Sedación consciente (próximamente)",
      en: "Conscious sedation (coming soon)",
      de: "Analgosedierung (demnächst)"
    },
    descripcion: {
      es: "Atención con óxido nitroso y oxígeno — en proceso de certificación.",
      en: "Treatment with nitrous oxide and oxygen — certification in progress.",
      de: "Behandlung mit Lachgas und Sauerstoff — Zertifizierung in Bearbeitung."
    },
    icono: "🫁"
  }
];


// ---------- UBICACIONES ----------
const UBICACIONES = [
  {
    id: "yany",
    nombre: { es: "Clínica Odontológica Yany", en: "Yany Dental Clinic", de: "Zahnklinik Yany" },
    direccion: { es: "Luis Pasteur 5719, Vitacura, Santiago", en: "Luis Pasteur 5719, Vitacura, Santiago", de: "Luis Pasteur 5719, Vitacura, Santiago" },
    horarios: {
      es: ["Martes — mañana", "Miércoles — tarde", "Jueves — mañana", "Sábado — mañana"],
      en: ["Tuesday — morning", "Wednesday — afternoon", "Thursday — morning", "Saturday — morning"],
      de: ["Dienstag — vormittags", "Mittwoch — nachmittags", "Donnerstag — vormittags", "Samstag — vormittags"]
    },
    telefono: "225854250",
    telefonoLink: "tel:+56225854250",
    mapaQuery: "Clinica+Odontologica+Yany+Luis+Pasteur+5719+Vitacura",
    textoBotonAgendar: { es: "Agendar en Yany", en: "Book at Yany", de: "Termin in Yany" },
    accionAgendar: "yany"
  },
  {
    id: "providencia",
    nombre: { es: "Consulta en Providencia", en: "Providencia Office", de: "Praxis in Providencia" },
    direccion: { es: "Guardia Vieja 181, Providencia, Santiago", en: "Guardia Vieja 181, Providencia, Santiago", de: "Guardia Vieja 181, Providencia, Santiago" },
    horarios: {
      es: ["Lunes — coordinar", "Viernes — coordinar"],
      en: ["Monday — by appointment", "Friday — by appointment"],
      de: ["Montag — nach Vereinbarung", "Freitag — nach Vereinbarung"]
    },
    telefono: null,
    telefonoLink: null,
    mapaQuery: "Guardia+Vieja+181+Providencia+Santiago",
    textoBotonAgendar: { es: "Coordinar en Providencia", en: "Schedule in Providencia", de: "Termin in Providencia" },
    accionAgendar: "providencia"
  }
];


// ---------- EXPERIENCIA LABORAL ----------
const EXPERIENCIA = [
  { lugar: "Grupo Odontológico Yany", rol: { es: "Atención directa a pacientes", en: "Direct patient care", de: "Direkte Patientenbetreuung" } },
  { lugar: "Clínica Odonto Art", rol: { es: "Atención directa a pacientes", en: "Direct patient care", de: "Direkte Patientenbetreuung" } },
  { lugar: "Clínica Dental Uno Salud", rol: { es: "Atención directa a pacientes", en: "Direct patient care", de: "Direkte Patientenbetreuung" } },
  { lugar: "MovilCare", rol: { es: "Atención en clínica dental móvil", en: "Care in mobile dental clinic", de: "Betreuung in mobiler Zahnklinik" } },
  { lugar: "CESFAM Santiago Nueva Extremadura", rol: { es: "Internado Clínico Asistencial", en: "Clinical Internship", de: "Klinisches Praktikum" } }
];


// ---------- FORMACIÓN Y DIPLOMADOS ----------
const FORMACION = {
  titulo: {
    institucion: "Universidad del Desarrollo",
    grado: { es: "Cirujano Dentista", en: "Dentist", de: "Zahnarzt" },
    anio: "2023"
  },
  educacionPrevia: {
    es: ["Gymnasium bei St. Anna, Augsburgo — Intercambio 2015", "Colegio Alemán de Santiago — Educación Media (2007–2015)"],
    en: ["Gymnasium bei St. Anna, Augsburg — Exchange 2015", "Colegio Alemán de Santiago — High School (2007–2015)"],
    de: ["Gymnasium bei St. Anna, Augsburg — Austauschjahr 2015", "Deutsche Schule Santiago — Gymnasium (2007–2015)"]
  },
  diplomados: [
    {
      nombre: {
        es: "Actualización en Evaluación y Manejo de Urgencias Ambulatorias",
        en: "Update in Evaluation and Management of Outpatient Emergencies",
        de: "Fortbildung: Einschätzung und Management ambulanter Notfälle"
      },
      institucion: "Universidad Católica"
    },
    {
      nombre: {
        es: "IAAS y Autorización Sanitaria",
        en: "Healthcare-Associated Infections and Health Authorization",
        de: "Nosokomiale Infektionen und Gesundheitsbewilligung"
      },
      institucion: "CAS — Universidad del Desarrollo"
    },
    {
      nombre: {
        es: "Habilidades Fundamentales en Gestión Odontológica",
        en: "Fundamental Skills in Dental Management",
        de: "Grundkompetenzen im zahnärztlichen Management"
      },
      institucion: "CAS — Universidad del Desarrollo"
    },
    {
      nombre: {
        es: "Ventas y Estrategia Comercial en Salud",
        en: "Sales and Commercial Strategy in Healthcare",
        de: "Vertrieb und Geschäftsstrategie im Gesundheitswesen"
      },
      institucion: "OCEUP"
    },
    {
      nombre: {
        es: "Gestión de APS (Atención Primaria de Salud)",
        en: "Primary Health Care Management",
        de: "Management der Primärversorgung"
      },
      institucion: "OCEUP"
    },
    {
      nombre: {
        es: "Salud Pública y Comunitaria",
        en: "Public and Community Health",
        de: "Öffentliche und Gemeinschaftsgesundheit"
      },
      institucion: "OCEUP"
    },
    {
      nombre: {
        es: "Gestión de la Calidad y Acreditación en Salud",
        en: "Quality Management and Healthcare Accreditation",
        de: "Qualitätsmanagement und Akkreditierung im Gesundheitswesen"
      },
      institucion: "OCEUP"
    },
    {
      nombre: {
        es: "Sedación consciente con óxido nitroso y oxígeno (próximamente)",
        en: "Conscious sedation with nitrous oxide and oxygen (coming soon)",
        de: "Analgosedierung mit Lachgas und Sauerstoff (demnächst)"
      },
      institucion: {
        es: "En proceso de certificación",
        en: "Certification in progress",
        de: "Zertifizierung in Bearbeitung"
      }
    }
  ]
};


// ---------- CASOS CLÍNICOS ----------
const CASOS = [
  {
    titulo: { es: "Resinas infiltrantes", en: "Resin infiltration", de: "Kariesinfiltration" },
    imagen: "img/casos/resinas-infiltrantes.jpg",
    descripcion: {
      es: "Eliminación de manchas blancas en una sola sesión, sin desgaste del diente.",
      en: "White spot removal in a single session, without tooth wear.",
      de: "Entfernung von White Spots in einer Sitzung, ohne Substanzverlust."
    }
  },
  {
    titulo: { es: "Blanqueamiento profesional", en: "Professional whitening", de: "Professionelle Zahnaufhellung" },
    imagen: "img/casos/blanqueamiento-escala.jpg",
    descripcion: {
      es: "De tono A3.5 a A1 en una sesión, con aislación total para proteger encías.",
      en: "From shade A3.5 to A1 in one session, with full isolation to protect gums.",
      de: "Von Farbton A3.5 zu A1 in einer Sitzung, mit vollständiger Isolation zum Schutz des Zahnfleischs."
    }
  },
  {
    titulo: { es: "Operatoria posterior con resina", en: "Posterior restoration with composite", de: "Seitenzahnrestauration mit Komposit" },
    imagen: "img/casos/operatoria-posterior.jpg",
    descripcion: {
      es: "Restauración de molar con técnica mínimamente invasiva.",
      en: "Molar restoration with minimally invasive technique.",
      de: "Molarenrestauration in minimalinvasiver Technik."
    }
  },
  {
    titulo: { es: "ICON vestibular (DMG)", en: "Vestibular ICON (DMG)", de: "ICON vestibulär (DMG)" },
    imagen: "img/casos/blanqueamiento-proceso.jpg",
    descripcion: {
      es: "Infiltración de resina en mancha blanca vestibular — técnica sin desgaste del diente.",
      en: "Resin infiltration on vestibular white spot — no tooth wear technique.",
      de: "Harzinfiltration bei vestibulärem White Spot — ohne Substanzabtrag."
    }
  },
  {
    titulo: { es: "Restauración provisoria", en: "Provisional restoration", de: "Provisorische Restauration" },
    imagen: "img/casos/00F1D5D8-ECAA-4CA6-AA61-C7C2C4F99720.jpg",
    descripcion: {
      es: "Reconstrucción provisoria de pieza anterior, previa al tratamiento definitivo.",
      en: "Provisional reconstruction of anterior tooth, prior to definitive treatment.",
      de: "Provisorischer Aufbau eines Frontzahns vor der definitiven Versorgung."
    }
  },
  {
    titulo: { es: "Blanqueamiento con registro de color", en: "Whitening with color registration", de: "Zahnaufhellung mit Farbdokumentation" },
    imagen: "img/casos/ERHU3775.JPG",
    descripcion: {
      es: "Tono A3 a A1 con barrera gingival protectora — tres etapas documentadas.",
      en: "Shade A3 to A1 with protective gingival barrier — three documented stages.",
      de: "Farbton A3 zu A1 mit schützender Gingivabarriere — drei dokumentierte Phasen."
    }
  },
  {
    titulo: {
      es: "Reconstrucciones estéticas de bordes incisales",
      en: "Aesthetic reconstruction of incisal edges",
      de: "Ästhetische Rekonstruktion der Schneidekanten"
    },
    imagen: "img/casos/FD25CF0B-2BC9-4A24-B3F9-EAE51E42D66A.jpg",
    descripcion: {
      es: "Restauración con resina de bordes incisales desgastados, recuperando anatomía natural.",
      en: "Composite restoration of worn incisal edges, recovering natural anatomy.",
      de: "Kompositrestauration abgenutzter Schneidekanten mit Wiederherstellung der natürlichen Anatomie."
    }
  }
];


// ---------- RESEÑAS DE PACIENTES ----------
const RESENAS = [
  {
    nombre: { es: "Paciente Instagram", en: "Instagram patient", de: "Instagram-Patient:in" },
    texto: {
      es: "Me atendería ya con este doc. Un profesional verdaderamente comprometido con la salud bucal. Y ni qué decir de su calidez y paciencia en la atención.",
      en: "I would book with this doctor right now. A professional truly committed to oral health — not to mention his warmth and patience during treatment.",
      de: "Ich würde sofort einen Termin machen. Ein wirklich engagierter Fachmann — ganz zu schweigen von seiner Herzlichkeit und Geduld."
    },
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: "Sara R.",
    texto: {
      es: "Tienes muy buena mano Doctor, yo que soy re cobarde, no sentí ni la anestesia 🙌",
      en: "You have great hands Doctor. I'm super scared of dentists and I didn't even feel the anesthesia 🙌",
      de: "Sie haben wirklich ein Händchen, Herr Doktor. Ich bin total ängstlich und habe nicht einmal die Betäubung gespürt 🙌"
    },
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: { es: "Paciente San Bernardo", en: "San Bernardo patient", de: "Patient:in aus San Bernardo" },
    texto: {
      es: "Con mucha atención veo sus videos doctor para entender todos los procedimientos. Muy buen trabajo, gracias.",
      en: "I watch your videos carefully doctor to understand all the procedures. Very good work, thank you.",
      de: "Ich schaue Ihre Videos sehr aufmerksam, um alle Abläufe zu verstehen. Sehr gute Arbeit, danke."
    },
    estrellas: 5,
    origen: "real"
  },
  {
    nombre: "Camila V.",
    texto: {
      es: "Llevaba años sin ir al dentista por miedo. El Dr. Tomás me explicó todo paso a paso y me sentí acompañada en todo momento. Cero dolor.",
      en: "I hadn't been to the dentist in years out of fear. Dr. Tomás explained everything step by step and I felt accompanied the whole time. Zero pain.",
      de: "Ich war aus Angst jahrelang nicht beim Zahnarzt. Dr. Tomás hat mir alles Schritt für Schritt erklärt, ich fühlte mich durchgehend begleitet. Null Schmerzen."
    },
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Javiera P.",
    texto: {
      es: "Excelente profesional. Le hice el blanqueamiento y quedó espectacular. Muy cuidadoso y detallista con cada detalle.",
      en: "Excellent professional. I had the whitening done and it looked amazing. Very careful and detail-oriented.",
      de: "Hervorragender Fachmann. Ich habe das Bleaching machen lassen und es sieht großartig aus. Sehr sorgfältig und detailverliebt."
    },
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Francisca L.",
    texto: {
      es: "Fui con mi hijo de 11 años (TEA) y tuvo una paciencia infinita con él. Por primera vez salió sonriendo del dentista 🥺",
      en: "I took my 11-year-old son (ASC) and he had infinite patience with him. For the first time he left the dentist smiling 🥺",
      de: "Ich war mit meinem 11-jährigen Sohn (ASS) da und er hatte unendlich Geduld mit ihm. Zum ersten Mal ist er lächelnd vom Zahnarzt gegangen 🥺"
    },
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Matías G.",
    texto: {
      es: "Le hice resinas estéticas en los dientes de adelante y ni se notan. Trabajo impecable y con una calidez muy poco común.",
      en: "I had aesthetic composites on my front teeth and you can't even notice them. Impeccable work and very rare warmth.",
      de: "Er hat mir ästhetische Kompositfüllungen an den Frontzähnen gemacht, man sieht sie gar nicht. Makellose Arbeit und außergewöhnliche Herzlichkeit."
    },
    estrellas: 5,
    origen: "paciente"
  },
  {
    nombre: "Valentina K.",
    texto: {
      es: "Súper atento, se toma el tiempo de explicar cada cosa con paciencia. Se nota que le gusta lo que hace.",
      en: "Super attentive, takes the time to explain everything patiently. You can tell he loves what he does.",
      de: "Super aufmerksam, nimmt sich Zeit alles geduldig zu erklären. Man merkt, dass er seinen Beruf liebt."
    },
    estrellas: 5,
    origen: "paciente"
  }
];


// ---------- DIPLOMAS (imágenes escaneadas) ----------
const DIPLOMAS_IMAGENES = [
  {
    ruta: "img/consulta/titulacion-udd.jpg",
    titulo: {
      es: "Titulación Cirujano Dentista — Universidad del Desarrollo 2023",
      en: "Dentist degree — Universidad del Desarrollo 2023",
      de: "Zahnarzt-Abschluss — Universidad del Desarrollo 2023"
    }
  },
  {
    ruta: "img/diplomas/graduacion-udd.jpg",
    titulo: {
      es: "Ceremonia de titulación — Universidad del Desarrollo 2023",
      en: "Graduation ceremony — Universidad del Desarrollo 2023",
      de: "Abschlussfeier — Universidad del Desarrollo 2023"
    }
  },
  {
    ruta: "img/diplomas/graduacion-udd-2.jpg",
    titulo: {
      es: "Día de graduación — UDD 2023",
      en: "Graduation day — UDD 2023",
      de: "Abschlusstag — UDD 2023"
    }
  },
  {
    ruta: "img/diplomas/graduacion-udd-3.jpg",
    titulo: {
      es: "Celebrando la titulación en la UDD",
      en: "Celebrating graduation at UDD",
      de: "Abschlussfeier an der UDD"
    }
  }
];


// ---------- VIDEOS EDUCATIVOS DE INSTAGRAM ----------
const VIDEOS_IG = [
  "https://www.instagram.com/p/DQCLjTnDLUu/",
  "https://www.instagram.com/p/DPyhl69jtRc/",
  "https://www.instagram.com/p/DPjyqXMklK1/"
];


// ---------- PACIENTES FELICES (collage) ----------
const PACIENTES_FELICES = [
  { ruta: "img/pacientes/IMG_5001.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedene Patientin nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-07.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-02.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-06.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-05.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-08.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-03.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-04.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } },
  { ruta: "img/pacientes/paciente-01.jpg", alt: { es: "Paciente feliz tras su atención", en: "Happy patient after treatment", de: "Zufriedener Patient nach der Behandlung" } }
];
