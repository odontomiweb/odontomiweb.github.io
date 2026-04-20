// =============================================================
//   SCRIPT — Dr. Tomás Steinhardt V.
//   Interactividad + render + i18n (ES/EN/DE)
// =============================================================

let IDIOMA_ACTUAL = "es";

// Helper: obtiene el texto correcto según el idioma actual
function t(valor) {
  if (valor == null) return "";
  if (typeof valor === "string") return valor;
  if (typeof valor === "object") {
    return valor[IDIOMA_ACTUAL] || valor.es || "";
  }
  return String(valor);
}

function tUI(clave) {
  const entrada = TRADUCCIONES_UI[clave];
  if (!entrada) return clave;
  return entrada[IDIOMA_ACTUAL] || entrada.es || clave;
}


// ---------- AL CARGAR LA PÁGINA ----------
document.addEventListener("DOMContentLoaded", () => {
  IDIOMA_ACTUAL = localStorage.getItem("idioma") || "es";
  inicializarTema();
  inicializarMenuMovil();
  inicializarScrollNavbar();
  inicializarAnimacionesScroll();
  inicializarIdioma();
  renderizarContenido();
  aplicarTextosUI();
  inicializarModal();
  inicializarProteccionImagenes();
  document.getElementById("anioActual").textContent = new Date().getFullYear();
});


// =============================================================
//   IDIOMA (ES / EN / DE)
// =============================================================
function inicializarIdioma() {
  const cont = document.getElementById("btnIdioma");
  if (!cont) return;
  cont.querySelectorAll("button").forEach(btn => {
    if (btn.dataset.idioma === IDIOMA_ACTUAL) btn.classList.add("activo");
    else btn.classList.remove("activo");
    btn.addEventListener("click", () => cambiarIdioma(btn.dataset.idioma));
  });
  document.documentElement.lang = IDIOMA_ACTUAL;
}

function cambiarIdioma(nuevo) {
  IDIOMA_ACTUAL = nuevo;
  localStorage.setItem("idioma", nuevo);
  document.documentElement.lang = nuevo;
  document.querySelectorAll("#btnIdioma button").forEach(b => {
    b.classList.toggle("activo", b.dataset.idioma === nuevo);
  });
  aplicarTextosUI();
  renderizarContenido();
}

function aplicarTextosUI() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = tUI(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = tUI(el.dataset.i18nHtml);
  });
}


// =============================================================
//   TEMA CLARO / OSCURO
// =============================================================
function inicializarTema() {
  const temaGuardado = localStorage.getItem("tema") || "claro";
  document.documentElement.setAttribute("data-tema", temaGuardado);
  const btn = document.getElementById("btnTema");
  btn.addEventListener("click", () => {
    const actual = document.documentElement.getAttribute("data-tema");
    const nuevo = actual === "claro" ? "oscuro" : "claro";
    document.documentElement.setAttribute("data-tema", nuevo);
    localStorage.setItem("tema", nuevo);
  });
}


// =============================================================
//   MENÚ MÓVIL
// =============================================================
function inicializarMenuMovil() {
  const btn = document.getElementById("btnMenu");
  const menu = document.getElementById("navMenu");
  btn.addEventListener("click", () => menu.classList.toggle("abierto"));
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => menu.classList.remove("abierto"))
  );
}


// =============================================================
//   NAVBAR: sombra al hacer scroll
// =============================================================
function inicializarScrollNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  });
}


// =============================================================
//   ANIMACIONES FADE-IN AL HACER SCROLL
// =============================================================
function inicializarAnimacionesScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".seccion").forEach(s => {
    s.classList.add("fade-in");
    observer.observe(s);
  });
}


// =============================================================
//   PROTECCIÓN DE IMÁGENES (bloqueo click derecho + toast)
// =============================================================
function inicializarProteccionImagenes() {
  document.addEventListener("contextmenu", (e) => {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
      const msg = {
        es: "Contenido protegido. Sígueme en @" + PROFESIONAL.instagram,
        en: "Protected content. Follow me at @" + PROFESIONAL.instagram,
        de: "Geschützter Inhalt. Folge mir auf @" + PROFESIONAL.instagram
      };
      mostrarToast(msg[IDIOMA_ACTUAL] || msg.es);
    }
  });
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG") e.preventDefault();
  });
}

