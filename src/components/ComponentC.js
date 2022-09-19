import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentC() {
  const counter = useContext(CountContext);

  return (
    <div>
      <h2>Component C Count: {counter.countContext}</h2>
      <button
        onClick={() => {
          counter.dispatchContext("increment");
        }}
      >
        Incement
      </button>
      <button
        onClick={() => {
          counter.dispatchContext("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          counter.dispatchContext("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentC;
