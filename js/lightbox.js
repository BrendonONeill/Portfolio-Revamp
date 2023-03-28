const lightbox = document.querySelector(".lightbox");
const gallery = document.querySelector(".gallery-container");
const images = gallery.querySelectorAll("img");
console.log(images);
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("lightbox-active");
    const img = document.createElement("img");
    img.id = "lightbox-img";
    img.src = image.src;
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("lightbox-active");
  lightbox.removeChild(lightbox.firstChild);
});
