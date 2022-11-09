import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodosPage from "./pages/AllTodos";
import { ITodo } from "./components/Todos";
import { getAllTodos, updateTodo, deleteTodo } from "./api/taskApis";

interface ITodoContext {
  todos: ITodo[];
  reloadHandler: ({}) => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);
function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [reload, setReload] = useState({});

  const reloadHandler = ({}) => {
    setReload({});
  };

  useEffect(() => {
    getAllTodos()
      .then((res) => {
        if (res.data) {
          setTodos(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  const contxDefaultValue = {
    todos: todos,
    updateTodo: updateTodo,
    deleteTodo,
    reloadHandler,
  };
  return (
    <BrowserRouter>
      <TodoContext.Provider value={contxDefaultValue}>
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="ongoing" element={<TodosPage />} />
          <Route path="finished" element={<TodosPage />} />
        </Routes>
      </TodoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
