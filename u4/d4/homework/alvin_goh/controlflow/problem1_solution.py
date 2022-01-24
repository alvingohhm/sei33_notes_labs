#################################################################################################################
# Problem 1: IOU!
# If the name contains a "u," print out the name plus "U are so Uniquely U!"
# Otherwise if the name contains an "i," print out the name plus "I bet you're Impressively Intelligent!"
# Otherwise if the name contains an "o," print out the name plus "O My! How Original!"
# Otherwise, print the name plus "Ehh, a's and e's are so ordinary."
#################################################################################################################
disney_characters = [
    "simba",
    "ariel",
    "pumba",
    "flounder",
    "nala",
    "ursula",
    "scar",
    "flotsam",
    "timon",
]


def analyze_name(disney_character):
    add_words = ""
    match True:
        case True if "u" in disney_character:
            add_words = "U are so Uniquely U!"
        case True if "i" in disney_character:
            add_words = "I bet you're Impressively Intelligent!"
        case True if "o" in disney_character:
            add_words = "O My! How Original!"
        case _:
            add_words = "Ehh, a's and e's are so ordinary."
    return f"{disney_character} {add_words}"


# using for loop to loop through list and run functon
for disney_character in disney_characters:
    print(analyze_name(disney_character))

# using map to iterate with a given function
# words_list = list(map(analyze_name, disney_characters))  # return from map put into list
# print("\n".join(words_list))  # method 1: print out list with next line as sperator


# print(*words_list, sep="\n")  # method 2: spread the words_list into string with next line as sperator
