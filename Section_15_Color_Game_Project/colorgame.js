var h1Tag = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var rgbColorDisp = document.querySelector("#rgb-color-disp");
var messageDisp = document.querySelector("#message");
var scoreDisp = document.querySelector("#score-disp");
var resetButton = document.querySelector("#reset-btn");
var modeButtons = document.querySelectorAll(".mode-btn");
var bodyStyle = window.getComputedStyle(document.body, null);
var h1Style = window.getComputedStyle(h1Tag, null);

var numColors = 6;
var bodyBgColor = bodyStyle.backgroundColor;
var h1BgColor = h1Style.backgroundColor;
var colors;
var pickedColor;
var score = 0;
var numTries = 0;
var won = false;

/* Init and Run App */
initApp();


/* Functions */
function initApp() {
  scoreDisp.textContent = score;

  /* Run App by adding event listeners */
  addAppListeners();

  /* Reset */
  resetColors();
}

function resetColors() {
  colors = generateRandomColors(numColors);
  pickedColor = pickColor();
  numTries = 0;
  won = false;
  rgbColorDisp.textContent = pickedColor;
  h1Tag.style.backgroundColor = h1BgColor;
  resetButton.textContent = "New Colors";
  messageDisp.textContent = "";

  // Add colors to squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
}

function addAppListeners() {
  // Add Reset button listener
  resetButton.addEventListener("click", resetColors);

  // Mode button listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", modeButtonHandler)
  }

  // Add click listeners to squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", squareHandler);
  }
}

function modeButtonHandler() {
  for (var j = 0; j < modeButtons.length; j++) {
    modeButtons[j].classList.remove("selected");
  }
  this.classList.add("selected");

  switch (this.id) {
    case "easy-btn":
      numColors = 3;
      break;
    case "hard-btn":
      numColors = 6;
      break;
  }

  resetColors();
}

function squareHandler() {
  var cleckedColor = this.style.backgroundColor;
  if(!won) {
    if (cleckedColor === pickedColor) {
      messageDisp.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeAllSquaresColors(cleckedColor);
      h1Tag.style.backgroundColor = cleckedColor;
      score += (numColors - numTries - 1);
      scoreDisp.textContent = score;
      won = true;
    } else {
      messageDisp.textContent = "Try Again";
      this.style.backgroundColor = bodyBgColor;
      numTries++;
    }
  }
}

function pickColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function generateRandomColors(num) {
  var colorArray = [];
  for (var i = 0; i < num; i++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor() {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}

function changeAllSquaresColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
