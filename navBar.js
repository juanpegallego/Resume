const hamburguer = document.getElementById("hamburguer");
const nav = document.getElementById("nav");

window.addEventListener("resize", hideNavBar);
if (visualViewport.width < 768) {
  responsiveNav();
}

function hideNavBar() {
  visualViewport.width < 768 ? responsiveNav() : basicNav();
}

function autoHideNavBar(nav) {
  setTimeout(() => {
    nav.style.transform = "translateY(-500px)";
  }, 7000);
}

function rotateHamburguer(x) {
  x.style.animation = "rotateHamburguer 1 .5s";

  setTimeout(() => {
    x.style.animation = "none";
  }, 550);
}

function basicNav() {
  nav.style.display = "flex";
  hamburguer.style.display = "none";
}

function responsiveNav() {
  hamburguer.style.display = "flex";

  hamburguer.addEventListener("click", () => {
    nav.style.position == "relative"
      ? (nav.style.position = "absolute")
      : (nav.style.position = "relative");

    hamburguer.style.transform == "none"
      ? (hamburguer.style.transform = "none")
      : rotateHamburguer(hamburguer);

    nav.style.transform == "translateY(0px)"
      ? (nav.style.transform = "translateY(-500px)")
      : (nav.style.transform = "translateY(0px)");
  });
}
