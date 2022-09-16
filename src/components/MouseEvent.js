import React, { useState, useEffect } from "react";

function MouseEvent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  // Simply passing an empty array as second parameter to useEffect for run effect only once.

  return (
    <div>
      <h1>
        Hooks X - {x}, Y - {y}
      </h1>
    </div>
  );
}

export default MouseEvent;
