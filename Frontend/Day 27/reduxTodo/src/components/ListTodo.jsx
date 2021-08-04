import { useDispatch, useSelector } from "react-redux";
import { checkItem, removeItem } from "../actions";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <h4
            style={{
              display: "inline-block",
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.title}
          </h4>
          <button onClick={() => dispatch(checkItem(index))}>{todo.done?`Undo`:`Done`}</button>
          <button onClick={() => dispatch(removeItem(index))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ListTodo;
