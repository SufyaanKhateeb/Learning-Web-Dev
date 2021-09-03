import { useState } from "react";
// import ThemeContext from "./components/themeContext";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import TodoLIst from "./components/todoLIst";
import { addTodo } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";
import { reducerType } from "./reducers/index";

interface objtype {
  title: string;
  done: boolean;
}

function App() {
  const todos: objtype[] = useSelector((state: reducerType) => state.todos);
  const theme: boolean = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const inputbox: HTMLInputElement = document.querySelector(
    ".input"
  ) as HTMLInputElement;
  return (
    <div className={theme ? "App dark" : "App"}>
      <div className="inputcontainer">
        <input
          className="input"
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              dispatch(addTodo(input));
              inputbox.value = "";
            }
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="addbtn"
          onClick={() => {
            dispatch(addTodo(input));
            inputbox.value = "";
          }}
        >
          AddTodo
        </button>
      </div>
      <div className="todocontainer">
        {todos.map((todo: any, index: number) => {
          return <TodoLIst title={todo.title} done={todo.done} index={index} />;
        })}
      </div>

      <ThemeToggle />
    </div>
  );
}

export default App;
