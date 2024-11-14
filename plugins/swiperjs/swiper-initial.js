const swiperThumb = new Swiper(".swiper-images-thumb", {
  slidesPerView: 4,
  spaceBetween: 10,
  // breakpoints: {
  //   250: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //   },
  // },
});
const swiperImagePreview = new Swiper(".swiper-images-preview", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  thumbs: {
    swiper: swiperThumb,
  },
});
