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
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".myHeroSwiper", {
        loop: true,
        speed: 600,
        navigation: {
            nextEl: "[data-slider-button='2']",
            prevEl: "[data-slider-button='1']"
        }
    });
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.teamswiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: { 
    //   delay: 3000, 
    //   disableOnInteraction: false 
    // },
    pagination: { el: '.swiper-pagination' },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 5 }
    }
  });
});

// window.addEventListener("scroll", () => {
//   const header = document.getElementById("site-header");
//   if (window.scrollY > 250) {        
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });
document.getElementById("year").textContent = new Date().getFullYear()
const mainButton = document.getElementById('main-button');

mainButton.addEventListener('click', function () {
  this.classList.toggle('open');
});
