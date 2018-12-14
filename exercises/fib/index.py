def fib(n):
    '''
        Get the n-th number in a fibonacci sequence,
        assuming the first 3 numbers are 0, 1, 1
        and we count from the 0th.
    '''
    memo = {}

    if n <= 0:
        return 0
    elif n <= 2:
        return 1
    elif memo.get(n):
        return memo.get()
    result = fib(n - 1) + fib(n - 2)
    memo[n] = result
    return result


print(fib(0)) # 0
print(fib(1)) # 1
print(fib(2)) # 1
print(fib(3)) # 2
print(fib(6)) # 8
