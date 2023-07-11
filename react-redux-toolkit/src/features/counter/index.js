import React from "react";
import Header from "../../component/layout/header";
import Slide from "../../component/layout/slidebar";
import Counter from "./Counter";
import './count.css'

const Count = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="slidebar">
          <Slide />
        </div>
        <div className="content">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Count;
