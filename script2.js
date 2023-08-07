const hamburger = document.getElementById("hamburger");
const burgerMenu = document.getElementById("burger-menu");

hamburger.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
});
