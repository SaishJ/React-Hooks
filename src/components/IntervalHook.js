import React, { useState, useEffect } from "react";

function IntervalHook() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>Couunt: {count}</h1>
    </div>
  );
}

export default IntervalHook;
