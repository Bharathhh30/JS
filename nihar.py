

def swap_odd_even_chars(str):
    res = ""
    odd = []
    even = []

    for i in range(len(str)):
        if i % 2 == 0:
            even.append(str[i])
        else:
            odd.append(str[i])

    for i in range(max(len(even), len(odd))):
        if i < len(odd):
            res += odd[i]
        if i < len(even):
            res += even[i]

    return res

print(swap_odd_even_chars("hello world"))