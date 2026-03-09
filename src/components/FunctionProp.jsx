import { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child render");
  return <button onClick={handleClick}>Click Child</button>;
}

function FunctionProp() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child clicked");
  }, []);

  return (
    <div>
      <h2>Task 3: useCallback</h2>
      <button onClick={() => setCount(count + 1)}>Parent</button>
      <Child handleClick={handleClick} />
    </div>
  );
}

export default FunctionProp;