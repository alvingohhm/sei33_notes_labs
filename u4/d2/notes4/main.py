def sum_all(*args):
    sum = 0
    for num in args:
        sum += num
    return sum


total = sum_all(1, 2, 3, 4, 5, 6, 7)
print(total)


def calculate(type, *args):
    result = 0
    if type == "sum":
        for num in args:
            result += num
    elif type == "minus":
        for num in args:
            result -= num
    return result


total = calculate("sum", 1, 2, 3, 3, 5, 6)
print(total)


def print_dictionaries(**kwargs):
    for key, value in kwargs.items():
        print(key, value)


print_dictionaries(name="Rex", gender="male")


def func(para1, para2, para3, *args, **kwargs):
    pass
