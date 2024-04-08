const btn = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("ativo");
}

btn.addEventListener("click", toggleMenu);
btn.addEventListener("touchstart", toggleMenu);
