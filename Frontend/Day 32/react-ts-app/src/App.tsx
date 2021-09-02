import React from 'react';
import './App.css';
interface User{
  name: string,
  age: number,
  email: string
};


function App() {
  
  const user: User = {
    name: "Sufyaan Khateeb",
    age: 20,
    email: "abc@email.com"
  }
  
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h3>{user.age}</h3>
      <h5>{user.email}</h5>
    </div>
  );
}

export default App;