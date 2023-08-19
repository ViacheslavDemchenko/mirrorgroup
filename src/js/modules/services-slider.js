import Swiper from './../libs/swiper-bundle.min.js'; // Слайдер

export default function servicesSlider() {
  if(document.querySelector('.documentationSlider')) {
    const documentationSlider = new Swiper('.documentationSlider', {
      spaceBetween: 30,
      slidesPerView: 1,
      loopedSlides: 1,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // loop: true,
      // navigation: {
      //   nextEl: '.arrow__left',
      //   prevEl: '.arrow__right',
      // },
      breakpoints: {
        1440: {
          spaceBetween: 30,
          slidesPerView: 4,
          loopedSlides: 1,
        },
        320: {
          slidesPerView: 1,
          loopedSlides: 1,
          spaceBetween: 0
        },
        570: {
          slidesPerView: 2,
          loopedSlides: 1,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          loopedSlides: 1,
          spaceBetween: 30
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 4,
          loopedSlides: 1,
        },
        // 1440: {
        //   spaceBetween: 30,
        //   slidesPerView: 3,
        //   loopedSlides: 1,
        // },
      }
    });
  }
}