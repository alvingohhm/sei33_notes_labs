##########################################################################################################
# Problem 2: D'oh!
# Skills you're practicing: Using try/except statements and error handling.
# Bart Simpson has gotten ahold of your program from Problem 1 and started entering a bunch of values that are NOT numbers! How do you handle it?
# Create a new file with your code from Problem 1 and modify it to print D'oh! That is NOT a number, Bart! if the user doesn't enter an integer.
##########################################################################################################
import random

target_number = random.randint(1, 10)
matched = False

print("I'm thinking of a number between 1 and 10.")
print("Please guess what it is:")

while matched != True:
    msg = ""
    guess = input(">")
    try:
        guess = int(guess)
    except:
        print("D'oh! That is NOT a number, Bart!")
        continue

    match True:
        case True if guess < target_number:
            msg = "That is too low!"
        case True if guess > target_number:
            msg = "That is too high!"
        case True if guess == target_number:
            matched = True
            msg = "That's it! You win!"

    print(msg)
