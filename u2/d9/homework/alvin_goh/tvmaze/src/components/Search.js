import React from "react";

const Search = () => {
  return (
    <div style={{ width: "60%", marginTop: "40px" }}>
      <form className="text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="search_box"
            placeholder="Enter a Movie Title"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ width: "150px" }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
