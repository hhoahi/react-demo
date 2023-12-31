import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Counter from "./features/counter/index";
import PostList from "./features/post/index";
import { SinglePostPage } from "./features/post/SinglePostPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUsers } from "./features/users/usersSlice";

store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="post" element={<PostList />} />
        <Route path="/" element={<App />} />
        <Route exact path="/posts/:postId" component={SinglePostPage} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