function mostrarToast(mensaje) {
  let toast = document.getElementById("toastProteccion");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastProteccion";
    toast.className = "toast-proteccion";
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.classList.add("visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("visible"), 2500);
}


// =============================================================
//   RENDER DEL CONTENIDO
// =============================================================
function renderizarContenido() {
  renderizarSobreMi();
  renderizarTratamientos();
  renderizarTrayectoria();
  renderizarCasos();
  renderizarResenas();
  renderizarPacientesFelices();
  renderizarUbicaciones();
  renderizarContacto();
  renderizarVideosIG();
}

// --- Sobre mí ---
function renderizarSobreMi() {
  document.getElementById("sobreParrafo1").textContent = t(SOBRE_MI.parrafo1);
  document.getElementById("sobreParrafo2").textContent = t(SOBRE_MI.parrafo2);
  document.getElementById("sobreIdiomas").textContent = t(SOBRE_MI.idiomas).join(" · ");
}

// --- Tratamientos ---
function renderizarTratamientos() {
  const grid = document.getElementById("tratamientosGrid");
  grid.innerHTML = TRATAMIENTOS.map(tt => {
    let precioHTML = "";
    if (typeof tt.precio === "number") {
      precioHTML = tt.precio === 0
        ? `<p class="tratamiento-precio">${tUI("precio.sinCosto")}</p>`
        : `<p class="tratamiento-precio">${tUI("precio.desde")} $${tt.precio.toLocaleString("es-CL")}</p>`;
    }
    return `
      <div class="tratamiento-card">
        <span class="tratamiento-icono">${tt.icono || "🦷"}</span>
        <h3 class="tratamiento-titulo">${t(tt.titulo)}</h3>
        <p class="tratamiento-desc">${t(tt.descripcion)}</p>
        ${precioHTML}
      </div>
    `;
  }).join("");
}

// --- Trayectoria ---
function renderizarTrayectoria() {
  // Experiencia (resumida, secundaria)
  const expLista = document.getElementById("experienciaLista");
  expLista.innerHTML = EXPERIENCIA.map(e => `
    <li><span class="exp-lugar">${e.lugar}</span> — ${t(e.rol)}</li>
  `).join("");

  // Formación académica
  const ft = FORMACION.titulo;
  document.getElementById("formacionTitulo").innerHTML = `
    <strong>${t(ft.grado)}</strong>
    <span>${ft.institucion} · ${ft.anio}</span>
  `;
  document.getElementById("formacionPrevia").innerHTML =
    t(FORMACION.educacionPrevia).map(l => `<li>• ${l}</li>`).join("");

  // Diplomados
  document.getElementById("diplomadosLista").innerHTML =
    FORMACION.diplomados.map(d => `
      <li>
        <div>
          <span class="diplomado-nombre">${t(d.nombre)}</span>
          <span class="diplomado-institucion">${t(d.institucion)}</span>
        </div>
      </li>
    `).join("");

  // Diplomas (imágenes escaneadas)
  const galeria = document.getElementById("diplomasGaleria");
  if (DIPLOMAS_IMAGENES.length > 0) {
    galeria.style.display = "";
    galeria.innerHTML = DIPLOMAS_IMAGENES.map(d => `
      <img src="${d.ruta}" alt="${t(d.titulo)}" loading="lazy">
    `).join("");
  } else {
    galeria.style.display = "none";
  }
}

// --- Casos clínicos ---
function renderizarCasos() {
  const grid = document.getElementById("casosGrid");
  const vacio = document.getElementById("casosVacio");
  if (CASOS.length === 0) {
    grid.style.display = "none";
    vacio.style.display = "block";
    return;
  }
  vacio.style.display = "none";
  grid.style.display = "";
  grid.innerHTML = CASOS.map(c => `
    <figure class="caso-card">
      <div class="caso-imagen">
        <img src="${c.imagen}" alt="${t(c.titulo)}" loading="lazy">
      </div>
      <figcaption class="caso-info">
        <h3 class="caso-titulo">${t(c.titulo)}</h3>
        <p class="caso-desc">${t(c.descripcion)}</p>
      </figcaption>
    </figure>
  `).join("");
}

// --- Reseñas ---
function renderizarResenas() {
  const grid = document.getElementById("resenasGrid");
  if (RESENAS.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--color-texto-suave); font-style: italic;">…</p>`;
    return;
  }
  grid.innerHTML = RESENAS.map(r => `
    <div class="resena-card">
      <div class="resena-estrellas">${"★".repeat(r.estrellas)}${"☆".repeat(5 - r.estrellas)}</div>
      <p class="resena-texto">${t(r.texto)}</p>
      <p class="resena-nombre">— ${t(r.nombre)}</p>
    </div>
  `).join("");
}

// --- Pacientes felices (collage) ---
function renderizarPacientesFelices() {
  const grid = document.getElementById("collagePacientes");
  if (!grid) return;
  if (typeof PACIENTES_FELICES === "undefined" || PACIENTES_FELICES.length === 0) {
    grid.style.display = "none";
    return;
  }
  grid.innerHTML = PACIENTES_FELICES.map(p => `
    <figure class="collage-item">
      <img src="${p.ruta}" alt="${t(p.alt)}" loading="lazy">
    </figure>
  `).join("");
}

