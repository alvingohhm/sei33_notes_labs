##########################################################################################################
# Problem 3:
# Skill you're practicing: Debugging built-in errors.
# Copy the code out of the repl.it below into your file and fix the errors in the code. Don't change the rainbow's contents.

# <iframe height="400px" width="100%" src="https://repl.it/@SuperTernary/python-programming-eod-hw-3?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
##########################################################################################################

# Fix this code below line 11! Don't change the rainbow variable!
rainbow = {
    "name": "Roy G. Biv",
    "colors": ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    "end": "Pot Of Gold!",
    "number": "double",
    "count": 2,
    "gold": 100,
}

# ------------------------------------------------------
# Start Fixing Below Here
# You may encounter: NameError, SyntaxError, IndentationError, KeyError, TypeError, etc.

###############################
# Corrected code
###############################
print("The rainbow's name is", rainbow["name"])

if rainbow["end"] == "Pot Of Gold!":
    print("I'll be taking that gold!")
else:
    print("No money for me!")

for color in rainbow["colors"]:
    if color != "indigo":
        print(color)
    else:
        print("What color is indigo?")

print("This rainbow is a double?", rainbow["number"])

gold_amount = rainbow["count"] + rainbow["gold"]
print(gold_amount)

persons = 1
split_gold = rainbow["gold"] / persons
print(split_gold)

###############################
# original code
###############################
# Fix this code below line 11! Don't change the rainbow variable!
rainbow = {
    "name": "Roy G. Biv",
    "colors": ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    "end": "Pot Of Gold!",
    "number": "double",
    "count": 2,
    "gold": 100,
}

# ------------------------------------------------------
# Start Fixing Below Here
# You may encounter: NameError, SyntaxError, IndentationError, KeyError, TypeError, etc.
# print("The rainbow's name is", rainbow["Name"])

# if rainbow["end"] == "Pot Of Gold!":
#     print("I'll be taking that gold!")
#     else:
#       print("No money for me!")

# while color in rainbow["colors"]:
#     if color is not "Indigo":
#       print(color)
#   else:
#     print("What color is indigo?")

# print("This rainbow is a double?", rainbow["double"])

# gold_amount = rainbow["number"] + rainbow["gold"]
# print(gold_amount)

# persons = 0
# split_gold = rainbow["gold"] / persons
# print(split_gold)
