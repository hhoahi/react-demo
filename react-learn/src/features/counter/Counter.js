import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { increment, decrement } from "./counterSlice";
import { useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
