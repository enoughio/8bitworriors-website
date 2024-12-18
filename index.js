var crsr = document.querySelector(".cursor");
var blurs = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
crsr.style.left = dets.x + "px";
crsr.style.top = dets.y + "px";
blurs.style.left = dets.x - 150 + "px";
blurs.style.top = dets.y - 150 + "px";
});

// index.js
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  let pages = gsap.utils.toArray('#page');  // Selecting elements with class 'page'

  pages.forEach((page, i) => {
    if (i !== pages.length) {
      ScrollTrigger.create({
        trigger: page,
        pin: true,
        pinSpacing: false,
        start: 'top top',
        end: () => `+=${page.clientHeight}`
      });
    }
  });
});

$(document).ready(function() {
  var SwiperSliderOne = new Swiper('.photography-swiper--slider', {
            loop: true,
            parallax: true,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            autoHeight: true,
            speed: 2500,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            },
        });
});