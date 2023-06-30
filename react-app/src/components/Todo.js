import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const handleChange = (event) => {
    //"target.value" trả về giá trị hiện tại của phần tử HTML
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //ngăn chặn hành vi mặc định của trình duyệt khi submit tránh tình trạng web bị load lại.
    let tempList = todoList; //shallow copy todolist
    //thêm giá trị của biến todo vào danh sách tempList
    tempList.push(todo);
    setTodolist(tempList); //cập nhật danh sách todo mới cho component hiện tại
    console.log(todoList);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
