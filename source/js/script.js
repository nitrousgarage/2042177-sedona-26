let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

let interactiveMap = document.querySelector(".map__content");
let imageMap = document.querySelector(".map__image");

interactiveMap.classList.remove("map__content--nojs");
imageMap.classList.remove("map__image--nojs");
