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
document.querySelector('.js-open-region').addEventListener('click', function () {
            document.getElementById('js-region-fancy').classList.add('show-regions');
        });

        // Region panelini bağla
        document.querySelector('.js-close-region').addEventListener('click', function () {
            document.getElementById('js-region-fancy').classList.remove('show-regions');
        });


        // Şəhər seçimi
        document.querySelectorAll('.regions-full-list__city a').forEach(function(cityLink) {
            cityLink.addEventListener('click', function() {

                let selectedCity = this.textContent.trim();

                // Yuxarı blokda "Ваш город: ..."
                let cityTextBlock = document.querySelector('.b-title-h3.hide-on-mobile');
                if (cityTextBlock) {
                    cityTextBlock.textContent = "Ваш город: " + selectedCity;
                }

                // Header-də seçilmiş şəhər
                let regionSpan = document.querySelector('#js-region span');
                if (regionSpan) {
                    regionSpan.textContent = selectedCity;
                }

                // Paneli bağla
                document.getElementById('js-region-fancy').classList.remove('show-regions');

                // Yadda saxla
                localStorage.setItem('selectedCity', selectedCity);
            });
        });


        // Səhifə açılarkən yadda saxlanmış şəhər
        document.addEventListener('DOMContentLoaded', function() {
            let savedCity = localStorage.getItem('selectedCity');
            if (savedCity) {

                let cityTextBlock = document.querySelector('.b-title-h3.hide-on-mobile');
                if (cityTextBlock) cityTextBlock.textContent = "Ваш город: " + savedCity;

                let regionSpan = document.querySelector('#js-region span');
                if (regionSpan) regionSpan.textContent = savedCity;
            }
        });