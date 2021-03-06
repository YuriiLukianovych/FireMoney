import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
   //    slidesPerView: 3,
   //    spaceBetween: 28,

   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      // when window width is >= 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      // when window width is >= 1300px
      1300: {
         slidesPerView: 3,
         spaceBetween: 25,
      },
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});
