import React, { useState } from "react";

const Form = (props) => {
  const [birdData, setBirdData] = useState({
    birdName: "",
    image: "",
    user: "",
    approved: false,
  });

  const fieldOnChange = (evt) => {
    setBirdData((prevState) => {
      if (evt.target.name === "approved") {
        return { ...prevState, [evt.target.name]: !prevState.approved };
      }
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <form className="mt-5">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="image"
          placeholder="Please enter photo url for submission"
          value={birdData.image}
          onChange={fieldOnChange}
        ></input>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="birdName"
          placeholder="Please enter bird name"
          value={birdData.birdName}
          onChange={fieldOnChange}
        ></input>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="user"
          placeholder="Please enter your user name"
          value={birdData.user}
          onChange={fieldOnChange}
        ></input>
      </div>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="approved"
          checked={birdData.approved}
          onChange={fieldOnChange}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Approved?
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault();
          props.getNewBirdData(birdData);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
