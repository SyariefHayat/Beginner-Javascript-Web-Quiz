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

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");

const htmls = document.querySelectorAll(".html");
const hup = document.querySelector(".hup");
const hdown = document.querySelector(".hdown");

const csss = document.querySelectorAll(".css");
const cup = document.querySelector(".cup");
const cdown = document.querySelector(".cdown");

const jss = document.querySelectorAll(".js");
const jup = document.querySelector(".jup");
const jdown = document.querySelector(".jdown");

const nodes = document.querySelectorAll(".node");
const nup = document.querySelector(".nup");
const ndown = document.querySelector(".ndown");

const phps = document.querySelectorAll(".php");
const pup = document.querySelector(".pup");
const pdown = document.querySelector(".pdown");

const pytons = document.querySelectorAll(".pyton");
const yup = document.querySelector(".yup");
const ydown = document.querySelector(".ydown");

function show(n) {
  if (n == 1) {
    htmls.forEach((html) => {
      html.style.display = "block";
    });

    one.style.border = "none";
    hup.style.display = "none";
    hdown.style.display = "block";

  } else if (n == 2) {
    csss.forEach((css) => {
      css.style.display = "block";
    });

    two.style.border = "none";
    cup.style.display = "none";
    cdown.style.display = "block";

  } else if (n == 3) {
    jss.forEach((js) => {
      js.style.display = "block";
    });

    three.style.border = "none";
    jup.style.display = "none";
    jdown.style.display = "block";

  } else if (n == 4) {
    nodes.forEach((node) => {
      node.style.display = "block";
    });

    four.style.border = "none";
    nup.style.display = "none";
    ndown.style.display = "block";

  } else if (n == 5) {
    phps.forEach((php) => {
      php.style.display = "block";
    });

    five.style.border = "none";
    pup.style.display = "none";
    pdown.style.display = "block";

  } else {
    pytons.forEach((pyton) => {
      pyton.style.display = "block";
    });

    six.style.border = "none";
    yup.style.display = "none";
    ydown.style.display = "block";
  };
}

function hide(n) {
  if (n == 1) {
    htmls.forEach((html) => {
      html.style.display = "none";
    });

    one.style.borderBottom = "2px solid grey";
    hdown.style.display = "none";
    hup.style.display = "block";

  } else if (n == 2) {
    csss.forEach((css) => {
      css.style.display = "none";
    });

    two.style.borderBottom = "2px solid grey";
    cdown.style.display = "none";
    cup.style.display = "block";

  } else if (n == 3) {
    jss.forEach((js) => {
      js.style.display = "none";
    });

    three.style.borderBottom = "2px solid grey";
    jdown.style.display = "none";
    jup.style.display = "block";

  } else if (n == 4) {
    nodes.forEach((node) => {
      node.style.display = "none";
    });

    four.style.borderBottom = "2px solid grey";
    ndown.style.display = "none";
    nup.style.display = "block";

  } else if (n == 5) {
    phps.forEach((php) => {
      php.style.display = "none";
    });

    five.style.borderBottom = "2px solid grey";
    pdown.style.display = "none";
    pup.style.display = "block";

  } else {
    pytons.forEach((pyton) => {
      pyton.style.display = "none";
    });

    six.style.borderBottom = "2px solid grey";
    ydown.style.display = "none";
    yup.style.display = "block";
  };
}