// import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <ListTodo />
    </div>
  );
}

export default App;
