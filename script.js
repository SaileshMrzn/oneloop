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

function toggleMenuDropdown() {
  console.log("clicked");

  const dropdown = document.getElementById("menu_dropdown");

  const isnotDisplayed = window.getComputedStyle(dropdown).display === "none";

  if (isnotDisplayed) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
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
  fetch("../pages/navbar.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("navbar_section").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("../pages/hero.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("hero_section").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });

  fetch("../pages/features.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("features_section").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });

  fetch("../pages/newDimension.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("dimension_section").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });

  showSlide(currentIndex);
});

// window.onload = function () {
//   console.log("hello");
//   console.log("after window.onload");
//   const carouselInner = document.querySelector(".carousel .carousel-inner");
//   const carouselControl = document.getElementById("control");
//   console.log(carouselControl);

//   if (carouselInner && carouselControl) {
//     carouselInner.addEventListener("mouseenter", function () {
//       carouselControl.style.opacity = "1";
//     });

//     carouselInner.addEventListener("mouseleave", function () {
//       carouselControl.style.opacity = "0.5";
//     });
//   }
// };

// window.onload = function () {
//   const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
//   console.log(elementsToAnimate);

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in");

//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     }
//   );

//   elementsToAnimate.forEach((element) => {
//     observer.observe(element);
//   });
// };