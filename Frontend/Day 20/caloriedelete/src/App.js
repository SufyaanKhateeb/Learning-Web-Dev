import React, { useState } from "react";
import Calcard from "./components/calcard";

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      calorie: 56,
      food: "Chips",
    },
    {
      id: 1,
      calorie: 420,
      food: "Pizza",
    },
    {
      id: 2,
      calorie: 69,
      food: "Burger",
    },
    {
      id: 3,
      calorie: 80,
      food: "Chocolate",
    },
    {
      id: 4,
      calorie: 60,
      food: "IceCream",
    },
    {
      id: 5,
      calorie: 100,
      food: "Fried Rice",
    },
  ]);
  return (
    <div className="container">
      <h1 className="heading">Calorie Card</h1>
      <div className="App">
        {data.length ? (
          data.map(({ calorie, food, id }) => (
            <Calcard
              id={id}
              calorie={calorie}
              data={data}
              setData={setData}
              food={food}
            />
          ))
        ) : (
          <h1>Empty</h1>
        )}
      </div>
    </div>
  );
}

export default App;
