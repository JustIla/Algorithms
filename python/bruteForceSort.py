import time
import random
import math

def bruteForceSort(A):
	for i in range(0, len(A) - 1):
		minimum = math.inf
		for j in range(i, len(A)):
			if A[j] < minimum:
				minimum = A[j]
				index = j
		temp = A[i]
		A[i] = minimum
		A[index] = temp


A = [random.randint(1, 10) for _ in range(10)]

print("Unsorted array:", A)

startTime = time.time()

bruteForceSort(A)

endTime = time.time()
executionTime = (endTime - startTime)

print("Sorted array:", A)
print(f"Execution time: {executionTime:.6f} seconds")