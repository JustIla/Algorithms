let A = [12, 91, 11, 31, 21, 43, 65, 23, 45, 10, 4, 1, 5];
console.log("Array Originale: " + A);
var startTime = performance.now();
QuickSort(A, 0, A.length - 1);
var endTime = performance.now();
console.log("Array Ordinato: " + A);
console.log("Tempo di esecuzione: " + (endTime - startTime) + " ms!");

function QuickSort(A, p, r) {
    if (p < r) {
        let q = partition(A, p, r);
        QuickSort(A, p, q - 1);
        QuickSort(A, q + 1, r);
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
