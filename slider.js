var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  speed: 500,
  effect: "slide",
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    invert: false,
    sensitivity: 1,
  },
});