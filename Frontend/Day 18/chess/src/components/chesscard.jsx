import "./chesscard.css";

function Chesscard() {
  let stack = [];
  for (let i = 1; i <= 64; i++) {
    if((i>8 && i<=16)||(i>24 && i<=32)||(i>40 && i<=48)||(i>56 && i<=64))
        stack.push(<div className="squarerow"></div>);
    else
        stack.push(<div className="square"></div>);
  }

  return (
    <div className="chesscard">
      {stack}
    </div>
  );
}

export default Chesscard;
