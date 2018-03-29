function isEven(num) {
	return (num % 2 === 0);
}

function factorial(n) {
	var fact = 1;
	for (var i = n; i > 1; i--) {
		fact *= i;
	}
	return fact;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}
