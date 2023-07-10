import { useState } from "react";

export default function UseState() {
  const [show, setShow] = useState(false);
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 1000);
  }

  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label>
          To:{" "}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label> <br />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /> <br />
        <button type="submit">Send</button>
      </form>
      
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h4>Mounted & Unmounted</h4>}
      {/* -	Mounted : là thời điểm component được đưa vào React element sử dụng
          -	Unmounted : là thời điểm chúng ta gỡ nó ra và không dùng tới nó nữa*/}
    </div>
  );
}
