let array = [];
let dim = Math.floor(Math.random() * 1000);
for (let i = 0; i < dim; i++) {
	array[i] = Math.floor(Math.random() * 100000);
}
let n = array.length;
console.log("Unsorted Array: " + array);

function insertionSort(A, n) {
	for (let i = 1; i < n; i++) {
		let key = A[i];
		let j = i - 1;
		while (j >= 0 && A[j] > key) {
			A[j + 1] = A[j];
			j = j - 1;
		}
		A[j + 1] = key;
	}
}

var startTime = performance.now();
insertionSort(array, n);
var endTime = performance.now();

console.log("Sorted Array: " + array);
console.log("\nExecution Time: " + (endTime - startTime) + " ms!");
