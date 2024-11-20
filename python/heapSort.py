import time
import random
import math

def left(i):
	return 2 * i + 1

def right(i):
	return 2 * i + 2

def maxHeapify (A, i, heapSize):
	l = left(i)
	r = right(i)
	maxIndex = i

	if l < heapSize and A[l] > A[maxIndex]:
		maxIndex = l
	
	if r < heapSize and A[r] > A[maxIndex]: 
		maxIndex = r

	if maxIndex != i:
		A[i], A[maxIndex] = A[maxIndex], A[i]
		maxHeapify(A, maxIndex, heapSize)

def buildMaxHeap (A):
	heapSize = len(A)
	for i in range(heapSize//2 - 1, -1, -1):
		maxHeapify(A, i, heapSize)

def heapSort (A):
	heapSize = len(A)
	buildMaxHeap(A)
	for i in range(len(A) - 1, 0, -1):
		A[i], A[0] = A[0], A[i]
		heapSize -= 1
		maxHeapify(A, 0, heapSize)


A = [random.randint(1, 10) for _ in range(10)]

print("Unsorted array:", A)

startTime = time.time()

heapSort(A)

endTime = time.time()
executionTime = (endTime - startTime)

print("Sorted array:", A)
print(f"Execution time: {executionTime:.6f} seconds")