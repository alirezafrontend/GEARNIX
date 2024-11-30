document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("offcanvas-menu");
  if (menu.style.left === "-100%") {
    menu.style.left = "0";
  } else {
    menu.style.left = "-100%";
  }
});

document
  .getElementById("offcanvas-menu-bg")
  .addEventListener("click", function () {
    const menu = document.getElementById("offcanvas-menu");
    if (menu.style.left === "0%") {
      menu.style.left = "-100%";
    } else {
      menu.style.left = "-100%";
    }
  });

// end header-menu

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === currentIndex) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentIndex);
  startAutoSlide();

  document
    .querySelector(".slider-container")
    .addEventListener("mouseenter", stopAutoSlide);
  document
    .querySelector(".slider-container")
    .addEventListener("mouseleave", startAutoSlide);
});
