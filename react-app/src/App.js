import "./App.css";
//import function
import Hello from "./components/Hello";
//import class
import Message from "./components/Message";
import JSX from "./components/JSX";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      {/* cần gọi thẻ đóng hàm đã tạo để hiển thị */}
      {/* phải luôn bắt đầu bằng chữ in hoa */}
      <Hello />
      <Message />
      <JSX />
      <Profile />
    </div>
  );
}

export default App;
