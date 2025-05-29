"use strict";

function solveEquation(a, b, c) {
	const arr = [];
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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Проверяем, являются ли все аргументы числами или строками, которые могут быть преобразованы в числа
    if (typeof percent === 'string') percent = parseFloat(percent);
    if (typeof contribution === 'string') contribution = parseFloat(contribution);
    if (typeof amount === 'string') amount = parseFloat(amount);
    if (typeof countMonths === 'string') countMonths = parseFloat(countMonths);

    // Если после преобразования хотя бы один аргумент не является числом, возвращаем false
    if (typeof percent !== 'number' || typeof contribution !== 'number' ||
        typeof amount !== 'number' || typeof countMonths !== 'number') {
        return false;
    }

    // Преобразуем годовую процентную ставку в месячную и в диапазон от 0 до 1
    const monthlyPercent = (percent / 100) / 12;

    // Вычисляем тело кредита (сумму, которую нужно вернуть банку)
    const loanBody = amount - contribution;

    // Проверяем, если первоначальный взнос равен сумме кредита, то клиенту ничего платить не нужно
    if (contribution >= amount) {
        return 0;
    }

    // Рассчитываем ежемесячный платеж по формуле аннуитета
    const monthlyPayment = loanBody * (monthlyPercent / (1 - Math.pow(1 + monthlyPercent, -countMonths)));

    // Рассчитываем общую сумму, которую заплатит клиент (включая первоначальный взнос)
    let totalPayment = monthlyPayment * countMonths;

    // Округляем результат до двух знаков после запятой
    totalPayment = parseFloat(totalPayment.toFixed(2)); // Округление в конце

    // Возвращаем результат
    return totalPayment;
}

// Примеры использования функции
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56 
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52