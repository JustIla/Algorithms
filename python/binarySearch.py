import time
import random
import math

def binarySearch(A, key, low, high):

	if low > high :
		return 

	m = math.floor( (low + high) / 2 )

	if A[m] == key:
		return m
	elif A[m] < key:
		return binarySearch(A, key, m+1, high)
	else:
		return binarySearch(A, key, low, m-1)


A = [random.randint(1, 100) for _ in range(10)]
A.sort()

print("Array: ", A)

key = int(input("Search an element: "))

low = 0
high = len(A) - 1

startTime = time.time()

index = binarySearch(A, key, low, high)

endTime = time.time()
executionTime =  endTime - startTime

if index is None:
	print("The element doesn't exist")
else:
	
	print("The element is located in", index, "position of the array.")

	

print(f"Execution time: {executionTime:.6f} seconds.")