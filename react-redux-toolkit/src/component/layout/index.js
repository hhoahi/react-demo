import React from "react";
import Header from "./header";
import Slide from "./slidebar";
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">
        <Slide />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
