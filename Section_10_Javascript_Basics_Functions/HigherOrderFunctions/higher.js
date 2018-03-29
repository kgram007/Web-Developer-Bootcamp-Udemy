function sing() {
	console.log("Twinkle twinkle...");
	console.log("How I wonder...");
}

// Start singing
var singID = setInterval(sing, 250);

// Stop singing
setInterval(function() { // Anonymous function
	clearInterval(singID);
}, 2000);
