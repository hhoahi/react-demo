import { useState } from "react";

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(false);

  //Conditional Rendering
  if (display) {
    return (
      <div>
        <h3>This is a conditional component.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Nothing here.</h3>
      </div>
    );
  }

  //Conditional Rendering Using Elements
  let output;
  if (display) {
    output = <h3>This is a conditional component.</h3>;
  } else {
    output = <h3>Nothing here.</h3>;
  }
  return <div>{output}</div>;

  //Ternary Conditional(toán tử điều kiện ?)
  return display ? (
    <div>
      <h3>This is a conditional component.</h3>
    </div>
  ) : (
    <div>
      <h3>Nothing here.</h3>
    </div>
  );
}
