// =============================================================
//   SCRIPT — Dr. Tomás Steinhardt V.
//   Interactividad: tema claro/oscuro, menú móvil, render de
//   contenido dinámico (desde contenido.js), modal de agenda,
//   animaciones al hacer scroll.
// =============================================================

// ---------- AL CARGAR LA PÁGINA ----------
document.addEventListener("DOMContentLoaded", () => {
  inicializarTema();
  inicializarMenuMovil();
  inicializarScrollNavbar();
  inicializarAnimacionesScroll();
  renderizarContenido();
  inicializarModal();
  document.getElementById("anioActual").textContent = new Date().getFullYear();
});


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
//   RENDER DEL CONTENIDO (desde contenido.js)
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
  document.getElementById("sobreParrafo1").textContent = SOBRE_MI.parrafo1;
  document.getElementById("sobreParrafo2").textContent = SOBRE_MI.parrafo2;
  document.getElementById("sobreNacionalidades").textContent = SOBRE_MI.nacionalidades;
  document.getElementById("sobreIdiomas").textContent = SOBRE_MI.idiomas.join(" · ");
}

// --- Tratamientos ---
function renderizarTratamientos() {
  const grid = document.getElementById("tratamientosGrid");
  grid.innerHTML = TRATAMIENTOS.map(t => {
    let precioHTML = "";
    if (typeof t.precio === "number") {
      precioHTML = t.precio === 0
        ? `<p class="tratamiento-precio">Sin costo</p>`
        : `<p class="tratamiento-precio">Desde $${t.precio.toLocaleString("es-CL")}</p>`;
    }
    return `
      <div class="tratamiento-card">
        <span class="tratamiento-icono">${t.icono || "🦷"}</span>
        <h3 class="tratamiento-titulo">${t.titulo}</h3>
        <p class="tratamiento-desc">${t.descripcion}</p>
        ${precioHTML}
      </div>
    `;
  }).join("");
}

// --- Trayectoria ---
function renderizarTrayectoria() {
  // Experiencia (timeline)
  const expLista = document.getElementById("experienciaLista");
  expLista.innerHTML = EXPERIENCIA.map(e => `
    <li class="timeline-item">
      <div class="timeline-lugar">${e.lugar}</div>
      <div class="timeline-rol">${e.rol}</div>
      <div class="timeline-periodo">${e.periodo}</div>
      <p class="timeline-desc">${e.descripcion}</p>
    </li>
  `).join("");

  // Formación
  const ft = FORMACION.titulo;
  document.getElementById("formacionTitulo").innerHTML = `
    <strong>${ft.grado}</strong>
    <span>${ft.institucion} · ${ft.anio}</span>
  `;
  document.getElementById("formacionPrevia").innerHTML =
    FORMACION.educacionPrevia.map(l => `<li>• ${l}</li>`).join("");

  // Diplomados
  document.getElementById("diplomadosLista").innerHTML =
    FORMACION.diplomados.map(d => `
      <li>
        <div>
          <span class="diplomado-nombre">${d.nombre}</span>
          <span class="diplomado-institucion">${d.institucion}</span>
        </div>
      </li>
    `).join("");

  // Diplomas (imágenes escaneadas)
  const galeria = document.getElementById("diplomasGaleria");
  if (DIPLOMAS_IMAGENES.length > 0) {
    galeria.innerHTML = DIPLOMAS_IMAGENES.map(d => `
      <img src="${d.ruta}" alt="${d.titulo}" loading="lazy">
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
  grid.innerHTML = CASOS.map(c => `
    <figure class="caso-card">
      <div class="caso-imagen">
        <img src="${c.imagen}" alt="${c.titulo}" loading="lazy">
      </div>
      <figcaption class="caso-info">
        <h3 class="caso-titulo">${c.titulo}</h3>
        <p class="caso-desc">${c.descripcion}</p>
      </figcaption>
    </figure>
  `).join("");
}

// --- Reseñas ---
function renderizarResenas() {
  const grid = document.getElementById("resenasGrid");
  if (RESENAS.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--color-texto-suave); font-style: italic;">Próximamente: testimonios de pacientes.</p>`;
    return;
  }
  grid.innerHTML = RESENAS.map(r => `
    <div class="resena-card">
      <div class="resena-estrellas">${"★".repeat(r.estrellas)}${"☆".repeat(5 - r.estrellas)}</div>
      <p class="resena-texto">${r.texto}</p>
      <p class="resena-nombre">— ${r.nombre}</p>
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
      <img src="${p.ruta}" alt="${p.alt}" loading="lazy">
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
              title="Mapa ${u.nombre}"></iframe>
      <div class="ubicacion-info">
        <h3 class="ubicacion-nombre">${u.nombre}</h3>
        <p class="ubicacion-direccion">${u.direccion}</p>
        <ul class="ubicacion-horarios">
          ${u.horarios.map(h => `<li>${h}</li>`).join("")}
        </ul>
        ${u.telefono ? `<p class="ubicacion-telefono">Tel: <strong>${u.telefono}</strong></p>` : ""}
        <div class="ubicacion-cta">
          <button class="btn btn-primario" onclick="abrirModalAgenda('${u.id}')">
            ${u.textoBotonAgendar}
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
  if (form && PROFESIONAL.formularioGoogle) {
    form.src = PROFESIONAL.formularioGoogle;
  }

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

// --- Videos de Instagram (embeds) ---
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
  // Re-procesar embeds si el script de IG ya se cargó
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
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
  document.getElementById("modalTitulo").textContent = u.textoBotonAgendar;

  const acciones = document.getElementById("modalAcciones");
  let texto = "";
  let botones = "";

  if (u.accionAgendar === "yany") {
    texto = "Para agendar en la Clínica Yany llama al teléfono y luego avísame por Instagram para coordinar:";
    botones = `
      <a href="${u.telefonoLink}" class="btn btn-primario">📞 Llamar ${u.telefono}</a>
      <a href="https://instagram.com/${PROFESIONAL.instagram}" target="_blank" rel="noopener" class="btn btn-secundario">📷 Avisar por Instagram</a>
    `;
  } else if (u.accionAgendar === "providencia") {
    texto = "Para coordinar una hora en Providencia, escríbeme por Instagram:";
    botones = `
      <a href="https://instagram.com/${PROFESIONAL.instagram}" target="_blank" rel="noopener" class="btn btn-primario">📷 Coordinar por Instagram</a>
    `;
  }

  document.getElementById("modalTexto").textContent = texto;
  acciones.innerHTML = botones;
  document.getElementById("modalAgendar").classList.add("visible");
}
window.abrirModalAgenda = abrirModalAgenda;
