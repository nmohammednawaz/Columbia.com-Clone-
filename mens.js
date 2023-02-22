const swiper = new Swiper('.cart_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:5000,
    slidesPerView:4,
    spaceBetween:30,
    autoplay:{
        enabled:true,
        delay:0,
    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {
        el: '.swiper-pagination',
    },
  
  });
  const swipes = new Swiper('.cart__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:5000,
    slidesPerView:3,
    spaceBetween:30,
    autoplay:{
        enabled:true,
        delay:0,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
  
  });


 