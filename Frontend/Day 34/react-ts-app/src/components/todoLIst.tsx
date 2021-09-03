import { deleteTodo, doneTodo } from "../actions/action";
import { useDispatch } from "react-redux";

interface todoLIstProps {
  title: string;
  done: boolean;
  index: number;
}

const TodoLIst = ({ title, done, index }: todoLIstProps) => {
  const dispatch = useDispatch();
  return (
    <div className="todoli">
      <h3 className={done ? "done" : "done not"}>{title}</h3>
      <span
        className="tick disable-select"
        onClick={() => {
          dispatch(doneTodo(index));
        }}
      >
        Done
      </span>
      <span
        className="del disable-select"
        onClick={() => {
          dispatch(deleteTodo(index));
        }}
      >
        Delete
      </span>
    </div>
  );
};

export default TodoLIst;
