
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 10500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 500)}s`;
        }
        }
    });


  //  ---------------------------- swiper for service----------------------

  var swiper = new Swiper(".MySwiper", {
    effect: "cube",
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 80,
      shadowScale: 0.95,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });





// ----------------------------------------- New line of javascript ------------------------------------

const nav = document.querySelector(".navigator");
const ang = document.querySelector(".angles");
let icon = document.querySelector("#icon");

ang.addEventListener("click", ()=> {
  
  if (icon.className == "fa-solid fa-angle-up") {
    icon.className = "fa-solid fa-angle-down"
    nav.classList.add("show")
  } else {
    icon.className = "fa-solid fa-angle-up"
    nav.classList.remove("show")
  }
})



