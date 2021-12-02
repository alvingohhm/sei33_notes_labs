import React from "react";

const ExpenseItem = (props) => {
  const { item, price, date } = props.item;
  return (
    <>
      <div className="col-sm-4 text-center">{item}</div>
      <div className="col-sm-4 text-center">{price}</div>
      <div className="col-sm-4 text-center">{date}</div>
    </>
  );
};

export default ExpenseItem;
