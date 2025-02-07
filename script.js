const translations = {
  es: {
    "sobre-mi": "Sobre Mí",
    "experiencia": "Experiencia",
    "habilidades": "Habilidades",
    "contacto": "Contacto",
    "descripcion": "Descripción breve sobre tu experiencia y habilidades.",
    "trabajos": "Lista de trabajos o proyectos realizados.",
    "habilidades-lista": "Listado de habilidades y tecnologías dominadas.",
    "nombre": "Tu Nombre",
    "correo": "Tu Correo",
    "mensaje": "Tu Mensaje",
    "enviar": "Enviar",
  },
  en: {
    "sobre-mi": "About Me",
    "experiencia": "Experience",
    "habilidades": "Skills",
    "contacto": "Contact",
    "descripcion": "Brief description of your experience and skills.",
    "trabajos": "List of jobs or projects done.",
    "habilidades-lista": "List of skills and mastered technologies.",
    "nombre": "Your Name",
    "correo": "Your Email",
    "mensaje": "Your Message",
    "enviar": "Send",
  },
};

window.onload = function() {
    alert("En proceso / Work in progress");
};

document
  .getElementById("language-switch")
  .addEventListener("change", function () {
    const lang = this.checked ? "en" : "es";
    document.querySelector("#sobre-mi h2").textContent =
      translations[lang]["sobre-mi"];
    document.querySelector("#sobre-mi p").textContent =
      translations[lang]["descripcion"];
    document.querySelector("#experiencia h2").textContent =
      translations[lang]["experiencia"];
    document.querySelector("#experiencia p").textContent =
      translations[lang]["trabajos"];
    document.querySelector("#habilidades h2").textContent =
      translations[lang]["habilidades"];
    document.querySelector("#habilidades p").textContent =
      translations[lang]["habilidades-lista"];
    document.querySelector("#contacto h2").textContent =
      translations[lang]["contacto"];
    document.getElementById("nombre").placeholder =
      translations[lang]["nombre"];
    document.getElementById("email").placeholder = translations[lang]["correo"];
    document.getElementById("mensaje").placeholder =
      translations[lang]["mensaje"];
    document.querySelector("button").textContent = translations[lang]["enviar"];
  });