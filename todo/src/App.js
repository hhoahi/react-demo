import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";
function App() {
  //useState: nhận một giá trị ban đầu làm tham số và trả về một mảng với hai phần tử
  //Phần tử đầu tiên là giá trị hiện tại của biến trạng thái.
  //Phần tử thứ hai là một hàm mà bạn có thể sử dụng để cập nhật biến trạng thái.

  //todo để lưu trữ mục công việc hiện tại
  const [todo, setTodo] = useState("");
  //todoList để lưu trữ danh sách tất cả các mục công việc
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
