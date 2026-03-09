import { useState } from "react";

function RenderTracker() {
  const [count, setCount] = useState(0);

  console.log("RenderTracker re-rendered");

  return (
    <div>
      <h2>Task 10: Render Analysis</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default RenderTracker;