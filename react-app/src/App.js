import "./App.css";
/* import function */
import Hello from "./components/Hello";
/* import class */
import Message from "./components/Message";
import JSX from "./components/JSX";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/FunctionEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponent from "./components/ConditionalComponent";
import Product from "./components/Product";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      {/* cần gọi thẻ đóng hàm đã tạo để hiển thị */}
      {/* phải luôn bắt đầu bằng chữ in hoa */}
      <Hello />
      <JSX />
      <Profile name="Hoa" lastname="Tran" />
      <Profile name="Hau" lastname="Le" />
      <Profile name="Hoang" lastname="Phan" />
      {/* Props In A Class */}
      <Message messagecontent="This is a message from props" />
      <Counter />
      <Resume name="Destructuring Props" />
      <FunctionEvent /> <br />
      <ClassEvent />
      <FunctionalCounter />
      <ConditionalComponent />
      <Product />
      <Form />
      <Todo />
    </div>
  );
}

export default App;
