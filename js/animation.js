// toggle animation
const darkButton = document.querySelector(".dark-mode-button");
const darkToggle = document.querySelector(".dark-mode-toggle");
const rootVar = document.querySelector(":root");
const image = document.querySelector(".image-toggle");
const body = document.body;
const headingImage = document.querySelector(".heading-image");

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
    rootVar.style.setProperty("--primary-colour", "#E6E6E6");
    rootVar.style.setProperty("--text-colour", "#000");
    rootVar.style.setProperty("--black-bg", "#b79ced");
    rootVar.style.setProperty("--light-black-bg", "#dec0f1");
    rootVar.style.setProperty("--primary-nav-colour", "#8672ad");
    rootVar.style.setProperty("--card-image-bg", "#ced4da");
    body.style.backgroundColor = "#fff";
    rootVar.style.setProperty("--project-bg", "#e6e6e6");
    if (document.title === "Brendon O'Neill Portfolio") {
      headingImage.style.backgroundImage = "url(../images/lightbg.png)";
    }
  } else {
    image.src = "images/moon.svg";
    darkToggle.classList.toggle("toggle-dark");
    darkToggle.classList.remove("toggle-light");
    rootVar.style.setProperty("--primary-colour", "#7223c7");
    rootVar.style.setProperty("--text-colour", "#fff");
    rootVar.style.setProperty("--black-bg", "#252627");
    rootVar.style.setProperty("--light-black-bg", "#303233");
    rootVar.style.setProperty("--primary-nav-colour", "#1f1f1f");
    rootVar.style.setProperty("--card-image-bg", "#fff");
    body.style.backgroundColor = "#2f2f2f";
    rootVar.style.setProperty("--project-bg", "#252627");
    if (document.title === "Brendon O'Neill Portfolio") {
      headingImage.style.backgroundImage = "url(../images/darkbg.png)";
    }
  }
}
if (document.title === "Brendon O'Neill Portfolio") {
  textLoop();
}
