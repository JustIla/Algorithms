let array = [];
let n = Math.floor(Math.random() * 10000);

for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 1000);
}

let k = Math.max(...array) + 1;
let B = new Array(n);

console.log("Unsorted Array: " + array);

function countingSort(A, B, k) {
    let C = new Array(k).fill(0);

    for (let j = 0; j < A.length; j++) {
        C[A[j]]++;
    }
    for (let i = 1; i < k; i++) {
        C[i] += C[i - 1];
    }
    for (let j = A.length - 1; j >= 0; j--) {
        B[C[A[j]] - 1] = A[j];
        C[A[j]]--;
    }
}

let startTime = performance.now();
countingSort(array, B, k);
let endTime = performance.now();

console.log("Sorted Array: " + B);
console.log("Execution Time: " + (endTime - startTime) + " ms!");
