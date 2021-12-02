import React from "react";

const Label = (props) => {
  const { id, name, displayClass } = props;
  return (
    <label htmlFor={id} className={`col-form-label ${displayClass}`}>
      {name}
    </label>
  );
};

export default Label;