// --- Ubicaciones ---
function renderizarUbicaciones() {
  const grid = document.getElementById("ubicacionesGrid");
  grid.innerHTML = UBICACIONES.map(u => `
    <div class="ubicacion-card">
      <iframe class="ubicacion-mapa"
              src="https://www.google.com/maps?q=${u.mapaQuery}&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="${t(u.nombre)}"></iframe>
      <div class="ubicacion-info">
        <h3 class="ubicacion-nombre">${t(u.nombre)}</h3>
        <p class="ubicacion-direccion">${t(u.direccion)}</p>
        <ul class="ubicacion-horarios">
          ${t(u.horarios).map(h => `<li>${h}</li>`).join("")}
        </ul>
        <div class="ubicacion-cta">
          <button class="btn btn-primario" onclick="abrirModalAgenda('${u.id}')">
            ${t(u.textoBotonAgendar)}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// --- Contacto y footer ---
function renderizarContacto() {
  const ig = document.getElementById("linkInstagram");
  ig.href = PROFESIONAL.instagramURL;
  ig.target = "_blank";
  ig.rel = "noopener";
  document.getElementById("textoInstagram").textContent = "@" + PROFESIONAL.instagram;

  const mail = document.getElementById("linkMail");
  mail.href = "mailto:" + PROFESIONAL.email;
  document.getElementById("textoMail").textContent = PROFESIONAL.email;

  // Formulario de Google embebido
  const form = document.getElementById("formularioGoogle");
  if (form && PROFESIONAL.formularioGoogle) form.src = PROFESIONAL.formularioGoogle;

  // Footer
  const footerIg = document.getElementById("footerInstagram");
  footerIg.href = PROFESIONAL.instagramURL;
  footerIg.target = "_blank";
  footerIg.textContent = "@" + PROFESIONAL.instagram;
  const footerMail = document.getElementById("footerMail");
  footerMail.href = "mailto:" + PROFESIONAL.email;
  footerMail.textContent = PROFESIONAL.email;

  // Banner Instagram
  const bannerLink = document.getElementById("bannerIgLink");
  const bannerHandle = document.getElementById("bannerIgHandle");
  if (bannerLink) bannerLink.href = PROFESIONAL.instagramURL;
  if (bannerHandle) bannerHandle.textContent = "@" + PROFESIONAL.instagram;
}

// --- Videos IG (embeds) ---
function renderizarVideosIG() {
  const grid = document.getElementById("videosIgGrid");
  if (!grid) return;
  if (typeof VIDEOS_IG === "undefined" || VIDEOS_IG.length === 0) {
    grid.style.display = "none";
    return;
  }
  grid.innerHTML = VIDEOS_IG.map(url => `
    <div class="video-ig-wrapper">
      <blockquote class="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="${url}"
                  data-instgrm-version="14"
                  style="background:#FFF; border:0; margin:0; padding:0; width:100%; min-width:280px;">
      </blockquote>
    </div>
  `).join("");
  if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
}


// =============================================================
//   MODAL DE AGENDA
// =============================================================
function inicializarModal() {
  const modal = document.getElementById("modalAgendar");
  document.getElementById("modalCerrar").addEventListener("click", () => modal.classList.remove("visible"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("visible");
  });
}

function abrirModalAgenda(idUbicacion) {
  const u = UBICACIONES.find(x => x.id === idUbicacion);
  if (!u) return;
  document.getElementById("modalTitulo").textContent = t(u.textoBotonAgendar);

  const acciones = document.getElementById("modalAcciones");
  let texto = "";
  let botones = "";

  if (u.accionAgendar === "yany") {
    texto = tUI("modal.textoYany");
    botones = `
      <a href="${u.telefonoLink}" class="btn btn-primario">📞 ${tUI("modal.llamar")} ${u.telefono}</a>
      <a href="https://instagram.com/${PROFESIONAL.instagram}" target="_blank" rel="noopener" class="btn btn-secundario">📷 ${tUI("modal.avisarIG")}</a>
    `;
  } else if (u.accionAgendar === "providencia") {
    texto = tUI("modal.textoProvi");
    botones = `
      <a href="https://instagram.com/${PROFESIONAL.instagram}" target="_blank" rel="noopener" class="btn btn-primario">📷 ${tUI("modal.coordinarIG")}</a>
    `;
  }

  document.getElementById("modalTexto").textContent = texto;
  acciones.innerHTML = botones;
  document.getElementById("modalAgendar").classList.add("visible");
}
window.abrirModalAgenda = abrirModalAgenda;
