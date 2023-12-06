var swiper = new Swiper(".mySwiper", {
    speed : 4000,
    effect : 'fade',
    spaceBetween: 0,
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      dealy:3000,
    },
  });