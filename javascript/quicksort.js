let A = [];
let n = 1000000;
for (let i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 100000000);
}
console.log("\nArray Originale: " + A);
var startTime = performance.now();
quickSort(A, 0, A.length - 1);
var endTime = performance.now();
console.log("\nArray Ordinato: " + A);
console.log("\nTempo di esecuzione: " + (endTime - startTime) + " ms!");

function quickSort(A, p, r) {
    if (p < r) {
        let q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

function partition(A, p, r) {
    let x = A[r];
    let i = p - 1;
    for (let j = p; j <= r - 1; j++) {
        if (A[j] <= x) {
            i = i + 1;
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    let temp = A[i + 1];
    A[i + 1] = A[r];
    A[r] = temp;
    return i + 1;
}
