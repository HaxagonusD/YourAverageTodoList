import "./App.css";
import FormInput from "./components/FormInput";
import TodoListItem from "./components/TodoListItem";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="input-group mb-3">
      <div className="flex flex-col justify-center bg-white w-96 mx-auto p-8">
        <h1 className="text-center">Todo List</h1>
        <FormInput todos={todos} setTodos={setTodos} />
      </div>
      <div className="flex mx-auto">
        {todos.map((task, index) => {
          return <TodoListItem task={task} key={index} />;
        })}
      </div>

    </div>
  );
};

export default App;
