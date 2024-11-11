
import time
import random
import math

A = [random.randint(1, 100) for _ in range(10)]

def merge(A, p, q, r):
	nL = q - p + 1
	nR = r - q
	L = [0] * nL
	R = [0] * nR
	for i in range(nL):
		L[i] = A[p + i]
	for j in range(nR):
		R[j] = A[q + j + 1]
	i = 0
	j = 0
	k = p
	while i < nL and j < nR:
		if L[i] < R[j]:
			A[k] = L[i]
			i = i + 1
		else:
			A[k] = R[j]
			j = j + 1
		k = k + 1
	while i < nL:
		A[k] = L[i]
		i = i + 1
		k = k + 1
	while j < nR:
		A[k] = R[j]
		j = j + 1

def mergeSort(A, p, r):
	if p < r:
		q = (p + r) // 2
		mergeSort(A, p, q)
		mergeSort(A, q + 1, r)
		merge(A, p, q, r)


A = [random.randint(1, 10) for _ in range(10)]

print("Unsorted array:", A)

startTime = time.time()

mergeSort(A, 0, len(A) - 1)

endTime = time.time()
executionTime = (endTime - startTime)

print("Sorted array:", A)
print(f"Execution time: {executionTime:.6f} seconds")
