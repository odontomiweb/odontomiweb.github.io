// =============================================================
//   TRADUCCIONES DE INTERFAZ (textos fijos del HTML)
//   Se aplican a elementos con atributo data-i18n="clave"
// =============================================================

const TRADUCCIONES_UI = {
  // Navbar
  "nav.sobre": { es: "Sobre mí", en: "About me", de: "Über mich" },
  "nav.tratamientos": { es: "Tratamientos", en: "Treatments", de: "Behandlungen" },
  "nav.trayectoria": { es: "Trayectoria", en: "Background", de: "Werdegang" },
  "nav.casos": { es: "Casos", en: "Cases", de: "Fälle" },
  "nav.resenas": { es: "Reseñas", en: "Reviews", de: "Bewertungen" },
  "nav.pacientes": { es: "Pacientes", en: "Patients", de: "Patient:innen" },
  "nav.videos": { es: "Videos", en: "Videos", de: "Videos" },
  "nav.ubicaciones": { es: "Ubicaciones", en: "Locations", de: "Standorte" },
  "nav.agendar": { es: "Agendar", en: "Book", de: "Termin" },

  // Hero
  "hero.kicker": { es: "Cirujano Dentista · Reg. SIS N° 805368", en: "Dentist · SIS Reg. No. 805368", de: "Zahnarzt · SIS-Nr. 805368" },
  "hero.lema": { es: "Odontología Mínimamente Invasiva", en: "Minimally Invasive Dentistry", de: "Minimalinvasive Zahnmedizin" },
  "hero.sub": { es: "Atención integral, cercana y humana en Santiago de Chile.", en: "Comprehensive, close and human care in Santiago, Chile.", de: "Ganzheitliche, persönliche und menschliche Behandlung in Santiago, Chile." },
  "hero.btnAgendar": { es: "Agenda tu hora", en: "Book an appointment", de: "Termin buchen" },
  "hero.btnTratamientos": { es: "Ver tratamientos", en: "See treatments", de: "Behandlungen ansehen" },
  "hero.scroll": { es: "Desliza", en: "Scroll", de: "Scrollen" },

  // Sobre mí
  "sobre.kicker": { es: "Sobre mí", en: "About me", de: "Über mich" },
  "sobre.tituloHtml": {
    es: "Odontología que <em class=\"cursiva\">cuida</em> antes de intervenir",
    en: "Dentistry that <em class=\"cursiva\">cares</em> before intervening",
    de: "Zahnmedizin, die <em class=\"cursiva\">sorgt</em> bevor sie eingreift"
  },
  "sobre.idiomasLabel": { es: "Idiomas", en: "Languages", de: "Sprachen" },
  "sobre.firma": { es: "Cirujano Dentista · Reg. SIS 805368", en: "Dentist · SIS Reg. 805368", de: "Zahnarzt · SIS-Reg. 805368" },

  // Tratamientos
  "tratamientos.kicker": { es: "Tratamientos", en: "Treatments", de: "Behandlungen" },
  "tratamientos.tituloHtml": {
    es: "Odontología general con <em class=\"cursiva\">enfoque integral</em>",
    en: "General dentistry with a <em class=\"cursiva\">comprehensive approach</em>",
    de: "Allgemeine Zahnmedizin mit <em class=\"cursiva\">ganzheitlichem Ansatz</em>"
  },
  "tratamientos.sub": { es: "Cada tratamiento se planifica según el caso, priorizando la mínima intervención y explicándote el proceso paso a paso.", en: "Every treatment is planned case by case, prioritizing minimal intervention and explaining each step.", de: "Jede Behandlung wird individuell geplant, mit minimalinvasivem Ansatz und schrittweiser Erklärung." },

  // Trayectoria
  "trayectoria.kicker": { es: "Trayectoria", en: "Background", de: "Werdegang" },
  "trayectoria.tituloHtml": {
    es: "Formación y <em class=\"cursiva\">experiencia</em> clínica",
    en: "Training and clinical <em class=\"cursiva\">experience</em>",
    de: "Ausbildung und klinische <em class=\"cursiva\">Erfahrung</em>"
  },
  "trayectoria.experiencia": { es: "Experiencia", en: "Experience", de: "Erfahrung" },
  "trayectoria.formacion": { es: "Formación académica", en: "Academic background", de: "Akademische Ausbildung" },
  "trayectoria.diplomados": { es: "Diplomados y cursos", en: "Diplomas and courses", de: "Diplome und Kurse" },

  // Casos
  "casos.kicker": { es: "Casos clínicos", en: "Clinical cases", de: "Klinische Fälle" },
  "casos.tituloHtml": {
    es: "Resultados <em class=\"cursiva\">reales</em>",
    en: "<em class=\"cursiva\">Real</em> results",
    de: "<em class=\"cursiva\">Echte</em> Ergebnisse"
  },
  "casos.sub": { es: "Todos los casos publicados cuentan con consentimiento escrito. La identidad de los pacientes se protege en todo momento.", en: "All published cases have written consent. Patient identity is always protected.", de: "Alle veröffentlichten Fälle liegen mit schriftlicher Einwilligung vor. Die Patientenidentität wird stets geschützt." },
  "casos.vacio": { es: "Próximamente: galería de casos clínicos.", en: "Coming soon: clinical cases gallery.", de: "Demnächst: Galerie klinischer Fälle." },

  // Reseñas
  "resenas.kicker": { es: "Testimonios", en: "Testimonials", de: "Stimmen" },
  "resenas.tituloHtml": {
    es: "Lo que dicen mis <em class=\"cursiva\">pacientes</em>",
    en: "What my <em class=\"cursiva\">patients</em> say",
    de: "Was meine <em class=\"cursiva\">Patient:innen</em> sagen"
  },

  // Pacientes felices
  "pacientes.kicker": { es: "Pacientes felices", en: "Happy patients", de: "Zufriedene Patient:innen" },
  "pacientes.tituloHtml": {
    es: "Sonrisas que hablan <em class=\"cursiva\">por sí solas</em>",
    en: "Smiles that speak <em class=\"cursiva\">for themselves</em>",
    de: "Lächeln, die <em class=\"cursiva\">für sich sprechen</em>"
  },
  "pacientes.sub": { es: "Momentos reales con pacientes tras sus atenciones. Todos con consentimiento y buena onda.", en: "Real moments with patients after their treatments. All with consent and good vibes.", de: "Echte Momente mit Patient:innen nach der Behandlung. Alle mit Einwilligung und guter Stimmung." },

  // Videos IG
  "videos.kicker": { es: "Educación en redes", en: "Education on social media", de: "Aufklärung in sozialen Medien" },
  "videos.tituloHtml": {
    es: "Videos <em class=\"cursiva\">educativos</em>",
    en: "<em class=\"cursiva\">Educational</em> videos",
    de: "<em class=\"cursiva\">Lehr</em>videos"
  },
  "videos.sub": { es: "Contenido breve y claro sobre salud dental, tratamientos y tips. Publicado en mi Instagram.", en: "Short, clear content about dental health, treatments and tips. Posted on my Instagram.", de: "Kurze, klare Inhalte über Zahngesundheit, Behandlungen und Tipps. Veröffentlicht auf meinem Instagram." },

  // Ubicaciones
  "ubicaciones.kicker": { es: "Ubicaciones", en: "Locations", de: "Standorte" },
  "ubicaciones.tituloHtml": {
    es: "Dos sedes en <em class=\"cursiva\">Santiago</em>",
    en: "Two locations in <em class=\"cursiva\">Santiago</em>",
    de: "Zwei Standorte in <em class=\"cursiva\">Santiago</em>"
  },

  // Contacto
  "contacto.kicker": { es: "Contacto", en: "Contact", de: "Kontakt" },
  "contacto.titulo": { es: "¿Conversamos?", en: "Let's talk?", de: "Sprechen wir?" },
  "contacto.texto": { es: "Déjame tus datos en el formulario y me pongo en contacto contigo, o escríbeme directo por Instagram o correo.", en: "Leave your details in the form and I'll contact you, or message me directly via Instagram or email.", de: "Hinterlasse deine Daten im Formular und ich melde mich, oder schreibe mir direkt über Instagram oder E-Mail." },
  "contacto.instagram": { es: "Instagram", en: "Instagram", de: "Instagram" },
  "contacto.correo": { es: "Correo", en: "Email", de: "E-Mail" },
  "contacto.formTitulo": { es: "Déjame tus datos", en: "Leave your details", de: "Hinterlasse deine Daten" },
  "contacto.formSub": { es: "Completa el formulario y me contactaré contigo para agendar tu hora.", en: "Fill out the form and I'll contact you to schedule your appointment.", de: "Fülle das Formular aus und ich melde mich für einen Termin." },

  // Banner IG
  "banner.kicker": { es: "Educación dental en redes", en: "Dental education on social media", de: "Zahnmedizinische Aufklärung in sozialen Medien" },
  "banner.tituloHtml": {
    es: "Sígueme en <span class=\"cursiva\">Instagram</span>",
    en: "Follow me on <span class=\"cursiva\">Instagram</span>",
    de: "Folge mir auf <span class=\"cursiva\">Instagram</span>"
  },
  "banner.sub": { es: "Videos cortos y claros sobre cuidado bucal, tratamientos y tips semanales.", en: "Short, clear videos on oral care, treatments and weekly tips.", de: "Kurze, klare Videos zu Mundpflege, Behandlungen und wöchentlichen Tipps." },

  // Footer
  "footer.lema": { es: "Odontología Mínimamente Invasiva", en: "Minimally Invasive Dentistry", de: "Minimalinvasive Zahnmedizin" },
  "footer.registro": { es: "Cirujano Dentista · Reg. SIS N° 805368", en: "Dentist · SIS Reg. No. 805368", de: "Zahnarzt · SIS-Nr. 805368" },
  "footer.enlaces": { es: "Enlaces", en: "Links", de: "Links" },
  "footer.contacto": { es: "Contacto", en: "Contact", de: "Kontakt" },
  "footer.derechos": { es: "Todos los derechos reservados", en: "All rights reserved", de: "Alle Rechte vorbehalten" },

  // Modal
  "modal.titulo": { es: "Agendar tu hora", en: "Book your appointment", de: "Termin buchen" },
  "modal.textoYany": { es: "Para agendar en la Clínica Yany llama al teléfono y luego avísame por Instagram para coordinar:", en: "To book at Yany Clinic, call the number and then message me on Instagram:", de: "Für einen Termin in der Klinik Yany rufe bitte an und schreibe mir dann auf Instagram:" },
  "modal.textoProvi": { es: "Para coordinar una hora en Providencia, escríbeme por Instagram:", en: "To schedule in Providencia, message me on Instagram:", de: "Für einen Termin in Providencia schreibe mir bitte auf Instagram:" },
  "modal.llamar": { es: "Llamar", en: "Call", de: "Anrufen" },
  "modal.avisarIG": { es: "Avisar por Instagram", en: "Message on Instagram", de: "Instagram-Nachricht" },
  "modal.coordinarIG": { es: "Coordinar por Instagram", en: "Schedule via Instagram", de: "Termin via Instagram" },

  // Precios
  "precio.desde": { es: "Desde", en: "From", de: "Ab" },
  "precio.sinCosto": { es: "Sin costo", en: "Free", de: "Kostenlos" }
};
