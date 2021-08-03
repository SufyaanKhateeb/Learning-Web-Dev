import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { checkItem, removeItem } from "../actions";

const ListTodo = () => {
  const [done, setDone] = useState(false);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <h4
            style={{
              display: "inline-block",
              textDecoration: done ? "line-through" : "none",
            }}
          >
            {todo.title}
          </h4>
          <button
            onClick={() => {
              dispatch(checkItem(index));
              setDone(todo.done);
              console.log(done);
            }}
          >
            Done
          </button>
          <button onClick={() => dispatch(removeItem(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ListTodo;
