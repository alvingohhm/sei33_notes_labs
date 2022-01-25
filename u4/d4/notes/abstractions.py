# What are Itertools?
import itertools

# What are some key principles in programming?
# basically DRY - Don't Repeat Yourself

# Abstraction --> creating a layer between the lines of code that "actually do the work" and the user
# For example:

def count_all_numbers(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum, "hehe isn't this cool?"


arrayOfNumbers = [1, 2, 3, 4, 5]

print("This is my custom function: ", count_all_numbers(arrayOfNumbers))

print("This is the built in Python one: ", sum(arrayOfNumbers))

# This is what itertools and other libraries are about --> developers identify functions that need to be performed
# and create libraries to address these problems


# Itertools is a module that provides iterator building blocks. Basically it helps make looping/iterating easier
# Some examples of itertools include:
# --> Infinite iterators count(), cycle(), repeat()
# --> Iterators terminating on the shortest input sequence accumulate(), chain(), groupby()


animals = ["dog", "dog", "horse", "horse", "horse", "dog"]

for key, group in itertools.groupby(animals):
    print(key, list(group))

# list() converts the memory address to the actual list (rather than returning the memory location)

# so why is dog listed twice? --> groupby() only groups consecutive things
# what we can do is SORT the list first, then group it

sorted_animals = sorted(animals)
print("Now sorted, the list is:", sorted_animals, "\n")

for key, group in itertools.groupby(sorted_animals):
    print(key, list(group))


# we can use groupby() to arrange tuples
things_tuple = [
    ("animal", "wolf"),
    ("animal", "sparrow"),
    ("plant", "cactus"),
    ("vehicle", "yacht"),
    ("vehicle", "school bus"),
    ("vehicle", "car"),
]

for key, group in itertools.groupby(things_tuple):
    print(key[0], list(group)[0][1])
    # Just print as is:
    # print("Getting things out: ""\n", key[0], list(group)[0][1])

# we can chain() stuff too

# food_list = ["apples", "bananas", "oranges"]
# numbers_range = range(4)
# colors_dictionary = {"green": "peaceful", "blue": "calm", "red": "passionate"}
#
# chained_list = list(itertools.chain(food_list, numbers_range, colors_dictionary))
# print(chained_list)


food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
chained_list = list(itertools.chain(food, colors))
print(chained_list)


# accumulate()
primes = [2, 3, 5, 7, 11, 13]
results = list((itertools.accumulate(primes)))

print("This is results: ", results)

# Why might we find this useful?

# List Comprehensions

# previously if we wanted to edit a list
old_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_list = []
for item in old_list:
    if (item < 5):
        new_list.append(item ** 2)

print(new_list)

# now we can just use this for list comprehension

new_list_two = [i ** 2 for i in old_list]
print(new_list_two)

# conditional

new_list_three = [i ** 2 for i in old_list if i < 5]
print(new_list_three)




