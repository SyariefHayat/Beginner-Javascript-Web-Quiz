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