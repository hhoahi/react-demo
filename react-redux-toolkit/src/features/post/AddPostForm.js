import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlide";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  //lấy title, content từ useState hook, tạo một ID mới 
  //=> đặt chúng lại với nhau thành addPost mà ta chuyển đến postAdded()
  const addPost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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

          <label>Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option></option>
            {usersOptions}
          </select>

          <label>Post content:</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          ></textarea>

          <button
            type="button"
            style={{ maxWidth: 100, marginLeft: 85, borderRadius: 5 }}
            onClick={() => addPost()}
            disabled={!canSave}
          >
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
