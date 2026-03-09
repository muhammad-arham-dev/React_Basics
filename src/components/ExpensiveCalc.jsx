import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [num, setNum] = useState(0);

  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += num;
    }

    return result;
  }, [num]);

  return (
    <div>
      <h2>Task 1: useMemo</h2>
      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <p>{expensiveResult}</p>
    </div>
  );
}

export default ExpensiveCalc;