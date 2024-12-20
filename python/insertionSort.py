import time
import random 

def insertionSort(A):
	for i in range(1, len(A)):
		key = A[i]
		j = i-1
		while (j >= 0 and A[j] > key):
			A[j+1] = A[j]
			j = j-1
		A[j+1] = key

A = [random.randint(1, 100) for _ in range(10)]

print("Unsorted array:", A)

startTime = time.time()

insertionSort(A)

endTime = time.time()
executionTime = endTime - startTime

print("Sorted array:", A)
print(f"Execution time: {executionTime:.6f} seconds")
       