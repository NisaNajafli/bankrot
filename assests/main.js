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
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 150) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
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