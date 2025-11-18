var swiper = new Swiper(".reviewMainSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
     autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    speed: 700,
});