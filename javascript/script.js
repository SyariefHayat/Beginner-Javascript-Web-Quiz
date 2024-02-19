const links = document.querySelectorAll("ul li a");

// Menambahkan event listener untuk setiap elemen <a>
links.forEach(function (link) {
  link.addEventListener("click", function () {
    // Menghapus kelas "active" dari semua elemen
    links.forEach(function (link) {
      link.classList.remove("active");
    });

    // Menambahkan kelas "active" ke elemen yang diklik
    link.classList.add("active");
  });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function prevSlide() {
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < slides.length) {
    slider.appendChild(slides[currentSlide]);
    currentSlide++;
  }
}

function nextSlide() {
  if (currentSlide == 0) {
    currentSlide = slides.length;
  }

  slider.prepend(slides[currentSlide - 1]);
  currentSlide--;
}

const overStreak = document.querySelector(".streak");
const overHeart = document.querySelector(".heart");
const overPoints = document.querySelector(".points");


const streak = document.querySelector("li:nth-child(1)");
streak.addEventListener("click", () => {
  overStreak.classList.toggle("active");
  overHeart.classList.remove("active");
  overPoints.classList.remove("active");
});

const heart = document.querySelector("li:nth-child(2)");
heart.addEventListener("click", () => {
  overHeart.classList.toggle("active");
  overStreak.classList.remove("active");
  overPoints.classList.remove("active");
});

const points = document.querySelector("li:nth-child(3)");
points.addEventListener("click", () => {
  overPoints.classList.toggle("active");
  overStreak.classList.remove("active");
  overHeart.classList.remove("active");
});

// FUNGSI UNTUK MENGHAPUS CLASS TANPA MENEKAN LI
document.addEventListener("click", (e) => {
  const isClickInsideStreak = streak.contains(e.target);
  const isClickInsideOverStreak = overStreak.contains(e.target);
  const isClickInsideHeart = heart.contains(e.target);
  const isClickInsideOverHeart = overHeart.contains(e.target);
  const isClickInsidePoints = points.contains(e.target);
  const isClickInsideOverPoints = overPoints.contains(e.target);

  if (!isClickInsideStreak && !isClickInsideOverStreak) {
    overStreak.classList.remove("active");
  };

  if (!isClickInsideHeart && !isClickInsideOverHeart) {
    overHeart.classList.remove("active");
  };

  if (!isClickInsidePoints && !isClickInsideOverPoints) {
    overPoints.classList.remove("active");
  };

});