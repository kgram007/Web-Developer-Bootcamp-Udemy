// Create a secret number
var secretNum = 4;

// Ask use for guess
var guessNum = Number(prompt("Guess a number"));

// Check  if guess is right
if (guessNum === secretNum) {
	alert("You Got It Right!!");
}
// Otherwise check if higher
else if (guessNum > secretNum) {
	alert("Too hight. Guess again!");
}
// Otherwise check if lower
else {
	alert("Too low. Guess again!");
}
