import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function slider() {
  if(document.querySelector('.projectsSlider')) {
    const projectsSlider = new Swiper('.projectsSlider', {
      spaceBetween: 30,
      slidesPerView: 3,
      loopedSlides: 1,
      autoHeight: true,
      // loop: true,
      navigation: {
        nextEl: '.arrow__left',
        prevEl: '.arrow__right',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          loopedSlides: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          loopedSlides: 1,
          spaceBetween: 30
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
        },
        1440: {
          spaceBetween: 30,
          slidesPerView: 3,
          loopedSlides: 1,
        },
      }
    });
  }
}