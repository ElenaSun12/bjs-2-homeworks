"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr; // Нет корней
	}

	if (discriminant === 0) {
		arr.push(-b / (2 * a)); // Один корень
		return arr;
	}

	// Два корня
	const sqrtD = Math.sqrt(discriminant);
	arr.push(
		(-b + sqrtD) / (2 * a),
		(-b - sqrtD) / (2 * a)
	);

	return arr;
}