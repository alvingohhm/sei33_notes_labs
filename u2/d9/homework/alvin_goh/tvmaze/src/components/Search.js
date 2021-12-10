import React from "react";

const Search = (props) => {
  const { onSubmitQuery, handleSearchInput, query } = props;
  return (
    <div style={{ width: "50%", marginTop: "40px" }}>
      <form className="text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="search_box"
            value={query}
            onChange={handleSearchInput}
            placeholder="Enter a Movie Title"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={onSubmitQuery}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
