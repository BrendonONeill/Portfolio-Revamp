// toggle animation
const darkButton = document.querySelector(".dark-mode-button");
const darkToggle = document.querySelector(".dark-mode-toggle");
const rootVar = document.querySelector(":root");
const image = document.querySelector(".image-toggle");
const body = document.body;
const headingImage = document.querySelector(".heading-image");

// offcanvas
const canvasbut = document.querySelectorAll(".offcanvas-close")
const navbut = document.querySelector(".nav-burger")
const canvascontain = document.querySelector(".offcanvas-container")
const canvasbg = document.querySelector(".offcanvas-bg")

// hero animation
const textDisplay = document.querySelector("#animatedText");
const textArray = ["Front-end Developer", "Graphic Designer"];
let currentText = [" "];
let j = 0;
let i = 0;
let cycleFinished = false;
function textLoop() {
  textDisplay.innerHTML = currentText.join("");
  if (i < textArray.length) {
    if (j < textArray[i].length && cycleFinished === false) {
      currentText.push(textArray[i][j]);
      j++;
      setTimeout(textLoop, 100);
    } else if (j > 0 && cycleFinished === true) {
      currentText.pop(textArray[i][j]);
      j--;
      setTimeout(textLoop, 100);
    } else if (j == 0 && cycleFinished === true) {
      cycleFinished = false;
      i++;
      setTimeout(textLoop, 100);
    } else if (j == textArray[i].length) {
      cycleFinished = true;
      setTimeout(textLoop, 2000);
    }
  } else {
    i = 0;
    j = 0;
    currentText = [];
    setTimeout(textLoop, 100);
  }
}

window.addEventListener("load", (e) => {
  if (
    localStorage.getItem("light") === null &&
    localStorage.getItem("dark") === null
  ) {
    localStorage.setItem("dark", true);
  } else if (localStorage.getItem("light")) {
    themeChange();
    image.src = "images/sun.svg";
  }
});

darkButton.addEventListener("click", () => {
  if (darkToggle.classList.contains("toggle-light")) {
    localStorage.setItem("dark", true);
    localStorage.removeItem("light");
    themeChange();
  } else {
    localStorage.setItem("light", true);
    localStorage.removeItem("dark");
    themeChange();
  }
});

function themeChange() {
  if (localStorage.getItem("light")) {
    image.src = "images/sun.svg";
    darkToggle.classList.toggle("toggle-light");
    darkToggle.classList.remove("toggle-dark");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    image.src = "images/moon.svg";
    darkToggle.classList.toggle("toggle-dark");
    darkToggle.classList.remove("toggle-light");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

if (document.title === "Brendon O'Neill's Portfolio") {
  textLoop();

canvasbut.forEach(c => {
  c.addEventListener("click", () => {
    setTimeout(() => {
      canvascontain.classList.add("offscreen")
      canvasbg.classList.remove("show")
    }, 500)
    
})
})

canvasbg.addEventListener("click", () => {
  canvascontain.classList.add("offscreen")
  canvasbg.classList.remove("show")
})


navbut.addEventListener("click", () => {
  canvascontain.classList.remove("offscreen")
  canvasbg.classList.add("show")
})
}