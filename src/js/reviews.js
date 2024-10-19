import { Swiper } from 'swiper';

const swiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loopedSlides: 3,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoplay: {
    delay: 5000,
  },
  navigation: {},
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loopedSlides: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      loopedSlides: 3,
    },
  },
});
