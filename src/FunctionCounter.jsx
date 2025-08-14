import React, { useState } from "react";

export default function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <div className="count-display">{count}</div>
      <button className="btn increment" onClick={increment}>+</button>
      <button className="btn decrement" onClick={decrement}>-</button>
    </div>
  );
}
