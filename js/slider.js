const carousel2 = document.querySelector(".main-carousel2");
const carousel3 = document.querySelector(".main-carousel3");

if (window.matchMedia("(max-width: 1024px)").matches) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 4; i++) {
    const element = document.createElement("div");
    element.classList.add(
      "carousel-cell",
      "content_wrapper_box_item_carousel_cell"
    );
    element.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="/img/Exam${i}.jpg" alt="exam_pic${i}" />
      `
    );
    fragment.appendChild(element);
  }
  carousel2.appendChild(fragment);
} else {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 4; i++) {
    const element = document.createElement("div");
    element.classList.add(
      "carousel-cell",
      "content_wrapper_box_item_carousel_cell"
    );
    element.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="/img/Exam_desktop${i}.jpg" alt="exam_pic${i}" />
      `
    );
    fragment.appendChild(element);
  }
  carousel2.appendChild(fragment);
}

if (window.matchMedia("(max-width: 1024px)").matches) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 4; i++) {
    const element = document.createElement("div");
    element.classList.add(
      "carousel-cell",
      "content_wrapper_box_item_carousel_cell"
    );
    element.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="/img/Stat${i}.jpg" alt="stat_pic${i}" />
      `
    );
    fragment.appendChild(element);
  }
  carousel3.appendChild(fragment);
} else {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 4; i++) {
    const element = document.createElement("div");
    element.classList.add(
      "carousel-cell",
      "content_wrapper_box_item_carousel_cell"
    );
    element.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="/img/Stat_desktop${i}.jpg" alt="stat_pic${i}" />
      `
    );
    fragment.appendChild(element);
  }
  carousel3.appendChild(fragment);
}

$(".main-carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

$(".main-carousel2").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

$(".main-carousel3").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

$(".reviews-carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

const questions = document.getElementById("questions");
const exams = document.getElementById("exams");
const stats = document.getElementById("stats");

questions.classList.remove("active");
questions.classList.remove("show");
exams.classList.remove("active");
exams.classList.remove("show");
stats.classList.remove("active");
stats.classList.remove("show");

const size = window.screen.width;
console.log(size);

