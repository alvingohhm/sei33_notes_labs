import React from "react";
import Btn from "./Btn";

const Form = (props) => {
  const { value, fieldOnChange, searchBtnClicked } = props;
  return (
    <form className="row mt-4 justify-content-center">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          value={value}
          id="searchBox"
          placeholder="keyword to search"
          onChange={fieldOnChange}
        />
      </div>
      <div className="col-auto">
        <Btn searchBtnClicked={searchBtnClicked} />
      </div>
    </form>
  );
};

export default Form;
