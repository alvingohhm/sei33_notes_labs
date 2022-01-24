##########################################################################################################
# Problem 5: My Favorite TV Characters
# Skills you're practicing: Scripting and debugging.
# I'm trying to write a list of favorite TV show characters to a file called my_characters. I'm nearly there, but instead of printing the whole list, I'm just getting the last line. Help me out: Can you get the whole list to print to a file?

# My Code
# https://repl.it/@SuperTernary/python-programming-hw-eod-3-prob-5?lite=true
##########################################################################################################
# Add your own! :)
# import os

tv_characters = [
    "Will Byers",
    "Tyrion Lannister",
    "Oliver Queen",
    "Jean Luc Picard",
    "Malcom Reynolds",
    "The Doctor",
    "Sam Winchester",
    "Sherlock Holmes",
]

# Write out my character list to a file called "text"
f = open("text", "w")
for index, character in enumerate(tv_characters):
    f.write("{0}: {1}\n".format(index + 1, character))

f.close()

# path = os.path.dirname(os.path.realpath(__file__))
# print(path)
# path2 = os.getcwd()
# print(path2)
