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
    "./GIFS//torneriaMercedes.gif",
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

function createCard(index, cardLink, cardTitle, cardDescription, cardVideoSRC) {
  if (!(cardLink && cardTitle && cardDescription && cardVideoSRC)) {
    console.error("Error, Something is wrong with item index", index);
    return;
  } else {
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
                    <img src="${cardVideoSRC}" autoplay="" muted="" loop="" class="card-video">
                </a>
    `;

    container.appendChild(card);
  }
}

experiences.forEach((experience, index) => {
  const cardLink = experience[0];
  const cardTitle = experience[1];
  const cardDescription = experience[2];
  const cardVideoSRC = experience[3];

  createCard(index, cardLink, cardTitle, cardDescription, cardVideoSRC);
});
