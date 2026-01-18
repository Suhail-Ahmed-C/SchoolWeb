// Sticky navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("shadow-lg", window.scrollY > 50);
});

document.querySelectorAll('.animate-left').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.3}s`;
  el.classList.add('fade-left');
});


const eventDate = new Date("Jan 18, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}, 1000);



AOS.init({
    duration: 1000,
    once: true
});

// Auto play
const carousel = document.querySelector('#teacherCarousel');
new bootstrap.Carousel(carousel, {
    interval: 30000,
    ride: 'carousel',
    pause: false,
    wrap: true
});

const testimonialCarousel = document.querySelector('#testimonialCarousel');

new bootstrap.Carousel(testimonialCarousel, {
    interval: 40000,
    pause: false,
    ride: 'carousel',
    wrap: true
});

const swiper = new Swiper(".instagramSwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 }
    }
  });

   // Dynamic Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll to Top
  const btn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });