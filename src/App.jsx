import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todos.indexOf(todo) === -1) {
      setTodos([...todos, todo]);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center pt-10">Todo App</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={todos}></TodoList>
    </>
  );
}

export default App;
