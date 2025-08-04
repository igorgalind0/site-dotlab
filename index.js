/*JS para alterar a cor da "fita" e links dos cards*/

document.querySelectorAll(".card_caixa").forEach((card) => {
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
