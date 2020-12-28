import "./App.css";
import FormInput from "./components/FormInput";

import TodoListItem from "./components/TodoListItem";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <FormInput todos={todos} setTodos={setTodos} />

      <div>
  
        {todos.map((task, index) => {
          return <TodoListItem task={task} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
