const header = document.querySelector(".header");

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    header.classList.add("header_short");
  } else {
    header.classList.remove("header_short");
  }
});
