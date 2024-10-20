import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {},
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
});
