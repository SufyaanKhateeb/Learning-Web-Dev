import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Chesscard from './components/chesscard';
import Memecard from './components/memecard';

function App() {
  // const checkers = [];
  // for (let i = 0; i < 64; ++i) {
  //   checkers.push(<div className={`squre`} />);
  // };
  return (
    <div className="App">
      <Chesscard></Chesscard>
      <Memecard></Memecard>
      <Chesscard></Chesscard>
      <Memecard></Memecard>
    </div>
  );
};

ReactDOM.render(<App></App>,document.querySelector('#main'));