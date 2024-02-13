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