const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const mixer = mixitup(".project__grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
});

const scrollRevealOption = {
  distance: "30px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in-out",
};

ScrollReveal().reveal(".header__image img", scrollRevealOption);
ScrollReveal().reveal(".header__content h4", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 600 });
ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 900 });
ScrollReveal().reveal(".header__content .btn", { ...scrollRevealOption, delay: 1200 });

ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 300 });
ScrollReveal().reveal(".about__content p", { ...scrollRevealOption, delay: 600 });
ScrollReveal().reveal(".about__content h4", { ...scrollRevealOption, delay: 900 });
ScrollReveal().reveal(".about__btns", { ...scrollRevealOption, delay: 1200 });

ScrollReveal().reveal(".service__card", {
  duration: 800,
  interval: 300,
});

ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 300 });
