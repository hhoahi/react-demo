import React from "react";
import { useReducer } from "react";
//Giống useState.
//Nhưng useState thường có xu hướng sử dụng trong những component có state đơn giản (kiểu dữ liệu nguyên thủy : number, string, boolean)
//hoặc kiểu dữ liệu phức tạp như object,array (nhưng nó chỉ có 1 cấp thôi không lồng nhiều cấp)

//useReducer trong những tình huống state nhiều và phức tạp, object nhiều cấp

//init state: là số => luôn return ra số
const initState = 0;

//actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const DELETE_ACTION = "delete";

//reducer: hàm Nhận 2 tham số là state và action
//dựa vào action trả về state mới
const reducer = (state, action) => {
  console.log("reducer run");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case DELETE_ACTION:
      return 0;
    case "ASSIGN_ACTION":
      return action.data;
    default:
      throw new Error("Invalid action");
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "ASSIGN_ACTION":
      return action.data;
    default:
      throw new Error("Invalid action");
  }
};

//Dispatch:là 1 func để truyền đi 1 action. Chỉ sử dụng khi dùng Reducer
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);
  const [count2, dispatch2] = useReducer(reducer2, initState);
  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h4>{count}</h4>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DELETE_ACTION)}>Delete</button>
      <h4>{count2}</h4>
      <button
        onClick={() =>
          dispatch2({
            type: "ASSIGN_ACTION",
            data: 10,
          })
        }
      >
        Assign value
      </button>
    </div>
  );
}

export default UseReducer;
