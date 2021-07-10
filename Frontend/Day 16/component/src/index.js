import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Memecard from './components/memecard';

function App() {
  return (
    <div className="App">
      <Memecard></Memecard>
      <Memecard></Memecard>
    </div>
  );
};

ReactDOM.render(<App></App>,document.querySelector('#main'));