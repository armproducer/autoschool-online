setTimeout(() => {
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( elem, {
    cellAlign: "center",
    contain: true,
    wrapAround: true
  });
  const elem2 = document.querySelector('.main-carousel2');
  const flkty2 = new Flickity( elem2, {
    cellAlign: "center",
    contain: true,
    wrapAround: true
  });
  const elem3 = document.querySelector('.main-carousel3');
  const flkty3 = new Flickity( elem3, {
    cellAlign: "center",
    contain: true,
    wrapAround: true
  });
}, 100)

$(".reviews-carousel").flickity({
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
});

const tabButtons = document.querySelectorAll('.tab_hide_button');
const tabItems = document.querySelectorAll('.tab_hide_item');

tabItems.forEach( i => {
  if(i.dataset.number !== '1') {
    i.style.visibility = 'hidden';
    i.style.height = '0';
  }
});

tabButtons.forEach( b => {
  b.addEventListener('click', function() {
    tabItems.forEach( i => {
      if(i.dataset.number === b.dataset.number) {
        i.style.visibility = 'visible';
        i.style.height = 'auto';
      } else {
        i.style.visibility = 'hidden';
        i.style.height = '0';
      }
    })
  });
});


