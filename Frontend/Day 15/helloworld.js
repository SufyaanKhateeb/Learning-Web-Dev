"use strict";

function Helloworldjsx() {
  return (
    <div>
      <h1 className="blue">Helloworld using JSX</h1>
    </div>
  );
}

function Helloworld() {
  return React.createElement("h1", {}, "Helloworld without JSX");
}

const domContainer = document.querySelector(".text");
ReactDOM.render(
  <div>
    <Helloworldjsx></Helloworldjsx>
    <Helloworld></Helloworld>
  </div>,
  domContainer
);
