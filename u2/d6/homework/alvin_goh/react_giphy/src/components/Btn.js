import React from "react";

const Btn = (props) => {
  const { searchBtnClicked } = props;
  return (
    <button
      type="submit"
      className="btn btn-primary mb-3"
      onClick={searchBtnClicked}
    >
      Search
    </button>
  );
};

export default Btn;
