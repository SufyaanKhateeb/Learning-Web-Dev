import React, { useState, useEffect } from "react";
import Templates from "./components/templates";
import Meme from "./components/meme";

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.memes);
        setTemplates(data.data.memes);
      });
  }, []);
  return (
    <div className="container">
      <h1>MEME Generator 😈</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
