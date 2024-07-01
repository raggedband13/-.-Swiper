const postsSlider = new Swiper('.posts_slider', {
  // Настройки слайдера
  slidesPerView: 4.5, // указывает сколько слайдов будет отображатся в видимой области
  spaceBetween: 30, // задает отступ между слайдами
  loop: false, // делает переключение слайдера бесконечным

  /* Делает слайдер горизонтальным или вертикальным
      - horizontal - значение поумолчанию, горизонтальный слайдер
      - vertical - вертикальный слайдер
  */
  direction: 'horizontal', 

  /* Задает эффект слайду
      effect: "cube", - слайдер в виде куба
      effect: "fade", - слайды переключаются с затуханием
  */
  effect: "auto", // 

  // Точки (pagination)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // делает точки кликабельными
  },

  // Стрелочки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper banner
const swiperBanner = new Swiper('.swiper_banner', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
      delay: 5000,
  },
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


const swiperRewiews = new Swiper('.rewiew_slider',  {
  slidesPerView: 1.7,
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
