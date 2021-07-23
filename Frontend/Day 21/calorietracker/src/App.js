import React, { useState } from "react";
import AddItemForm from "./components/addItemform";

const RenderItems = ({ deleteItem, updateItem, item, index }) => {
  const [isEditing, setisEditing] = useState(false);
  return (
    <div className="items">
      <div className="updateInputs">
        {isEditing ? (
          <input
            type="text"
            value={item.title}
            required
            onChange={(e) => updateItem(index, { title: e.target.value })}
          />
        ) : (
          <h2 className="card-title">{item.title}</h2>
        )}
        {isEditing ? (
          <input
            type="number"
            value={item.calorie}
            required
            onChange={(e) => updateItem(index, { calorie: e.target.value })}
          />
        ) : (
          <p className="='card-text'">
            You have consumed {item.calorie} calories.
          </p>
        )}
      </div>
      <div className="editButtons">
        <button
          className="del"
          onClick={() => {
            deleteItem(index);
            setisEditing(false);
          }}
        >
          Delete
        </button>
        <button className="edit" onClick={() => setisEditing(!isEditing)}>
          {isEditing ? "Done" : "Edit"}
        </button>
      </div>
    </div>
  );
};

function App() {
  const [items, setItems] = useState([]);
  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container">
      <AddItemForm onAddItem={addItem} />
      {items.length === 0 ? (
        <h1>Start Adding Items</h1>
      ) : (
        <div className="itemsContainer">
          {items.map((item, index) => (
            <RenderItems
              item={item}
              key={index}
              index={index}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
