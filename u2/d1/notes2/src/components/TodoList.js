import React from "react";
import Card from "./Card";
// import "./Card.css";

const TodoList = () => {
  return (
    <div className="container">
      <div>This is the todo list</div>
      <Card activity="Buy gorceries" time="14:00"></Card>
      <Card activity="Bath dog" time="15:30"></Card>
      <Card activity="Buy charger" time="18:00"></Card>
    </div>
  );
};

export default TodoList;
