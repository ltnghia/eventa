# input n, find all primes from 1 to n

from prime import is_prime

n = int(input("Enter a number: "))

for i in range(1, n+1):
    if is_prime(i):
        print(i, end=" ")
print()