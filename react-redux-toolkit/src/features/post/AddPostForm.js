import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlide";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const addPost = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    console.log(title, content);
  };
  return (
    <div>
      <section>
        <h2>Add a new Post</h2>
        <form>
          <label>Post title:</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={onTitleChanged}
          ></input>
          <br />
          <label>Post content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          ></textarea>
          <br />
          <button
            type="button"
            style={{ maxWidth: 100, marginLeft: 85, borderRadius: 5 }}
            onClick={() => addPost()}
          >
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
