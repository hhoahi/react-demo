//useSelector cho phép component trích xuất bất kỳ phần dữ liệu nào nó cần từ Redux store state.
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

//component hiển thị giao diện người dùng

const Counter = () => {
  //Selector có thể được xác định defined inline nơi chúng được sử dụng thay vì trong slice file.
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ color: "#181818" }}
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ color: "#181818" }}
        >
          -
        </button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button
          onClick={() => dispatch(incrementByAmount(addValue))}
          style={{ color: "#181818" }}
        >
          Add Amount
        </button>
        <button onClick={resetAll} style={{ color: "#181818" }}>
          Reset
        </button>
      </div>
    </section>
  );
};
export default Counter;
