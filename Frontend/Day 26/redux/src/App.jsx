// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeEmail } from "./actions";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const name = useSelector((state) => state.namech);
  const email = useSelector((state) => state.emailch);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>INPUT</h1>
      <input onChange={(e) => dispatch(changeName(e))} type="text" placeholder="Name" />
      <input onChange={(e) => dispatch(changeEmail(e))} type="text" placeholder="Email" />
      <div>
        <h1>Data</h1>
        <h2>Username: {name}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
}

export default App;
