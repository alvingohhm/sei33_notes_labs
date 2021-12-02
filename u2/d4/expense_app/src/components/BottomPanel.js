import React from "react";
import ExpenseItem from "./ExpenseItem";
import Label from "./Label";

const BottomPanel = (props) => {
  const { itemList } = props;
  console.log(itemList);

  const lists = itemList.map((item, index) => {
    return <ExpenseItem item={item} key={index} />;
  });

  console.log(lists);

  return (
    <div className="card p-3 mt-5">
      <div className="row">
        <Label id="label1" name="Item" displayClass="col-sm-4 text-center" />
        <Label id="label2" name="Price" displayClass="col-sm-4 text-center" />
        <Label id="label3" name="Date" displayClass="col-sm-4 text-center" />
      </div>
      <div className="row">{lists}</div>
    </div>
  );
};

export default BottomPanel;
