import "../index.css";

function Calcard({food,calorie}) {
  return (
    <div className="card">
      <h1>{food}</h1>
      <h2>you have consumed {calorie} cals today</h2>
    </div>
  );
}

export default Calcard;
