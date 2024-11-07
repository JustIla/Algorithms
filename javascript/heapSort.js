let array = [];
let n = Math.floor(Math.random() * 1000000);

for (let i = 0; i < n; i++) {
	array[i] = Math.floor(Math.random() * 1000000000);
}
console.log("Unsorted Array: " + array);

let heapSize;

function heapSort(A) {
	buildMaxHeap(A);
	for (let i = A.length - 1; i >= 1; i--) {
		let temp = A[0];
		A[0] = A[i];
		A[i] = temp;
		heapSize = heapSize - 1;
		maxHeapify(A, 0);
	}
}

function buildMaxHeap(A) {
	heapSize = A.length;
	for (let i = Math.floor(A.length / 2) - 1; i >= 0; i--) {
		maxHeapify(A, i);
	}
}

function maxHeapify(A, i) {
	let l = LEFT(i);
	let r = RIGHT(i);
	let max = i;

	if (l < heapSize && A[l] > A[max]) {
		max = l;
	}
	if (r < heapSize && A[r] > A[max]) {
		max = r;
	}
	if (max != i) {
		let temp = A[i];
		A[i] = A[max];
		A[max] = temp;
		maxHeapify(A, max);
	}
}

function LEFT(i) {
	return 2 * i + 1;
}

function RIGHT(i) {
	return 2 * i + 2;
}

let startTime = performance.now();
heapSort(array);
let endTime = performance.now();

console.log("Sorted Array: " + array);
console.log("Execution Time: " + (endTime - startTime) + " ms!");
