import time
import random
import math

def binarySearch(A, key, low, high):

	if low>high :
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

key = int(input("Scegli l'elemento da cercare: "))

low = 0
high = len(A) - 1

startTime = time.time()

print("L'elemento si trova nella posizione ", binarySearch(A, key, low, high), " dell'array")

endTime = time.time()
executionTime =  endTime - startTime

print(f"Tempo di esecuzione: {executionTime:.6f} secondi")