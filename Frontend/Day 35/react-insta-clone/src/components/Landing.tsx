import React from "react";
import { useSelector } from "react-redux";
import { reducerType } from "../reducers";
import { User } from "../actions/action";
import Post from "./Post";
import { PostType } from "../App";

const Landing = ({ posts }: { posts: PostType[] }) => {
  const user: User = useSelector((state: reducerType) => state.user);
  console.log(posts);
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-8">
          <div className="card story">
            {[...Array(15)].map((_, i) => (
              <div className="storycontainer">
                <div className="story-img">
                  <img src={user.profilePicture} alt="" />
                </div>
                <h6 style={{display:"inline-block" , fontSize:"12px" ,marginTop:"5px"}}>{user.username}</h6>
              </div>
            ))}
          </div>
          <div className="posts">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Landing;
