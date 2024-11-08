let array = [];
let n = Math.floor(Math.random() * 100000);

for (let i = 0; i < n; i++) {
	array.push(Math.floor(Math.random() * 10000));
}

console.log("\nInitial array:\n" + array);

function bruteForceSort(A) {
	for (let i = 0; i < array.length; i++) {
		min = +Infinity; 
		for (let j = i; j < array.length; j++) {
			if (array[j] < min) {
				min = array[j];
				index = j;
			}
		}
		temp = array[i];
		array[i] = min; 
		array[index] = temp;
	}
}

var startTime = performance.now();
bruteForceSort(array);
var endTime = performance.now();

console.log("\nSorted array:\n" + array);
console.log("\nExecution time -> " + (endTime - startTime) + " ms");