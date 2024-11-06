array = [1, 2, 2, 5, 6, 10];


let p = 0;
let q = 5;
let key = 10;
let pos = Math.floor((p + q) / 2);

console.log("Array iniziale: " + array + "\nElemento da trovare: " + key);

if (array[pos] === key) {
	console.log("Posizione della key indovinata subito -> " + pos);
	return;
}

if (array[pos] < key) {
	while (pos <= q) {
		pos++;
		if (array[pos] === key) {
			console.log("L'elemento si trova in posizione: " + pos);
			return;
		}
	}
}

if (array[pos] > key) {
	while (pos >= p) {
		pos--;
		if (array[pos] === key) {
			console.log("L'elemento si trova in posizione: " + pos);
			return;
		}
	}
}

if ((pos < p) || (pos > q)) {
	console.log("Pos. non trovata");
	return;
}