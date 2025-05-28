import { useState } from "react"
import { TodoProvider } from "./context";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {
  //adding the state for todos
  const [todos, setTodos] = useState([]);

  //function to add a new todo
  const addTodo = (todo) => {
    //(prev) => [..] is arrow function that passes the previous state
    //...prev spreads all the old todos in a new array
    //{id: Date.now(), ...todo } creates a new todo object with a unique id where ...todo spreads all the properties
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  //function to update an existing todo
  const updateTodo = (id, todo) => {
    //use prev.map to iterate
    setTodos((prev) =>
      prev.map((curr) => (curr.id === id ? todo : curr))
    );
  };

  //function to delete a todo
  const deleteTodo = (id) => {
    //use prev.filter
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((curr) => curr.id === id ? { ...curr, completed: !curr.completed } : curr
      )
    );
  };

  //useEffect to load todos from localStorage when the component mounts
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  //useEffect to Save todos when changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
