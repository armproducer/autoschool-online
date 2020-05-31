window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    mobileMenu = document.querySelector(".mobile_menu");

  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile_menu_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.toggle("mobile_menu_active");
      menu.classList.toggle("menu_active");
    });
  });
});
