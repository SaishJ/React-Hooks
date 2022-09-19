import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const counter = useContext(CountContext);

  return (
    <div>
      <h2>Component A Count: {counter.countContext}</h2>
      <button onClick={() => counter.dispatchContext("increment")}>
        Increment
      </button>
      <button onClick={() => counter.dispatchContext("decrement")}>
        Decrement
      </button>
      <button onClick={() => counter.dispatchContext("reset")}>Reset</button>
    </div>
  );
}

export default ComponentA;
