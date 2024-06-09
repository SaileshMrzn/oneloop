function toggleMenu() {
  const overlay = document.getElementById("overlay");
  const menu = document.getElementById("men");

  const isnotDisplayed = window.getComputedStyle(menu).display === "none";

  if (isnotDisplayed) {
    overlay.style.display = "block";
    menu.style.display = "flex";
  } else {
    overlay.style.display = "none";
    menu.style.display = "none";
  }
}
