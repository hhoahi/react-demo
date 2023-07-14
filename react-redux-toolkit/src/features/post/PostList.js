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
import PostsExcerpt from "./PostsExcerpt";
import AddPostForm from "./AddPostForm";
import "./post.css";

const PostsList = () => {
  const dispatch = useDispatch();

  //PostsList sẽ đọc state.posts giá trị từ Redux store
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  //tìm nạp dữ liệu khi <PostsList> đã gắn kết
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    //Sắp xếp các bài đăng theo thứ tự thời gian đảo ngược theo chuỗi ngày giờ
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      <AddPostForm />
      {content}
    </section>
  );
};

export default PostsList;
