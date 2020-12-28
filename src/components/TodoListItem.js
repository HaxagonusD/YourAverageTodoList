import React from "react";
import { useRef } from "react";
export default function TodoListItem({ task }) {
  const todoRef = useRef(null);

  return (
    <div ref={todoRef}>
      {task}
      <button
        onClick={() => {
          todoRef.current.remove();
        }}
      >
        X
      </button>
    </div>
  );
}
