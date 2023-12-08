// Data card yang saya miliki
const cardData = [
    {
      imgSrc: "Assets/Gambar/Introduction.jpg",
      title: "Introduction to Your Services",
      description: "Kami menawarkan beragam layanan, mulai dari kursus online yang mendalam, konsultasi ahli, hingga pengembangan perangkat lunak kustom. Temukan potensi terbaik Anda bersama kami.",
      modalContent: "Terbanglah bersama layanan unggulan kami, menawarkan petualangan dalam kursus mendalam, konsultasi ahli, dan pengembangan perangkat lunak kustom. Mari temukan potensi terbaik Anda bersama Hacktiv8!"
    },
    {
        imgSrc: "Assets/Gambar/Featured Tutorial.jpg",
        title: "Featured Tutorial",
        description: "Kami membimbing Anda langkah demi langkah melalui konsep dasar pemrograman menggunakan beragam bahasa. Mulai dari 'Hello, World!' hingga proyek kecil yang membangun keterampilan Anda.",
        modalContent: "Masuki dunia pemrograman dengan panduan eksklusif kami! Mulai dari 'Hello, World!' hingga petualangan membangun proyek kreatif, tingkatkan keterampilan Anda dengan langkah-langkah kami yang unik."
    },
    {
        imgSrc: "Assets/Gambar/Testimonials Stories.jpg",
        title: "Testimonials Stories",
        description: "Beragam testimoni yang sekiranya sesuai dengan pelayanan dan materi yang kami berikan. Peserta-peserta tersebut merupakan calon masa depan bangsa dan negara dalam kemajuan teknologi",
        modalContent: "Terbukti dan teruji oleh cerita-cerita keberhasilan! Dengarkan saksi bisu dari peserta kami, yang bukan hanya membangun masa depan teknologi, tetapi juga membangun inspirasi untuk generasi mendatang."
    },
    {
        imgSrc: "Assets/Gambar/Latest Updates and News.jpg",
        title: "Latest Updates and News",
        description: "Dalam berita terbaru kali ini, beragam bahasa merilis versi terbaru dengan fitur-fitur canggih. Baca selengkapnya tentang pembaruan ini dan bagaimana hal itu dapat memengaruhi proyek Anda.",
        modalContent: "Dalam berita terkini, dunia pemrograman berkembang pesat! Nikmati cerita terbaru tentang fitur canggih dan perubahan revolusioner. Temukan dampaknya pada proyek Anda dan ikuti perkembangannya."
    },
  ];
  
  // function untuk membuat card
  function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-3");
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
  
  // function untuk menambahkan card ke dalam html
  function appendCards() {
    const tutorialSection = document.getElementById("cardContainer");
    cardData.forEach(data => {
      const card = createCard(data);
      card.querySelector(".btn-primary").addEventListener("click", function() {
        openModal(this.getAttribute("data-modal-content"));
      });
      tutorialSection.appendChild(card);
    });
  }
  
  // function untuk menampilkan modal dan mengatur kontennya
  function openModal(content) {
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.querySelector(".modal-body");
    modalTitle.innerHTML = "Konten Modal";
    modalBody.innerHTML = content;
    $('#myModal').modal('show'); // Memanggil modal dengan menggunakan jQuery
  }
  
  // Memanggil function untuk menambahkan card saat dokumen selesai diproses
  document.addEventListener("DOMContentLoaded", appendCards);
  