import React from "react";

const Results = (props) => {
  const { data } = props;
  console.log(data);
  const resultList = data.map((result) => {});

  return (
    <div className="container">
      <div class="row mt-5">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg"
              className="rounded mx-auto d-block img-thumbnail grayscale"
            />
            <figcaption>Mountain 1</figcaption>
          </figure>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="img-thumbnail grayscale"
            />
            <figcaption>Mountain 2</figcaption>
          </figure>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="img-thumbnail grayscale"
            />
            <figcaption>Mountain 3</figcaption>
          </figure>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="img-thumbnail grayscale"
            />
            <figcaption>Mountain 4</figcaption>
          </figure>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="img-thumbnail grayscale"
            />
            <figcaption>Mountain 5</figcaption>
          </figure>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="img-thumbnail grayscale"
            />
            <figcaption>Mountain 6</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Results;
