const lightbox = document.querySelector(".lightbox");

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    console.log("image clicked id: " + e);
    lightbox.classList.add("lightbox-active");
    const img = document.createElement("img");
    img.id = "lightbox-img";
    img.src = image.src;
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("lightbox-active");
  lightbox.removeChild(lightbox.firstChild);
});
