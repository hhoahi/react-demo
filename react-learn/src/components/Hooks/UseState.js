import { useState } from "react";

function UseState() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32, textAlign: "center"}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h4>Mounted & Unmounted</h4>}
      {/* -	Mounted : là thời điểm component được đưa vào React element sử dụng
          -	Unmounted : là thời điểm chúng ta gỡ nó ra và không dùng tới nó nữa*/}
    </div>
  );
}

export default UseState;
