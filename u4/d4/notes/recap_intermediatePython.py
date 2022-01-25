# We are going to run through the past few topics.

# So what are lists?

# A collection of items stored in a single variable
# Created with square brackets
# index starts at 0

my_queens = ["Cersei", "Daenerys", "Arwen", "Elsa", "Cixi"]
step_counts_this_week = [1234, 4565, 3433, 9998, 3434, 23232, 4556]

# You can have mixed values in the list
# e.g. list = [number, string, [list], {dictionary}]

# You can slice a list using a ":"
# for example:
days_2_thru_5 = step_counts_this_week[2:6]
print(days_2_thru_5)
# this prints out days 2, 3, 4, 5 BUT NOT 6

# How do we loop through things?

for queen in my_queens:
    print(queen, "Is the most beautiful queen")

# What if I want to loop from 1 to 10 and print out the numbers? How do I do this wihtout a data structure to loop over?

for number in range(1, 11):
    print(number)


# Sets --> These are lists that do not have duplicates
email_set = {"my_email@gmail.com", "second_email@yahoo.com", "third_email@hotmail.com"}
my_list = ["red", "yellow", "green", "red", "green"]
my_set = set(my_list)
# what will print(my_set) show?

# Tuples = lists that can't be changed. Created with parentheses (`()`)
rainbow_colors_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
# Why might we want to use tuples?

# Dictionaries - a collection of key-value pairs
# Created with curly braces {key: value, key:value}
my_new_dictionary = {
    "name": "Alex",
    "age": 26,
    "vaccinated": True,
    "Favourite Food": ["Bread", "Pasta", "Chicken"]
}

# So how might we loop over a dictionary?
for key in my_new_dictionary:
    print(key, "-", my_new_dictionary[key])

# Functions --> code that can be used repeatedly
def say_hello():
    print("Hello")

say_hello()
say_hello()
say_hello()

# Function params
def say_hello_name(name):
    print("Hello", name)

say_hello_name("Alex")

# Return statements - gets data out of your function

def multiply(x, y):
    return x * y

result = multiply(5, 4)

# Reviewing classes
# --> templates for objects
# --> can contain methods and/or variables
# --> "self" is a reference to the created object

class Animal():
    def __init__(self):
        self.energy = 500

    def get_status(self):
        if(self.energy)<200:
            print("I'm hungry, grrrr")
        elif self.energy > 500:
            print("I'm soooo full")
        else:
            print("I'm doing well!")

    def roar(self):
        print("Roaaaar")

    def eat_food(self):
        self.energy += 300
        print(self.energy, "Yummm I'm getting more energy")

    def fight_battle(self):
        self.energy -= 300

simba = Animal()
simba.get_status()
simba.roar()
simba.eat_food()

# A class can inherit properties and methods from another class

class Tiger(Animal):
    def _init__(self):
        self.stripes = "true"

    def have_stripes(self):
        self.stripes = "true"
        print("Do I have stripes?", self.stripes)

    def take_away_stripes(self):
        self.stripes = "false"
        print("WHAT! What happened to my stripes", self.stripes)

tigger = Tiger()
tigger.have_stripes()
tigger.take_away_stripes()
tigger.roar()
tigger.fight_battle()
tigger.eat_food()
tigger.eat_food()
tigger.get_status()

# What is user input and file I/O?
# --> We'll be covering opening, reading, writing, and closing files in this

# Abstraction
# --> This covers Python's built-in functions. Like my_list.len()

