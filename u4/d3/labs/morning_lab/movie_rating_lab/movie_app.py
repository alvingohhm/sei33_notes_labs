# Create a variable called title_or_ratings, set to 1.
# You should be able to change this between 1, 2, and 3 to change what your program prints.
title_or_ratings = 2

# class inherit from object class, this is python new style class
class Movie(object):
    def __init__(self, movie_data):
        self.movie_data = movie_data

    def get_movie_title(self):
        return self.movie_data["title"]

    def get_movie_rating(self):
        return self.movie_data["rating"]


# Create a variable `movie_title` and set it to "Back to the Future".
movie_title = "Back to the Future"

# Create a variable `movie rating` to hold the rating and set it to `8`.
movie_rating = 8

# Create a function, print_single_movie_rating, that prints the string you had in lab 1.
def print_single_movie_rating(movie_query):
    movie = return_single_movie_object(movie_query, 7)
    print(f"The rating for {movie.get_movie_title()} is {movie.get_movie_rating()}")


# Create a function, print_all_ratings, that takes one argument movie_list.
# This prints "The movie <movie> has a great rating!"
def print_all_ratings(movie_list):
    for movie_title in movie_list:
        movie = return_single_movie_object(movie_title, 4)
        print(f"The movie {movie.get_movie_title()} has a rating of {movie.get_movie_rating()}")


def return_single_movie_object(movie_title, movie_rating):
    return Movie({"title": movie_title, "rating": movie_rating})


# Create one main function which will call everything else - subsituting function calls for the print statements.
def main():
    """
    Main is the entry point into the program, and it calls into the search or
    ratings functions depending on what the user decides to do.
    """

    # Inside the main function, create a default_movie_list with "Back to the Future", "Blade", and "Spirited Away"
    default_movie_list = ["Back to the Future", "Blade", "Spirited Away"]
    # Inside the main function, call the print_all_ratings function and pass it the default_movie_list as a parameter
    print_all_ratings(default_movie_list)

    # Inside the main function, put your print statement from the previous lab but subsitute function calls.
    # If title_or_ratings is 1, call print_movie_title
    # If title_or_ratings is 2, call print_movie_rating().
    # If title_or_ratings is 3, call print_single_movie_rating()
    if title_or_ratings == 1:
        pass
    elif title_or_ratings == 2:
        print_single_movie_rating("Moana")
    else:
        print("Error: Your input must be 1 or 2!")


# Start with this prompt for your `main` function
# It tells Python to go directly to the main function and run that
if __name__ == "__main__":
    main()
