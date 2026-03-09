import { useState } from "react";
import React from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>Child value: {value}</p>;
});

function ParentChild() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 2: React.memo</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child value="static value" />
    </div>
  );
}

export default ParentChild;