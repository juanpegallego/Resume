const experiences = [
  [
    "https://juanpegallego.github.io/BeAgenciaCreativa/",
    "Web Be Creative",
    "Figma, Vanilla Js, SASS, GSAP.",
    "./GIFS/becreative.gif",
  ],
  [
    "https://juanpegallego.github.io/TorneriaMercedes",
    "Web Torneria Mercedes",
    "Figma, Vanilla Js, SASS, GSAP.",
    "./GIFS/torneriamercedes.gif",
  ],
  [
    "https://github.com/juanpegallego/cavaliere/",
    "Web Cavaliere Group",
    "Figma, Vanilla Js, SASS, GSAP.",
    "./GIFS/cavaliere.gif",
  ],
  [
    "https://5411empanadas.com",
    "Web 5411 Empanadas (USA) ",
    "PHP, Javascript, CSS ",
    "./GIFS/5411.gif",
  ],
  [
    "https://www.laesquinadelneumatico.com.ar",
    "Web La Esquina Del Neumatico (AR) ",
    "JS, CSS, Handlebars ",
    "./GIFS/esquinaNeumatico.gif",
  ],
  [
    "https://www.lazanovias.com",
    "Shop Lazanovias (España) ",
    "Wordpress, WooCommerce, Elementor",
    "./GIFS/lazanovias.gif",
  ],
  [
    "https://www.legionextranjera.com.ar",
    "Shop Legion Extranjera (AR) ",
    "JS, CSS, Handlebars ",
    "./GIFS/legion.gif",
  ],
  [
    "https://www.tiendaoficiallongvie.com.ar",
    "Shop Longvie (AR) ",
    "JS, CSS, Handlebars",
    "./GIFS/longvie.gif",
  ],
  [
    "https://www.rutateatral.com",
    "Web Ruta Teatral (USA) ",
    "Wordpress, Elementor",
    "./GIFS/rutateatral.gif",
  ],
  [
    "https://www.valcereal.com",
    "Web Valcereal (AR)",
    "Wordpress, Elementor",
    "./GIFS/valcereal.gif",
  ],
  [
    "https://www.valcereal.com.ar/contrato/",
    " Valcereal Contrato Adhesion",
    "PHP, JS",
    "./GIFS/valcerealContrato.gif",
  ],
  [
    "https://madeinverse.com/",
    "Web Made In Verse (España)",
    "JS, CSS, GSAP",
    "./GIFS/Verse.gif",
  ],
];

const keycita = "1VIdUg8Hy-6TT_0RrOocC75UfE6jtKpadu63VW_A9Q8o";

//https://docs.google.com/spreadsheets/d/1VIdUg8Hy-6TT_0RrOocC75UfE6jtKpadu63VW_A9Q8o/edit?hl=es&gid=0#gid=0

const projects_URL = `https://sheets.googleapis.com/v4/spreadsheets/${keycita}/values/info!A:D?alt=json&key=AIzaSyBUy5u-IRP0MJzlWsQNpJF_FYD2Caey8do`;

function createCard(index, cardLink, cardTitle, cardDescription, cardVideoSRC) {
  if (!(cardLink && cardTitle && cardDescription)) {
    console.error("Error, Something is wrong with item index", index);
    return;
  } else {
    let video = cardVideoSRC || null;
    const container = document.querySelector("div.main-container");
    const card = document.createElement("div");

    card.className = "card";
    card.innerHTML = `
                <a href="${cardLink}" target="_blank">
                    <div class="card-description">
                        <h3>
                            ${cardTitle}
                        </h3>
                        <p>
                            ${cardDescription}
                        </p>
                    </div>
                    <img src="${video}" autoplay="" muted="" loop="" class="card-video">
                </a>
    `;

    container.appendChild(card);
  }
}

async function fetchAndCreateCards() {
  try {
    const response = await fetch(projects_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos del Google Sheet");
    }
    const data = await response.json();

    if (!data.values || !Array.isArray(data.values)) {
      throw new Error("Formato de datos inesperado");
    }

    data.values.slice(1).forEach((row, index) => {
      const cardLink = row[0];
      const cardTitle = row[1];
      const cardDescription = row[2];
      const cardVideoSRC = row[3];

      createCard(index, cardLink, cardTitle, cardDescription, cardVideoSRC);
    });
  } catch (error) {
    console.error("Error al procesar los datos del Google Sheet:", error);
  }
}

function hiContainer_HideFX() {
  const containerProjects = document.getElementById("projects");
  const hiContainer = document.querySelector("hi-container");

  containerProjects.addEventListener("hover", function () {
    hiContainer.classList.toggle("hide_hiContainer");
  });
}

hiContainer_HideFX();
fetchAndCreateCards();
