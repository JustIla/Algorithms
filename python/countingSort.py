import time
import random
import math

def countingSort(A, k):

	C = [0] * (k + 1)
	B = [0] * len(A)

	for i in range(1, len(A)):
		C[A[i]] += 1

	for i in range(1, k + 1):
		C[i] += C[i - 1]

	for j in range(len(A) - 1, -1, -1):
		B[C[A[j]]] = A[j]
		C[A[j]] -= 1

	return B


A = [random.randint(1, 100) for _ in range(10)]
k = max(A)

print("Unsorted array:", A)

startTime = time.time()

sortedArray = countingSort(A, k)

endTime = time.time()
executionTime = (endTime - startTime)

print("Sorted array:", sortedArray	)
print(f"Execution time: {executionTime:.6f} seconds")