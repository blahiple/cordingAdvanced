// Swiper
const swiper = new Swiper('.p-works__swiper', {
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});