const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const gallery = document.querySelector(".projects-container");
const images = gallery.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightboxImg.src = image.src
    lightbox.classList.remove("hide");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hide");
  lightboxImg.src = "";
});
