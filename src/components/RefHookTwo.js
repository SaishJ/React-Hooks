import React, { useState, useEffect, useRef } from "react";

function RefHookTwo() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Timre - {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default RefHookTwo;
