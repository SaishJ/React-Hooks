import React, { useEffect, useRef } from "react";

function RefHookOne() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus input
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default RefHookOne;
