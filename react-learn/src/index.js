import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import User from "./components/User";
import Home from "./components/Home";
import Edit from "./components/Edit";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="admins" element={<Admin />} />
            <Route path="users" element={<User />} />
            <Route path="edit" element={<Edit />} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
