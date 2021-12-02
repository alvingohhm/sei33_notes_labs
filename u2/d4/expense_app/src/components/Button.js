import React from "react";

const Button = (props) => {
  const { btnName, item, addItem } = props;
  return (
    <button
      className="btn btn-primary btn-lg"
      type="submit"
      onClick={() => {
        addItem(item);
      }}
    >
      {btnName}
    </button>
  );
};

export default Button;
