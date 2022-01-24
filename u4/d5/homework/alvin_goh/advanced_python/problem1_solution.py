##########################################################################################################
# Problem 1:
# Skills you're practicing: Generating random numbers and type conversion.
# Make your own version of the Guess a Number game. Generate a random integer and store it in a variable called answer. Print a statement asking the user to guess a number.

# If the user's guess is:

# Higher than the answer: print That is too high!.
# Lower than the answer: print That is too low!.
# Exactly the answer: print That's it! You win!.
# Your program should keep prompting the user until they enter the correct answer.
##########################################################################################################
import random

target_number = random.randint(1, 10)
matched = False

print("I'm thinking of a number between 1 and 10.")
print("Please guess what it is:")

while matched != True:
    msg = ""
    guess = input(">")
    if not guess.isdigit():
        print("Input is not an integer, pls try again")
        continue

    guess = int(guess)

    match True:
        case True if guess < target_number:
            msg = "That is too low!"
        case True if guess > target_number:
            msg = "That is too high!"
        case True if guess == target_number:
            matched = True
            msg = "That's it! You win!"

    print(msg)
