import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Tokyo", "Ha Noi", "London", "Paris"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; //variable (selectedIndex)
  //   arr[1]; //update function

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
