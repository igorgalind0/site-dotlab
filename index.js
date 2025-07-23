/*JS para alterar a cor da "fita" e links dos cards*/

document.querySelectorAll(".card_caixa").forEach((card) => {
  const color = card.getAttribute("data-color");
  card.style.setProperty("--before-color", color);
});
