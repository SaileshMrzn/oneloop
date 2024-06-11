function toggleMenu() {
  const overlay = document.getElementById("overlay");
  const menu = document.getElementById("men");

  const isnotDisplayed = window.getComputedStyle(menu).display === "none";

  if (isnotDisplayed) {
    overlay.style.display = "block";
    menu.style.display = "flex";
  } else {
    overlay.style.display = "none";
    menu.style.display = "none";
  }
}

let currentIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("../pages/hero.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("hero_section").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });

  showSlide(currentIndex);

  //animate
  const elementsToAnimate = document.getElementById("animate-on-scroll");
  console.log(elementsToAnimate);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
