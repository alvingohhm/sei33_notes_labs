# Create a variable called `search_or_ratings`; set to "1".
# You should be able to change this between "1", "2", and "3" to change what your program prints.
# search_or_ratings = 3
import urllib
import json
import requests
import os
import sys


class OMDBError(Exception):
    """
    OMDBError represents an error returned by the OMDb API.
    """

    pass


class Movie(object):
    """
    Movie objects contain all information about a particular movie,
    including the title and rating.
    """

    def __init__(self, movie_data):
        self.omdb_data = movie_data

    def get_movie_title(self):
        """
        get_movie_title is a getter function that returns the movie title.
        """
        return self.omdb_data["Title"]

    def get_movie_rating(self, source="Rotten Tomatoes"):
        """
        get_movie_rating is a getter function that returns the rating.
        """
        for ratings in self.omdb_data["Rating"]:
            if ratings["Source"] == source:
                return ratings["Value"]

        return "- Wait - Rating for source {0} was not found!".format(source)


class OMDB(object):
    def __init__(self, apikey):
        self.apikey = apikey

    def build_url(self, **kwargs):
        kwargs["apikey"] = self.apikey
        url = "http://www.omdbapi.com/?"
        url += urllib.parse.urlencode(kwargs)
        return url

    def call_api(self, **kwargs):
        url = self.build_url(**kwargs)
        response = requests.get(url)
        response_data_decoded = response.json()

        # Check for an error and throw an exception if needed.
        if "Error" in response_data_decoded:
            raise OMDBError(response_data_decoded["Error"])

        return response_data_decoded

    def get_movie(self, movie_query):
        movie_data = self.call_api(t=movie_query)
        return Movie({"Title": movie_data["Title"], "Rating": movie_data["Ratings"]})

    def search(self, movie_query):
        movie_dictionaries = self.call_api(s=movie_query)
        return movie_dictionaries["Search"]


def get_apikey():
    omdb_file = open(os.path.join(sys.path[0], "omdb-api-key.txt"), "r")
    key = omdb_file.read().strip()
    omdb_file.close
    return key


def return_single_movie_object(movie_title):
    """
    Take in the movie title and rating, and return the movie object.
    """
    try:
        apikey = get_apikey()
        omdb = OMDB(apikey)
        my_movie_object = omdb.get_movie(movie_title)
        return my_movie_object
    except OMDBError as err:
        print("OMDB Error: {0}".format(err))
        return


def list_search_results(movie_query):
    """
    Print list of movies. Later, print a list of title results from a movie search.
    """
    try:
        apikey = get_apikey()
        omdb = OMDB(apikey)
        matching_movie_list = omdb.search(movie_query)
        movie_titles = [each_movie["Title"] for each_movie in matching_movie_list]

        for title in movie_titles:
            print("    " + title)

    except OMDBError as err:
        print("OMDB Error: {0}".format(err))
        return


def print_single_movie_rating(movie_query):
    """
    Create a `Movie` object and print one movie's Rotten Tomatoes rating.
    """
    my_movie = return_single_movie_object(movie_query)
    print('The rating for "{0}" is {1}.'.format(my_movie.get_movie_title(), my_movie.get_movie_rating()))


def print_all_ratings(movie_list):
    """
    Take in a list of movies, create a movie object for each, and print the rating.
    """
    for movie in movie_list:
        movie_object = return_single_movie_object(movie)
        print("The movie", movie_object.get_movie_title(), "has a rating of", movie_object.get_movie_rating())


def main():

    """
    Main is the entry point into the program, and it calls into the search or
    ratings functions, depending on what the user decides to do.
    """

    # A hard-coded movie list with which to test.
    default_movie_list = ["Back to the Future", "Blade", "Spirited Away"]

    # Let's test: Call a `print_all_ratings()` function and pass it the `default_movie_list` as a parameter.
    print_all_ratings(default_movie_list)

    # We set up an infinite loop (while `True`) so that we can keep asking the
    # user the same question until they give us valid input ("1" or "2"). As
    # soon as a valid input is reached, the appropriate function runs and the
    # loop is terminated with "break".
    while True:
        search_or_ratings = input(
            "Would you like to search for a movie (1) or find the rating of a specific movie (2)?"
        )

        if not search_or_ratings.isdigit():
            print("Input is not an integer, pls try again")
            continue

        search_or_ratings = int(search_or_ratings)

        if search_or_ratings == 1:
            movie_query = input("Enter the movie title: ")
            # If search_or_ratings is 1, call list_search_results().
            list_search_results(movie_query)
            break
        elif search_or_ratings == 2:
            movie_query = input("Enter the movie title: ")
            # If search_or_ratings is 2, call print_movie_rating().
            print_single_movie_rating(movie_query)
            break

        else:
            # If search_or_ratings is otherwise, give an error.
            print("Error: Your input must be 1 or 2!")


# This line tells Python to run `main()` when it first opens.
if __name__ == "__main__":
    main()
