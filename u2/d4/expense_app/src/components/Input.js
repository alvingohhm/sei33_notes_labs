import React from "react";

const Input = (props) => {
  const { id, type, value, getValue } = props;

  return (
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={getValue}
    />
  );
};

export default Input;
