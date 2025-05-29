function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {

			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	const avg = Number((sum / arr.length).toFixed(2));
	return {
		max,
		min,
		avg
	};
}

// Тесты
console.log(getArrayParams(-99, 99, 10), '{min: -99, max: 99, avg 3,33}') // { min: -99, max: 99, avg: 3.33 })
console.log(getArrayParams(1, 2, 3, -100, 10), '{ min: -100, max: 10, avg: -16,80}') // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5), 'expect { min: 5, max: 5, avg: 5.00 }') // { min: 5, max: 5, avg: 5 }

// Функция для суммирования элементов
function summElementsWorker(...numbers) {
	if (numbers.length === 0) return 0;
	return numbers.reduce((sum, num) => sum + num, 0);
}

// Функция для вычисления разницы между максимальным и минимальным элементом
function differenceMaxMinWorker(...numbers) {
	if (numbers.length === 0) return 0;
	const max = Math.max(...numbers);
	const min = Math.min(...numbers);
	return max - min;
}

// Функция для вычисления разницы суммы чётных и нечётных элементов
function differenceEvenOddWorker(...numbers) {
	if (numbers.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (const num of numbers) {
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}
	return sumEvenElement - sumOddElement;
}

// Функция для вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...numbers) {
	if (numbers.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (const num of numbers) {
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement++;
		}
	}
	return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

// Примеры использования
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (const arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}