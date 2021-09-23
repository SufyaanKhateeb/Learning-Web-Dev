import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { useSelector, useDispatch } from "react-redux";
import { reducerType } from "./reducers/index";
import { User } from "./actions/action";
import updateUser from "./actions/action";

export interface PostType {
  username:string;
  post:string;
}

function App() {
  const user = useSelector((state: reducerType) => state.user);
  const dispatch = useDispatch();
  const [posts,setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    dispatch(updateUser({username:"sufyaan",profilePicture:"heehe"}));
    fetch('/data/posts.json')
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    })
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts}/>
    </div>
  );
}

export default App;
