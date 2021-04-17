setTimeout(() => {
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    cellAlign: "center",
    contain: true,
    wrapAround: true
  });
  var elem2 = document.querySelector('.main-carousel2');
  var flkty2 = new Flickity( elem2, {
    cellAlign: "center",
    contain: true,
    wrapAround: true
  });
  var elem3 = document.querySelector('.main-carousel3');
  var flkty3 = new Flickity( elem3, {
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


const tabButton = document.querySelector('.tab_hide_button');
const tabItem = document.querySelector('.tab_hide_item');

tabItem.style.visibility = 'hidden';
tabItem.style.height = '0';

tabButton.addEventListener('click', function() {
  tabItem.style.visibility = 'visible';
  tabItem.style.height = 'auto';
});
