const slider = document.querySelector(".main-head");
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const date = document.querySelector(".dateStr");

// Carousel functionality
let sliderImages = [
  "img/school/1.jpeg",
  "img/school/3.jpeg",
  "img/school/7.jpeg",
  "img/school/8.jpeg",
  "img/school/9.jpeg",
  //"img/pic2.PNG",
  //"img/pic3.PNG",
  // "img/pic4.JPG",
  //"img/pic1.JPG",
];

let counter = 0;

const changeImg = () => {
  slider.style.transition = "3s ease-in";
  slider.style.backgroundImage = `url(${sliderImages[counter]})`;
  counter++;
  if (counter === sliderImages.length -1) {
    counter = 0;
  }
};

setInterval(changeImg, 7000);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
  },
});

/**************Nav toggle functionality**********/

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      burger.classList.remove("toggle");
    }
  }
});

// footer date
date.textContent = new Date().getFullYear();
