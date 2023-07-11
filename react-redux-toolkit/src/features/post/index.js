import React from "react";
import Header from "../../component/layout/header";
import Slide from "../../component/layout/slidebar";
import Postlist from "./PostList";
import "./post.css";

const Post = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="slidebar">
          <Slide />
        </div>
        <div className="content">
          <Postlist />
        </div>
      </div>
    </div>
  );
};

export default Post;
