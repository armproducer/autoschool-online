setTimeout(() => {
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    cellAlign: "center",
    contain: true,
    wrapAround: true,
  });
  const elem2 = document.querySelector(".main-carousel2");
  const flkty2 = new Flickity(elem2, {
    cellAlign: "center",
    contain: true,
    wrapAround: true,
  });
  const elem3 = document.querySelector(".main-carousel3");
  const flkty3 = new Flickity(elem3, {
    cellAlign: "center",
    contain: true,
    wrapAround: true,
  });
}, 100);

$(".reviews-carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

if (window.matchMedia("(max-width: 1024px)").matches) {
  $(".price-carousel").flickity({
    // options
    cellAlign: "center",
    contain: true,
  }).flickity( 'select', 1 );
} else {
  $(".price-carousel").flickity({
    // options
    cellAlign: "center",
    contain: true,
    draggable: false
  }).flickity( 'select', 1 );
}



const tabButtons = document.querySelectorAll(".tab_hide_button");
const tabItems = document.querySelectorAll(".tab_hide_item");

const wrapper = document.querySelectorAll(".content_wrapper_scroll");

tabItems.forEach((i) => {
  if (i.dataset.number !== "1") {
    i.style.visibility = "hidden";
    i.style.height = "0";
  }
});

tabButtons.forEach((b) => {
  b.addEventListener("click", function (e) {

    $(".content_wrapper_scroll").animate(
      {
        scrollLeft:`${sizeFromLeft(b.dataset.number)}px`  
      },
      400
    );


    tabButtons.forEach((tb) => {
      tb.classList.remove("active");
    });

    b.classList.add("active");

    tabItems.forEach((i) => {
      if (i.dataset.number === b.dataset.number) {
        i.style.visibility = "visible";
        i.style.height = "auto";
      } else {
        i.style.visibility = "hidden";
        i.style.height = "0";
      }
    });
  });
});

const windowWidth = window.innerWidth;

function sizeFromLeft(size) {
  switch(size) {
    case '1':
      return 0;
    case '2':
      return 24+172+17-(windowWidth-188)/2;  
    case '3':
      return 24+172+17+188+17-(windowWidth-198)/2;
    case '4':
      return 24+172+17+188+17+198+17-(windowWidth-106)/2;;
    default:
      return 0;
  }
}
