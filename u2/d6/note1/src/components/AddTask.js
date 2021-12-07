import React, { useState } from "react";
import Buttons from "./Buttons";
import ErrorModal from "./ErrorModal";

const AddTask = (props) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.length === 0) {
      setError(true);
    }
    setTask("");
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleModalOkay = () => {
    setError(false);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title="Error Encountered"
          message="There is an error with your input"
          okayClicked={handleModalOkay}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3"></div>
          <label className="col-md-3" htmlFor="input-task">
            Task
          </label>
          <input
            className="col-md-3"
            id="input-task"
            value={task}
            type="text"
            onChange={handleChange}
          />
          <div className="col-md-3"></div>
          <Buttons className="col-md-6" type="submit">
            Add Task
          </Buttons>
          <div className="col-md-3"></div>
        </div>
      </form>
    </>
  );
};
export default AddTask;
