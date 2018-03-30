/* Init */
var btnTag = document.querySelector("button");
var bodyTag = document.querySelector("body");
var color1 = "white";
var color2 = "purple";
var colorFlag = true;

/* Event Listener */
btnTag.addEventListener("click", function() {
  if(colorFlag === true) {
    bodyTag.style.background = color2;
  } else {
    bodyTag.style.background = color1;
  }
  colorFlag = !colorFlag;
});
