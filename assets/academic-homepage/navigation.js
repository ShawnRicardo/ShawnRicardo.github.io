(() => {
  const button = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("homepage-navigation");
  if (!button || !menu) return;
  const closeMenu = () => {
    menu.classList.remove("show");
    button.setAttribute("aria-expanded", "false");
  };
  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    button.setAttribute("aria-expanded", String(isOpen));
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("show")) {
      closeMenu();
      button.focus();
    }
  });
})();
