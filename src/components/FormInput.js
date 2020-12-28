import React from "react";
import { useState, useRef } from "react";
export default function FormInput({ setTodos, todos }) {
  const [taskName, setTaskName] = useState("");
  const addTodo = () => {
    console.log(todos);
    if (taskName !== "") {
      setTodos([...todos, taskName]);
    }
  };

  const input = useRef(null);
  return (
    <div>
      <input
        ref={input}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
        placeholder="Name of Todo"
      ></input>

      <button
        onClick={() => {
          addTodo();
          input.current.value = "";
          setTaskName("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
