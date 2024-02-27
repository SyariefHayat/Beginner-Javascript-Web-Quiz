const numbers = document.querySelectorAll(".numbers p");
const htmls = document.querySelectorAll(".html .question");

const opt1 = document.querySelectorAll(".opt-1");
const opt2 = document.querySelectorAll(".opt-2");
const opt3 = document.querySelectorAll(".opt-3");
const opt4 = document.querySelectorAll(".opt-4");
const opt5 = document.querySelectorAll(".opt-5");
const opt6 = document.querySelectorAll(".opt-6");
const opt7 = document.querySelectorAll(".opt-7");
const opt8 = document.querySelectorAll(".opt-8");
const opt9 = document.querySelectorAll(".opt-9");
const opt10 = document.querySelectorAll(".opt-10");
const opts1Answer = document.querySelectorAll(".opt-1 p span");
const opts2Answer = document.querySelectorAll(".opt-2 p span");
const opts3Answer = document.querySelectorAll(".opt-3 p span");
const opts4Answer = document.querySelectorAll(".opt-4 p span");
const opts5Answer = document.querySelectorAll(".opt-5 p span");
const opts6Answer = document.querySelectorAll(".opt-6 p span");
const opts7Answer = document.querySelectorAll(".opt-7 p span");
const opts8Answer = document.querySelectorAll(".opt-8 p span");
const opts9Answer = document.querySelectorAll(".opt-9 p span");
const opts10Answer = document.querySelectorAll(".opt-10 p span");

const next = document.querySelector(".next a")
const overlay = document.querySelector(".overlay");
const quizComp = document.querySelector(".quiz-complete");
const point = document.querySelector(".score p:nth-child(2)");


// Variabel Awal
let result;
let points = 0;
let answered = false;
let currentIndex = 0;

function countdown() { // Membuat hitung mundur selama 10 menit
  const endTime = new Date(); // Waktu saat ini
  endTime.setMinutes(endTime.getMinutes() + 10); // Menambahkan 10 menit

  const intervalId = setInterval(function () { // Memperbarui hitung mundur setiap detik
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(intervalId); // Hentikan hitung mundur ketika waktu habis
      show();
    } else {
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Format waktu sisa
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Selisih waktu % 1 jam dalam milisecond

      // Tampilkan waktu sisa pada elemen <p>
      document.querySelector('header p').innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
  }, 1000); // Perbarui setiap detik
}

function activeNumber(n) {
  numbers.forEach((number) => number.classList.remove("up"));
  htmls.forEach((html) => html.style.display = "none");

  numbers[n - 1].classList.add("up");
  htmls[n - 1].style.display = "flex";

  currentIndex = n - 1;
};

function handleAnswerClick(selectedAnswer, allAnswer) {
  selectedAnswer.addEventListener("click", () => {
    allAnswer.forEach((oneAnswer) => oneAnswer.classList.remove("active"));
    selectedAnswer.classList.add("active");
  })
}

opts1Answer.forEach((answer) => {
  handleAnswerClick(answer, opts1Answer);
});

opts2Answer.forEach((answer) => {
  handleAnswerClick(answer, opts2Answer);
});

opts3Answer.forEach((answer) => {
  handleAnswerClick(answer, opts3Answer);
});

opts4Answer.forEach((answer) => {
  handleAnswerClick(answer, opts4Answer);
});

opts5Answer.forEach((answer) => {
  handleAnswerClick(answer, opts5Answer);
});

opts6Answer.forEach((answer) => {
  handleAnswerClick(answer, opts6Answer);
});

opts7Answer.forEach((answer) => {
  handleAnswerClick(answer, opts7Answer);
});

opts8Answer.forEach((answer) => {
  handleAnswerClick(answer, opts8Answer);
});

opts9Answer.forEach((answer) => {
  handleAnswerClick(answer, opts9Answer);
});

opts10Answer.forEach((answer) => {
  handleAnswerClick(answer, opts10Answer);
});

function checkAnswer(selectedAnswer) {
  selectedAnswer.addEventListener("click", (e) => {
    const selectedOption = e.target.innerText.trim()[0];
    const correctAnswer = selectedAnswer.dataset.correctAnswer;

    if (selectedOption === correctAnswer) {
      result = true;
    } else {
      result = false;
    };
  });
};

opt1.forEach((answer) => {
  checkAnswer(answer);
});

opt2.forEach((answer) => {
  checkAnswer(answer);
});

opt3.forEach((answer) => {
  checkAnswer(answer);
});

opt4.forEach((answer) => {
  checkAnswer(answer);
});

opt5.forEach((answer) => {
  checkAnswer(answer);
});

opt6.forEach((answer) => {
  checkAnswer(answer);
});

opt7.forEach((answer) => {
  checkAnswer(answer);
});

opt8.forEach((answer) => {
  checkAnswer(answer);
});

opt9.forEach((answer) => {
  checkAnswer(answer);
});

opt10.forEach((answer) => {
  checkAnswer(answer);
});

next.addEventListener("click", () => {
  if (result !== undefined) {
    points += result ? 10 : 0;
    result = undefined;
  } else {
    return;
  }

  // if (currentIndex == numbers.length - 1 && result == undefined) {
  //   return alert("Anda Memiliki Soal Yang Belum Anda Jawab");
  // }

  if (currentIndex < numbers.length - 1) {
    activeNumber(currentIndex + 2)
  } else {
    show();
  };

  switch (currentIndex - 1) {
    case 1:
      htmls[0].style.display = "none";
      break;
    case 2:
      htmls[1].style.display = "none";
      break;
    case 3:
      htmls[2].style.display = "none";
      break;
    case 4:
      htmls[3].style.display = "none";
      break;
    case 5:
      htmls[4].style.display = "none";
      break;
    case 6:
      htmls[5].style.display = "none";
      break;
    case 7:
      htmls[6].style.display = "none";
      break;
    case 8:
      htmls[7].style.display = "none";
      break;
    case 9:
      htmls[8].style.display = "none";
      break;
    case 10:
      htmls[9].style.display = "none";
  }
});

function show() {
  overlay.style.display = "flex";
  point.innerHTML = points;
}

countdown(); // Panggil fungsi countdown saat halaman dimuat
