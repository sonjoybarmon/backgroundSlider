var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
      },
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    }, 
    spaceBetween: 30,
    effect: 'fade', 
  });
