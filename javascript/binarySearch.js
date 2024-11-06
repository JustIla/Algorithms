let array = [];
let n = Math.floor(Math.random() * 100);
for (let i = 0; i < n; i++) {
	array.push(Math.floor(Math.random() * 1000));
}
array.sort((a, b) => a - b);
let key = array[Math.floor(Math.random() * n)];

console.log("Array iniziale: " + array + "\nElemento da trovare: " + key);

var startTime = performance.now();

let p = 0;
let q = array.length - 1;
function binarySearch(A, p, q) {
	if (p > q) {
		return "non trovato";
	}
	let pos = Math.floor((p + q) / 2);
	if (A[pos] === key) {
		return pos;
	}
	if (A[pos] < key) {
		return binarySearch(A, pos + 1, q);
	}
	if (A[pos] > key) {
		return binarySearch(A, p, pos - 1);
	}
}

console.log("L'elemento si trova in posizione: " + binarySearch(array, p, q));

var endTime = performance.now();
console.log("Tempo di esecuzione: " + (endTime - startTime) + " ms!");