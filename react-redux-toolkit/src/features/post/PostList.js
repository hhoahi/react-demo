import React from "react";
//hiển thị danh sách các bài đăng cần lấy dữ liệu từ Redux store bằng useSelector
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlide";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import "./post.css";

const PostsList = () => {
  const dispatch = useDispatch();

  //PostsList sẽ đọc state.posts giá trị từ Redux store
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  //sau đó lặp qua mảng các bài post và hiển thị từng post trên màn hình
  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    );
  });
  return (
    <div>
      <h2>Posts</h2>
      <div className=""></div>
      {renderedPosts}
      <AddPostForm />
    </div>
  );
};

export default PostsList;
