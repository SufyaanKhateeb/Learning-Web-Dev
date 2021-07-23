import { useState } from "react";

function AddItemForm(props) {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddItem({ title, calorie });
    setTitle("");
    setCalorie("");
  };
  return (
    <form
      className="form"
      onSubmit={submitHandler}
    >
      <div className="upperPart">
        <div>
          <input
            type="text"
            value={title}
            placeholder="Item Name"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            value={calorie}
            placeholder="Calories"
            required
            onChange={(e) => setCalorie(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="submitButton">
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
