import React, { useState, useContext, useEffect } from "react";
import ThemeContext from "./themeContext";
import "./App.css";
import ThemeToggle from "./ThemeToggle";
import TodoLIst from "./todoLIst";
// import { InitialState } from "./themeContext";

interface Todo {
  title: string;
  done: boolean;
}

function App() {
  // const { theme, setTheme } = useContext<InitialState>(ThemeContext);
  const [theme, setTheme] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "App dark" : "App"}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, { title: input, done: false }]);
          }}
        >
          AddTodo
        </button>
        <div className="todocontainer">
          {todos.map((todo, index) => {
            return <TodoLIst title={todo.title} done={todo.done} />;
          })}
        </div>

        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
