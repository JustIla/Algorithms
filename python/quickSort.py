import time      
import random

def partition(A, p, r):
    x = A[r]
    i = p - 1
    for j in range(p, r):
        if A[j] <= x:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[i + 1], A[r] = A[r], A[i + 1]
    return i + 1

def quickSort(A, p, r):
    if p < r:
        q = partition(A, p, r)
        quickSort(A, p, q - 1)
        quickSort(A, q + 1, r)  


A = [random.randint(1, 100) for _ in range(10)]

print("Array disordinato:", A)

startTime = time.time()

quickSort(A, 0, len(A) - 1)

endTime = time.time()
executionTime = (endTime - startTime)

print("Array ordinato:", A)
print(f"Tempo di esecuzione: {executionTime:.6f} secondi")
