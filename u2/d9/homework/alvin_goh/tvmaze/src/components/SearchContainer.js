import React, { useState } from "react";
import Results from "./Results";
import Search from "./Search";
import data from "../data/data";
import axios from "axios";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [hasSearch, setHasSearch] = useState(false);
  const [show, setShow] = useState([]);

  const handleSearchInput = (evt) => {
    setQuery(evt.target.value);
  };

  const onSearchAgain = () => {
    setHasSearch(false);
  };

  const onSubmitQuery = (evt) => {
    evt.preventDefault();
    setHasSearch(true);
    getShows("https://api.tvmaze.com/search/shows");
  };

  const getShows = async (url) => {
    try {
      const params = { q: query };
      const data = await axios
        .get(url, { params })
        .then((res) => {
          return res.data.map((item) => {
            const { name, image } = item.show;
            return { name: name, image: image.medium };
          });
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      setShow(data);
    } catch (error) {
      console.log("error msg", error.message);
    }
  };

  return (
    <>
      {!hasSearch ? (
        <Search
          onSubmitQuery={onSubmitQuery}
          handleSearchInput={handleSearchInput}
          query={query}
        />
      ) : (
        <Results show={show} onSearchAgain={onSearchAgain} />
      )}
    </>
  );
};

export default SearchContainer;
