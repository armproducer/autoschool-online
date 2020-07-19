$(".flowing-scroll").on("click", function () {
  var el = $(this);
  var dest = el.attr("href"); // получаем направление
  if (dest !== undefined && dest !== "") {
    // проверяем существование
    $("html").animate(
      {
        scrollTop: $(dest).offset().top - 75, // прокручиваем страницу к требуемому элементу
      },
      500 // скорость прокрутки
    );
  }
  mobileMenu.classList.toggle("mobile_menu_active");
  menu.classList.toggle("menu_active");
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1350) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});
