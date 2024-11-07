let array = [];
let n = Math.floor(Math.random() * 1000000);
for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 1000000000);
}

console.log("Initial Array: " + array);

let startTime = performance.now();

let p = 0;
let r = array.length - 1;

function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

function merge(A, p, q, r) {
    let nl = q - p + 1;
    let nr = r - q;
    let L = new Array(nl);
    let R = new Array(nr);

    for (let i = 0; i < nl; i++) {
        L[i] = A[p + i];
    }
    for (let j = 0; j < nr; j++) {
        R[j] = A[q + j + 1];
    }

    let i = 0, j = 0, k = p;

    while (i < nl && j < nr) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < nl) {
        A[k] = L[i];
        i++;
        k++;
    }

    while (j < nr) {
        A[k] = R[j];
        j++;
        k++;
    }
}

if (array.length > 0) {
    mergeSort(array, p, r);
}

let endTime = performance.now();

console.log("Sorted Array: " + array);
console.log("Execution Time: " + (endTime - startTime) + " ms!");
