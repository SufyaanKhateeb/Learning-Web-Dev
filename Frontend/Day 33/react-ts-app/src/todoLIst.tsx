import React from "react";

interface todoLIstProps {
  title: string;
  done: boolean;
  setTodos: (todos: any) => void;
  todos: any;
  index: number;
}

const TodoLIst = ({ title, done, setTodos, todos, index }: todoLIstProps) => {
  return (
    <div className="todoli">
      <h3 className={done ? "done" : "done not"}>{title}</h3>
      <span
        className="tick"
        onClick={() => {
          todos[index].done = !todos[index].done;
          setTodos([...todos]);
        }}
      >
        Done
      </span>
      <span className="del" onClick={() => {
          const newTodos = todos.filter((el:any) => el != todos[index]);
          setTodos(newTodos);
      }}>
        Delete
      </span>
    </div>
  );
};

export default TodoLIst;
