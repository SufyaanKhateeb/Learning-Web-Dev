import React from "react";
import { PostType } from "../App";

const Post = ({ post }: { post: PostType }) => {
  const [isLiked, setisLiked] = React.useState(false);
  const [isbooked, setisbooked] = React.useState(false);
  return (
    <div className="card postcard">
      <div className="post-header">
        <span>
          <div className="postuser-img">
            <img src={post.post} alt="" />
          </div>
          <h5 className="card-title postuser-title">{post.username}</h5>
        </span>
        <i
          className="bi bi-three-dots"
          style={{ width: "26px", fontSize: "20px", cursor: "pointer" }}
        ></i>
      </div>

      <img src={post.post} className="card-img-top" alt="..." />
      <div className="buttonscontainer">
        <span>
          <i
            className={
              isLiked ? "bi bi-suit-heart-fill redcolor" : "bi bi-suit-heart"
            }
            onClick={() => {
              setisLiked(!isLiked);
            }}
          ></i>
          <i className="bi bi-chat"></i>
          <i className="bi bi-share"></i>
        </span>
        <span>
          <i
            className={
              isbooked ? "bi bi-bookmark-fill" : "bi bi-bookmark"
            }
            onClick={() => {
              setisbooked(!isbooked);
            }}
          ></i>
        </span>
      </div>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Post;
