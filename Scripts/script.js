// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Animations
const animatedElements = document.querySelectorAll(".animate-on-scroll");

function handleScroll() {
  animatedElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// ===== Testimonials Carousel =====
(function () {
  const carousel = document.querySelector('.testimonial-carousel');
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.carousel-dots');
  if (!carousel || !cards.length) return;

  const total = cards.length;
  let index = 0;
  let autoTimer = null;
  const AUTO_DELAY = 5000;

  // build dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goTo(i);
      resetAuto();
    });
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('button');

  function update() {
    const shift = index * 100;
    carousel.style.transform = `translateX(-${shift}%)`;

    cards.forEach((card, i) =>
      card.classList.toggle('active', i === index)
    );
    dots.forEach((d, i) =>
      d.classList.toggle('active', i === index)
    );
  }

  function goTo(i) {
    index = (i + total) % total;
    update();
  }
  function next() { goTo(index + 1); }

  function startAuto() {
    autoTimer = setInterval(next, AUTO_DELAY);
  }
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // init
  update();
  startAuto();
})();
