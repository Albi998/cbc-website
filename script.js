const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Chiudi se clicchi su un link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const wrapper = document.querySelector(".img-wrapper");
const img = document.querySelector(".img-hover-follow");

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left; // mouse X all’interno del wrapper
  const y = e.clientY - rect.top; // mouse Y all’interno del wrapper

  // Calcola % rispetto al centro
  const offsetX = (x / rect.width - 0.5) * 40; // max 10px sx/dx
  const offsetY = (y / rect.height - 0.5) * 40; // max 10px su/giù

  img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`;
});

wrapper.addEventListener("mouseleave", () => {
  img.style.transform = "translate(0, 0) scale(1)";
});

// const words = document.querySelectorAll("#rotator span");
// let current = 0;

// function showNextWord() {
//   const currentWord = words[current];
//   const nextIndex = (current + 1) % words.length;
//   const nextWord = words[nextIndex];

//   currentWord.classList.remove("active");
//   currentWord.classList.add("exit");

//   setTimeout(() => {
//     currentWord.classList.remove("exit");
//     nextWord.classList.add("active");
//     current = nextIndex;
//   }, 400);
// }

// words[0].classList.add("active");
// setInterval(showNextWord, 1500);

const edizioni = document.querySelectorAll(".cont-edizione");

edizioni.forEach((item) => {
  item.addEventListener("click", () => {
    // Chiude tutte le altre
    edizioni.forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });

    // Toggle su quella cliccata
    item.classList.toggle("active");
  });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Rimuovi attivo da tutti
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));

    // Attiva quello cliccato
    btn.classList.add("active");
    const target = btn.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

const imgContainer = document.querySelector(".image-hover-wrapper");
const ball = document.querySelector(".ball-follow");

let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;

function animate() {
  const ease = 0.15;
  ballX += (mouseX - ballX) * ease;
  ballY += (mouseY - ballY) * ease;

  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
  requestAnimationFrame(animate);
}
animate();

imgContainer.addEventListener("mouseenter", () => {
  ball.style.opacity = 1;
});

imgContainer.addEventListener("mouseleave", () => {
  ball.style.opacity = 0;
});

imgContainer.addEventListener("mousemove", (e) => {
  const containerRect = imgContainer.getBoundingClientRect();
  mouseX = e.pageX - containerRect.left - window.scrollX - 25;
  mouseY = e.pageY - containerRect.top - window.scrollY - 25;
});

const OFFSET = 90; // altezza navbar

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - OFFSET;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  });
});

const sections = document.querySelectorAll("section[id]");
const scrollLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      scrollLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// images.js
const images = {
  row1: [
    "img/1.webp",
    "img/2.webp",
    "img/3.webp",
    "img/4.webp",
    "img/5.webp",
    "img/6.webp",
    "img/7.webp",
    "img/8.webp",
    // "img/9.webp",
    "img/10.webp",
    "img/11.webp",
    "img/12.webp",
    "img/13.webp",
  ],
  row2: [
    "img/27.webp",
    "img/15.webp",
    "img/16.webp",
    "img/17.webp",
    "img/18.webp",
    "img/19.webp",
    "img/20.webp",
    "img/21.webp",
    "img/22.webp",
    "img/23.webp",
    "img/24.webp",
    "img/25.webp",
    "img/26.webp",
  ],
};

const row1 = document.getElementById("carousel-row-1");
const row2 = document.getElementById("carousel-row-2");

// Duplichiamo le immagini per loop infinito
const allImagesRow1 = [...images.row1, ...images.row1];
const allImagesRow2 = [...images.row2, ...images.row2];

allImagesRow1.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  row1.appendChild(img);
});

allImagesRow2.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  row2.appendChild(img);
});

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

document.querySelectorAll(".carousel-row img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
