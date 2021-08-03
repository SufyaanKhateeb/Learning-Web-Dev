import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          setItem("");
          dispatch(
            addItem({
              title: item,
              done: false,
            })
          );
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
