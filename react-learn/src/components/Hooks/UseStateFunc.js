import React, { useState } from "react";

export default function UseStateFunc() {
  //khi truyền 0 làm giá trị mặt định => biến count = 0
  //usestate trả về 1 array: 1.count, 2. method cập nhật giá trị cho state: setCount
  const [count, setCount] = useState(0);
    //khi thực thi 1 func phức tạp thay vì truyền trực tiếp giá trị cho usestate
    //nên dùng 1 arrow func: useState(()) => { return...();} => thực hiện 1 lần duy nhất

  const handleClick = () => {
    // gọi đến func setCount => cập nhật giá trị biến count
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <pre>Function Component</pre>
      <p>You clicked {count} times</p>
      {/* khi click button => gọi đến method handleClick  */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
