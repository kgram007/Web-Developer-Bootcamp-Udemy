var age = Number(prompt("What is your age?"));

if (age < 0) {
	console.log("Come back once you're out of the womb");
} else if (age < 18) {
	console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
	console.log("You can enter, but cannot drink");
} else {
	console.log("Come on in. You can drink");

	if (age == 21) {
		console.log("Happy 21st birthday!!");
	}
	if (age % 2 == 1) {
		console.log("Your age is odd!");
	}

	var ageSqrtCeil = Math.ceil(Math.sqrt(age));
	if ((ageSqrtCeil * ageSqrtCeil) == age) {
		console.log("Perfect Square");
	}
}
