import React, { useState, useMemo } from "react";

function MemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const countOne = () => {
    setCounterOne(counterOne + 1);
  };

  const countTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={countOne}>Counter One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={countTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default MemoHook;
