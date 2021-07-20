import "../index.css";

function Calcard({ food, calorie, id, data, setData }) {
  const deleteItem = () => {
    const newData = data.filter((el) => el.id != id);
    setData(newData);
  }
  return (
    <div className="card">
      <div className="upperpart">
        <h1>{food}</h1>
        <button onClick={deleteItem}>Delete</button>
      </div>
      <h2>you have consumed {calorie} cals today</h2>
    </div>
  );
}

export default Calcard;
