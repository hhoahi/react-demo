import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlide";
import AddPostForm from "./AddPostForm";
import './post.css'
const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });
  return (
    <div>
      <h2>Posts</h2>
      <div className="">

      </div>
      {renderedPosts}
      <AddPostForm />
    </div>
  );
};

export default PostsList;
