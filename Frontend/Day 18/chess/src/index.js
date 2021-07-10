import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Chesscard from './components/chesscard';

function App() {
  return (
    <div className="App">
      <Chesscard></Chesscard>
      <Chesscard></Chesscard>
    </div>
  );
};

ReactDOM.render(<App></App>,document.querySelector('#main'));