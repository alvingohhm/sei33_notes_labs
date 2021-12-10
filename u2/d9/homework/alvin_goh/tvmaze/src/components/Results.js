import React from "react";

const Results = (props) => {
  const { show, onSearchAgain } = props;

  const resultList = show.map((result) => {
    return (
      <div key={result.name} className="col-sm-6 col-md-4 col-lg-3">
        <figure>
          <img
            src={result.image}
            className="rounded mx-auto d-block img-thumbnail grayscale w-100"
            alt={result.name}
          />
          <figcaption className="text-center text-primary">
            {result.name}
          </figcaption>
        </figure>
      </div>
    );
  });

  return (
    <div className="container text-center">
      <button
        type="submit"
        className="btn btn-primary btn-lg mt-3"
        onClick={onSearchAgain}
      >
        Search Again
      </button>
      <div className="row mt-5">{resultList}</div>
    </div>
  );
};

export default Results;
