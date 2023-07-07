import React from "react";
import { useState, createContext } from "react";
import Content from "../Content";
import "../App.css";

//context:truyền dữ liệu từ component cha xuống component con mà không cần dùng props
//-	Có 3 bước sử dụng :
//1.Create context : tạo ra 1 phạm vi để có thể truyền dl trong phạm vi đó
//2.Provider : cung cấp dl
//3.Concumer : nhận dl

export const ThemeContext = createContext();


function UseContext() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 32, textAlign: "center" }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContext;
