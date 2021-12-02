import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const TopPanel = (props) => {
  const { addItem } = props;
  const [expenseItem, setExpenseItem] = useState({
    item: "",
    price: "",
    date: "",
  });

  const fieldOnChange = (evt) => {
    setExpenseItem((prevState) => {
      return { ...prevState, [evt.target.id]: evt.target.value };
    });
  };

  return (
    <div className="card p-3">
      <div className="mb-3 row">
        <Label id="item" name="Item" displayClass="col-sm-2" />
        <div className="col-sm-10">
          <Input
            id="item"
            type="text"
            value={expenseItem.item}
            getValue={fieldOnChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <Label id="price" name="Price" displayClass="col-sm-2" />
        <div className="col-sm-10">
          <Input
            id="price"
            type="text"
            value={expenseItem.price}
            getValue={fieldOnChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <Label id="date" name="Date" displayClass="col-sm-2" />
        <div className="col-sm-10">
          <Input
            id="date"
            type="date"
            value={expenseItem.date}
            getValue={fieldOnChange}
          />
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button btnName="Submit" item={expenseItem} addItem={addItem} />
      </div>
    </div>
  );
};

export default TopPanel;
