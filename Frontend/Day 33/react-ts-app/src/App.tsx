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
  const inputbox: HTMLInputElement = document.querySelector(
    ".input"
  ) as HTMLInputElement;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "App dark" : "App"}>
        <div className="inputcontainer">
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="addbtn"
            onClick={() => {
              setTodos([...todos, { title: input, done: false }]);
              inputbox.value = "";
            }}
          >
            AddTodo
          </button>
        </div>
        <div className="todocontainer">
          {todos.map((todo, index) => {
            return (
              <TodoLIst
                title={todo.title}
                done={todo.done}
                setTodos={setTodos}
                todos={todos}
                index={index}
              />
            );
          })}
        </div>

        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
