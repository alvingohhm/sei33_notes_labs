import React, { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, createTodo(action.payload.name)];
    case "SET_COMPLETE":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: true };
        }
        return todo;
      });
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const createTodo = (name) => {
  return { id: Math.random(), name: name, complete: false };
};

const TodoList = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTodos({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
      </form>

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            dispatchTodos={dispatchTodos}
            id={todo.id}
            name={todo.name}
            complete={todo.complete}
          />
        );
      })}
    </>
  );
};

export default TodoList;
