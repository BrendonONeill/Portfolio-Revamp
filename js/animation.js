const textDisplay = document.querySelector("#animatedText");
const textArray = ["Front-end devloper", "Graphic Designer"];
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

textLoop();
