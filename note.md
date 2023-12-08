ini tadi buat click
onclick="openModal('${data.modalContent}')"


ini tadi ngga ada
card.querySelector(".btn-primary").addEventListener("click", function() {
        openModal(this.getAttribute("data-modal-content"));
      });


PENJELASAN KODE JS
Data Card (cardData):
const cardData = [
  // Array yang berisi objek-objek, masing-masing merepresentasikan data untuk satu kartu.
  {
    imgSrc: "Assets/Gambar/Introduction.jpg",
    title: "Introduction to Your Services",
    description: "Kami menawarkan beragam layanan, mulai dari kursus online yang mendalam, konsultasi ahli, hingga pengembangan perangkat lunak kustom. Temukan potensi terbaik Anda bersama kami.",
    modalContent: "Terbanglah bersama layanan unggulan kami, menawarkan petualangan dalam kursus mendalam, konsultasi ahli, dan pengembangan perangkat lunak kustom. Mari temukan potensi terbaik Anda bersama Hacktiv8!"
  },
  // Data untuk kartu lainnya
];

Fungsi Membuat Kartu (createCard):
function createCard(data) {
  // Membuat elemen <div> untuk kartu.
  const card = document.createElement("div");
  card.classList.add("col-md-3", "mb-3");

  // Mengisi HTML elemen kartu dengan data dari objek data.
  card.innerHTML = `
    <div class="card">
      <img src="${data.imgSrc}" class="card-img-top" alt="Icon">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" data-modal-content="${data.modalContent}">Lihat</a>
      </div>
    </div>
  `;
  return card;
}

Fungsi Menambahkan Kartu ke HTML (appendCards):
function appendCards() {
  // Mendapatkan elemen HTML tempat kartu akan ditambahkan.
  const tutorialSection = document.getElementById("cardContainer");

  // Iterasi melalui setiap objek data dan membuat kartu menggunakan fungsi createCard.
  cardData.forEach(data => {
    // Membuat kartu.
    const card = createCard(data);

    // Menambahkan event listener untuk tombol "Lihat" yang akan menampilkan modal.
    card.querySelector(".btn-primary").addEventListener("click", function() {
      openModal(this.getAttribute("data-modal-content"));
    });

    // Menambahkan kartu ke dalam elemen HTML.
    tutorialSection.appendChild(card);
  });
}

Fungsi Menampilkan Modal (openModal):
function openModal(content) {
  // Mendapatkan elemen-elemen modal.
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.querySelector(".modal-body");

  // Mengatur konten modal sesuai dengan data yang diberikan.
  modalTitle.innerHTML = "Konten Modal";
  modalBody.innerHTML = content;

  // Menampilkan modal menggunakan jQuery.
  $('#myModal').modal('show');
}

Dokumen Terselesaikan (DOMContentLoaded Event Listener):
document.addEventListener("DOMContentLoaded", appendCards);


data-modal-content="${data.modalContent}"