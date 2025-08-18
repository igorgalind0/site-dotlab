/*JS para alterar a cor da "fita" e links dos cards*/

document.querySelectorAll("[data-color]").forEach((card) => {
  const color = card.getAttribute("data-color");
  card.style.setProperty("--before-color", color);
});

/*JS para o menu responsivo*/

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav ul");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});


/*JS para as setas dos cards*/

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card_info").forEach((card) => {
    const imagemSeta = card.getAttribute("data-seta");
    if (imagemSeta) {
      card.style.setProperty("--seta-url", `url(${imagemSeta})`);
    }
  });
});
