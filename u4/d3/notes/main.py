num = 5


def func():
    num = 1
    print(num)


func()
print(num)


def func2():
    global num  # access global scope
    print(num)


func2()
print(num)

x = 1.23

print(int(x))
print(float(x))
print(str(x))

string = "my name is {name}".format(name="Leonard")

print(string)

name = "Leonard"

string = "my name is {}".format(name)

print(string)

string = "my name is {0}. {0} was given by my parents".format(name)

print(string)

string = f"my name is {name}"

print(string)
x = format(1 / 3, ".2f")
x = format(1 / 3, ".3f")

print(x)

x = format(5200000, ",")

print(x)

print("{0:,d}".format(5200))
