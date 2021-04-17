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
